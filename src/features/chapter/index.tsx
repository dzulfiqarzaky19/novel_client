import { useNavigate, useParams } from '@tanstack/react-router';
import { useNovelChapter } from './hooks/useChapter';
import { formatChapter } from '../../utils/formatChapter';
import { ReaderHeader, ReaderContent } from './components';
import { Page } from './styles';

export const Chapter = () => {
  const { novel, chapter } = useParams({ from: '/novel/$novel/$chapter' });
  const navigate = useNavigate();
  const slug = `${novel}/${chapter}`;
  const { data } = useNovelChapter(slug);

  if (!data) return null;

  const { next_chapter, title, content } = data.chapter;
  const formattedContent = formatChapter(content);

  const wordCount = content.split(/\s+/).length;
  const readTime = `${Math.ceil(wordCount / 200)} min read`;

  const handleChapterChange = (newChapter: string) => {
    navigate({
      to: '/novel/$novel/$chapter',
      params: { novel, chapter: newChapter },
    });
  };

  return (
    <Page>
      <ReaderHeader
        novel={novel}
        currentChapter={chapter}
        nextChapter={next_chapter}
        onChapterChange={handleChapterChange}
      />

      <ReaderContent
        title={title}
        chapterNumber={`Chapter ${chapter}`}
        readTime={readTime}
        content={formattedContent}
      />


    </Page>
  );
};
