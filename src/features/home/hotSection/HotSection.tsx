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
          {data.map((n) => (
            <Card
              key={n.slug ?? n.title}
              title={n.title}
            >
              <CoverWrapper>
                <Cover
                  src={n.coverAbsoluteUrl}
                  alt={n.title}
                  loading="lazy"
                />

                {n.hasLabel && <Pill aria-label="Hot">HOT</Pill>}
              </CoverWrapper>

              <Title>{n.title}</Title>
            </Card>
          ))}
        </Carousel>

        <EdgeFadeRight aria-hidden />
      </CarouselWrap>
    </Section>
  );
};
