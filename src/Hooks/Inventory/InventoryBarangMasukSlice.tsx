import { useState, useEffect } from 'react';
import usePagination from '@/Hooks/usePagination';
import { PaginationRequest } from '@/Types/TableTypes';
import InventoryService from '@/Services/Api/Inventory';
import { inventoryBarangMasukType } from '@/Types/Inventory';

export default function useFetchInventoryBarangMasuk() {
  const [dataInventoryBarangMasuk, setDataInventoryBarangMasuk] = useState<inventoryBarangMasukType[]>([]);

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
        const response = await InventoryService.dataBarangMasuk(queryParams);
        setDataInventoryBarangMasuk(response.data.data);
        setPagination(JSON.parse(response.headers['x-pagination']));
      } catch {
        /* empty */
      }
    };

    getData(queryParams);
  }, [queryParams]);

  return {
    dataInventoryBarangMasuk,
    pagination,
    queryParams,
    searchHandler,
    pageChangeHandler,
    limitChangeHandler,
    setQueryParams
  };
}