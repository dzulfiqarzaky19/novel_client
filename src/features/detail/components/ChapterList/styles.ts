import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background: #0b0f14;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #1f2937;
  max-height: 800px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  padding: 16px;
  border-bottom: 1px solid #1f2937;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #111827;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 14px;
  text-transform: uppercase;
  color: #9ca3af;
  font-weight: 700;
`;

export const Controls = styled.div`
  display: flex;
  gap: 8px;
`;

export const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #374151;
    border-radius: 3px;
  }
`;

export const Row = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid #1f2937;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #d1d5db;
  transition: background 0.2s;

  &:hover {
    background: #1f2937;
    color: #fff;
  }

  span.time {
    color: #6b7280;
    font-size: 12px;
  }
`;
