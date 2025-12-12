import styled from '@emotion/styled';

export const Page = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  min-height: 100dvh;
  padding: clamp(16px, 3vw, 24px) clamp(12px, 4vw, 24px);
  background: ${({ theme }) => theme.colors.surface.background};
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[6]};
  align-items: flex-start;
  margin-bottom: clamp(16px, 3vw, 24px);
`;

export const CoverWrap = styled.div`
  width: clamp(180px, 24vw, 260px);
  min-width: 180px;
  aspect-ratio: 3 / 4.3;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface.cardHover};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  box-shadow: ${({ theme }) => theme.shadows.lg};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const Info = styled.div`
  flex: 1 1 480px;
  min-width: 280px;
`;

export const Title = styled.h1`
  font-size: clamp(22px, 3vw, 32px);
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  letter-spacing: 0.2px;
  margin: 2px 0 ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

export const RatingRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  align-items: center;
  margin: ${({ theme }) => theme.spacing[2]} 0
    ${({ theme }) => theme.spacing[3]};
  flex-wrap: wrap;
`;

export const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.text.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-variant-numeric: tabular-nums;

  b {
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  }

  small {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  }
`;

export const Meta = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  margin: ${({ theme }) => theme.spacing[3]} 0
    ${({ theme }) => theme.spacing[4]};

  .row {
    display: flex;
    gap: ${({ theme }) => theme.spacing[2]};
    align-items: center;
    flex-wrap: wrap;

    label {
      color: ${({ theme }) => theme.colors.text.secondary};
      min-width: 110px;
      font-size: clamp(11px, 1.2vw, 12px);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    }

    span {
      color: ${({ theme }) => theme.colors.text.primary};
    }
  }
`;

export const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const Chip = styled.span`
  display: inline-flex;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.fast};

  a&,
  & a {
    color: inherit;
    text-decoration: none;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.surface.cardHover};
    border-color: ${({ theme }) => theme.colors.border.strong};
  }
`;

export const CTA = styled.span`
  display: inline-flex;
  margin-top: ${({ theme }) => theme.spacing[2]};

  a {
    display: inline-flex;
    padding: ${({ theme }) => theme.spacing[2]}
      ${({ theme }) => theme.spacing[4]};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    background: ${({ theme }) => theme.colors.component.buttonPrimary};
    color: ${({ theme }) => theme.colors.text.inverse};
    text-decoration: none;
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    letter-spacing: 0.2px;
    border: 1px solid ${({ theme }) => theme.colors.component.buttonPrimary};
    transition: all ${({ theme }) => theme.transitions.fast};
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }

  a:hover {
    background: ${({ theme }) => theme.colors.component.buttonPrimaryHover};
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-1px);
  }

  a:active {
    opacity: 0.85;
    transform: translateY(0);
  }
`;

export const SectionCard = styled.section`
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing[4]};
  margin: clamp(16px, 3vw, 24px) 0;
  background: ${({ theme }) => theme.colors.surface.card};
  transition: all ${({ theme }) => theme.transitions.base};

  h2 {
    margin: 0 0 ${({ theme }) => theme.spacing[2]} 0;
    font-size: clamp(11px, 1.2vw, 12px);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  }

  p {
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  }
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 0.9fr;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const NovelCard = styled.span`
  display: block;
  background: ${({ theme }) => theme.colors.surface.card};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.primary};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.fast};

  a&,
  & a {
    color: inherit;
    text-decoration: none;
    display: block;
  }

  img {
    width: 100%;
    aspect-ratio: 3 / 4.2;
    object-fit: cover;
    display: block;
  }

  .body {
    padding: ${({ theme }) => theme.spacing[2]}
      ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[3]};
  }

  h4 {
    margin: ${({ theme }) => theme.spacing[1]} 0
      ${({ theme }) => theme.spacing[2]};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  }

  .sub {
    display: flex;
    gap: ${({ theme }) => theme.spacing[2]};
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    align-items: center;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.surface.cardHover};
    border-color: ${({ theme }) => theme.colors.border.strong};
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-1px);
  }
`;

export const ChapterList = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[2]};
  max-height: 60vh;
  overflow: auto;
  padding-right: ${({ theme }) => theme.spacing[2]};

  a {
    color: ${({ theme }) => theme.colors.text.primary};
    text-decoration: none;
    padding: ${({ theme }) => theme.spacing[2]}
      ${({ theme }) => theme.spacing[3]};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    border: 1px solid ${({ theme }) => theme.colors.border.default};
    background: ${({ theme }) => theme.colors.surface.card};
    display: block;
    transition: all ${({ theme }) => theme.transitions.fast};
  }

  a:hover {
    background: ${({ theme }) => theme.colors.surface.cardHover};
    border-color: ${({ theme }) => theme.colors.border.strong};
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }
`;

export const KVs = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  align-items: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  strong {
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  }
`;
