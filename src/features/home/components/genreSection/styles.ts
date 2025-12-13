import styled from '@emotion/styled';

export const Section = styled.section`
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

  max-height: 60vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const Title = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

export const Count = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  background: ${({ theme }) => theme.colors.surface.cardHover};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: ${({ theme }) => theme.colors.text.tertiary};
`;
