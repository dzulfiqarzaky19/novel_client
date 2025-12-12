import styled from '@emotion/styled';
import { getRouteApi } from '@tanstack/react-router';

const NovelRoute = getRouteApi('/novel/$novel/');
const ChapterRoute = getRouteApi('/novel/$novel/$chapter');

export const Page = styled.div`
  padding: clamp(14px, 3vw, 24px);
`;

export const Header = styled.h1`
  margin: 0 0 clamp(14px, 3vw, 20px);
  font-size: clamp(20px, 3vw, 28px);
  line-height: 1.2;
`;

export const ListWrap = styled.div`
  display: grid;
  gap: clamp(10px, 2vw, 14px);
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: clamp(10px, 2vw, 16px);
  border: 1px solid var(--line, #e5e7eb);
  border-radius: 12px;
  padding: clamp(10px, 2vw, 14px);

  @media (prefers-color-scheme: dark) {
    border-color: var(--line, #1f2937);
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const MainLink = styled(NovelRoute.Link)`
  display: flex;
  gap: 12px;
  text-decoration: none;
  color: inherit;
  align-items: flex-start;

  &:hover img {
    transform: translateY(-1px) scale(1.01);
  }
`;

export const Cover = styled.img`
  width: 84px;
  height: 112px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 160ms ease;

  @media (max-width: 420px) {
    width: 72px;
    height: 96px;
  }
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: clamp(15px, 2.2vw, 18px);
  line-height: 1.3;
  font-weight: 700;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Author = styled.p`
  margin: 0;
  font-size: clamp(12px, 1.8vw, 14px);
  color: var(--muted, #6b7280);

  @media (prefers-color-scheme: dark) {
    color: var(--muted, #9ca3af);
  }
`;

export const RightCol = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 720px) {
    justify-content: flex-start;
  }
`;

export const LatestLink = styled(ChapterRoute.Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid var(--line, #e5e7eb);
  text-decoration: none;
  color: inherit;
  font-size: clamp(12px, 1.8vw, 14px);
  line-height: 1.2;
  font-weight: 600;

  &:hover {
    background: var(--bg-hover, #f9fafb);
  }

  @media (prefers-color-scheme: dark) {
    border-color: var(--line, #1f2937);

    &:hover {
      background: var(--bg-hover, #0b0f14);
    }
  }
`;

export const Pagination = styled.nav`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: clamp(14px, 3vw, 20px) auto 0;
  flex-wrap: wrap;
`;

export const PageBtn = styled.button<{ active?: boolean }>`
  min-width: 36px;
  height: 36px;
  padding: 0 10px;
  border-radius: 10px;
  border: 1px solid var(--line, #e5e7eb);
  background: ${({ active }) =>
    active ? 'var(--bg-hover, #f9fafb)' : 'transparent'};
  color: inherit;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    opacity: 0.45;
    cursor: default;
  }

  @media (prefers-color-scheme: dark) {
    border-color: var(--line, #1f2937);
    background: ${({ active }) =>
      active ? 'var(--bg-hover, #0b0f14)' : 'transparent'};
  }
`;
