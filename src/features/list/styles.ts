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
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ListWrap = styled.div`
  display: grid;
  gap: clamp(10px, 2vw, 14px);
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: clamp(10px, 2vw, 16px);
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: clamp(10px, 2vw, 14px);
  background: ${({ theme }) => theme.colors.surface.card};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.surface.cardHover};
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const MainLink = styled(NovelRoute.Link)`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
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
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: transform ${({ theme }) => theme.transitions.base};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  @media (max-width: 420px) {
    width: 72px;
    height: 96px;
  }
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  min-width: 0;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: clamp(15px, 2.2vw, 18px);
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Author = styled.p`
  margin: 0;
  font-size: clamp(12px, 1.8vw, 14px);
  color: ${({ theme }) => theme.colors.text.secondary};
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
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  background: ${({ theme }) => theme.colors.surface.card};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: clamp(12px, 1.8vw, 14px);
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.surface.cardHover};
    border-color: ${({ theme }) => theme.colors.border.strong};
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }
`;

export const Pagination = styled.nav`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin: clamp(14px, 3vw, 20px) auto 0;
  flex-wrap: wrap;
`;

export const PageBtn = styled.button<{ active?: boolean }>`
  min-width: 36px;
  height: 36px;
  padding: 0 ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  background: ${({ active, theme }) =>
    active ? theme.colors.surface.cardHover : theme.colors.surface.card};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  box-shadow: none;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.surface.cardHover};
    border-color: ${({ theme }) => theme.colors.border.strong};
    transform: none;
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.45;
    cursor: default;
  }
`;
