import styled from '@emotion/styled';

export const Section = styled.section<{ bg?: string | null }>`
  position: relative;
  border-radius: 20px;
  background: #0b0f14;
  overflow: hidden;
  margin-bottom: clamp(24px, 4vw, 32px);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);

  /* Background Image Layer */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ bg }) =>
      bg ? `url(${bg}) center top / cover no-repeat` : 'none'};
    filter: blur(60px) brightness(0.4) saturate(1.2);
    transform: scale(1.1); /* prevent blur edges */
    z-index: 0;
  }

  /* Gradient Overlay */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(11, 15, 20, 0.8) 0%,
      rgba(11, 15, 20, 0.4) 50%,
      rgba(11, 15, 20, 0.8) 100%
    );
    z-index: 1;
  }
`;

export const Frame = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  min-height: clamp(360px, 45vw, 480px);
  display: flex;
  align-items: center;

  /* Arrows placement */
  padding: 0 12px;
`;

export const ArrowArea = styled.div`
  flex: 0 0 48px;
  display: grid;
  place-items: center;
  z-index: 10;

  @media (max-width: 768px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    &.prev {
      left: 4px;
    }
    &.next {
      right: 4px;
    }
  }
`;

export const Ghost = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

export const Hero = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: minmax(200px, 300px) 1fr;
  gap: clamp(24px, 4vw, 48px);
  align-items: center;
  padding: 32px clamp(24px, 4vw, 48px);

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    padding: 32px 16px;
  }
`;

export const Visual = styled.div`
  position: relative;
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  line-height: 0;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const Cover = styled.img`
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border-radius: 12px;
`;

export const Placeholder = styled(Visual)`
  width: 100%;
  aspect-ratio: 2 / 3;
  background: #232323;
  display: grid;
  place-items: center;
  color: #555;
`;

export const Copy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;

  @media (max-width: 800px) {
    align-items: center;
  }
`;

export const BadgeRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
`;

export const Badge = styled.span`
  background: #f97316; /* Orange brand color */
  color: #fff;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  padding: 4px 8px;
  border-radius: 6px;
  letter-spacing: 0.05em;

  &.rating {
    background: transparent;
    border: 1px solid #fbbf24;
    color: #fbbf24;
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

export const Title = styled.h2`
  font-size: clamp(24px, 4vw, 48px);
  font-weight: 800; /* Serif-like heavy weight */
  line-height: 1.1;
  color: #fff;
  margin: 0;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  font-family: 'Times New Roman', serif; /* Or keep sans if preferred */
`;

export const Sub = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  color: #94a3b8;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  span {
    color: #cbd5e1;
  }
`;

export const Description = styled.p`
  font-size: clamp(14px, 1.5vw, 16px);
  line-height: 1.6;
  color: #cbd5e1;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  opacity: 0.9;
`;

export const Actions = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`;

export const CTA = styled.div<{ primary?: boolean }>`
  height: 44px;
  padding: 0 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;

  ${({ primary }) =>
    primary
      ? `
    background: #3b82f6; /* Blue */
    color: #fff;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    &:hover { background: #2563eb; }
  `
      : `
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.15);
    &:hover { background: rgba(255, 255, 255, 0.2); }
  `}

  transition: all 0.2s ease;
`;

export const ProgressBar = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 10;
`;

export const Dot = styled.button`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 0;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  padding: 0;
  transition: all 0.2s;

  &.active {
    width: 24px;
    border-radius: 4px;
    background: #3b82f6;
  }
`;

export const Fill = styled.span``; // Unused in new dot style but kept for compat
