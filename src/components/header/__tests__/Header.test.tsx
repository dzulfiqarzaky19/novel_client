import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { ThemeProviderContext } from 'hooks/useThemeContext';

import { Header } from '../index'; // Adjust path if needed

vi.mock('@tanstack/react-router', async (importOriginal) => {
  const { routerMock } = await import('lib/test/mock/router');

  return routerMock(importOriginal);
});

vi.mock('lucide-react', async (importOriginal) => {
  const actual = await importOriginal<typeof import('lucide-react')>();

  return {
    ...actual,
    Menu: () => <div data-testid="menu-icon">Menu</div>,
    X: () => <div data-testid="close-icon">X</div>,
  };
});

describe('Header Component', () => {
  const renderHeader = () => {
    return render(
      <ThemeProviderContext>
        <Header />
      </ThemeProviderContext>,
    );
  };

  it('should render navigation links on desktop', () => {
    renderHeader();

    expect(screen.getAllByText('Home')).toHaveLength(2);

    expect(screen.getAllByText('Library')).toHaveLength(2);
  });

  it('should toggle mobile menu when burger button is clicked', async () => {
    renderHeader();

    const menuButton = screen.getByLabelText('Open menu');

    expect(menuButton).toBeInTheDocument();

    fireEvent.click(menuButton);

    const closeButton = screen.getByLabelText('Close menu');

    expect(closeButton).toBeInTheDocument();
  });
});
