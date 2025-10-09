import { createFileRoute } from '@tanstack/react-router';
import z from 'zod';

import { Chapter } from 'app/chapter/Chapter';
import { chapterQuery } from 'hooks/useChapter';

const Params = z.object({
  novel: z.string().min(1),
  chapter: z.string().min(1),
});

export const Route = createFileRoute('/novel/$novel/$chapter')({
  params: Params,
  loader: async ({ context, params }) => {
    const { queryClient } = context;
    const slug = `${params.novel}/${params.chapter}`;

    return queryClient.ensureQueryData(chapterQuery(slug));
  },
  component: Chapter,
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: () => <div>Error!</div>,
});
