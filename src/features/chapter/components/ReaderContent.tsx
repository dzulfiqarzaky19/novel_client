import {
  ContentWrapper,
  Container,
  ChapterHeader,
  ChapterTitle,
  ChapterMeta,
  ContentArea,
} from '../styles';

interface ReaderContentProps {
  title: string;
  chapterNumber: string;
  readTime?: string;
  content: string[];
}

export const ReaderContent = ({
  title,
  chapterNumber,
  readTime,
  content,
}: ReaderContentProps) => {
  return (
    <ContentWrapper>
      <Container>
        <ChapterHeader>
          <ChapterTitle>{title}</ChapterTitle>
          <ChapterMeta>
            {chapterNumber} {readTime && `• ${readTime}`}
          </ChapterMeta>
        </ChapterHeader>

        <ContentArea>
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </ContentArea>
      </Container>
    </ContentWrapper>
  );
};
