import styled from '@emotion/styled';
import { Link, useParams } from '@tanstack/react-router';

import { useNovelChapter } from './hooks/useChapter';
import { formatChapter } from 'utils/formatChapter';

const Page = styled.div`
  --bg: #fff;
  --text: #111;
  --muted: #6b7280;
  --line: #e5e7eb;
  --bg-hover: #f9fafb;

  @media (prefers-color-scheme: dark) {
    --bg: #0b0f14;
    --text: #e5e7eb;
    --muted: #9ca3af;
    --line: #1f2937;
    --bg-hover: #0b0f14;
  }

  background: var(--bg);
  color: var(--text);
  min-height: 100dvh;
  padding: clamp(14px, 3vw, 24px);
`;

const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;

const Header = styled.header`
  margin: 0 0 clamp(16px, 3vw, 24px);
`;

const Title = styled.h1`
  margin: 0 0 6px;
  font-size: clamp(22px, 3.2vw, 34px);
  line-height: 1.15;
  letter-spacing: 0.2px;
`;

const SubTitle = styled.h2`
  margin: 0;
  font-size: clamp(12px, 1.6vw, 14px);
  color: var(--muted);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: clamp(12px, 2.5vw, 18px) 0 clamp(14px, 3vw, 22px);
`;

const Spacer = styled.div`
  display: none;
  @media (min-width: 700px) {
    display: block;
  }
`;

const NavButton = styled(Link, {
  shouldForwardProp: (p) => p !== 'disabled',
}) <{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--text);
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.2px;
  white-space: nowrap;
  justify-self: start;

  &:hover {
    background: var(--bg-hover);
  }

  ${(p) =>
    p.disabled &&
    `
    opacity: .45;
    pointer-events: none;
    cursor: default;
  `}
`;

const Content = styled.section`
  max-width: 740px;
  margin: 0 auto;
  font-size: clamp(15px, 1.8vw, 18px);
  line-height: 1.8;

  p {
    margin: 0 0 1em;
  }
`;

export const Chapter = () => {
  const { novel, chapter } = useParams({ from: '/novel/$novel/$chapter' });
  const slug = `${novel}/${chapter}`;
  const { data } = useNovelChapter(slug);

  const prev = data.chapter.prev_chapter;
  const next = data.chapter.next_chapter;
  const prevDisabled = prev.slug === 'null';
  const nextDisabled = next.slug === 'null';

  return (
    <Page>
      <Container>
        <Header>
          <Link
            to="/novel/$novel"
            params={{ novel }}
          >
            <Title>{data.chapter.title}</Title>
          </Link>

          <SubTitle>{chapter}</SubTitle>
        </Header>

        <NavBar>
          <NavButton aria-disabled={prevDisabled}>
            <Link
              to="/novel/$novel/$chapter"
              params={{
                novel: prev.path.split('/')[2],
                chapter: prev.slug,
              }}
              disabled={prevDisabled}
            >
              ← Previous
            </Link>
          </NavButton>

          <Spacer />

          <NavButton aria-disabled={nextDisabled}>
            <Link
              to="/novel/$novel/$chapter"
              params={{
                novel: next.path.split('/')[2],
                chapter: next.slug,
              }}
              disabled={nextDisabled}
            >
              Next →
            </Link>
          </NavButton>
        </NavBar>

        <Content>
          {formatChapter(data.chapter.content).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </Content>

        <NavBar>
          <NavButton aria-disabled={prevDisabled}>
            <Link
              to="/novel/$novel/$chapter"
              params={{
                novel: prev.path.split('/')[2],
                chapter: prev.slug,
              }}
              disabled={prevDisabled}
            >
              ← Previous
            </Link>
          </NavButton>

          <Spacer />

          <NavButton aria-disabled={nextDisabled}>
            <Link
              to="/novel/$novel/$chapter"
              params={{
                novel: next.path.split('/')[2],
                chapter: next.slug,
              }}
              disabled={nextDisabled}
            >
              Next →
            </Link>
          </NavButton>
        </NavBar>
      </Container>
    </Page>
  );
};
