export interface dataTableTransaksiPembelianType {
  id: string;
  no_pesanan: string;
  supplier: string;
  lokasi: string;
  tanggal_order: string;
  total_supplier: string;
  total_ekspedisi: string;
  status: string;
  konfirmasi: string;
  diterima_oleh: string;
}
[];

export interface ProdukType {
  produk: string;
  id_produk: string;
  sku: string;
  qty: number;
  harga_satuan_cny: number;
  kurs: number;
  harga_satuan_idr: number;
  total_cny: number;
  total_idr: number;
}

export interface dataCreateTableTransaksiPembelianType {
  estimasi_tiba: string;
  supplier: string;
  lokasi: string;
  tanggal_order: string;
  keterangan: string;
  ekspedisi: string;
  kode_marking: string;
  cbm: number;
  harga_per_cbm: number;
  tagihan: number;
  total: number;
  data_produk: ProdukType[];
}
[];

export interface dataLokasi {
  label: string;
  value: string;
}
[];
export interface dataListProdukType {
  produk: string;
  id_produk: string;
  sku:string;
}
[];
export interface dataDetailTableTransaksiPembelianType {
  id: string;
  no_pesanan: string;
  estimasi_tiba: string;
  supplier:string;
  lokasi: string;
  tanggal_order: string;
  keterangan: string;
  ekspedisi: string;
  kode_marking: string;
  cbm: number;
  harga_per_cbm: number;
  tagihan: number;
  total_supplier: number;
  total_ekspedisi: number;
  created_by: string;
  time: string;
  data_produk: ProdukType[];
}
[];
