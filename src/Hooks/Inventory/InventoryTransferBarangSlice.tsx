import { useState, useEffect } from 'react';
import usePagination from '@/Hooks/usePagination';
import { PaginationRequest } from '@/Types/TableTypes';
import InventoryService from '@/Services/Api/Inventory';
import { inventoryBarangKeluarType } from '@/Types/Inventory';

export default function useFetchInventoryBarangKeluar() {
  const [dataInventoryBarangKelaur, setDataInventoryBarangKeluar] = useState<inventoryBarangKeluarType[]>([]);

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
        const response = await InventoryService.dataBarangKeluar(queryParams);
        setDataInventoryBarangKeluar(response.data.data);
        setPagination(JSON.parse(response.headers['x-pagination']));
      } catch {
        /* empty */
      }
    };

    getData(queryParams);
  }, [queryParams]);

  return {
    dataInventoryBarangKelaur,
    pagination,
    queryParams,
    searchHandler,
    pageChangeHandler,
    limitChangeHandler,
    setQueryParams
  };
}