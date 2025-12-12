import { Link } from '@tanstack/react-router';
import type { TDetailPayload } from 'features/detail/api/detailApi';
import {
  ActionRow,
  Cover,
  CoverCol,
  Header,
  InfoCol,
  InfoGrid,
  LibBtn,
  MetaRow,
  RatingBadge,
  ReadBtn,
  TagLabel,
  TagPill,
  TagsRow,
  Title,
  Wrapper,
} from './styles';

interface INovelInfoProps {
  data: TDetailPayload;
}

export const NovelInfo = ({ data }: INovelInfoProps) => {
  const detail = data.detail;
  const coverUrl = data.cover[0]?.absoluteUrl;
  const latestChapter = data.latest_chapter[0];

  return (
    <Wrapper>
      <CoverCol>
        <Cover
          src={coverUrl}
          alt={detail.title}
        />
      </CoverCol>

      <InfoCol>
        <Header>
          <Title>{detail.title}</Title>
          <MetaRow>
            <RatingBadge>★ {detail.rating.value}</RatingBadge>
            <span>{detail.rating.count.toLocaleString()} Ratings</span>
            <span>•</span>
            <span>{data.description.length * 150} Views</span>{' '}
            {/* Mock views */}
            <span>•</span>
            <span>{detail.year.text}</span>
          </MetaRow>
        </Header>

        <InfoGrid>
          <dt>Author</dt>
          <dd>{detail.author.name}</dd>
          <dt>Status</dt>
          <dd style={{ color: '#22c55e' }}>{detail.status.text}</dd>{' '}
          {/* Green for status */}
          <dt>Genres</dt>
          <dd>{detail.genres.map((g) => g.name).join(', ')}</dd>
          <dt>Chapters</dt>
          <dd>{data.chapters.length} Chapters</dd>
          <dt>Publisher</dt>
          <dd>{detail.publishers}</dd>
          <dt>Year</dt>
          <dd>{detail.year.text}</dd>
        </InfoGrid>

        <ActionRow>
          {latestChapter && (
            <Link
              to="/novel/$novel/$chapter"
              params={{
                novel: latestChapter.slug,
                chapter: latestChapter.chapterSlug,
              }}
              style={{ textDecoration: 'none' }}
            >
              <ReadBtn>📖 Read Now</ReadBtn>
            </Link>
          )}
          <LibBtn>+ Add to Library</LibBtn>
        </ActionRow>

        <TagsRow>
          <TagLabel>Tags:</TagLabel>
          {detail.tags.slice(0, 6).map((tag) => (
            <TagPill key={tag.slug}>{tag.name}</TagPill>
          ))}
        </TagsRow>
      </InfoCol>
    </Wrapper>
  );
};
