import { Link } from '@tanstack/react-router';
import { useRef } from 'react';

import { useHomeHot } from 'hooks/useHome';

import {
  ArrowButton,
  Card,
  Carousel,
  CarouselWrap,
  Controls,
  Cover,
  CoverWrapper,
  EdgeFadeLeft,
  EdgeFadeRight,
  Header,
  Pill,
  Section,
  SectionTitle,
  Title,
} from './styles';

export const HotSection = () => {
  const { data } = useHomeHot();

  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dx: number) =>
    scrollerRef.current?.scrollBy({ left: dx, behavior: 'smooth' });

  return (
    <Section>
      <Header>
        <SectionTitle>Hot</SectionTitle>

        <Controls>
          <ArrowButton
            onClick={() => scrollBy(-480)}
            aria-label="Scroll left"
          >
            ‹
          </ArrowButton>

          <ArrowButton
            onClick={() => scrollBy(480)}
            aria-label="Scroll right"
          >
            ›
          </ArrowButton>
        </Controls>
      </Header>

      <CarouselWrap>
        <EdgeFadeLeft aria-hidden />

        <Carousel ref={scrollerRef}>
          {data.map((novel) => {
            if (!novel.slug) return null;

            return (
              <Link
                to="/novel/$novel"
                params={{ novel: novel.slug }}
                key={novel.slug}
              >
                <Card title={novel.title}>
                  <CoverWrapper>
                    <Cover
                      src={novel.coverAbsoluteUrl}
                      alt={novel.title}
                      loading="lazy"
                    />

                    {novel.hasLabel && <Pill aria-label="Hot">HOT</Pill>}
                  </CoverWrapper>

                  <Title>{novel.title}</Title>
                </Card>
              </Link>
            );
          })}
        </Carousel>

        <EdgeFadeRight aria-hidden />
      </CarouselWrap>
    </Section>
  );
};
