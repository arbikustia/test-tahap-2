import { useState, useEffect } from 'react';
import usePagination from '@/Hooks/usePagination';
import { PaginationRequest } from '@/Types/TableTypes';
import MasterService from '@/Services/Api/MasterData/MasterService';
import { MASTER_DATA_MARKETPLACE_DUMMY } from '@/Constant/MasterData/MASTER_MARKETPLACE_DUMMY';
import { masterMarketPlaceType } from '@/Types/MasterData/MasterData.Type';

export default function useFetchMasterMarketPlace() {
  const [dataMasterMarketPlace, setDataMasterMarketPlace] = useState<masterMarketPlaceType[]>(MASTER_DATA_MARKETPLACE_DUMMY);

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
        const response = await MasterService.dataMasterLokasi(queryParams);
        setDataMasterMarketPlace(response.data.data);
        setPagination(JSON.parse(response.headers['x-pagination']));
      } catch {
        /* empty */
      }
    };

    getData(queryParams);
  }, [queryParams]);

  return {
    dataMasterMarketPlace,
    pagination,
    queryParams,
    searchHandler,
    pageChangeHandler,
    limitChangeHandler,
    setQueryParams
  };
}