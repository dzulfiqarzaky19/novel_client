import styled from '@emotion/styled';

export const Section = styled.section`
  margin: clamp(16px, 3vw, 24px) 0;
  padding: 0 clamp(12px, 3vw, 0);

  --text: #111;
  --muted: #6b7280;
  --line: #e5e7eb;
  --bg-hover: #f9fafb;
  --pill: #111;

  @media (prefers-color-scheme: dark) {
    --text: #e5e7eb;
    --muted: #9ca3af;
    --line: #1f2937;
    --bg-hover: #0b0f14;
    --pill: #e5e7eb;
  }
`;

export const SectionHeader = styled.h2`
  margin: 0 0 8px 0;
  font-size: clamp(11px, 1.2vw, 12px);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  font-weight: 600;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

/* Button row with larger tap area on mobile */
export const Row = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  padding: clamp(10px, 2.5vw, 12px) 0;
  background: transparent;
  text-align: left;
  cursor: pointer;
  border: 0;
  border-bottom: 1px solid var(--line);

  &:hover {
    background: var(--bg-hover);
  }

  &:focus-visible {
    outline: 2px solid color-mix(in oklab, var(--text) 30%, transparent);
    outline-offset: 2px;
    border-radius: 6px;
  }

  /* Mobile: increase hit area + enable momentum scroll if the list becomes long in a narrow viewport */
  @media (max-width: 640px) {
    padding: 14px 0;
    -webkit-overflow-scrolling: touch;
  }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce) {
    scroll-behavior: auto;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0; /* enables ellipsis */
`;

export const Title = styled.strong`
  color: var(--text);
  font-weight: 600;
  font-size: clamp(14px, 1.8vw, 15px);
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Sub = styled.p`
  margin: 0;
  font-size: clamp(12px, 1.6vw, 13px);
  color: var(--muted);
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Right = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex: 0 0 auto;

  /* On very small screens, wrap to keep times visible */
  @media (max-width: 400px) {
    gap: 6px;
    flex-wrap: wrap;
    justify-content: flex-end;
    max-width: 40%;
  }
`;

export const New = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 2px 6px;
  border: 1px solid var(--pill);
  color: var(--pill);
  border-radius: 9999px;

  /* Slightly larger pill on touch devices */
  @media (hover: none) and (pointer: coarse) {
    padding: 3px 8px;
  }
`;

export const Time = styled.time`
  font-size: clamp(11px, 1.4vw, 12px);
  color: var(--muted);
  white-space: nowrap;
`;
