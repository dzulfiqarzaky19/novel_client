import styled from '@emotion/styled';

export const Page = styled.div`
  /* shared tokens (match your Section.ts) */
  --bg: #fff;
  --text: #111;
  --muted: #6b7280;
  --line: #e5e7eb;
  --bg-hover: #f9fafb;
  --pill: #111;
  --card: #fff;

  @media (prefers-color-scheme: dark) {
    --text: #e5e7eb;
    --muted: #9ca3af;
    --line: #1f2937;
    --bg-hover: #0b0f14; /* same as Section */
    --pill: #e5e7eb;
    --card: #0f141b;
  }

  color: var(--text);
  min-height: 100dvh;
  padding: clamp(16px, 3vw, 24px) clamp(12px, 4vw, 24px);
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: flex-start;
  margin-bottom: clamp(16px, 3vw, 24px);
`;

export const CoverWrap = styled.div`
  width: clamp(180px, 24vw, 260px);
  min-width: 180px;
  aspect-ratio: 3 / 4.3;
  border-radius: 12px;
  overflow: hidden;
  background: var(--bg-hover);
  border: 1px solid var(--line);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const Info = styled.div`
  flex: 1 1 480px;
  min-width: 280px;
`;

export const Title = styled.h1`
  font-size: clamp(22px, 3vw, 32px);
  line-height: 1.15;
  letter-spacing: 0.2px;
  margin: 2px 0 8px;
  color: var(--text);
`;

export const RatingRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 8px 0 12px;
  flex-wrap: wrap;
`;

export const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  background: transparent;
  border: 1px solid var(--pill);
  color: var(--pill);
  font-weight: 600;
  font-variant-numeric: tabular-nums;

  b {
    font-weight: 700;
  }
  small {
    color: var(--muted);
    font-weight: 500;
  }
`;

export const Meta = styled.div`
  display: grid;
  gap: 10px;
  margin: 12px 0 16px;

  .row {
    display: flex;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;

    label {
      color: var(--muted);
      min-width: 110px;
      font-size: clamp(11px, 1.2vw, 12px);
      letter-spacing: 0.12em;
      text-transform: uppercase;
      font-weight: 600;
    }

    span {
      color: var(--text);
    }
  }
`;

export const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Chip = styled.span`
  display: inline-flex;
  padding: 6px 10px;
  border-radius: 999px;
  background: transparent;
  border: 1px solid var(--line);
  color: var(--text);
  font-size: 13px;
  text-decoration: none;

  a&,
  & a {
    color: inherit;
    text-decoration: none;
  }

  &:hover {
    background: var(--bg-hover);
  }
`;

export const CTA = styled.span`
  display: inline-flex;
  margin-top: 8px;

  a {
    display: inline-flex;
    padding: 10px 14px;
    border-radius: 10px;
    background: var(--text);
    color: var(--text);
    text-decoration: none;
    font-weight: 700;
    letter-spacing: 0.2px;
    border: 1px solid var(--text);
  }

  a:hover {
    opacity: 0.92;
  }
  a:active {
    opacity: 0.85;
  }
`;

export const SectionCard = styled.section`
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 16px;
  margin: clamp(16px, 3vw, 24px) 0;

  h2 {
    margin: 0 0 8px 0;
    font-size: clamp(11px, 1.2vw, 12px);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    font-weight: 600;
  }

  p {
    color: var(--text);
    line-height: 1.6;
  }
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 0.9fr;
  gap: 16px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
`;

export const NovelCard = styled.span`
  display: block;
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 12px;
  text-decoration: none;
  color: var(--text);
  overflow: hidden;

  a&,
  & a {
    color: inherit;
    text-decoration: none;
    display: block;
  }

  img {
    width: 100%;
    aspect-ratio: 3 / 4.2;
    object-fit: cover;
    display: block;
  }

  .body {
    padding: 10px 12px 12px;
  }

  h4 {
    margin: 4px 0 6px;
    font-size: 14px;
    line-height: 1.35;
    color: var(--text);
  }

  .sub {
    display: flex;
    gap: 6px;
    color: var(--muted);
    font-size: 12px;
    align-items: center;
  }

  &:hover {
    background: var(--bg-hover);
  }
`;

export const ChapterList = styled.div`
  display: grid;
  gap: 8px;
  max-height: 60vh;
  overflow: auto;
  padding-right: 6px;

  a {
    color: var(--text);
    text-decoration: none;
    padding: 10px 12px;
    border-radius: 10px;
    border: 1px solid var(--line);
    background: transparent;
    display: block;
  }

  a:hover {
    background: var(--bg-hover);
  }
`;

export const KVs = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  color: var(--muted);
  font-size: 14px;

  strong {
    color: var(--text);
  }
`;
