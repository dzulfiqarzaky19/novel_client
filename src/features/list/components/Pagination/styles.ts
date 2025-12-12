import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
`;

export const Btn = styled.button<{ active?: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${({ active }) => (active ? '#3b82f6' : 'var(--line)')};
  background: ${({ active }) => (active ? '#3b82f6' : 'var(--card)')};
  color: ${({ active }) => (active ? '#fff' : 'var(--text)')};
  font-weight: 600;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    border-color: #3b82f6;
    color: ${({ active }) => (active ? '#fff' : '#3b82f6')};
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
