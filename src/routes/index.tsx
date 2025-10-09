import { createFileRoute } from '@tanstack/react-router';

import { Home } from 'app/home/Home';
import { homeQuery } from 'hooks/useHome';

export const Route = createFileRoute('/')({
  loader: async ({ context }) => {
    const { queryClient } = context;

    return queryClient.ensureQueryData(homeQuery);
  },
  component: Home,
  pendingComponent: () => <div>Loading...</div>,
  errorComponent: () => <div>Error!</div>,
});
