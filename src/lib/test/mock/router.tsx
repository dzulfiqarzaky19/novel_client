import type { ComponentProps, ReactNode } from 'react';

export const routerMock = async (importOriginal: <T>() => Promise<T>) => {
  const actual =
    await importOriginal<typeof import('@tanstack/react-router')>();

  const MockLink = ({
    children,
    to,
    ...props
  }: {
    children: ReactNode;
    to: string;
    props: ComponentProps<'a'>;
  }) => (
    <a
      href={to}
      {...props}
    >
      {children}
    </a>
  );

  return {
    ...actual,
    Link: MockLink,
    getRouteApi: () => ({
      Link: MockLink,
    }),
  };
};
