import { ArrowLeft } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import {
  HeaderWrapper,
  HeaderContent,
  BackButton,
  ChapterSelect,
  NextButton,
} from '../styles';

interface ReaderHeaderProps {
  novel: string;
  currentChapter: string;
  chapters?: Array<{ slug: string; title: string }>;
  nextChapter?: { slug: string; path: string } | null;
  onChapterChange?: (slug: string) => void;
}

export const ReaderHeader = ({
  novel,
  currentChapter,
  chapters = [],
  nextChapter,
  onChapterChange,
}: ReaderHeaderProps) => {
  const hasNext = nextChapter && nextChapter.slug !== 'null';

  return (
    <HeaderWrapper>
      <HeaderContent>
        <Link
          to="/novel/$novel"
          params={{ novel }}
        >
          <BackButton>
            <ArrowLeft />
            <span>Go back</span>
          </BackButton>
        </Link>

        <ChapterSelect
          value={currentChapter}
          onChange={(e) => onChapterChange?.(e.target.value)}
        >
          <option value={currentChapter}>Chapter {currentChapter}</option>
          {chapters.map((ch) => (
            <option
              key={ch.slug}
              value={ch.slug}
            >
              {ch.title || `Chapter ${ch.slug}`}
            </option>
          ))}
        </ChapterSelect>

        {hasNext ? (
          <Link
            to="/novel/$novel/$chapter"
            params={{
              novel: nextChapter.path.split('/')[2],
              chapter: nextChapter.slug,
            }}
          >
            <NextButton>Next ch</NextButton>
          </Link>
        ) : (
          <NextButton disabled>Next ch</NextButton>
        )}
      </HeaderContent>
    </HeaderWrapper>
  );
};
