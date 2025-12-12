import styled from '@emotion/styled';

export const Section = styled.section<{ bg?: string | null }>`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  background: ${({ theme }) => theme.colors.surface.elevated};
  overflow: hidden;
  margin-bottom: clamp(24px, 4vw, 32px);
  box-shadow: ${({ theme }) => theme.shadows.xl};

  /* Background Image Layer */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ bg }) => (bg ? `url(${bg}) center top / cover no-repeat` : 'none')};
    filter: blur(60px) brightness(0.4) saturate(1.2);
    transform: scale(1.1);
    z-index: 0;
  }

  /* Gradient Overlay */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.surface.overlay} 0%,
      ${({ theme }) => theme.colors.surface.overlay}66 50%,
      ${({ theme }) => theme.colors.surface.overlay} 100%
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
  padding: 0 ${({ theme }) => theme.spacing[3]};
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
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: all ${({ theme }) => theme.transitions.fast};
  box-shadow: none;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    transform: none;
    box-shadow: none;
  }
`;

export const Hero = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: minmax(200px, 300px) 1fr;
  gap: clamp(24px, 4vw, 48px);
  align-items: center;
  padding: ${({ theme }) => theme.spacing[8]} clamp(24px, 4vw, 48px);

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[4]};
  }
`;

export const Visual = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  line-height: 0;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const Cover = styled.img`
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
`;

export const Placeholder = styled(Visual)`
  width: 100%;
  aspect-ratio: 2 / 3;
  background: ${({ theme }) => theme.colors.neutral[800]};
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

export const Copy = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  max-width: 600px;

  @media (max-width: 800px) {
    align-items: center;
  }
`;

export const BadgeRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  align-items: center;
  flex-wrap: wrap;
`;

export const Badge = styled.span`
  background: ${({ theme }) => theme.colors.semantic.warning};
  color: ${({ theme }) => theme.colors.text.inverse};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-transform: uppercase;
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  letter-spacing: 0.05em;

  &.rating {
    background: transparent;
    border: 1px solid #fbbf24;
    color: #fbbf24;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[1]};
  }
`;

export const Title = styled.h2`
  font-size: clamp(24px, 4vw, 48px);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  color: #fff;
  margin: 0;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  font-family: 'Times New Roman', serif;
`;

export const Sub = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  align-items: center;
  color: ${({ theme }) => theme.colors.neutral[400]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;

  span {
    color: ${({ theme }) => theme.colors.neutral[300]};
  }
`;

export const Description = styled.p`
  font-size: clamp(14px, 1.5vw, 16px);
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.neutral[300]};
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  opacity: 0.9;
`;

export const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[2]};
`;

export const CTA = styled.div<{ primary?: boolean }>`
  height: 44px;
  padding: 0 ${({ theme }) => theme.spacing[6]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  ${({ primary, theme }) =>
    primary
      ? `
    background: ${theme.colors.primary[500]};
    color: #fff;
    box-shadow: 0 4px 12px ${theme.colors.primary[500]}66;
    &:hover { 
      background: ${theme.colors.primary[600]}; 
      transform: translateY(-1px);
    }
  `
      : `
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.15);
    &:hover { 
      background: rgba(255, 255, 255, 0.2); 
      transform: translateY(-1px);
    }
  `}
`;

export const ProgressBar = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing[4]};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  z-index: 10;
`;

export const Dot = styled.button`
  width: 6px;
  height: 6px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: 0;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  padding: 0;
  transition: all ${({ theme }) => theme.transitions.fast};

  &.active {
    width: 24px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    background: ${({ theme }) => theme.colors.primary[500]};
  }
`;

export const Fill = styled.span``;
