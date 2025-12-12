import { SquareLibrary } from 'lucide-react';
import styled from '@emotion/styled';
import { Link } from '@tanstack/react-router';

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary[500]};
  }

  svg {
    color: ${({ theme }) => theme.colors.primary[500]};
  }
`;

export const Logo = () => (
    <LogoWrapper to="/">
        <SquareLibrary />
        NovelReader
    </LogoWrapper>
);
