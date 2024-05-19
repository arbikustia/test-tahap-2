export interface peringatanStokType {
  id: string;
  sku: string;
  nama_barang: string;
  varian: string;
  MinimalStok: number;
  lokasi: string;
  status: string;
  tanggal: string;
  created_at: string;
}
[];
export interface inventoryBarangMasukType {
  id: string;
  sku: string;
  nama_barang: string;
  varian: string;
  quantity: number;
  lokasi: string;
  rak: string;
  tanggal_masuk: string;
  id_barang: string;
  id_lokasi: string;
  id_rak: string;
}
[];
export interface inventoryBarangKeluarType {
  id_transaksi: string;
  lokasi_tujuan: string;
  pic: string;
  tanggal_barang_transfer: string;
  riwayat_data: {
    lokasi_asal: string;
    rak: string;
    sku: string;
    namaBarang: string;
    varian: string;
    jumlah: number;
    tanggal_barang_keluar: string;
  }[];
}
[];
