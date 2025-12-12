import styled from '@emotion/styled';

// Page Layout
export const Page = styled.div`
  background: ${({ theme }) => theme.colors.surface.background};
  color: ${({ theme }) => theme.colors.text.primary};
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  flex: 1;
  max-width: 980px;
  margin: 0 auto;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing[4]};
`;

// Header Styles
export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  background: ${({ theme }) => theme.colors.surface.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
`;

export const HeaderContent = styled.div`
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  box-shadow: none;

  &:hover {
    background: ${({ theme }) => theme.colors.surface.cardHover};
    color: ${({ theme }) => theme.colors.text.primary};
    transform: none;
    box-shadow: none;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const ChapterSelect = styled.select`
  flex: 1;
  max-width: 400px;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  background: ${({ theme }) => theme.colors.component.input};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.strong};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.border.focus};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.border.focus}33;
  }
`;

export const NextButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.text.inverse};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  white-space: nowrap;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.primary[600]};
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

// Content Styles
export const ContentWrapper = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing[8]} 0;
`;

export const ChapterHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

export const ChapterTitle = styled.h1`
  font-size: clamp(24px, 4vw, 36px);
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing[2]};
  letter-spacing: -0.01em;
`;

export const ChapterMeta = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  letter-spacing: 0.04em;
`;

export const ContentArea = styled.article`
  max-width: 740px;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.text.primary};

  p {
    margin: 0 0 ${({ theme }) => theme.spacing[6]};
    text-align: justify;
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }
`;

// Footer Styles
export const FooterWrapper = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
  background: ${({ theme }) => theme.colors.surface.background};
  padding: ${({ theme }) => theme.spacing[4]};
  margin-top: auto;
`;

export const FooterContent = styled.div`
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const FooterNav = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const Copyright = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.text.tertiary};
`;
