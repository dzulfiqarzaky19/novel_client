import styled from '@emotion/styled';

export const Section = styled.section`
  margin: clamp(16px, 3vw, 24px) 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: clamp(12px, 1.2vw, 13px);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

export const Controls = styled.div`
  display: none;
  gap: ${({ theme }) => theme.spacing[2]};
  @media (hover: hover) and (min-width: 960px) {
    display: flex;
  }
`;

export const ArrowButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  background: transparent;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[2]};
  cursor: pointer;
  line-height: 1;
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.surface.cardHover};
    color: ${({ theme }) => theme.colors.text.primary};
    transform: none;
    box-shadow: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.border.focus};
    outline-offset: 2px;
  }
`;

export const CarouselWrap = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Carousel = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(clamp(120px, 44vw, 180px), 1fr);
  gap: clamp(10px, 2.5vw, 16px);
  overflow-x: auto;
  overflow-y: hidden;
  padding: 6px 8px 10px;
  scroll-snap-type: x mandatory;
  scroll-padding: 8px;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border.default};
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
`;

export const Card = styled.button`
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.surface.card};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing[2]};
  text-align: left;
  cursor: pointer;
  min-width: 0;
  width: 100%;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.surface.cardHover};
    transform: none;
    box-shadow: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.border.focus};
    outline-offset: 2px;
  }
`;

export const CoverWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 3;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

export const Cover = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Pill = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spacing[2]};
  left: ${({ theme }) => theme.spacing[2]};
  font-size: 10.5px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: 0.04em;
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: ${({ theme }) => theme.colors.text.inverse};
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  min-width: 24px;
  text-align: center;
  border-width: 0;

  &.rank-1 {
    background: #eab308;
    color: #fff;
    border: 1px solid #ca8a04;
  }

  &.rank-2 {
    background: #94a3b8;
    color: #fff;
    border: 1px solid #64748b;
  }

  &.rank-3 {
    background: #d97706;
    color: #fff;
    border: 1px solid #b45309;
  }
`;

export const Title = styled.strong`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-size: clamp(12.5px, 1.6vw, 14px);
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const EdgeFadeLeft = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 24px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.surface.background} 0%,
    transparent 100%
  );
`;

export const EdgeFadeRight = styled(EdgeFadeLeft)`
  left: auto;
  right: 0;
  background: linear-gradient(
    270deg,
    ${({ theme }) => theme.colors.surface.background} 0%,
    transparent 100%
  );
`;
