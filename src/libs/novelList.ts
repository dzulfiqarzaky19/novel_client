import z from 'zod';

import { logZodError } from 'utils/logZodError';

import { api } from './api';

import type { AxiosResponse } from 'axios';

export const ListPayload = z.object({
  list: z.array(
    z.object({
      title: z.string(),
      author: z.string(),
      absoluteUrl: z.string().url(),
      path: z.string(),
      slug: z.string(),
      coverAbsoluteUrl: z.string().url(),
      latestChapter: z.object({
        title: z.string(),
        absoluteUrl: z.string().url(),
        path: z.string(),
        chapterSlug: z.string(),
      }),
    }),
  ),
});

export type TListPayload = z.infer<typeof ListPayload>;

interface IGetList {
  slug: string;
}

export const getList = async ({ slug }: IGetList): Promise<TListPayload> => {
  try {
    const response: AxiosResponse<unknown, TListPayload> = await api.get(
      '/api/novlove/' + slug,
    );

    const result = ListPayload.safeParse(response.data);

    if (!result.success) {
      logZodError(result.error.issues);

      throw new Error(
        `Invalid API Response: ${result.error.issues[0].path.join('.')} - ${
          result.error.issues[0].message
        }`,
      );
    }

    return result.data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error('Unknown error occurred');
  }
};

export type TGetList = typeof getList;
