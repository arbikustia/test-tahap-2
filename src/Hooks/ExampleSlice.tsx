import { useState, useEffect } from 'react';
import usePagination from '@/Hooks/usePagination';
import { PaginationRequest } from '@/Types/TableTypes';
import { GET_EXAMPLE_DUMMY } from '@/Constant/EXAMPLE_DUMMY';
import { getExample } from '@/Constant/EXAMPLE_DUMMY';
import exampleService from '@/Services/Api/Example';

export default function useFetchExample() {
  const [dataExample, setDataExample] = useState<getExample[]>(GET_EXAMPLE_DUMMY);

  const {
    pagination,
    queryParams,
    setPagination,
    searchHandler,
    limitChangeHandler,
    pageChangeHandler,
    setQueryParams
  } = usePagination();

  useEffect(() => {
    const getData = async (queryParams: PaginationRequest) => {
      try {
        const response = await exampleService.dataCompairActualAndOvertimeChart(queryParams);
        setDataExample(response.data.data);
        setPagination(JSON.parse(response.headers['x-pagination']));
      } catch {
        /* empty */
      }
    };

    getData(queryParams);
  }, [queryParams]);

  return {
    dataExample,
    pagination,
    queryParams,
    searchHandler,
    pageChangeHandler,
    limitChangeHandler,
    setQueryParams
  };
}