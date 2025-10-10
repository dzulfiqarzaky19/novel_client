import { createFileRoute } from '@tanstack/react-router';

import { ErrorPage } from 'app/error/Error';
import { Home } from 'app/home/Home';
import { LoaderPage } from 'app/loader/Loader';
import { homeQuery } from 'hooks/useHome';

export const Route = createFileRoute('/')({
  loader: async ({ context }) => {
    const { queryClient } = context;

    return queryClient.ensureQueryData(homeQuery);
  },
  component: Home,
  pendingComponent: LoaderPage,
  errorComponent: ErrorPage,
});
