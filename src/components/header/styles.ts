import styled from '@emotion/styled';
import { Link } from '@tanstack/react-router';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const LinkWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
