import { FooterBottom, FooterBottomRightSection, StyledLink } from '../styles';

const FOOTER_BOTTOM = {
  rights: '© 2025 Novel Reader. All rights reserved.',
  privacy: {
    label: 'Privacy Policy',
    link: '/privacy-policy',
  },
  terms: {
    label: 'Terms of Service',
    link: '/terms-of-service',
  },
  dmca: {
    label: 'DMCA',
    link: '/dmca',
  },
};

export const FooterBottomSection = () => (
  <FooterBottom>
    {FOOTER_BOTTOM.rights}

    <FooterBottomRightSection>
      <StyledLink to={FOOTER_BOTTOM.privacy.link}>
        {FOOTER_BOTTOM.privacy.label}
      </StyledLink>

      <StyledLink to={FOOTER_BOTTOM.terms.link}>
        {FOOTER_BOTTOM.terms.label}
      </StyledLink>

      <StyledLink to={FOOTER_BOTTOM.dmca.link}>
        {FOOTER_BOTTOM.dmca.label}
      </StyledLink>
    </FooterBottomRightSection>
  </FooterBottom>
);
