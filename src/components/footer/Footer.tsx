/* eslint-disable react/jsx-newline */
import { Link } from '@tanstack/react-router';

import {
  FooterWrap,
  Frame,
  Brand,
  BrandMark,
  BrandName,
  Cols,
  Col,
  ColTitle,
  NavLink,
  Fineprint,
  Row,
  Socials,
  SocialBtn,
} from './styles';

type FooterLink = { label: string; to: string };

interface FooterProps {
  brand?: { name: string; to?: string };
  about?: string;
  links?: {
    product?: FooterLink[];
    company?: FooterLink[];
    resources?: FooterLink[];
  };
  socials?: {
    twitter?: string;
    github?: string;
    discord?: string;
  };
  year?: number;
}

const fallbackLinks = {
  product: [
    { label: 'Explore', to: '/explore' },
    { label: 'Library', to: '/library' },
    { label: 'Pricing', to: '/pricing' },
  ],
  company: [
    { label: 'About', to: '/about' },
    { label: 'Careers', to: '/careers' },
    { label: 'Contact', to: '/contact' },
  ],
  resources: [
    { label: 'Blog', to: '/blog' },
    { label: 'Guides', to: '/guides' },
    { label: 'Changelog', to: '/changelog' },
  ],
};

export const Footer = ({
  brand = { name: 'Novelish', to: '/' },
  about = 'Read smarter. Discover new worlds, one chapter at a time.',
  links = fallbackLinks,
  socials,
  year = new Date().getFullYear(),
}: FooterProps) => {
  return (
    <FooterWrap aria-label="Site footer">
      <Frame>
        <Row>
          <Brand>
            <Link to={brand.to ?? '/'}>
              <BrandMark aria-hidden="true">✦</BrandMark>

              <BrandName>{brand.name}</BrandName>
            </Link>

            {about && <p>{about}</p>}
          </Brand>

          <Cols>
            <Col>
              <ColTitle>Product</ColTitle>

              <nav aria-label="Product">
                {links.product?.map((l) => (
                  <Link
                    key={l.label}
                    to={l.to}
                  >
                    <NavLink>{l.label}</NavLink>
                  </Link>
                ))}
              </nav>
            </Col>

            <Col>
              <ColTitle>Company</ColTitle>

              <nav aria-label="Company">
                {links.company?.map((l) => (
                  <Link
                    key={l.label}
                    to={l.to}
                  >
                    <NavLink>{l.label}</NavLink>
                  </Link>
                ))}
              </nav>
            </Col>

            <Col>
              <ColTitle>Resources</ColTitle>

              <nav aria-label="Resources">
                {links.resources?.map((l) => (
                  <Link
                    key={l.label}
                    to={l.to}
                  >
                    <NavLink>{l.label}</NavLink>
                  </Link>
                ))}
              </nav>
            </Col>
          </Cols>
        </Row>

        <Row style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <Fineprint>
            © {year} {brand.name}. All rights reserved.
          </Fineprint>

          <Socials aria-label="Social links">
            {socials?.twitter && (
              <a
                href={socials.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <SocialBtn aria-label="Twitter / X">
                  {/* X/Twitter */}
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  >
                    <path
                      d="M18 2h3l-7 8 8 10h-6.5L10.7 13 5 20H2l7.4-8.5L2 2h6.5l4.6 6L18 2z"
                      fill="currentColor"
                    />
                  </svg>
                </SocialBtn>
              </a>
            )}

            {socials?.github && (
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
              >
                <SocialBtn aria-label="GitHub">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.3-3.5-1.3-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.9-1 .9-1 .8-1.4 2.2-1 2.8-.7.1-.6.4-1 .7-1.3-2.3-.2-4.8-1.1-4.8-5 0-1.1.4-2.1 1.1-2.8-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 2.9 1.1a9.7 9.7 0 0 1 5.2 0c2-1.4 2.9-1.1 2.9-1.1.6 1.5.2 2.6.1 2.9.7.7 1.1 1.7 1.1 2.8 0 3.9-2.5 4.8-4.9 5 .4.4.8 1 .8 2v3c0 .3.2.6.7.5A10 10 0 0 0 12 2z"
                      fill="currentColor"
                    />
                  </svg>
                </SocialBtn>
              </a>
            )}

            {socials?.discord && (
              <a
                href={socials.discord}
                target="_blank"
                rel="noreferrer"
              >
                <SocialBtn aria-label="Discord">
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 4a16 16 0 0 0-4-1l-.2.4c1.1.3 2.1.8 3.1 1.4a12 12 0 0 0-11.8 0c1-.6 2-1.1 3.1-1.4L10 3a16 16 0 0 0-4 1C3.7 9 3 13.8 3.2 18.6c1.7 1.3 3.8 2 6 2l.8-1.1c-1.6-.5-3-1.3-4.2-2.4 1.6 1.2 3.6 1.9 5.7 1.9s4.1-.7 5.7-1.9c-1.2 1.1-2.6 1.9-4.2 2.4l.8 1.1c2.2 0 4.3-.7 6-2C21 13.8 20.3 9 20 4zM9.8 14c-.8 0-1.5-.7-1.5-1.5S9 11 9.8 11s1.5.7 1.5 1.5S10.6 14 9.8 14zm4.4 0c-.8 0-1.5-.7-1.5-1.5S13.4 11 14.2 11s1.5.7 1.5 1.5S15 14 14.2 14z"
                      fill="currentColor"
                    />
                  </svg>
                </SocialBtn>
              </a>
            )}
          </Socials>
        </Row>
      </Frame>
    </FooterWrap>
  );
};
