import { Link, useMatchRoute } from '@tanstack/react-router';
import { CircleUserRound } from 'lucide-react';
import { HeaderWrapper, LinkWrapper, StyledLink } from './styles';
import { LINK_ITEMS } from './const';
import { Logo } from '../ui/logo';

export const Header = () => {
  const matchRoute = useMatchRoute();
  const isNovelChapter = matchRoute({ to: '/novel/$novel/$chapter' });

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

      <Link to="/">
        <CircleUserRound />
      </Link>
    </HeaderWrapper>
  );
};
