import { SquareLibrary } from 'lucide-react';
import styled from '@emotion/styled';
import { Link } from '@tanstack/react-router';

export const LogoWrapper = styled(Link)`
  display: flex;
`;

export const Logo = () => (
  <LogoWrapper to="/">
    <SquareLibrary />
    NovelReader
  </LogoWrapper>
);
