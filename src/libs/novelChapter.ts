import z from 'zod';

import { logZodError } from 'utils/logZodError';

import { api } from './api';

import type { AxiosResponse } from 'axios';

export const ChapterPayload = z.object({
  chapter: z.object({
    title: z.string(),
    chapter_name: z.string(),
    prev_chapter: z.object({
      absoluteUrl: z.string(),
      path: z.string(),
      slug: z.string(),
    }),
    next_chapter: z.object({
      absoluteUrl: z.string(),
      path: z.string(),
      slug: z.string(),
    }),
    content: z.string(),
  }),
});

export type TChapterPayload = z.infer<typeof ChapterPayload>;

interface IGetChapter {
  slug: string;
}

export const getChapter = async ({
  slug,
}: IGetChapter): Promise<TChapterPayload> => {
  try {
    const response: AxiosResponse<unknown, TChapterPayload> = await api.get(
      '/api/novel/novlove/novel/' + slug,
    );

    const result = ChapterPayload.safeParse(response.data);

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

export type TGetChapter = typeof getChapter;
