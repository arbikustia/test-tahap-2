import { useState, useEffect } from 'react';
import usePagination from '@/Hooks/usePagination';
import { PaginationRequest } from '@/Types/TableTypes';
import InventoryDashboardService from '@/Services/Api/Inventory/DashboardService';
import { DATA_BARANG_KELUAR } from '@/Constant/Inventory/INVENTORY_DUMMY';
import { barangKeluarType } from '@/Types/Inventory/Dashboard.Types';

export default function useFetchBarangKeluar() {
  const [dataBarangKeluar, setDataBarangKeluar] = useState<barangKeluarType[]>(DATA_BARANG_KELUAR);

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
        setDataBarangKeluar(response.data.data);
        setPagination(JSON.parse(response.headers['x-pagination']));
      } catch {
        /* empty */
      }
    };

    getData(queryParams);
  }, [queryParams]);

  return {
    dataBarangKeluar,
    pagination,
    queryParams,
    searchHandler,
    pageChangeHandler,
    limitChangeHandler,
    setQueryParams
  };
}