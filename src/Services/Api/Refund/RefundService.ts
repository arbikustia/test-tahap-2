import { baseUrl } from '@/Services/BaseUrl/index';
import { PaginationRequest } from '@/Types/TableTypes';
import { dataCreateTableTransaksiPembelianType } from '@/Types/Pembelian/Pembelian.Types';

const dataRefundDashboard = async (token?: string) => {
  return baseUrl.get(`/api/refund/dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const dataRefundKomplain = async (queryParams?: PaginationRequest, token?: string) => {
  return baseUrl.get(`/api/refund/komplain`, {
    params: queryParams,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const postRefundKomplain = async (
  body?: Partial<dataCreateTableTransaksiPembelianType>,
  token?: string
) => {
  return baseUrl.post(`/api/refund/komplain`, body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const RefundService = {
    dataRefundDashboard,
    dataRefundKomplain,
    postRefundKomplain
};

export default RefundService;
