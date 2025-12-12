import { Link } from '@tanstack/react-router';
import type { TListPayload } from 'features/list/api/listApi';
import {
  Author,
  Card,
  ChapterLink,
  Content,
  CoverWrapper,
  MainInfo,
  RightInfo,
  Tag,
  Tags,
  Title,
  UpdateLabel,
} from './styles';

interface INovelListItemProps {
  novel: TListPayload['list'][0];
}

export const NovelListItem = ({ novel }: INovelListItemProps) => {
  if (!novel.title) return null;

  return (
    <Card>
      <Link
        to="/novel/$novel"
        params={{ novel: novel.slug }}
        style={{ display: 'block' }}
      >
        <CoverWrapper>
          <img
            src={novel.coverAbsoluteUrl}
            alt={novel.title}
          />
        </CoverWrapper>
      </Link>

      <Content>
        <MainInfo>
          <Link
            to="/novel/$novel"
            params={{ novel: novel.slug }}
            style={{ textDecoration: 'none' }}
          >
            <Title>{novel.title}</Title>
          </Link>

          <Author>
            {/* Simple user icon SVG */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle
                cx="12"
                cy="7"
                r="4"
              />
            </svg>
            {novel.author}
          </Author>

          <Tags>
            {/* Mock tags since API doesn't provide them yet */}
            <Tag className="primary">Action</Tag>
            <Tag className="secondary">Fantasy</Tag>
          </Tags>
        </MainInfo>
      </Content>

      <RightInfo>
        <UpdateLabel>Latest Update</UpdateLabel>
        <Link
          to="/novel/$novel/$chapter"
          params={{
            novel: novel.latestChapter.path.split('/')[2],
            chapter: novel.latestChapter.chapterSlug,
          }}
          style={{ textDecoration: 'none' }}
        >
          <ChapterLink>{novel.latestChapter.title}</ChapterLink>
        </Link>
      </RightInfo>
    </Card>
  );
};
