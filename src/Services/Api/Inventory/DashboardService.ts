import { baseUrl } from '@/Services/BaseUrl/index';
import { PaginationRequest } from '@/Types/TableTypes';

const dataBarangMasuk = async (queryParams?: PaginationRequest, token?: string) => {
  return baseUrl.get(`/api/inventory/barang-masuk`, {
    params: queryParams,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
const dataBarangKeluar = async (queryParams?: PaginationRequest, token?: string) => {
  return baseUrl.get(`/api/inventory/barang-keluar`, {
    params: queryParams,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};


const InventoryDashboardService = {
    dataBarangMasuk,
    dataBarangKeluar
};

export default InventoryDashboardService;
