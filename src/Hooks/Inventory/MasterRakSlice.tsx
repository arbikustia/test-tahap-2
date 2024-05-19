import { useState, useEffect } from 'react';
import usePagination from '@/Hooks/usePagination';
import { PaginationRequest } from '@/Types/TableTypes';
import MasterService from '@/Services/Api/MasterData/MasterService';
import { masterRakType } from '@/Types/MasterData/index';

export default function useFetchMasterRak() {
  const [dataMasterRak, setDataMasterRak] = useState<masterRakType[]>([]);

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
        const response = await MasterService.dataMasterRak(queryParams);
        setDataMasterRak(response.data.data);
        setPagination(JSON.parse(response.headers['x-pagination']));
      } catch {
        /* empty */
      }
    };

    getData(queryParams);
  }, [queryParams]);

  return {
    dataMasterRak,
    pagination,
    queryParams,
    searchHandler,
    pageChangeHandler,
    limitChangeHandler,
    setQueryParams
  };
}