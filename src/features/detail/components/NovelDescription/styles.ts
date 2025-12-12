import styled from '@emotion/styled';

export const Cards = styled.div`
  background: ${({ theme }) => theme.colors.surface.card};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing[6]};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export const Title = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing[4]} 0;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
  padding-bottom: ${({ theme }) => theme.spacing[3]};
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};

  p {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
