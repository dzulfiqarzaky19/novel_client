import styled from '@emotion/styled';

export const Page = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: clamp(10px, 2.5vw, 16px) clamp(12px, 3vw, 16px) clamp(24px, 4vw, 32px);
  max-width: 100vw;
  overflow-x: clip;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(16px, 3vw, 32px);
  align-items: start;

  @media (min-width: 960px) {
    grid-template-columns: 3fr 1fr;
  }
`;

export const Sidebar = styled.div`
  display: grid;
  gap: clamp(12px, 2vw, 16px);
`;
