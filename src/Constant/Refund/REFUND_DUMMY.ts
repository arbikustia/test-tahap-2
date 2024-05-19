import {
  dataMasterUserType,
  dataRefundDashboardType,
  dataRefundKomplainType
} from '@/Types/Refund/Refund.Types';

export const DATA_REFUND_DASHBOARD: dataRefundDashboardType = {
  pembayaran_selesai: 13,
  pembayaran_jatuh_tempo: 11,
  pembayaran_belum_selesai: 10,
  total_refund: 75
};
export const DATA_REFUND_KOMPLAIN: dataRefundKomplainType = {
  no_pesanan: '123456',
  username: 'susi',
  tanggal: '2024-04-26',
  marketplace: 'Shopee',
  produk_refund: 'acc',
  sku: 'b009',
  harga: 9000,
  qty: 200,
  jumlah_refund: 1,
  permasalahan: 'Reject'
};
export const DATA_REFUND_MASTER_USER: dataMasterUserType[] = [
  {
    id_user: '123456',
    username: 'susi',
    password: '2024-04-26',
    level: 'Shopee'
  }
];
