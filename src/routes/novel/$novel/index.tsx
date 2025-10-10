import { createFileRoute } from '@tanstack/react-router';
import z from 'zod';

import { Detail } from 'app/detail/Detail';
import { ErrorPage } from 'app/error/Error';
import { LoaderPage } from 'app/loader/Loader';
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
  pendingComponent: LoaderPage,
  errorComponent: ErrorPage,
});
