import { createFileRoute } from '@tanstack/react-router';
import z from 'zod';

import { ErrorPage } from 'components/error/Error';
import { LoaderPage } from 'components/loader/Loader';
import { List } from 'features/list';
import { listQuery } from 'features/list/hooks/useList';

const Params = z.object({
  list: z.string().min(1),
  listType: z.string().min(1),
});

export const Route = createFileRoute('/$list/$listType')({
  params: Params,
  loader: async ({ context, params }) => {
    const { queryClient } = context;

    const slug = `${params.list}/${params.listType}`;

    return queryClient.ensureQueryData(listQuery(slug));
  },
  component: List,
  pendingComponent: LoaderPage,
  errorComponent: ErrorPage,
});

export type listRouter = typeof Route;
