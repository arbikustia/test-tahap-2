import { useState, useEffect } from 'react';
import usePagination from '@/Hooks/usePagination';
import { PaginationRequest } from '@/Types/TableTypes';
import { peringatanStokType } from '@/Types/Inventory';
import InventoryService from '@/Services/Api/Inventory';

export default function useFetchPeringatanStok() {
  const [dataPeringatanStok, setDataPeringatanStok] = useState<peringatanStokType[]>([]);

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
        const response = await InventoryService.dataPeringatanStok(queryParams);
        setDataPeringatanStok(response.data.data);
        setPagination(JSON.parse(response.headers['x-pagination']));
      } catch {
        /* empty */
      }
    };

    getData(queryParams);
  }, [queryParams]);

  return {
    dataPeringatanStok,
    pagination,
    queryParams,
    searchHandler,
    pageChangeHandler,
    limitChangeHandler,
    setQueryParams
  };
}