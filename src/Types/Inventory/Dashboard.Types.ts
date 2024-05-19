export interface barangMasukType {
  id: string;
  id_user: string;
  sku: string;
  nama_barang: string;
  varian: string;
  stok: string;
  no_rak: string;
  tanggal: string;
  catatan: string;
  status: string;
}
[];
export interface barangKeluarType {
  id: string;
  id_transaksi: string;
  id_user: string;
  sku: string;
  nama_barang: string;
  varian: string;
  jumlah: string;
  no_rak: string;
  lokasi_awal: string;
  lokasi_tujuan: string;
  tanggal: string;
}
[];
export interface masterLokasiType {
  id: string,
  namalokasi: string,
  created_at: string,
}
[];
export interface masterRakType {
  id_lokasi: string,
  naam_rak_layout: string,
  last_update: string,
}
[];
