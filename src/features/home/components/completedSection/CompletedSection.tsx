import { Link } from '@tanstack/react-router';
import { useEffect, useMemo, useRef, useState } from 'react';

import { useHomeCompleted } from 'features/home/hooks/useHome';

import {
  Actions,
  ArrowArea,
  Badge,
  BadgeRow,
  Copy,
  Cover,
  CTA,
  Description,
  Dot,
  Frame,
  Ghost,
  Hero,
  Placeholder,
  ProgressBar,
  Section,
  Sub,
  Title,
  Visual,
} from './styles';

interface ISlideProps {
  title: string;
  subtitle: string;
  slug: string;
  cover: string;
}

interface ICompletedSectionProps {
  intervalMs?: number;
  ctaLabel?: string;
}

export const CompletedSection = ({
  intervalMs = 10000,
  ctaLabel = 'Read Now',
}: ICompletedSectionProps) => {
  const { data } = useHomeCompleted();

  const slides: ISlideProps[] = useMemo(
    () =>
      data
        .filter((i) => i.title)
        .map((i) => ({
          title: i.title,
          subtitle: i.chapterInfo,
          slug: i.slug,
          cover: i.coverAbsoluteUrl,
        })),
    [data],
  );

  const [index, setIndex] = useState(0);
  const pausedRef = useRef(false);

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  };

  const goto = (i: number) => {
    setIndex(i);
  };

  useEffect(() => {
    if (!slides.length) return;

    const tick = () => {
      if (!pausedRef.current) {
        setIndex((i) => (i + 1) % slides.length);
      }
    };

    const id = setInterval(tick, intervalMs);
    return () => clearInterval(id);
  }, [slides.length, intervalMs]);

  if (!slides.length) return null;
  const active = slides[index];

  return (
    <Section bg={active.cover}>
      <Frame>
        <ArrowArea className="prev">
          <Ghost onClick={() => go(-1)} aria-label="Previous">
            ‹
          </Ghost>
        </ArrowArea>

        <Hero>
          <Visual>
            {active.cover ? (
              <Cover src={active.cover} alt={active.title} />
            ) : (
              <Placeholder aria-label={active.title}>{active.title}</Placeholder>
            )}
          </Visual>

          <Copy>
            <BadgeRow>
              <Badge>FEATURED</Badge>
              <Badge className="rating">★ 4.8</Badge>
            </BadgeRow>

            <Title title={active.title}>{active.title}</Title>

            <Sub>
              <span>Action • Martial Arts • {active.subtitle}</span>
            </Sub>

            <Description>
              In a world where strength determines destiny, a young man rises from the ashes of betrayal.
              With the blood of the ancient Dragon Emperor flowing through his veins, he challenges the heavens
              and crushes all who stand in his way.
            </Description>

            <Actions>
              <Link to="/novel/$novel" params={{ novel: active.slug }}>
                <CTA primary>{ctaLabel}</CTA>
              </Link>
              <CTA>+ Add to Library</CTA>
            </Actions>
          </Copy>
        </Hero>

        <ArrowArea className="next">
          <Ghost onClick={() => go(1)} aria-label="Next">
            ›
          </Ghost>
        </ArrowArea>
      </Frame>

      <ProgressBar role="tablist" aria-label="Slides">
        {slides.map((s, i) => (
          <Dot
            key={s.title}
            onClick={() => goto(i)}
            className={i === index ? 'active' : ''}
            aria-label={`Go to ${s.title}`}
            aria-selected={i === index}
          />
        ))}
      </ProgressBar>
    </Section>
  );
};
