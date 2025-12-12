import { createFileRoute } from '@tanstack/react-router';
import z from 'zod';

import { ErrorPage } from 'components/error/Error';
import { LoaderPage } from 'components/loader/Loader';
import { detailQuery } from 'features/detail/hooks/useDetail';
import { Detail } from 'features/detail';

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
  pendingComponent: LoaderPage,
  errorComponent: ErrorPage,
});
