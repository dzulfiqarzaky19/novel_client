import { Logo } from 'components/ui/logo';
import {
  FooterDiscoverLinks,
  FooterMain,
  FooterSectionWrapper,
  StyledLink,
} from '../styles';
import { useMatchRoute } from '@tanstack/react-router';

const DISCOVER_LINKS = [
  { label: 'Latest Releases', to: '/sort/nov-love-daily-update' },
  { label: 'Hot Novel', to: '/sort/nov-love-hot' },
  { label: 'Completed Novel', to: '/sort/nov-love-complete' },
  { label: 'Most Popular', to: '/sort/nov-love-popular' },
];

const COMMUNITY_LINKS = [
  { label: 'Forums', to: '/forum' },
  { label: 'Discord Server', to: '/discord' },
  { label: 'Help Center', to: '/help-center' },
  { label: 'Contact Us', to: '/contact' },
];

export const FooterMainSection = () => {
  const matchRoute = useMatchRoute();
  const isNovelChapter = matchRoute({ to: '/novel/$novel/$chapter' });

  if (isNovelChapter) {
    return null;
  }

  return (
    <FooterMain>
      <FooterSectionWrapper>
        <Logo />
        Dive into the world of limitless imagination. Read the best web novels,
        light novels, and fanfictions. Joins our community of readers and
        writers today.
      </FooterSectionWrapper>

      <FooterSectionWrapper>
        Discover
        <FooterDiscoverLinks>
          {DISCOVER_LINKS.map((link) => (
            <StyledLink
              key={link.label}
              to={link.to}
            >
              {link.label}
            </StyledLink>
          ))}
        </FooterDiscoverLinks>
      </FooterSectionWrapper>

      <FooterSectionWrapper>
        Community
        <FooterDiscoverLinks>
          {COMMUNITY_LINKS.map((link) => (
            <StyledLink
              key={link.label}
              to={link.to}
            >
              {link.label}
            </StyledLink>
          ))}
        </FooterDiscoverLinks>
      </FooterSectionWrapper>
    </FooterMain>
  );
};
