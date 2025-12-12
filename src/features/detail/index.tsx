import { useParams } from '@tanstack/react-router';
import styled from '@emotion/styled';

import { useNovelDetail } from './hooks/useDetail';
import { NovelInfo } from './components/NovelInfo/NovelInfo';
import { NovelDescription } from './components/NovelDescription/NovelDescription';
import { RelatedNovels } from './components/RelatedNovels/RelatedNovels';
import { ChapterList } from './components/ChapterList/ChapterList';

export const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing[6]} ${({ theme }) => theme.spacing[4]};
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.surface.background};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[6]};
  align-items: start;

  @media (min-width: 900px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const Detail = () => {
  const { novel } = useParams({ from: '/novel/$novel/' });
  const { data } = useNovelDetail(novel);

  if (!data) return null;

  return (
    <Page>
      <NovelInfo data={data} />

      <ContentGrid>
        <div>
          <NovelDescription description={data.description} />
          <RelatedNovels novels={data.author_novels} />
        </div>

        <div>
          <ChapterList chapters={data.chapters} />
        </div>
      </ContentGrid>
    </Page>
  );
};
