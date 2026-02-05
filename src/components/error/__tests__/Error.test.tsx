import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { ThemeProviderContext } from 'hooks/useThemeContext';

import { ErrorPage } from '../Error';

vi.mock('@tanstack/react-router', async (importOriginal) => {
  const { routerMock } = await import('lib/test/mock/router');

  return routerMock(importOriginal);
});

describe('ErrorPage Component', () => {
  const renderErrorPage = (props = {}) => {
    return render(
      <ThemeProviderContext>
        <ErrorPage {...props} />
      </ThemeProviderContext>,
    );
  };

  it('should render with default props', () => {
    renderErrorPage();

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();

    expect(
      screen.getByText('Please try again, or go back and retry.'),
    ).toBeInTheDocument();

    expect(screen.getByText('Go Home')).toBeInTheDocument();
  });

  it('should render with custom title and message', () => {
    const title = 'Custom Error Title';
    const message = 'Custom error message';

    renderErrorPage({ title, message });

    expect(screen.getByText(title)).toBeInTheDocument();

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it('should render retry button and handle click when onRetry is provided', () => {
    const onRetry = vi.fn();

    renderErrorPage({ onRetry });

    const retryButton = screen.getByText('Retry');

    expect(retryButton).toBeInTheDocument();

    fireEvent.click(retryButton);

    expect(onRetry).toHaveBeenCalledTimes(1);
  });

  it('should not render retry button when onRetry is not provided', () => {
    renderErrorPage();

    expect(screen.queryByText('Retry')).not.toBeInTheDocument();
  });
});
