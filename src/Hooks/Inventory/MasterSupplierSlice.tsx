import { useState, useEffect } from 'react';
import usePagination from '@/Hooks/usePagination';
import { PaginationRequest } from '@/Types/TableTypes';
import MasterService from '@/Services/Api/MasterData/MasterService';
import { masterSupplierType } from '@/Types/MasterData/MasterSupplier.Type';
import { MASTER_DATA_SUPPLIER_DUMMY } from '@/Constant/MasterData/MASTER_SUPPLIER_DUMMY';

export default function useFetchMasterSupplier() {
  const [dataMasterSupplier, setDataMasterSupplier] = useState<masterSupplierType[]>(MASTER_DATA_SUPPLIER_DUMMY);

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
        const response = await MasterService.dataMasterRak(queryParams);
        setDataMasterSupplier(response.data.data);
        setPagination(JSON.parse(response.headers['x-pagination']));
      } catch {
        /* empty */
      }
    };

    getData(queryParams);
  }, [queryParams]);

  return {
    dataMasterSupplier,
    pagination,
    queryParams,
    searchHandler,
    pageChangeHandler,
    limitChangeHandler,
    setQueryParams
  };
}