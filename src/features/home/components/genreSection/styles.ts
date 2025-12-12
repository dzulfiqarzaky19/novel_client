import styled from '@emotion/styled';

export const Section = styled.section`
  margin: 0;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background: #0b0f14;
    border-color: #1f2937;
  }
`;

export const SectionHeader = styled.h2`
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
  font-family: 'Times New Roman', serif;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 8px;
  
  @media (prefers-color-scheme: dark) {
    border-color: #1f2937;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
  color: var(--muted);

  &:hover {
    background: var(--bg-hover);
    color: var(--text);
  }
`;

export const Title = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

/* Optional pill/badge if we had counts */
export const Count = styled.span`
  font-size: 12px;
  background: var(--bg-hover);
  padding: 2px 8px;
  border-radius: 99px;
`;
