import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { ThemeProviderContext } from 'hooks/useThemeContext';

import { NotFoundPage } from '../NotFound';

vi.mock('@tanstack/react-router', async (importOriginal) => {
  const { routerMock } = await import('lib/test/mock/router');

  return routerMock(importOriginal);
});

describe('NotFoundPage Component', () => {
  const renderNotFound = () => {
    return render(
      <ThemeProviderContext>
        <NotFoundPage />
      </ThemeProviderContext>,
    );
  };

  it('should render 404 message', () => {
    renderNotFound();

    expect(screen.getAllByText('4')).toHaveLength(2);

    expect(screen.getByText('0')).toBeInTheDocument();

    expect(screen.getByText('Page not found')).toBeInTheDocument();

    expect(
      screen.getByText('The page you’re looking for doesn’t exist or moved.'),
    ).toBeInTheDocument();
  });

  it('should render Go Home link', () => {
    renderNotFound();

    expect(screen.getByText('Go Home')).toBeInTheDocument();

    expect(screen.getByText('Go Home').closest('a')).toHaveAttribute(
      'href',
      '/',
    );
  });

  it('should handle Go Back button click', () => {
    const backSpy = vi.spyOn(window.history, 'back');

    renderNotFound();

    const backButton = screen.getByText('Go Back');

    fireEvent.click(backButton);

    expect(backSpy).toHaveBeenCalledTimes(1);

    backSpy.mockRestore();
  });
});
