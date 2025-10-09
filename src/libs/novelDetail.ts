import z from 'zod';

import { logZodError } from 'utils/logZodError';

import { api } from './api';

import type { AxiosResponse } from 'axios';

export const DetailPayload = z.object({
  cover: z.array(
    z.object({
      absoluteUrl: z.string(),
      path: z.string(),
      slug: z.string(),
    }),
  ),
  detail: z.object({
    title: z.string(),
    rating: z.object({
      value: z.number(),
      count: z.number(),
    }),
    alternateNames: z.array(z.string()),
    author: z.object({
      name: z.string(),
      absoluteUrl: z.string(),
      path: z.string(),
      slug: z.string(),
    }),
    genres: z.array(
      z.object({
        name: z.string(),
        absoluteUrl: z.string(),
        path: z.string(),
        slug: z.string(),
      }),
    ),
    status: z.object({
      text: z.string(),
      absoluteUrl: z.string(),
      path: z.string(),
      slug: z.string(),
    }),
    publishers: z.string(),
    tags: z.array(
      z.object({
        name: z.string(),
        absoluteUrl: z.string(),
        path: z.string(),
        slug: z.string(),
      }),
    ),
    year: z.object({
      text: z.string(),
      absoluteUrl: z.string(),
      path: z.string(),
      slug: z.string(),
    }),
  }),
  latest_chapter: z.array(
    z.object({
      title: z.string(),
      absoluteUrl: z.string(),
      path: z.string(),
      slug: z.string(),
      chapterSlug: z.string(),
      released: z.string(),
    }),
  ),
  description: z.array(z.string()),
  chapters: z.array(
    z.object({
      title: z.string(),
      absoluteUrl: z.string(),
      path: z.string(),
      slug: z.string(),
      chapterSlug: z.string(),
    }),
  ),
  author_novels: z.array(
    z.object({
      title: z.string(),
      absoluteUrl: z.string(),
      path: z.string(),
      slug: z.string(),
      cover: z.object({
        absoluteUrl: z.string(),
        path: z.string(),
        slug: z.string(),
      }),
      chapter: z.object({
        status: z.string(),
        chapter: z.string(),
      }),
    }),
  ),
});

export type TDetailPayload = z.infer<typeof DetailPayload>;

interface IGetDetail {
  slug: string;
}

export const getDetail = async ({
  slug,
}: IGetDetail): Promise<TDetailPayload> => {
  try {
    const response: AxiosResponse<unknown, TDetailPayload> = await api.get(
      '/api/novel/novlove/novel/' + slug,
    );

    const result = DetailPayload.safeParse(response.data);

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

export type TGetDetail = typeof getDetail;
