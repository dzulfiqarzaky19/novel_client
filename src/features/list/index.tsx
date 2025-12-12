import { useParams } from '@tanstack/react-router';
import styled from '@emotion/styled';
import { useState } from 'react';

import { useList } from './hooks/useList';

import { ListHeader } from './components/ListHeader/ListHeader';
import { NovelListItem } from './components/NovelListItem/NovelListItem';
import { Pagination } from './components/Pagination/Pagination';

const Page = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px 16px;
  min-height: 100vh;
`;

const ListGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

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

  const title =
    (list.split('-')[2] ?? list) +
    ' by ' +
    (listType.split('-')[2] ?? listType).toLowerCase();

  return (
    <Page>
      <ListHeader title={title} />

      <ListGrid>
        {data.list.map((novel) => (
          <NovelListItem
            key={novel.slug}
            novel={novel}
          />
        ))}
      </ListGrid>

      <Pagination
        page={page}
        pageList={pageList}
        onPageChange={handlePage}
        hasNext={data.list.length >= 20}
      />
    </Page>
  );
};
