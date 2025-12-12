import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';

import { getDetail } from '../api/detailApi';

export const detailQuery = (slug: string) =>
  queryOptions({
    queryKey: ['detail', slug] as const,
    queryFn: () => getDetail({ slug }),
    staleTime: 60000,
  });

export const useNovelDetail = (slug: string) =>
  useSuspenseQuery(detailQuery(slug));
