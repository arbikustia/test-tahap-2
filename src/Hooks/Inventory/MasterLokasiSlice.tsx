import { useState, useEffect } from 'react';
import usePagination from '@/Hooks/usePagination';
import { PaginationRequest } from '@/Types/TableTypes';
import { DATA_REFUND_MASTER_LOKASI } from '@/Constant/Inventory/INVENTORY_DUMMY';
import { masterLokasiType } from '@/Types/Inventory/Dashboard.Types';
import MasterService from '@/Services/Api/MasterData/MasterService';

export default function useFetchMasterLokasi() {
  const [dataMasterLokasi, setDataMasterLokasi] = useState<masterLokasiType[]>(DATA_REFUND_MASTER_LOKASI);

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
        setDataMasterLokasi(response.data.data);
        setPagination(JSON.parse(response.headers['x-pagination']));
      } catch {
        /* empty */
      }
    };

    getData(queryParams);
  }, [queryParams]);

  return {
    dataMasterLokasi,
    pagination,
    queryParams,
    searchHandler,
    pageChangeHandler,
    limitChangeHandler,
    setQueryParams
  };
}