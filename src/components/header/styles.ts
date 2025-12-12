import styled from '@emotion/styled';
import { Link } from '@tanstack/react-router';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const ThemeToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  box-shadow: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface.cardHover};
    border-color: ${({ theme }) => theme.colors.border.strong};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
