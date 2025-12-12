/* ========== styles ========== */

import styled from '@emotion/styled';

export const Section = styled.section`
  margin: clamp(16px, 3vw, 24px) 0;

  --text: #111;
  --muted: #6b7280;
  --line: #e5e7eb;
  --card: #fff;
  --hover: #f9fafb;

  @media (prefers-color-scheme: dark) {
    --text: #e5e7eb;
    --muted: #9ca3af;
    --line: #1f2937;
    --card: #0b0f14;
    --hover: #0f141a;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: clamp(12px, 1.2vw, 13px);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  font-weight: 700;
`;

export const Controls = styled.div`
  display: none;
  gap: 8px;
  @media (hover: hover) and (min-width: 960px) {
    display: flex; /* show arrows on desktop/hover devices */
  }
`;

export const ArrowButton = styled.button`
  border: 1px solid var(--line);
  background: transparent;
  border-radius: 10px;
  padding: 6px 10px;
  cursor: pointer;
  line-height: 1;
  color: var(--muted);
  &:hover {
    background: var(--hover);
    color: var(--text);
  }
  &:focus-visible {
    outline: 2px solid color-mix(in oklab, var(--text) 30%, transparent);
    outline-offset: 2px;
  }
`;

export const CarouselWrap = styled.div`
  position: relative;
  overflow: hidden; /* NEW: clips fades/inner overflow */
`;

export const Carousel = styled.div`
  display: grid;
  grid-auto-flow: column;

  /* NEW: smaller min size on tiny screens, scales up smoothly */
  grid-auto-columns: minmax(clamp(120px, 44vw, 180px), 1fr);

  gap: clamp(10px, 2.5vw, 16px);
  overflow-x: auto;
  overflow-y: hidden;
  padding: 6px 8px 10px; /* slight side padding but inside clipped wrap */
  scroll-snap-type: x mandatory;
  scroll-padding: 8px;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--line);
    border-radius: 4px;
  }
`;

export const Card = styled.button`
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 10px;
  text-align: left;
  cursor: pointer;

  /* NEW: remove fixed widths; let grid-auto-columns control width */
  min-width: 0; /* prevent intrinsic content from expanding card */
  width: 100%;

  &:hover {
    background: var(--hover);
  }
  &:focus-visible {
    outline: 2px solid color-mix(in oklab, var(--text) 30%, transparent);
    outline-offset: 2px;
  }
`;

export const CoverWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 3; /* consistent cover ratio */
  overflow: hidden;
  border-radius: 8px;
`;

export const Cover = styled.img`
  display: block; /* NEW: removes inline-gap layout quirks */
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Pill = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 2px 6px;
  border-radius: 9999px;
  color: var(--text);
  border: 1px solid var(--text);
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  min-width: 24px;
  text-align: center;
  border-width: 0;

  &.rank-1 {
    background: #eab308; /* Gold */
    color: #fff;
    border: 1px solid #ca8a04;
  }
  &.rank-2 {
    background: #94a3b8; /* Silver */
    color: #fff;
    border: 1px solid #64748b;
  }
  &.rank-3 {
    background: #d97706; /* Bronze */
    color: #fff;
    border: 1px solid #b45309;
  }
`;

export const Title = styled.strong`
  color: var(--text);
  font-weight: 600;
  font-size: clamp(12.5px, 1.6vw, 14px);
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* allow 2 lines on narrow screens */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const EdgeFadeLeft = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 24px;
  background: linear-gradient(90deg, var(--card), transparent);
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(90deg, #06090d, transparent);
  }
`;

export const EdgeFadeRight = styled(EdgeFadeLeft)`
  left: auto;
  right: 0;
  background: linear-gradient(270deg, var(--card), transparent);
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(270deg, #06090d, transparent);
  }
`;
