import styled from '@emotion/styled';

export const Card = styled.div`
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  gap: 16px;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const CoverWrapper = styled.div`
  width: 100px;
  flex-shrink: 0;

  img {
    width: 100%;
    aspect-ratio: 2/3;
    object-fit: cover;
    border-radius: 8px;
    display: block;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
  line-height: 1.3;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--muted);
  font-size: 13px;

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const Tags = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 4px;
`;

export const Tag = styled.span`
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 4px;
  background: var(--bg-hover);
  color: var(--text);
  font-weight: 600;

  &.primary {
    background: rgba(59, 130, 246, 0.1);
    color: #3b82f6;
  }
  &.secondary {
    background: rgba(16, 185, 129, 0.1);
    color: #10b981;
  }
`;

export const RightInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  text-align: right;
  gap: 4px;

  @media (max-width: 640px) {
    align-items: flex-start;
    text-align: left;
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid var(--line);
  }
`;

export const UpdateLabel = styled.span`
  font-size: 11px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const ChapterLink = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: var(--text);

  &:hover {
    color: #3b82f6;
    text-decoration: underline;
  }
`;
