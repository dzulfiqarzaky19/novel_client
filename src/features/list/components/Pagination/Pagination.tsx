import { Btn, Wrapper } from './styles';

interface IPaginationProps {
  page: number;
  total?: number;
  onPageChange: (p: number) => void;
  pageList: number[];
  hasNext?: boolean;
}

export const Pagination = ({
  page,
  onPageChange,
  pageList,
  hasNext = true,
}: IPaginationProps) => {
  return (
    <Wrapper>
      <Btn
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page === 1}
      >
        ‹
      </Btn>

      {pageList.map((p) => (
        <Btn
          key={p}
          active={p === page}
          onClick={() => onPageChange(p)}
          disabled={p === page}
        >
          {p}
        </Btn>
      ))}

      <Btn
        onClick={() => onPageChange(page + 1)}
        disabled={!hasNext}
      >
        ›
      </Btn>
    </Wrapper>
  );
};
