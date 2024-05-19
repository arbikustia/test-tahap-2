import React, { useEffect } from 'react';
import { PaginatorApiProps } from '@/Types/TableTypes';
import { displayPaginationApiCreator } from '@/Lib/Utils/TableUtils';
import { Select } from 'antd';

const PaginatorApi = ({ totalPage, page, limit, setLimit, setPage }: PaginatorApiProps) => {
  const limitList = [3, 5, 10, 20, 30, 40, 50];

  const displayPagination = displayPaginationApiCreator(totalPage, page);

  const prev = () => {
    if (page == 1) {
      setPage(page - 1);
    }
  };

  const next = () => {
    if (page == totalPage) {
      setPage(page + 1);
    }
  };

  const changePage = (targetPage: number) => {
    if (totalPage < targetPage) {
      setPage(totalPage);
    } else {
      setPage(targetPage);
    }
  };

  useEffect(() => {
    if (totalPage < page) {
      setPage(totalPage);
    }
  }, [limit, page]);

  return (
    <div className="w-full mt-4 flex justify-between items-center">
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-2">
          <label htmlFor="paginator">Shows </label>
          <Select
            id="paginator"
            size="large"
            onChange={(val) => {
              setLimit(Number(val));
            }}
            value={limit}>
            {limitList.map((item, index) => (
              <Select.Option key={`optionPaginator-${index}`} value={item} className="bg-dark p-2">
                {item}
              </Select.Option>
            ))}
          </Select>
          <div>entries</div>
        </div>
        <p className="">Showing 1 to 83 of 83 entries</p>
      </div>
      <div className="flex items-center gap-3 min-w-fit">
        <span
          className="cursor-pointer bg-white-100 w-8 flex justify-center h-8 items-center text-gray-600 hover:font-extrabold transition-all duration-150"
          onClick={prev}>
          {'<'}
        </span>

        <div className="flex items-center min-w-fit">
          {displayPagination.map((item, index) => (
            <span
              key={`paginator-number-${index}`}
              className={`
                    w-8 h-8 px-2 flex justify-center items-center cursor-pointer hover:bg-blue-400 hover:text-white-400 transition-all duration-150
                    ${page === item.value && 'font-bold'}
                  `}
              onClick={() => changePage(item.value)}>
              {item.text}
            </span>
          ))}
        </div>

        <span
          className="cursor-pointer bg-white-100 w-8 flex justify-center h-8 items-center text-gray-600 hover:font-extrabold transition-all duration-150"
          onClick={next}>
          {'>'}
        </span>
      </div>
    </div>
  );
};

export default PaginatorApi;
