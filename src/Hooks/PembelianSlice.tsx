import { useState, useEffect } from 'react';
import usePagination from '@/Hooks/usePagination';
import { PaginationRequest } from '@/Types/TableTypes';
import { DATA_TABLE_TRANSAKSI_PEMBELIAN } from '@/Constant/Pembelian/PEMBELIAN_DUMMY';
import { dataTableTransaksiPembelianType } from '@/Types/Pembelian/Pembelian.Types';
import TransaksiPembelianService from '@/Services/Api/Pembelian/PembelianService';

export default function useFetchTransaksiPembelian() {
  const [dataTransaksiPembelian, setDataTransaksiPembelian] = useState<dataTableTransaksiPembelianType[]>(DATA_TABLE_TRANSAKSI_PEMBELIAN);

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
        const response = await TransaksiPembelianService.dataTransaksiPembelian(queryParams);
        setDataTransaksiPembelian(response.data.data);
        setPagination(JSON.parse(response.headers['x-pagination']));
      } catch {
        /* empty */
      }
    };

    getData(queryParams);
  }, [queryParams]);

  return {
    dataTransaksiPembelian,
    pagination,
    queryParams,
    searchHandler,
    pageChangeHandler,
    limitChangeHandler,
    setQueryParams
  };
}