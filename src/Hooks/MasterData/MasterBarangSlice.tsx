import { useState, useEffect } from 'react';
import usePagination from '@/Hooks/usePagination';
import { PaginationRequest } from '@/Types/TableTypes';
import MasterService from '@/Services/Api/MasterData/MasterService';
import { MASTER_DATA_BARANG_DUMMY } from '@/Constant/MasterData/MASTER_BARANG_DUMMY';
import { masterProdukType } from '@/Types/MasterData/MasterBarang.Type';

export default function useFetchMasterBarang() {
  const [dataMasterBarang, setDataMasterBarang] = useState<masterProdukType[]>(MASTER_DATA_BARANG_DUMMY);

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
        const response = await MasterService.dataMasterBarang(queryParams);
        setDataMasterBarang(response.data.data);
        setPagination(JSON.parse(response.headers['x-pagination']));
      } catch {
        /* empty */
      }
    };

    getData(queryParams);
  }, [queryParams]);

  return {
    dataMasterBarang,
    pagination,
    queryParams,
    searchHandler,
    pageChangeHandler,
    limitChangeHandler,
    setQueryParams
  };
}