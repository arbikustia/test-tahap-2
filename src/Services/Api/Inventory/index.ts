import { baseUrl } from '@/Services/BaseUrl/index';
import { PaginationRequest } from '@/Types/TableTypes';

//* Peringatan Stok

const dataPeringatanStok = async (queryParams?: PaginationRequest, token?: string) => {
  return baseUrl.get(`/api/peringatan-stok/paged`, {
    params: queryParams,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const deletePeringatanStok = async (id: string, token?: string) => {
  return baseUrl.delete(`/api/peringatan-stok/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const postPeringatanStok = async (body?: any, token?: string) => {
  return baseUrl.post(`/api/peringatan-stok`, body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
const putPeringatanStok = async (id: string, body?: any, token?: string) => {
  return baseUrl.put(`/api/peringatan-stok/${id}`, body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
const dataPeringatanStokDownload = async (queryParams?: PaginationRequest, token?: string) => {
  return baseUrl.get(`/api/peringatan-stok/download`, {
    params: queryParams,
    headers: {
      Authorization: `Bearer ${token}`
    },
    responseType: 'blob'
  });
};
const dataPeringatanStokNotification = async (token?: string) => {
  return baseUrl.get(`/api/peringatan-stok/notification-stok`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};


//* Barang Masuk

const dataBarangMasuk = async (queryParams?: PaginationRequest, token?: string) => {
  return baseUrl.get(`/api/barang-masuk/paged`, {
    params: queryParams,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const deleteBarangMasuk = async (id: string, token?: string) => {
  return baseUrl.delete(`/api/barang-masuk/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const postBarangMasuk = async (body?: any, token?: string) => {
  return baseUrl.post(`/api/barang-masuk`, body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
const putBarangMasuk = async (id: string, body:any, token?: string) => {
  const data = {
    id: id,
    id_barang: body.id_barang,
    id_lokasi: body.id_lokasi,
    id_rak: body.id_rak,
    quantity: body.quantity
  };
  return baseUrl.put(`/api/barang-masuk/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
const dataBarangMasukDownload = async (queryParams?: PaginationRequest, token?: string) => {
  return baseUrl.get(`/api/barang-masuk/download`, {
    params: queryParams,
    headers: {
      Authorization: `Bearer ${token}`
    },
    responseType: 'blob'
  });
};

//* Barang Keluar

const dataBarangKeluar = async (queryParams?: PaginationRequest, token?: string) => {
  return baseUrl.get(`/api/barang-kelaur/paged`, {
    params: queryParams,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
const dataKonfirmasiBarangKeluar = async (queryParams?: PaginationRequest, token?: string) => {
  return baseUrl.get(`/api/barang-kelaur/paged-konfirmasi-barang`, {
    params: queryParams,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const postBarangKeluar = async (body?: any, token?: string) => {
  return baseUrl.post(`/api/barang-keluar`, body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
const putBarangKeluar = async (body:any, token?: string) => {
 
  return baseUrl.put(`/api/barang-keluar/update-konfirmasi-finish`, body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
const dataBarangKeluarDownloadExcel = async (queryParams?: PaginationRequest, token?: string) => {
  return baseUrl.get(`/api/barang-kelaur/download-excell`, {
    params: queryParams,
    headers: {
      Authorization: `Bearer ${token}`
    },
    responseType: 'blob'
  });
};

//* Inventory Dashboard
const dataInventoryDashboard = async (queryParams:{Start?:string, End?:string, Type?:string}, token?: string) => {
  return baseUrl.get(`/api/dashboard/inventory`, {
    params: queryParams,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};


const InventoryService = {
  dataPeringatanStok,
  deletePeringatanStok,
  postPeringatanStok,
  putPeringatanStok,
  dataPeringatanStokDownload,
  dataPeringatanStokNotification,

  dataBarangMasuk,
  deleteBarangMasuk,
  postBarangMasuk,
  putBarangMasuk,
  dataBarangMasukDownload,

  dataBarangKeluar,
  dataKonfirmasiBarangKeluar,
  postBarangKeluar,
  putBarangKeluar,
  dataBarangKeluarDownloadExcel,

  dataInventoryDashboard
};

export default InventoryService;
