import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';

import { getHome } from 'libs/novels';

export const homeQuery = queryOptions({
  queryKey: ['home'] as const,
  queryFn: getHome,
  staleTime: 60000,
});

export const useHome = () => useSuspenseQuery(homeQuery);

export const useHomeCompleted = () =>
  useSuspenseQuery({ ...homeQuery, select: (d) => d.completed });

export const useHomeHot = () =>
  useSuspenseQuery({ ...homeQuery, select: (d) => d.hot });

export const useHomeLatest = () =>
  useSuspenseQuery({ ...homeQuery, select: (d) => d.latest });

export const useHomeGenres = () =>
  useSuspenseQuery({ ...homeQuery, select: (d) => d.genres });

export const useHomeSorts = () =>
  useSuspenseQuery({ ...homeQuery, select: (d) => d.sorts });
