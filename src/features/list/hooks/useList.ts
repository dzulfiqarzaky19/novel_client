import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';

import { getList } from '../api/listApi';

export const listQuery = (slug: string) =>
  queryOptions({
    queryKey: ['list', slug] as const,
    queryFn: () => getList({ slug }),
    staleTime: 60000,
  });

export const useList = (slug: string) => useSuspenseQuery(listQuery(slug));
