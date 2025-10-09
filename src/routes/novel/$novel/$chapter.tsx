import { createFileRoute } from '@tanstack/react-router';
import z from 'zod';

import { detailQuery } from 'hooks/useDetail';

const Params = z.object({
  novel: z.string().min(1),
  chapter: z.string().min(1),
});

function RouteComponent() {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const { novel, chapter } = Route.useParams();

  return (
    <div>
      <h1>Novel: {novel}</h1>

      <h1>Chapter: {chapter}</h1>
    </div>
  );
}

export const Route = createFileRoute('/novel/$novel/$chapter')({
  params: Params,
  loader: async ({ context, params }) => {
    const { queryClient } = context;
    const slug = `novel/${params.novel}/${params.chapter}`;

    return queryClient.ensureQueryData(detailQuery(slug));
  },
  component: RouteComponent,
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: () => <div>Error!</div>,
});
