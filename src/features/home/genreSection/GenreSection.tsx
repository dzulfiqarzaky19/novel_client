import { useHomeGenres } from 'hooks/useHome';

import { Link, List, Row, Section, SectionHeader, Title } from './styles';

export const GenreSection = () => {
  const { data } = useHomeGenres();

  return (
    <Section>
      <SectionHeader>Genre</SectionHeader>

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
