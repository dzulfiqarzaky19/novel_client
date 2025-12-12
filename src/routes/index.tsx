import { createFileRoute } from '@tanstack/react-router';

import { ErrorPage } from 'app/error/Error';
import { LoaderPage } from 'app/loader/Loader';
import { Home } from 'features/home';
import { homeQuery } from 'features/home/hooks/useHome';

export const Route = createFileRoute('/')({
  loader: async ({ context }) => {
    const { queryClient } = context;

    return queryClient.ensureQueryData(homeQuery);
  },
  component: Home,
  pendingComponent: LoaderPage,
  errorComponent: ErrorPage,
});
