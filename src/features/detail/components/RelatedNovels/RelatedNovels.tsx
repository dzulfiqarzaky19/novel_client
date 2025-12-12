import { Link } from '@tanstack/react-router';
import type { TDetailPayload } from 'features/detail/api/detailApi';
import { Card, Cover, Grid, SectionTitle, Sub, Title, Wrapper } from './styles';

interface IRelatedNovelsProps {
  novels: TDetailPayload['author_novels'];
}

export const RelatedNovels = ({ novels }: IRelatedNovelsProps) => {
  if (!novels.length) return null;

  return (
    <Wrapper>
      <SectionTitle>You May Also Like</SectionTitle>
      <Grid>
        {novels.map((novel) => (
          <Link
            key={novel.slug}
            to="/novel/$novel"
            params={{ novel: novel.slug }}
            style={{ textDecoration: 'none' }}
          >
            <Card>
              <Cover
                src={novel.cover.absoluteUrl}
                alt={novel.title}
              />
              <Title>{novel.title}</Title>
              <Sub>{novel.chapter.status}</Sub>
            </Card>
          </Link>
        ))}
      </Grid>
    </Wrapper>
  );
};
