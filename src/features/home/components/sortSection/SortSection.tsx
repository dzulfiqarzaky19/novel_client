import { Link } from '@tanstack/react-router';

import { useHomeSorts } from 'features/home/hooks/useHome';

import { List, Row, Section, SectionHeader, Title } from './styles';

export const SortSection = () => {
  const { data } = useHomeSorts();

  return (
    <Section>
      <SectionHeader>Sort</SectionHeader>

      <List>
        {data
          .filter((i) => i.text)
          .map((n) => (
            <Link
              key={n.absoluteUrl}
              to="/$list/$listType"
              params={{
                list: n.path.split('/')[1],
                listType: n.path.split('/')[2],
              }}
            >
              <Row>
                <Title>{n.text}</Title>
              </Row>
            </Link>
          ))}
      </List>
    </Section>
  );
};
