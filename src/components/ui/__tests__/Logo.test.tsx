import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { ThemeProviderContext } from 'hooks/useThemeContext';

import { Logo } from '../logo';

import type { ComponentProps } from 'react';

vi.mock('@tanstack/react-router', async (importOriginal) => {
  const { routerMock } = await import('lib/test/mock/router');

  return routerMock(importOriginal);
});

vi.mock('lucide-react', () => ({
  SquareLibrary: (props: ComponentProps<'svg'>) => (
    <svg
      data-testid="logo-icon"
      {...props}
    />
  ),
}));

describe('Logo Component', () => {
  const renderLogo = () => {
    return render(
      <ThemeProviderContext>
        <Logo />
      </ThemeProviderContext>,
    );
  };

  it('should render logo with icon and text', () => {
    renderLogo();

    expect(screen.getByText('NovelReader')).toBeInTheDocument();

    expect(screen.getByTestId('logo-icon')).toBeInTheDocument();
  });

  it('should link to home page', () => {
    renderLogo();

    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', '/');
  });
});
