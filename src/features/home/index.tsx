import { CompletedSection } from 'features/home/components/completedSection/CompletedSection';
import { GenreSection } from 'features/home/components/genreSection/GenreSection';
import { HotSection } from 'features/home/components/hotSection/HotSection';
import { LatestSection } from 'features/home/components/latestSection/LatestSection';
import { SortSection } from 'features/home/components/sortSection/SortSection';

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
