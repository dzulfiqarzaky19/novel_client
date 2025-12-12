import { FooterWrap } from './styles';
import { FooterMainSection } from './components/FooterMainSection';
import { FooterBottomSection } from './components/FooterBottomSection';

export const Footer = () => (
  <FooterWrap aria-label="Site footer">
    <FooterMainSection />

    <hr />

    <FooterBottomSection />
  </FooterWrap>
);
