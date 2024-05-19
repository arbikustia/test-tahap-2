import { useState, useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';
import { PaginationRequest } from '@/Types/TableTypes';

export default function usePagination() {
  //Pagination State for API required
  const [pagination, setPagination] = useState({
    PageNumber: 1,
    PageSize: 10,
    TotalCount: 100,
    TotalPages: 10
  });

  //Param State for API required
  const [queryParams, setQueryParams] = useState<PaginationRequest>({
    PageNumber: 1,
    PageSize: 10,
    SearchTerm: '',
    order_by: ''
  });

  // Handler when limit and page change
  const limitChangeHandler = (value: number) => {
    setQueryParams({
      ...queryParams,
      PageSize: value
    });
  };

  const pageChangeHandler = (value: number) => {
    setQueryParams({
      ...queryParams,
      PageNumber: value
    });
  };

  // Search Handler when search term change (local), required when table has search feature
  const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryParams({
      ...queryParams,
      SearchTerm: e.target.value
    });
  };

  const searchHandler = useMemo(() => {
    return debounce(searchChangeHandler, 300);
  }, []);

  useEffect(() => {
    return () => searchHandler.cancel();
  }, []);

  return {
    queryParams,
    pagination,
    setPagination,
    setQueryParams,
    searchHandler,
    limitChangeHandler,
    pageChangeHandler
  };
}
