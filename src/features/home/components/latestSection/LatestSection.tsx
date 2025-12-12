import { Link } from '@tanstack/react-router';

import { useHomeLatest } from 'features/home/hooks/useHome';

import {
  Col,
  List,
  New,
  Right,
  Row,
  Section,
  SectionHeader,
  Sub,
  Time,
  Title,
} from './styles';

export const LatestSection = () => {
  const { data } = useHomeLatest();

  return (
    <Section>
      <SectionHeader>Latest</SectionHeader>

      <List role="list">
        {data
          .filter((i) => i.title)
          .map((n) => (
            <Link
              key={n.absoluteUrl}
              role="listitem"
              to="/novel/$novel"
              params={{ novel: n.slug }}
            >
              <Row>
                <Col>
                  <Title title={n.title}>{n.title}</Title>

                  <Sub title={n.latestChapter.title}>
                    <Link
                      to="/novel/$novel/$chapter"
                      params={{
                        novel: n.slug,
                        chapter: n.latestChapter.chapterSlug,
                      }}
                    >
                      {n.latestChapter.title}
                    </Link>
                  </Sub>
                </Col>

                <Right>
                  {n.isNew && <New>NEW</New>}

                  <Time>{n.updatedTime}</Time>
                </Right>
              </Row>
            </Link>
          ))}
      </List>
    </Section>
  );
};
