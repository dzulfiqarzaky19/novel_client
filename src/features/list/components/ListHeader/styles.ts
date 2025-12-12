import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: var(--text);
  margin: 0;
  font-family: 'Times New Roman', serif;
  text-transform: capitalize;
`;

export const Select = styled.select`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid var(--line);
  background: var(--card);
  color: var(--text);
  font-size: 14px;
  cursor: pointer;
`;
