import { Link } from '@tanstack/react-router';

import { useHomeLatest } from 'features/home/hooks/useHome';

import {
  Col,
  HeaderRow,
  IconPlaceholder,
  List,
  NewBadge,
  Row,
  Section,
  SectionHeader,
  Sub,
  Time,
  Title,
  ViewAll,
} from './styles';

export const LatestSection = () => {
  const { data } = useHomeLatest();

  return (
    <Section>
      <HeaderRow>
        <SectionHeader>Latest Updates</SectionHeader>
        <ViewAll>View All</ViewAll>
      </HeaderRow>

      <List role="list">
        {data
          .filter((i) => i.title)
          .map((n) => (
            <Link
              key={n.absoluteUrl}
              role="listitem"
              to="/novel/$novel"
              params={{ novel: n.slug }}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Row>
                <IconPlaceholder>📖</IconPlaceholder>

                <Col>
                  <Title title={n.title}>{n.title}</Title>

                  <Sub title={n.latestChapter.title}>
                    {n.latestChapter.title}
                    {n.isNew && <NewBadge>NEW</NewBadge>}
                  </Sub>
                </Col>

                <Time>{n.updatedTime}</Time>
              </Row>
            </Link>
          ))}
      </List>

      {/* Optional: Load More Button */}
    </Section>
  );
};
