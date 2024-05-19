
export interface getExample {
    id?: string;
    frame_number: string;
    description_repair:string
    datetime_entry: string;
    datetime_finish: string;
    status: string;
    nominal: string;
    konfirmasi: string;
    diterima_oleh: string;
  }
  [];
  export interface createExample {
    id?: string;
    frame_number: string;
    description: string;
    status: string;
    entry: string;
    finish: string;
  }

export const GET_EXAMPLE_DUMMY: getExample[] = [
    {
        id: "asdmaojndq_jnijfajnand",
        frame_number: "PO-0001",
        description_repair: "TOKOPEDIA",
        datetime_entry: "GUDANG JKT",
        datetime_finish: "16-12-2024",
        nominal: 'Rp 400.000',
        status: "Dalam Perjalanan",
        konfirmasi: 'Terima',
        diterima_oleh:'admin 1'
    }
];
export const GET_EXAMPLE_DUMMY1 = [
  {
    "id_transaksi": "TR-240518050504595",
    "lokasi_tujuan": "JKT",
    "pic": "Omet",
    "tanggal_barang_transfer": "2024-05-18",
    "lokasi_asal": ['JKT', 'BGR', 'PLMB' ],
    "rak" : ["3 - D", "3 - D", "3 - D"],
    "sku" : ["S_002", "S_002", "S_002"],
    "nama_barang" : ["KABEL"],
    "varian" : [ "Varian A",  "Varian A", "Varian A"],
    "jumlah" : [1,11,11],
    "tanggal_barang_keluar" : [ "2024-05-18",  "2024-05-18",  "2024-05-18"]

  }
];