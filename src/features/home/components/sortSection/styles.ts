import styled from '@emotion/styled';

export const Section = styled.section`
  margin: 0;
  background: ${({ theme }) => theme.colors.surface.card};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing[5]};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  transition: background ${({ theme }) => theme.transitions.base};
`;

export const SectionHeader = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing[4]} 0;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: 'Times New Roman', serif;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border.default};
  padding-bottom: ${({ theme }) => theme.spacing[2]};
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  color: ${({ theme }) => theme.colors.text.secondary};

  &:hover {
    background: ${({ theme }) => theme.colors.surface.cardHover};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const Icon = styled.span`
  display: grid;
  place-items: center;
  width: 24px;
  color: ${({ theme }) => theme.colors.primary[500]};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;
