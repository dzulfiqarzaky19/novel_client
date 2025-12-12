import styled from '@emotion/styled';

export const Section = styled.section`
  margin: 0;
  /* Remove dedicated padding if grid handles it */

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

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  padding-left: 12px;
  border-left: 4px solid #3b82f6; /* Blue accent bar */
`;

export const SectionHeader = styled.h2`
  margin: 0;
  font-size: 18px;
  color: var(--text);
  font-weight: 700;
  font-family: 'Times New Roman', serif; /* Matching Hero vibe */
  letter-spacing: -0.01em;
`;

export const ViewAll = styled.a`
  font-size: 13px;
  font-weight: 600;
  color: #3b82f6;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px;
  border-radius: 12px;
  background: var(--bg-hover); /* Card-like background for each item */
  /* Or transparent with border? Reference looks like white cards on light bg */

  text-decoration: none;
  color: inherit;
  transition: transform 0.2s;

  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    background: color-mix(in oklab, var(--bg-hover), white 5%);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  @media (prefers-color-scheme: dark) {
    background: #111827;
    border: 1px solid var(--line);
  }
`;

export const IconPlaceholder = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: #374151;
  display: grid;
  place-items: center;
  color: #9ca3af;
  font-size: 18px;
  flex-shrink: 0;
`;

export const Col = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: var(--text);
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Sub = styled.p`
  margin: 0;
  font-size: 13px;
  color: var(--muted);
  display: flex;
  gap: 6px;
  align-items: center;
`;

export const Time = styled.span`
  font-size: 12px;
  color: var(--muted);
  white-space: nowrap;
  flex-shrink: 0;
`;

export const NewBadge = styled.span`
  font-size: 10px;
  font-weight: 800;
  color: #10b981;
  background: rgba(16, 185, 129, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
`;
