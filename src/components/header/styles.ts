import styled from '@emotion/styled';
import { Link } from '@tanstack/react-router';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 768px) {
    display: none;
  }
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

export const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MobileNavOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.surface.overlay};
  z-index: ${({ theme }) => theme.zIndex.modal};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition:
    opacity ${({ theme }) => theme.transitions.base},
    visibility ${({ theme }) => theme.transitions.base};

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileNavContent = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.surface.card};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  padding: ${({ theme }) => theme.spacing[6]};
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
  transition: transform ${({ theme }) => theme.transitions.base};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  z-index: ${({ theme }) => theme.zIndex.modal + 1};
`;

export const MobileCloseButton = styled.button`
  align-self: flex-end;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;
