import { Link, useParams } from '@tanstack/react-router';

import { formatDescriptionToParagraphs } from 'utils/formatDescription';

import { useNovelDetail } from './hooks/useDetail';
import {
    Page,
    Container,
    Header,
    CoverWrap,
    Info,
    Title,
    RatingRow,
    Pill,
    Meta,
    ChipRow,
    Chip,
    CTA,
    KVs,
    Layout,
    SectionCard,
    CardGrid,
    NovelCard,
    ChapterList,
} from './styles';

export const Detail = () => {
    const { novel } = useParams({ from: '/novel/$novel/' });
    const { data } = useNovelDetail(novel);

    const formattedDescription = Array.isArray(data.description)
        ? formatDescriptionToParagraphs(data.description.join('\n\n'))
        : formatDescriptionToParagraphs(data.description);

    return (
        <Page>
            <Container>
                <Header>
                    <CoverWrap>
                        <img
                            src={data.cover[0].absoluteUrl}
                            alt={data.detail.title}
                        />
                    </CoverWrap>

                    <Info>
                        <Title>{data.detail.title}</Title>

                        <RatingRow>
                            <Pill>
                                <b>{data.detail.rating.value}</b>

                                <small>/ 10 score</small>
                            </Pill>

                            <Pill>
                                <b>
                                    {data.detail.rating.count.toLocaleString?.() ??
                                        data.detail.rating.count}
                                </b>

                                <small>ratings</small>
                            </Pill>
                        </RatingRow>

                        <Meta>
                            {data.detail.author.name && (
                                <div className="row">
                                    <label>Author</label>

                                    <span>{data.detail.author.name}</span>
                                </div>
                            )}

                            {data.detail.genres.length > 0 && (
                                <div className="row">
                                    <label>Genres</label>

                                    <ChipRow>
                                        {data.detail.genres.map((genre) => (
                                            <Link
                                                key={genre.slug}
                                                to={'/$list/$listType'}
                                                params={{
                                                    list: genre.path.split('/')[1],
                                                    listType: genre.slug,
                                                }}
                                            >
                                                <Chip>{genre.name}</Chip>
                                            </Link>
                                        ))}
                                    </ChipRow>
                                </div>
                            )}

                            {data.detail.status && (
                                <div className="row">
                                    <label>Status</label>

                                    <Link
                                        to={'/$list/$listType'}
                                        params={{
                                            list: data.detail.status.path.split('/')[1],
                                            listType: data.detail.status.slug,
                                        }}
                                    >
                                        <Chip>{data.detail.status.text}</Chip>
                                    </Link>
                                </div>
                            )}

                            {data.detail.publishers && (
                                <div className="row">
                                    <label>Publisher</label>

                                    <span>{data.detail.publishers}</span>
                                </div>
                            )}

                            {data.detail.year.text && (
                                <div className="row">
                                    <label>Year</label>

                                    <Link
                                        to={'/$list/$listType'}
                                        params={{
                                            list: data.detail.year.path.split('/')[1],
                                            listType: data.detail.year.slug,
                                        }}
                                    >
                                        <Chip>{data.detail.year.text}</Chip>
                                    </Link>
                                </div>
                            )}
                        </Meta>

                        <Link
                            to={'/novel/$novel/$chapter'}
                            params={{
                                novel: data.latest_chapter[0].slug,
                                chapter: data.latest_chapter[0].chapterSlug,
                            }}
                        >
                            <CTA>READ NOW</CTA>
                        </Link>

                        <div style={{ marginTop: 10 }}>
                            <KVs>
                                <span>TAG:</span>

                                <ChipRow>
                                    {data.detail.tags.slice(0, 6).map((tag) => (
                                        <Chip key={tag.slug}>
                                            <Link
                                                to={'/$list/$listType'}
                                                params={{
                                                    list: tag.path.split('/')[1],
                                                    listType: tag.slug,
                                                }}
                                            >
                                                {tag.name}
                                            </Link>
                                        </Chip>
                                    ))}
                                </ChipRow>
                            </KVs>
                        </div>
                    </Info>
                </Header>

                <Layout>
                    <div>
                        <SectionCard aria-labelledby="description-heading">
                            <h2 id="description-heading">Description</h2>

                            <p>
                                {formattedDescription.map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </p>
                        </SectionCard>

                        {data.author_novels.length > 0 && (
                            <SectionCard aria-labelledby="author-other-heading">
                                <h2 id="author-other-heading">Author’s other novel</h2>

                                <CardGrid>
                                    {data.author_novels.map((nov) => (
                                        <Link
                                            key={nov.slug}
                                            to={'/novel/$novel'}
                                            params={{ novel: nov.slug }}
                                        >
                                            <NovelCard>
                                                <img
                                                    src={nov.cover.absoluteUrl}
                                                    alt={nov.title}
                                                />

                                                <div className="body">
                                                    <h4>{nov.title}</h4>

                                                    <div className="sub">
                                                        <span>{nov.chapter.status}</span>

                                                        <span>•</span>

                                                        <span>{nov.chapter.chapter}</span>
                                                    </div>
                                                </div>
                                            </NovelCard>
                                        </Link>
                                    ))}
                                </CardGrid>
                            </SectionCard>
                        )}
                    </div>

                    <SectionCard aria-labelledby="chapters-heading">
                        <h2 id="chapters-heading">Chapters</h2>

                        <ChapterList>
                            {data.chapters.map((chapter) => (
                                <Link
                                    key={chapter.chapterSlug}
                                    to={'/novel/$novel/$chapter'}
                                    params={{ novel: chapter.slug, chapter: chapter.chapterSlug }}
                                >
                                    {chapter.title}
                                </Link>
                            ))}
                        </ChapterList>
                    </SectionCard>
                </Layout>
            </Container>
        </Page>
    );
};
