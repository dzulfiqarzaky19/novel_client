import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';

import { getChapter } from 'libs/novelChapter';

export const chapterQuery = (slug: string) =>
  queryOptions({
    queryKey: ['chapter', slug] as const,
    queryFn: () => getChapter({ slug }),
    staleTime: 60000,
  });

export const useNovelChapter = (slug: string) =>
  useSuspenseQuery(chapterQuery(slug));
