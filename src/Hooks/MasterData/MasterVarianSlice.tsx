import { useState, useEffect } from 'react';
import usePagination from '@/Hooks/usePagination';
import { PaginationRequest } from '@/Types/TableTypes';
import MasterService from '@/Services/Api/MasterData/MasterService';
import { masterVarianType } from '@/Types/MasterData';

export default function useFetchMasterVarian() {
  const [dataMasterVarian, setDataMasterVarian] = useState<masterVarianType[]>([]);

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
        const response = await MasterService.dataMasterVarian(queryParams);
        setDataMasterVarian(response.data.data);
        setPagination(JSON.parse(response.headers['x-pagination']));
      } catch {
        /* empty */
      }
    };

    getData(queryParams);
  }, [queryParams]);

  return {
    dataMasterVarian,
    pagination,
    queryParams,
    searchHandler,
    pageChangeHandler,
    limitChangeHandler,
    setQueryParams
  };
}