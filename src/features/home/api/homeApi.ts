import { z } from 'zod';

import { logZodError } from 'utils/logZodError';

import type { AxiosResponse } from 'axios';
import { api } from 'lib/api';

const hot = z.object({
  title: z.string(),
  absoluteUrl: z.string().url().optional(),
  path: z.string().optional(),
  slug: z.string().optional(),
  coverAbsoluteUrl: z.string().url().optional(),
  hasLabel: z.boolean().optional(),
  url: z.string().url().optional(),
});

const latest = z.object({
  title: z.string(),
  absoluteUrl: z.string().url(),
  path: z.string(),
  slug: z.string(),
  isNew: z.boolean(),
  genres: z.array(z.string()),
  latestChapter: z.object({
    title: z.string(),
    absoluteUrl: z.string().url(),
    path: z.string(),
    chapterSlug: z.string(),
  }),
  updatedTime: z.string(),
});

const completed = z.object({
  title: z.string(),
  absoluteUrl: z.string().url(),
  path: z.string(),
  slug: z.string(),
  coverAbsoluteUrl: z.string().url(),
  chapterInfo: z.string(),
});

const genres = z.object({
  text: z.string(),
  absoluteUrl: z.string().url(),
  path: z.string(),
});

const sorts = z.object({
  text: z.string(),
  absoluteUrl: z.string().url(),
  path: z.string(),
});

export const HomePayload = z.object({
  hot: z.array(hot),
  latest: z.array(latest),
  completed: z.array(completed),
  genres: z.array(genres),
  sorts: z.array(sorts),
});

export type THomePayload = z.infer<typeof HomePayload>;

export const HOME_API = '/api/novlove';

export const getHome = async (): Promise<THomePayload> => {
  try {
    const response: AxiosResponse<unknown, THomePayload> =
      await api.get(HOME_API);

    const result = HomePayload.safeParse(response.data);

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

export type TGetHome = typeof getHome;
