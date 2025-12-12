import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { NotFoundPage } from 'components/notFound/NotFound';

import type { QueryClient } from '@tanstack/react-query';

export interface RouterContext {
  queryClient: QueryClient;
}

const RootLayout = () => (
  <>
    <div className="p-2 flex gap-2">
      <Link
        to="/"
        className="[&.active]:font-bold"
      >
        Home
      </Link>
    </div>

    <hr />

    <Outlet />

    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
});
