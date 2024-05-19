import { baseUrl } from '@/Services/BaseUrl/index';
import { masterProdukType } from '@/Types/MasterData/MasterBarang.Type';
import { PaginationRequest } from '@/Types/TableTypes';

//* Master Varian

const dataMasterVarian = async (queryParams?: PaginationRequest, token?: string) => {
  return baseUrl.get(`/api/varian/paged`, {
    params: queryParams,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const deleteMasterVarian = async (id: string, token?: string) => {
  return baseUrl.delete(`/api/varian/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const postMasterVarian = async (body?: Partial<string>, token?: string) => {
  return baseUrl.post(`/api/varian`, body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
const dataMasterVarianAll = async (token?: string) => {
  return baseUrl.get(`/api/varian/get-all-varian`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

//* Master Barang

const dataMasterBarang = async (queryParams?: PaginationRequest, token?: string) => {
  return baseUrl.get(`/api/barang/paged`, {
    params: queryParams,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const deleteMasterBarang = async (id: string, token?: string) => {
  return baseUrl.delete(`/api/barang/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const postMasterBarang = async (body?: Partial<masterProdukType>, token?: string) => {
  return baseUrl.post(`/api/barang`, body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const dataMasterBarangAll = async (token?: string) => {
  return baseUrl.get(`/api/barang/get-all-barang`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

//* Master Rak Layout

const dataMasterRak = async (queryParams?: PaginationRequest, token?: string) => {
  return baseUrl.get(`/api/rak/paged`, {
    params: queryParams,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const deleteMasterRak = async (id: string, token?: string) => {
  return baseUrl.delete(`/api/rak/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const postMasterRak = async (body?: { no_rak: string }, token?: string) => {
  return baseUrl.post(`/api/rak`, body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const dataMasterRakAll = async (queryParams?: PaginationRequest, token?: string) => {
  return baseUrl.get(`/api/rak/get-all-rak`, {
    params: queryParams,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

//* Master Lokasi

const dataMasterLokasi = async (queryParams?: PaginationRequest, token?: string) => {
  return baseUrl.get(`/api/lokasi/paged`, {
    params: queryParams,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
const dataMasterLokasiAll = async (queryParams?: PaginationRequest, token?: string) => {
  return baseUrl.get(`/api/lokasi/get-all-lokasi`, {
    params: queryParams,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const MasterService = {
  dataMasterVarian,
  deleteMasterVarian,
  postMasterVarian,
  dataMasterVarianAll,

  dataMasterBarang,
  deleteMasterBarang,
  postMasterBarang,
  dataMasterBarangAll,

  dataMasterRak,
  deleteMasterRak,
  postMasterRak,
  dataMasterRakAll,

  dataMasterLokasi,
  dataMasterLokasiAll
};

export default MasterService;
