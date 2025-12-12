import styled from '@emotion/styled';
import { Link } from '@tanstack/react-router';

export const FooterWrap = styled.footer``;

export const FooterMain = styled.div`
  margin: 50px 0 50px;
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr 1fr;
  }
`;

export const FooterSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FooterDiscoverLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const FooterBottom = styled.div`
  margin: 50px 0 50px;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
`;

export const FooterBottomRightSection = styled.div`
  display: flex;
  gap: 1rem;

  @media (min-width: 1024px) {
    justify-content: end;
  }
`;
