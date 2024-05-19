import { barangKeluarType, barangMasukType, masterLokasiType, masterRakType } from "@/Types/Inventory/Dashboard.Types";

export const DATA_BARANG_MASUK: barangMasukType[] = [
    {
      id: 'asdmaojndq_jnijfajnand',
      id_user: 'b009',
      sku: 'b009',
      nama_barang: 'susi',
      varian: 'Ungu',
      stok: '200',
      no_rak: '2 - B',
      tanggal: '2024-04-26',
      catatan: '',
      status: 'selesai'
    }
  ];
export const DATA_BARANG_KELUAR: barangKeluarType[] = [
    {
      id: 'asdmaojndq_jnijfajnand',
      id_transaksi: 'b009',
      id_user: 'b009',
      sku: 'b009',
      nama_barang: 'susi',
      varian: 'Ungu',
      jumlah: '200',
      no_rak: '2 - B',
      lokasi_awal:'b005',
      lokasi_tujuan:'b009',
      tanggal: '2024-04-26',
    }
  ];
  export const DATA_REFUND_MASTER_LOKASI: masterLokasiType[] = [
    {
      id_lokasi: '123456',
      nama_lokasi: 'susi',
      last_update: '2024-04-26',
    }
  ];
  
  export const DATA_REFUND_MASTER_RAK: masterRakType[] = [
    {
      id_lokasi: '123456',
      naam_rak_layout: 'A1',
      last_update: '2024-04-26',
    }
  ];
  