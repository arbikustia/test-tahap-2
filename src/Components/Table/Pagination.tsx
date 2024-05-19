import { useEffect, useMemo } from 'react';
import { Select } from 'antd';
import { PaginationProps } from '@/Types/Table.types';
import { displayPaginationCreator } from '@/Lib/Utils/Table.utils';
import { cn } from '@/Lib/Utils/Class.utils';

const limitList = [3, 5, 10, 20, 30, 40, 50];

const Paginator = ({ totalPage, page, limit, setLimit, setPage }: PaginationProps) => {
  const displayPagination = useMemo(
    () => displayPaginationCreator(totalPage, page),
    [page, totalPage]
  );

  const prev = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const next = () => {
    if (page !== totalPage) {
      setPage(page + 1);
    }
  };

  const changePage = (targetPage: number) => {
    if (totalPage < targetPage) {
      setPage(totalPage!);
    } else {
      setPage(targetPage);
    }
  };

  useEffect(() => {
    if (totalPage < page) {
      setPage(totalPage);
    }
  }, [limit, page, totalPage, setPage]);

  return (
    <div className="w-full mt-4 flex justify-between items-center">
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-2">
          <label className="text-grey-500 text-base dark:text-grey-100" htmlFor="paginator">
            Shows
          </label>
          <Select
            id="paginator"
            size="large"
            onChange={(val) => {
              setLimit(Number(val));
            }}
            value={limit}>
            {limitList.map((item, index) => (
              <Select.Option key={`optionPaginator-${index}`} value={item} className="p-2">
                {item}
              </Select.Option>
            ))}
          </Select>
          <p className="text-grey-500 text-base dark:text-grey-100">entries</p>
        </div>
        <p className="text-grey-500 text-base dark:text-grey-100">
          Showing <span className="text-grey-500 font-extrabold dark:text-grey-50">1</span> to{' '}
          <span className="text-grey-500 font-extrabold dark:text-grey-50">83</span> of{' '}
          <span className="text-grey-500 font-extrabold dark:text-grey-50">83</span> entries
        </p>
      </div>
      <div className="flex items-center min-w-fit border border-grey-300 dark:border-grey-400 rounded">
        <span
          className="cursor-pointer flex px-4 py-2 justify-center items-center text-grey-200 hover:font-extrabold rounded rounded-r-none border-r border-grey-400 dark:hover:bg-grey-600 hover:bg-white-500"
          onClick={prev}>
          {'<'}
        </span>

        <div className="flex items-center min-w-fit">
          {displayPagination.map((item, index) => (
            <span
              key={`paginator-number-${index}`}
              className={cn(
                `px-3 py-2 flex justify-center items-center cursor-pointer text-grey-300 hover:bg-white-500 dark:hover:bg-grey-600 border-r border-grey-400 last:border-r-0`,
                page === item.value && 'text-green-500'
              )}
              onClick={() => changePage(item.value)}>
              {item.text}
            </span>
          ))}
        </div>

        <span
          className="cursor-pointer flex px-4 py-2 justify-center items-center text-grey-200 hover:font-extrabold rounded border-l rounded-l-none border-grey-400 dark:hover:bg-grey-600 hover:bg-white-500"
          onClick={next}>
          {'>'}
        </span>
      </div>
    </div>
  );
};

export default Paginator;
