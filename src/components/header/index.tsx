import { useMatchRoute } from '@tanstack/react-router';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';

import { useThemeContext } from 'hooks/useThemeContext';

import { Logo } from '../ui/logo';

import { LINK_ITEMS } from './const';
import {
  ButtonWrapper,
  HeaderWrapper,
  LinkWrapper,
  MobileCloseButton,
  MobileMenuButton,
  MobileNavContent,
  MobileNavOverlay,
  StyledLink,
  ThemeToggleButton,
} from './styles';

export const Header = () => {
  const matchRoute = useMatchRoute();
  const isNovelChapter = matchRoute({ to: '/novel/$novel/$chapter' });
  const { mode, toggleTheme } = useThemeContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  if (isNovelChapter) {
    return null;
  }

  return (
    <HeaderWrapper>
      <Logo />

      <LinkWrapper>
        {LINK_ITEMS.map((item) => (
          <StyledLink
            key={item.label}
            to={item.to}
          >
            {item.label}
          </StyledLink>
        ))}
      </LinkWrapper>

      <ButtonWrapper>
        <ThemeToggleButton
          onClick={toggleTheme}
          aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
        >
          {mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </ThemeToggleButton>

        <MobileMenuButton
          onClick={toggleMobileMenu}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </MobileMenuButton>
      </ButtonWrapper>

      <MobileNavOverlay
        isOpen={isMobileMenuOpen}
        onClick={closeMobileMenu}
      />

      <MobileNavContent isOpen={isMobileMenuOpen}>
        <MobileCloseButton
          onClick={closeMobileMenu}
          aria-label="Close menu"
        >
          <X size={24} />
        </MobileCloseButton>

        {LINK_ITEMS.map((item) => (
          <StyledLink
            key={item.label}
            to={item.to}
            onClick={closeMobileMenu}
            style={{ fontSize: '1.25rem' }}
          >
            {item.label}
          </StyledLink>
        ))}
      </MobileNavContent>
    </HeaderWrapper>
  );
};
