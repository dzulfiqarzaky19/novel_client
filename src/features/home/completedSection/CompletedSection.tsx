import { useEffect, useMemo, useRef, useState } from 'react';

import { useHomeCompleted } from 'hooks/useHome';

import {
  Actions,
  ArrowArea,
  Copy,
  Cover,
  CTA,
  Dot,
  Fill,
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
  href: string;
  cover: string;
}

interface ICompletedSectionProps {
  intervalMs?: number;
  onCTA?: (slide: ISlideProps) => void;
  ctaLabel?: string;
}

export const CompletedSection = ({
  intervalMs = 10000,
  onCTA,
  ctaLabel = 'Read now',
}: ICompletedSectionProps) => {
  const { data } = useHomeCompleted();

  const slides: ISlideProps[] = useMemo(
    () =>
      data
        .filter((i) => i.title)
        .map((i) => ({
          title: i.title,
          subtitle: i.chapterInfo,
          href: i.absoluteUrl,
          cover: i.coverAbsoluteUrl,
        })),
    [data],
  );

  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<number | null>(null);
  const lastTickRef = useRef<number | null>(null);
  const pausedRef = useRef(false);

  const go = (dir: 1 | -1) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);

    setProgress(0);

    lastTickRef.current = null;
  };

  const goto = (i: number) => {
    setIndex(i);

    setProgress(0);

    lastTickRef.current = null;
  };

  useEffect(() => {
    if (!slides.length) return;

    const step = (now: number) => {
      if (pausedRef.current) {
        lastTickRef.current = now;

        timerRef.current = requestAnimationFrame(step);

        return;
      }

      lastTickRef.current ??= now;

      const dt = now - lastTickRef.current;

      lastTickRef.current = now;

      setProgress((p) => {
        const next = p + dt / intervalMs;

        if (next >= 1) {
          // advance slide
          setIndex((i) => (i + 1) % slides.length);

          return 0;
        }

        return next;
      });

      timerRef.current = requestAnimationFrame(step);
    };

    const reduce = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    )?.matches;

    if (!reduce) timerRef.current = requestAnimationFrame(step);

    return () => {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);

      timerRef.current = null;

      lastTickRef.current = null;
    };
  }, [slides.length, intervalMs]);

  if (!slides.length) return null;
  const active = slides[index];

  return (
    <Section
      bg={active.cover}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <Frame>
        <ArrowArea>
          <Ghost
            onClick={() => go(-1)}
            aria-label="Previous"
          >
            ‹
          </Ghost>
        </ArrowArea>

        <Hero>
          <Visual>
            {active.cover ? (
              <Cover
                src={active.cover}
                alt={active.title}
              />
            ) : (
              <Placeholder aria-label={active.title}>
                {active.title}
              </Placeholder>
            )}
          </Visual>

          <Copy>
            <Title title={active.title}>{active.title}</Title>

            {active.subtitle && (
              <Sub title={active.subtitle}>{active.subtitle}</Sub>
            )}

            <Actions>
              <CTA
                href={active.href}
                onClick={(e) => {
                  if (onCTA) {
                    e.preventDefault();

                    onCTA(active);
                  }
                }}
                target="_blank"
                rel="noreferrer"
              >
                {ctaLabel}
              </CTA>
            </Actions>
          </Copy>
        </Hero>

        <ArrowArea>
          <Ghost
            onClick={() => go(1)}
            aria-label="Next"
          >
            ›
          </Ghost>
        </ArrowArea>
      </Frame>

      <ProgressBar
        role="tablist"
        aria-label="Slides"
      >
        {slides.map((s, i) => (
          <Dot
            key={s.title}
            onClick={() => goto(i)}
            aria-label={`Go to ${s.title}`}
          >
            <Fill
              style={{
                transform:
                  i === index
                    ? `scaleX(${Math.max(0.04, Math.min(1, progress))})`
                    : 'scaleX(0)',
              }}
            />
          </Dot>
        ))}
      </ProgressBar>
    </Section>
  );
};
