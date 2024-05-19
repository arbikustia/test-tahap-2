export interface dataRefundDashboardType {
  pembayaran_selesai: number;
  pembayaran_jatuh_tempo: number;
  pembayaran_belum_selesai: number;
  total_refund: number;
}

export interface dataRefundKomplainType {
  no_pesanan: string;
  username: string;
  tanggal: string;
  marketplace: string;
  produk_refund: string;
  sku: string;
  harga: number;
  qty: number;
  jumlah_refund: number;
  permasalahan: string;
}
[];
export interface dataCreateRefundKomplainType {
  username: string;
  tanggal: string;
  market_place: string;
  no_pesanan: string;
  produk_refund: string;
  sku: string;
  harga_per_produk: number;
  qty: number;
  harga_total_produk_refund: number;
  permasalahan: string;
  notification: number;
}
export interface dataMasterUserType {
  id_user: string;
  username: string;
  password: string;
  level: string;
}[]
