import { useHomeSorts } from 'hooks/useHome';

import { Link, List, Row, Section, SectionHeader, Title } from './styles';

export const SortSection = () => {
  const { data } = useHomeSorts();

  return (
    <Section>
      <SectionHeader>Sort</SectionHeader>

      <List>
        {data
          .filter((i) => i.text)
          .map((n) => (
            <Row key={n.absoluteUrl}>
              <Link href={n.absoluteUrl}>
                <Title>{n.text}</Title>
              </Link>
            </Row>
          ))}
      </List>
    </Section>
  );
};
