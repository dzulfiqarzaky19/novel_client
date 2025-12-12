import { useParams } from '@tanstack/react-router';
import { useState } from 'react';

import { useList } from './hooks/useList';

import {
    Page,
    Header,
    ListWrap,
    Card,
    MainLink,
    Cover,
    Meta,
    Title,
    Author,
    RightCol,
    LatestLink,
    Pagination,
    PageBtn,
} from './styles';

export const List = () => {
    const { list, listType } = useParams({ from: '/$list/$listType' });

    const [page, setPage] = useState(1);
    const [pageList, setPageList] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

    const slug = `${list}/${listType}?page=${page}`;
    const { data } = useList(slug);

    const handlePage = (pageNumber: number) => {
        setPage(pageNumber);

        const difference = pageNumber - pageList[0];

        if (difference > 1) {
            const newPage = pageList.map((el) => el + difference - 1);

            setPageList(newPage);
        }

        if (difference < 1) {
            const balancer = pageNumber === 2 ? 1 : 2;
            const newPage = pageList.map((el) => el - (difference + balancer));

            if (pageList[0] <= 1) return;

            setPageList(newPage);
        }
    };

    return (
        <Page>
            <Header>
                {(list.split('-')[2] ?? list) +
                    ' by ' +
                    (listType.split('-')[2] ?? listType).toLowerCase()}
            </Header>

            <ListWrap>
                {data.list.map((novel) => {
                    const novelHref = {
                        to: '/novel/$novel' as const,
                        params: { novel: novel.slug },
                    };

                    const latestHref = {
                        to: '/novel/$novel/$chapter' as const,
                        params: {
                            novel: novel.latestChapter.path.split('/')[2],
                            chapter: novel.latestChapter.chapterSlug,
                        },
                    };

                    if (!novel.title) return null;

                    return (
                        <Card key={novel.slug}>
                            <MainLink {...novelHref}>
                                <Cover
                                    src={novel.coverAbsoluteUrl}
                                    alt={novel.title}
                                />

                                <Meta>
                                    <Title>{novel.title}</Title>

                                    <Author>{novel.author}</Author>
                                </Meta>
                            </MainLink>

                            <RightCol>
                                <LatestLink {...latestHref}>
                                    {novel.latestChapter.title}
                                </LatestLink>
                            </RightCol>
                        </Card>
                    );
                })}
            </ListWrap>

            <Pagination>
                {pageList.map((pageNumber) => {
                    const isActive = pageNumber === page;

                    const isDisabled =
                        pageNumber === page || (data.list.length < 20 && pageNumber > page);

                    return (
                        <PageBtn
                            key={pageNumber}
                            onClick={() => handlePage(pageNumber)}
                            disabled={isDisabled}
                            active={isActive}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            {pageNumber}
                        </PageBtn>
                    );
                })}
            </Pagination>
        </Page>
    );
};
