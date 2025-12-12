import { Link } from '@tanstack/react-router';

import { useHomeSorts } from 'features/home/hooks/useHome';

import { Icon, List, Row, Section, SectionHeader, Title } from './styles';

const getIcon = (text: string) => {
  const t = text.toLowerCase();
  if (t.includes('latest')) return '🆕';
  if (t.includes('hot')) return '🔥';
  if (t.includes('completed')) return '✅';
  if (t.includes('popular')) return '📈';
  return '🔗';
};

export const SortSection = () => {
  const { data } = useHomeSorts();

  return (
    <Section>
      <SectionHeader>Discover</SectionHeader>

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
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Row>
                <Icon>{getIcon(n.text)}</Icon>
                <Title>{n.text}</Title>
              </Row>
            </Link>
          ))}
      </List>
    </Section>
  );
};
