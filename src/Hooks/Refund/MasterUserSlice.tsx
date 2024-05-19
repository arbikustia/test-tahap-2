import { useState, useEffect } from 'react';
import usePagination from '@/Hooks/usePagination';
import { PaginationRequest } from '@/Types/TableTypes';
import InventoryDashboardService from '@/Services/Api/Inventory/DashboardService';
import { DATA_REFUND_MASTER_USER } from '@/Constant/Refund/REFUND_DUMMY';
import { dataMasterUserType } from '@/Types/Refund/Refund.Types';

export default function useFetchMasterUser() {
  const [dataMasterUser, setDataMasterUser] = useState<dataMasterUserType[]>(DATA_REFUND_MASTER_USER);

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
        const response = await InventoryDashboardService.dataBarangKeluar(queryParams);
        setDataMasterUser(response.data.data);
        setPagination(JSON.parse(response.headers['x-pagination']));
      } catch {
        /* empty */
      }
    };

    getData(queryParams);
  }, [queryParams]);

  return {
    dataMasterUser,
    pagination,
    queryParams,
    searchHandler,
    pageChangeHandler,
    limitChangeHandler,
    setQueryParams
  };
}