import { useState, useEffect } from 'react';
import usePagination from '@/Hooks/usePagination';
import { PaginationRequest } from '@/Types/TableTypes';
import InventoryDashboardService from '@/Services/Api/Inventory/DashboardService';
import { DATA_BARANG_MASUK } from '@/Constant/Inventory/INVENTORY_DUMMY';
import { barangMasukType } from '@/Types/Inventory/Dashboard.Types';

export default function useFetchBarangMasuk() {
  const [dataBarangMasuk, setDataBarangMasuk] = useState<barangMasukType[]>(DATA_BARANG_MASUK);

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
        const response = await InventoryDashboardService.dataBarangMasuk(queryParams);
        setDataBarangMasuk(response.data.data);
        setPagination(JSON.parse(response.headers['x-pagination']));
      } catch {
        /* empty */
      }
    };

    getData(queryParams);
  }, [queryParams]);

  return {
    dataBarangMasuk,
    pagination,
    queryParams,
    searchHandler,
    pageChangeHandler,
    limitChangeHandler,
    setQueryParams
  };
}