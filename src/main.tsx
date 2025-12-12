import styled from '@emotion/styled';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { routeTree } from './routeTree.gen';
import { ThemeProviderContext } from './hooks/useThemeContext';
import { GlobalStyles } from './Global';

const queryClient = new QueryClient();

const router = createRouter({ routeTree, context: { queryClient } });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root')!;

export const AppWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <StrictMode>
      <ThemeProviderContext>
        <GlobalStyles />
        <QueryClientProvider client={queryClient}>
          <AppWrapper>
            <RouterProvider router={router} />
          </AppWrapper>
        </QueryClientProvider>
      </ThemeProviderContext>
    </StrictMode>,
  );
}
