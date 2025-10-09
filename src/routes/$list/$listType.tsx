import { createFileRoute } from '@tanstack/react-router';
import z from 'zod';

import { listQuery } from 'hooks/useList';

const Params = z.object({
  list: z.string().min(1),
  listType: z.string().min(1),
});

function RouteComponent() {
  return <div>Hello "/list/$list/$type"!</div>;
}

export const Route = createFileRoute('/$list/$listType')({
  params: Params,
  loader: async ({ context, params }) => {
    const { queryClient } = context;
    const slug = `${params.list}/${params.listType}}`;

    return queryClient.ensureQueryData(listQuery(slug));
  },
  component: RouteComponent,
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: () => <div>Error!</div>,
});

export type listRouter = typeof Route;
