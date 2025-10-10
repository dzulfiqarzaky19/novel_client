import styled from '@emotion/styled';

/* styled */
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
  text-align: left;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
  max-height: 800px;
  padding-bottom: 8px;
`;

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

export const LinkWrapper = styled.div`
  color: inherit;
  text-decoration: none;
`;

export const Title = styled.strong`
  font-size: 12px;
`;
