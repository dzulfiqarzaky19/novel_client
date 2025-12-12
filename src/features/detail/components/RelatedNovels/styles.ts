import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-top: 24px;
`;

export const SectionTitle = styled.h3`
  font-size: 14px;
  text-transform: uppercase;
  color: #9ca3af;
  margin-bottom: 16px;
  font-weight: 700;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  &:hover img {
    transform: translateY(-4px);
  }
`;

export const Cover = styled.img`
  width: 100%;
  aspect-ratio: 2/3;
  border-radius: 8px;
  object-fit: cover;
  transition: transform 0.2s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h4`
  margin: 0;
  font-size: 14px;
  color: #fff;
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Sub = styled.span`
  font-size: 12px;
  color: #6b7280;
`;
