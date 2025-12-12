import { Link, useMatchRoute } from '@tanstack/react-router';
import { CircleUserRound, Sun, Moon } from 'lucide-react';
import {
  ButtonWrapper,
  HeaderWrapper,
  LinkWrapper,
  StyledLink,
  ThemeToggleButton,
} from './styles';
import { LINK_ITEMS } from './const';
import { Logo } from '../ui/logo';
import { useThemeContext } from 'hooks/useThemeContext';

export const Header = () => {
  const matchRoute = useMatchRoute();
  const isNovelChapter = matchRoute({ to: '/novel/$novel/$chapter' });
  const { mode, toggleTheme } = useThemeContext();

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

        <Link to="/">
          <CircleUserRound />
        </Link>
      </ButtonWrapper>
    </HeaderWrapper>
  );
};
