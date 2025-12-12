import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { NotFoundPage } from 'components/notFound/NotFound';

import type { QueryClient } from '@tanstack/react-query';
import { Header } from 'components/header';
import { Footer } from 'components/footer';

export interface RouterContext {
  queryClient: QueryClient;
}

const RootLayout = () => (
  <>
    <Header />

    <Outlet />

    <Footer />

    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
});
