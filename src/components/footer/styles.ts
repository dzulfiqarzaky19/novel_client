import styled from '@emotion/styled';

export const FooterWrap = styled.footer`
  position: relative;
  overflow: clip;
  border-radius: 16px;
  background: #0b0f14;

  /* subtle background glow, matching your Section */
  &::before {
    content: '';
    position: absolute;
    inset: -12%;
    background:
      radial-gradient(
        60% 60% at 30% 20%,
        rgba(59, 130, 246, 0.12),
        transparent 60%
      ),
      radial-gradient(
        60% 60% at 80% 80%,
        rgba(168, 85, 247, 0.1),
        transparent 60%
      );
    filter: blur(26px) saturate(1.15);
    transform: scale(1.04);
    opacity: 0.9;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35));
    pointer-events: none;
  }
`;

export const Frame = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  gap: clamp(16px, 3vw, 24px);
  padding: clamp(18px, 4vw, 34px);
`;

export const Row = styled.div`
  display: grid;
  gap: clamp(16px, 2vw, 20px);
  padding-top: 4px;

  &:first-of-type {
    padding-top: 0;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr auto;
    align-items: start;
  }
`;

export const Brand = styled.div`
  display: grid;
  gap: 10px;

  a {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
  }

  p {
    margin: 0;
    color: #cbd5e1;
    font-size: clamp(13px, 1.8vw, 15px);
    line-height: 1.5;
    max-width: 48ch;
  }
`;

export const BrandMark = styled.span`
  display: inline-grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  font-weight: 900;
  line-height: 1;
  transform: translateZ(0);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
`;

export const BrandName = styled.span`
  font-weight: 900;
  font-size: clamp(18px, 3.4vw, 22px);
  color: #fff;
`;

export const Cols = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  gap: clamp(16px, 3vw, 28px);

  @media (max-width: 640px) {
    grid-template-columns: 1fr 1fr;
    > :last-of-type {
      grid-column: span 2;
    }
  }
`;

export const Col = styled.div`
  display: grid;
  gap: 8px;
`;

export const ColTitle = styled.h3`
  margin: 0 0 6px 0;
  color: #e5e7eb;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 800;
`;

export const NavLink = styled.span`
  display: inline-block;
  color: #cbd5e1;
  font-size: 14px;
  padding: 6px 0;
  text-decoration: none;
  transition:
    transform 120ms ease,
    color 120ms ease;
  cursor: pointer;

  &:hover {
    color: #fff;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.35);
    outline-offset: 2px;
    border-radius: 6px;
  }
`;

export const Fineprint = styled.small`
  color: #94a3b8;
  font-size: 12px;
  align-self: center;
`;

export const Socials = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;

  @media (max-width: 900px) {
    justify-content: flex-start;
  }
`;

export const SocialBtn = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: transparent;
  color: #e5e7eb;
  border-radius: 10px;
  padding: 8px;
  display: inline-grid;
  place-items: center;
  cursor: pointer;
  transition:
    background 120ms ease,
    transform 120ms ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.35);
    outline-offset: 2px;
  }
`;
