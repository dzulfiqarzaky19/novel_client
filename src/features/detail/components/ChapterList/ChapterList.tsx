import { Link } from '@tanstack/react-router';
import type { TDetailPayload } from 'features/detail/api/detailApi';
import { Controls, Header, Row, ScrollArea, Title, Wrapper } from './styles';

interface IChapterListProps {
  chapters: TDetailPayload['chapters'];
}

export const ChapterList = ({ chapters }: IChapterListProps) => {
  return (
    <Wrapper>
      <Header>
        <Title>Chapters</Title>
        <Controls>
          {/* Placeholder sort icons */}
          <span style={{ cursor: 'pointer', color: '#9ca3af' }}>↑</span>
          <span style={{ cursor: 'pointer', color: '#9ca3af' }}>↓</span>
        </Controls>
      </Header>
      <ScrollArea>
        {chapters.map((chapter) => (
          <Link
            key={chapter.chapterSlug}
            to="/novel/$novel/$chapter"
            params={{ novel: chapter.slug, chapter: chapter.chapterSlug }}
            style={{ textDecoration: 'none' }}
          >
            <Row>
              <span>{chapter.title}</span>
              {/* <span className="time">2y ago</span> */}
              {/* Timestamp not in API yet */}
            </Row>
          </Link>
        ))}
      </ScrollArea>
    </Wrapper>
  );
};
