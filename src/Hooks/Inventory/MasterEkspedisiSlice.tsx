import { useState, useEffect } from 'react';
import usePagination from '@/Hooks/usePagination';
import { PaginationRequest } from '@/Types/TableTypes';
import MasterService from '@/Services/Api/MasterData/MasterService';
import { MASTER_DATA_EKSPEDISI_DUMMY } from '@/Constant/MasterData/MASTER_DATA_EKSPEDISI';
import { masterEkspedisiType } from '@/Types/MasterData/MasterEkspedisi.Type';

export default function useFetchMasterEkspedisi() {
  const [dataMasterEkspedisi, setDataMasterEkspedisi] = useState<masterEkspedisiType[]>(MASTER_DATA_EKSPEDISI_DUMMY);

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
        setDataMasterEkspedisi(response.data.data);
        setPagination(JSON.parse(response.headers['x-pagination']));
      } catch {
        /* empty */
      }
    };

    getData(queryParams);
  }, [queryParams]);

  return {
    dataMasterEkspedisi,
    pagination,
    queryParams,
    searchHandler,
    pageChangeHandler,
    limitChangeHandler,
    setQueryParams
  };
}