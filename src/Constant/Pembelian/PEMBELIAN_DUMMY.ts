import {
  dataCreateTableTransaksiPembelianType,
  dataDetailTableTransaksiPembelianType,
  dataListProdukType,
  dataLokasi,
  dataTableTransaksiPembelianType
} from '@/Types/Pembelian/Pembelian.Types';

export const DATA_TABLE_TRANSAKSI_PEMBELIAN: dataTableTransaksiPembelianType[] = [
  {
    id: 'asdmaojndq_jnijfajnand',
    no_pesanan: 'PO-0001',
    supplier: 'TOKOPEDIA',
    lokasi: 'GUDANG JKT',
    tanggal_order: '16-12-2024',
    total_supplier: '400.000',
    total_ekspedisi: '50.000',
    status: 'Selesai',
    konfirmasi: 'Terima',
    diterima_oleh: 'admin 1'
  },
  {
    id: 'asdmaojndq_jnijfajnand',
    no_pesanan: 'PO-0002',
    supplier: 'SHOPEE',
    lokasi: 'GUDANG DPK',
    tanggal_order: '17-12-2024',
    total_supplier: '300.000',
    total_ekspedisi: '100.000',
    status: 'Dalam Perjalanan',
    konfirmasi: 'Belum di Terima',
    diterima_oleh: ''
  }
];
export const DATA_CREATE_TRANSAKSI_PEMBELIAN: dataCreateTableTransaksiPembelianType[] = [
  {
    estimasi_tiba: 'asdmaojndq_jnijfajnand',
    supplier: 'BLIBLI',
    lokasi: 'GUDANG JKT',
    tanggal_order: '16-12-2024',
    keterangan: '16-12-2024',
    ekspedisi: 'JNT',
    kode_marking: '12732874',
    cbm: 5,
    harga_per_cbm: 19000,
    tagihan: 21000,
    total: 800000,
    data_produk: [
      {
        produk: 'Wristband-L',
        id_produk: 'asdjbablsndakn234234',
        sku: 'SK-12345',
        qty: 10,
        harga_satuan_cny: 40000,
        kurs: 2220,
        harga_satuan_idr: 88620,
        total_cny: 400000,
        total_idr: 888192
      },
      {
        produk: 'Wristband-S',
        id_produk: 'asdjbablsnadsadakn234234',
        sku: 'SK-12340',
        qty: 10,
        harga_satuan_cny: 10000,
        kurs: 2220,
        harga_satuan_idr: 22205,
        total_cny: 100000,
        total_idr: 222048
      }
    ]
  }
];
export const DATA_DETAIL_TRANSAKSI_PEMBELIAN: dataDetailTableTransaksiPembelianType[] = [
  {
    id: 'ajksdnju32804y903i2hnr2038rgb23rb',
    no_pesanan: 'PO-0001',
    estimasi_tiba: 'asdmaojndq_jnijfajnand',
    supplier: 'BLIBLI',
    lokasi: 'GUDANG JKT',
    tanggal_order: '16-12-2024',
    keterangan: '16-12-2024',
    ekspedisi: 'JNT',
    kode_marking: '12732874',
    cbm: 5,
    harga_per_cbm: 19000,
    tagihan: 21000,
    total_supplier: 500000,
    total_ekspedisi: 500000,
    created_by: 'admin1@gmail.com',
    time: '28 Apr 2024 23:05',
    data_produk: [
      {
        produk: 'Wristband-L',
        id_produk: 'asdjbablsndakn234234',
        sku: 'SK-12345',
        qty: 10,
        harga_satuan_cny: 40000,
        kurs: 2220,
        harga_satuan_idr: 88620,
        total_cny: 400000,
        total_idr: 888192
      },
      {
        produk: 'Wristband-S',
        id_produk: 'asdjbablsnadsadakn234234',
        sku: 'SK-12340',
        qty: 10,
        harga_satuan_cny: 10000,
        kurs: 2220,
        harga_satuan_idr: 22205,
        total_cny: 100000,
        total_idr: 222048
      }
    ]
  }
];
export const DATA_LOKASI: dataLokasi[] = [
  {
    label: 'GUDANG JKT',
    value: '12jn4234kjb342j4bk23432423jbj2b34'
  },
  {
    label: 'GUDANG DPK',
    value: '12jn4234kjb342j4bk234324asda23jbj2b34'
  },
  {
    label: 'GUDANG BGR',
    value: '12jn4234kjb342j4bk23432322423jbj2b34'
  }
];
export const DATA_PRODUK: dataListProdukType[] = [
  {
    produk: 'Wristband-A',
    id_produk: '12jn423asda4kjb342j4bk23432423jbj2b34',
    sku: 'SK-12341'
  },
  {
    produk: 'Wristband-B',
    id_produk: '12jn4234asdkjb342j4bk23432423jbj2b34',
    sku: 'SK-12342'
  },
  {
    produk: 'Wristband-C',
    id_produk: '12jn4234kjbasd342j4bk23432423jbj2b34',
    sku: 'SK-12343'
  },
  {
    produk: 'Wristband-D',
    id_produk: '12jn4234kjb342j4bk23432423jbjaa2b34',
    sku: 'SK-12344'
  },
  {
    produk: 'Wristband-E',
    id_produk: '12jn4234kjb34asd2j4bk23432423jbj2b34',
    sku: 'SK-12345'
  },
  
];
