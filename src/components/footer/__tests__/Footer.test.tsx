import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { ThemeProviderContext } from 'hooks/useThemeContext';

import { Footer } from '../index';

vi.mock('../components/FooterMainSection', () => ({
  FooterMainSection: () => (
    <div data-testid="footer-main-section">Main Section</div>
  ),
}));

vi.mock('../components/FooterBottomSection', () => ({
  FooterBottomSection: () => (
    <div data-testid="footer-bottom-section">Bottom Section</div>
  ),
}));

describe('Footer Component', () => {
  const renderFooter = () => {
    return render(
      <ThemeProviderContext>
        <Footer />
      </ThemeProviderContext>,
    );
  };

  it('should render successfully', () => {
    renderFooter();

    expect(screen.getByLabelText('Site footer')).toBeInTheDocument();
  });

  it('should render main and bottom sections', () => {
    renderFooter();

    expect(screen.getByTestId('footer-main-section')).toBeInTheDocument();

    expect(screen.getByTestId('footer-bottom-section')).toBeInTheDocument();
  });
});
