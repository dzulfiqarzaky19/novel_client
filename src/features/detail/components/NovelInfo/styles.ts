import styled from '@emotion/styled';

export const Wrapper = styled.section`
  background: #0b0f14;
  border-radius: 12px;
  padding: 24px;
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 32px;
  margin-bottom: 32px;
  border: 1px solid #1f2937;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const CoverCol = styled.div`
  width: 100%;
`;

export const Cover = styled.img`
  width: 100%;
  aspect-ratio: 2 / 3;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
`;

export const InfoCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  line-height: 1.2;
  font-weight: 700;
  color: #fff;
  font-family: 'Times New Roman', serif;
`;

export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 13px;
  color: #9ca3af;
  flex-wrap: wrap;
`;

export const RatingBadge = styled.span`
  background: #ca8a04;
  color: #fff;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  row-gap: 8px;
  column-gap: 32px;
  font-size: 14px;

  dt {
    color: #6b7280;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 0.05em;
    padding-top: 2px;
  }

  dd {
    margin: 0;
    color: #e5e7eb;
    font-weight: 500;
  }

  @media (min-width: 600px) {
    grid-template-columns: auto 1fr auto 1fr;
  }
`;

export const ActionRow = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`;

export const ReadBtn = styled.button`
  background: #3b82f6;
  color: #fff;
  border: 0;
  border-radius: 6px;
  padding: 12px 32px;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.2s;

  &:hover {
    background: #2563eb;
  }
`;

export const LibBtn = styled.button`
  background: #1f2937;
  color: #d1d5db;
  border: 1px solid #374151;
  border-radius: 6px;
  padding: 12px 32px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;

  &:hover {
    background: #374151;
    color: #fff;
  }
`;

export const TagsRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
`;

export const TagLabel = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: #6b7280;
  text-transform: uppercase;
  margin-right: 4px;
`;

export const TagPill = styled.span`
  background: #1f2937;
  color: #9ca3af;
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 99px;
  border: 1px solid #374151;
`;
