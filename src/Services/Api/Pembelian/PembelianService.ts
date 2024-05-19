import { baseUrl } from '@/Services/BaseUrl/index';
import { PaginationRequest } from '@/Types/TableTypes';
import { dataCreateTableTransaksiPembelianType } from '@/Types/Pembelian/Pembelian.Types';

const dataTransaksiPembelian = async (queryParams?: PaginationRequest, token?: string) => {
  return baseUrl.get(`/api/pembelian/transaksi-pembelian`, {
    params: queryParams,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
const dataDetailTransaksiPembelian = async (token?: string) => {
  return baseUrl.get(`/api/pembelian/transaksi-pembelian/id`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const dataLokasi = async (token?: string) => {
  return baseUrl.get(`/api/lokasi`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
const dataListProduk = async (token?: string) => {
  return baseUrl.get(`/api/produk-list`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const postTransaksiPembelian = async (body?: Partial<dataCreateTableTransaksiPembelianType>, token?: string) => {
  return baseUrl.post(`/api/pembelian/transaksi-pembelian`, body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const DeleteTransaksiPembelian = async (id: string, token?: string) => {
  return baseUrl.delete(`/api/pembelian/transaksi-pembelian/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const PutTransaksiPembelian = async (id:string, body: Partial<dataCreateTableTransaksiPembelianType>, token?: string) => {
  return baseUrl.put(
    `/api/pembelian/transaksi-pembelian/${id}`,
    {body},
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

const PutKonfirmasiTransaksiPembelian = async (id:string, konfirmasi: string, token?: string) => {
  return baseUrl.put(
    `/api/pembelian/konfirmasi/${id}`,
    {konfirmasi},
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

const TransaksiPembelianService = {
    dataTransaksiPembelian,
    postTransaksiPembelian,
    DeleteTransaksiPembelian,
    PutTransaksiPembelian,
    PutKonfirmasiTransaksiPembelian,
    dataLokasi,
    dataDetailTransaksiPembelian,
    dataListProduk
};

export default TransaksiPembelianService;
