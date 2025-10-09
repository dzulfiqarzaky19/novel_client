import styled from '@emotion/styled';

const HERO_ARROW_COL = '44px';

export const Section = styled.section<{ bg?: string | null }>`
  position: relative;
  overflow: clip;
  border-radius: 16px;
  background: #0b0f14;
  &::before {
    content: '';
    position: absolute;
    inset: -10%;
    background: ${({ bg }) =>
      bg ? `url(${bg}) center/cover no-repeat` : 'none'};
    filter: blur(28px) saturate(1.2) brightness(0.4);
    transform: scale(1.08);
    opacity: 0.9;
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35));
  }
`;

export const Frame = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: ${HERO_ARROW_COL} 1fr ${HERO_ARROW_COL};
  align-items: stretch;
  gap: 0;

  position: relative;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ArrowArea = styled.div`
  display: grid;
  place-items: center;

  @media (max-width: 640px) {
    position: absolute;
    inset: 0;
    width: ${HERO_ARROW_COL};
    pointer-events: none;

    &:first-of-type {
      left: 6px;
    }
    &:last-of-type {
      right: 6px;
      left: auto;
    }

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Hero = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(16px, 3vw, 24px);
  align-items: center;
  padding: clamp(18px, 4vw, 34px);

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Visual = styled.div`
  display: grid;
  place-items: center;
`;

export const Cover = styled.img`
  width: clamp(180px, 40vw, 300px);
  height: auto;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
`;

export const Placeholder = styled.div`
  width: clamp(160px, 36vw, 280px);
  aspect-ratio: 2 / 3;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-size: clamp(28px, 6vw, 48px);
  font-weight: 800;
  letter-spacing: 0.04em;
  color: #111;
  background: linear-gradient(165deg, #dbeafe, #eef2ff);
`;

export const Copy = styled.div`
  display: grid;
  gap: clamp(10px, 2vw, 14px);
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: 900;
  line-height: 1.08;
  font-size: clamp(24px, 5vw, 44px);
`;

export const Sub = styled.p`
  margin: 0;
  color: #cbd5e1;
  font-size: clamp(13px, 1.8vw, 16px);
  line-height: 1.4;
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 4px;
`;

export const CTA = styled.a`
  display: inline-block;
  background: #fff;
  color: #0b0f14;
  padding: 10px 16px;
  border-radius: 999px;
  font-weight: 800;
  text-decoration: none;
  transition: transform 120ms ease;
  &:hover {
    transform: translateY(-1px);
  }
`;

export const Ghost = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: transparent;
  color: #e5e7eb;
  border-radius: 10px;
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }
  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.35);
    outline-offset: 2px;
  }
`;

export const ProgressBar = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 8px;
  align-items: center;
  padding: 10px clamp(14px, 3vw, 18px) 16px;
`;

export const Dot = styled.button`
  position: relative;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  border: 0;
  border-radius: 999px;
  overflow: hidden;
  cursor: pointer;
  min-width: clamp(4px, 4vw, 64px);
  padding: 2px 0;
`;

export const Fill = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  transform-origin: left center;
  transform: scaleX(0);
  background: #fff;
`;
