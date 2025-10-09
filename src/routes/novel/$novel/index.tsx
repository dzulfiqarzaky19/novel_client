import { createFileRoute } from '@tanstack/react-router';
import z from 'zod';

import { Detail } from 'app/detail/Detail';
import { detailQuery } from 'hooks/useDetail';

const Params = z.object({
  novel: z.string().min(1),
});

export const Route = createFileRoute('/novel/$novel/')({
  params: {
    parse: (raw) => Params.parse(raw),
    stringify: (params) => params,
  },
  loader: async ({ context, params }) => {
    const { queryClient } = context;
    const slug = params.novel;

    return queryClient.ensureQueryData(detailQuery(slug));
  },
  component: Detail,
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: () => <div>Error!</div>,
});
