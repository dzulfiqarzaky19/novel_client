import { useParams } from '@tanstack/react-router';
import styled from '@emotion/styled';

import { useNovelDetail } from './hooks/useDetail';

import { NovelInfo } from './components/NovelInfo/NovelInfo';
import { NovelDescription } from './components/NovelDescription/NovelDescription';
import { RelatedNovels } from './components/RelatedNovels/RelatedNovels';
import { ChapterList } from './components/ChapterList/ChapterList';

const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 16px;
  min-height: 100vh;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  align-items: start;

  @media (min-width: 900px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const Detail = () => {
  const { novel } = useParams({ from: '/novel/$novel/' });
  const { data } = useNovelDetail(novel);

  if (!data) return null; // Or loader

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
