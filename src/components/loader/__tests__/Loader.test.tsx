import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ThemeProviderContext } from 'hooks/useThemeContext';
import { LoaderPage } from '../Loader';

describe('LoaderPage Component', () => {
  const renderLoader = (props = {}) => {
    return render(
      <ThemeProviderContext>
        <LoaderPage {...props} />
      </ThemeProviderContext>
    );
  };

  it('should render with default label', () => {
    renderLoader();
    expect(screen.getByText('Loading')).toBeInTheDocument();
    expect(screen.getByText('Fetching fresh data…')).toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('should render with custom label', () => {
    const label = 'Please wait';
    renderLoader({ label });
    expect(screen.getByText(label)).toBeInTheDocument();
  });
});
