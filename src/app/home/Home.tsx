import { CompletedSection } from 'features/home/completedSection/CompletedSection';
import { GenreSection } from 'features/home/genreSection/GenreSection';
import { HotSection } from 'features/home/hotSection/HotSection';
import { LatestSection } from 'features/home/latestSection/LatestSection';
import { SortSection } from 'features/home/sortSection/SortSection';

import { ContentGrid, Page, Sidebar } from './styles';

export const Home = () => {
  return (
    <Page>
      <CompletedSection />

      <ContentGrid>
        <LatestSection />

        <Sidebar>
          <GenreSection />

          <SortSection />
        </Sidebar>
      </ContentGrid>

      <HotSection />
    </Page>
  );
};
