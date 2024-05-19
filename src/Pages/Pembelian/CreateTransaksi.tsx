import Breadcrumb from '@/Components/Breadcrumb'
import ModalWrapper from '@/Components/Modal/ModalWrapper';
import { createExample } from '@/Constant/EXAMPLE_DUMMY';
import { DatePicker, Form, Input, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useEffect, useState } from 'react';
import ceklis from '@/assets/icons/ceklis.svg'
import deleteSuccessIcon from '@/assets/icons/delete-icon.svg'
import DeleteIcon from '@/assets/icons/trash.svg'
import { SearchDropDown } from '@/Components/Dropdown/SearchDropDown';
import TransaksiPembelianService from '@/Services/Api/Pembelian/PembelianService';
import { DATA_PRODUK } from '@/Constant/Pembelian/PEMBELIAN_DUMMY';
import { dataListProdukType } from '@/Types/Pembelian/Pembelian.Types';
import CurrencyFormatter from '@/Components/CurrencyFormatter';

type produk = {
    id: number
    produk: string,
    sku: string
    qty: number
    harga_satuan_cny: number
    kurs: number
    harga_satuan_idr: number
    total_cny: number
    total_idr: number
}[]


const CreateTransaksi = () => {
    const [success, setSuccess] = useState(false);
    const [successDelete, setSuccessDelete] = useState(false);
    const [addProduct, setAddProduct] = useState(false);
    const [createCount, setCreateCount] = useState<produk>([]);
    const [id, setId] = useState(0);
    const [dataListProduk, setDataListProduk] = useState(DATA_PRODUK)

    const items = [
        {
            label: 'Pembelian',
            path: '/pembelian/transaksi'
        },
        {
            label: 'Tambah Pesanan',
            path: '/pembelian/create/transaksi'
        }
    ];

    const supplierList = [
        {
            label: 'BLIBLI',
            value: 'blibli'
        },
        {
            label: 'SHOPEE',
            value: 'shopee'
        },
    ]
    const locationList = [
        {
            label: 'GUDANG JKT',
            value: 'gudang_jkt'
        },
        {
            label: 'GUDANG DPK',
            value: 'gudang_jkt'
        },
    ]
    const ekspedisiList = [
        {
            label: 'JNT',
            value: 'jnt'
        },
        {
            label: 'JNE',
            value: 'jne'
        },
    ]
    const getListProduk = async () => {
        try {
            const response = await TransaksiPembelianService.dataListProduk()
            setDataListProduk(response.data.data)
        }
        finally { /* empty */ }
    }

    const produk = dataListProduk.map((item: dataListProdukType) => ({
        value: item.sku,
        label: item.produk + ' ' + item.sku
    }));

    const [form] = Form.useForm<createExample>();

    const save = () => {

    }

    const handleDatePicker = (date: unknown, dateString: string) => {
        console.log('Selected Date:', date);
        console.log('Formatted Date String:', dateString);
        // setData({ ...data, date: dateString })
    };

    useEffect(() => {
        console.log('data', createCount)
    }, [createCount])
    useEffect(() => {
        console.log(createCount.length)
        getListProduk()
    }, [])

    const handleDelete = (id: number) => {
        // Lakukan penghapusan elemen pada indeks ke-2 menggunakan splice
        const updatedData = [...createCount]; // Buat salinan array
        updatedData.splice(id, 1); // Hapus 1 elemen pada indeks ke-2
        setCreateCount(updatedData);
        setSuccessDelete(false)// Perbarui state dengan array yang sudah dimodifikasi
    };

    const addSku = (newSku: string, index: number) => {
        // Pastikan indeks 2 ada dalam rentang array
        if (createCount.length > index) {
            // Buat salinan array produk
            const updatedSku = [...createCount];
            // Ubah nilai sku pada indeks ke-2
            updatedSku[index].sku = newSku;
            // Perbarui state dengan array yang sudah dimodifikasi
            setCreateCount(updatedSku);
        } else {
            console.error("Index 2 is out of range.");
        }
    };
    const updateState = (type: string, value: string, index: number) => {
        // Pastikan indeks 2 ada dalam rentang array
        if (createCount.length > index) {
            // Buat salinan array produk
            if (type == 'qty') {
                const updatedQty = [...createCount];
                updatedQty[index].qty = parseInt(value);
                setCreateCount(updatedQty);
            } else if (type == 'harga-satuan-cny') {
                const updatedHargaSatuanCny = [...createCount];
                updatedHargaSatuanCny[index].harga_satuan_cny = parseInt(value);
                setCreateCount(updatedHargaSatuanCny);
            } else if (type == 'kurs') {
                const updatedKurs = [...createCount];
                updatedKurs[index].kurs = parseInt(value);
                setCreateCount(updatedKurs);
            }

            if (createCount[index].qty && createCount[index].harga_satuan_cny !== 0) {
                const updatedTotalCny = [...createCount];
                updatedTotalCny[index].total_cny = createCount[index].qty * createCount[index].harga_satuan_cny;
                setCreateCount(updatedTotalCny)
            }
            if (createCount[index].harga_satuan_cny && createCount[index].kurs !== 0) {
                const updatedHargaSatuanIdr = [...createCount];
                updatedHargaSatuanIdr[index].harga_satuan_idr = createCount[index].harga_satuan_cny * createCount[index].kurs;
                setCreateCount(updatedHargaSatuanIdr)
            }
            if (createCount[index].qty && createCount[index].harga_satuan_idr !== 0) {
                const updatedTotalIdr = [...createCount];
                updatedTotalIdr[index].total_idr = createCount[index].qty * createCount[index].harga_satuan_idr;
                setCreateCount(updatedTotalIdr)
            }
        } else {
            console.error("Index 2 is out of range.");
        }
    };

    const formatIDR = (amount:number) => {
        if (amount) {
            return `Rp ${amount.toLocaleString('id-ID')}`;
        }
        return '';
    };

    return (
        <>
            <div className="w-full grid h-[85vh] overflow-auto bg-white-50 rounded-xl p-3 my-5">
                <Breadcrumb items={items} />
                <div className=" w-full h-[100vh]">
                    <div className=' flex flex-col row-span-1 py-2 gap-4 h-fit text-2xl'>
                        <span className='font-extrabold'>Tambah Pesanan</span>
                        <span className='font-medium text-lg flex items-center gap-2 '><div className='w-3 h-3 bg-blue-600 rounded-full'></div> ISI DATA PESANAN</span>
                    </div>
                    <div className=''>
                        <Form
                            form={form}
                            layout="vertical"
                            requiredMark={false}
                            autoComplete="off"
                            className="w-full h-fit p-5"
                            onFinish={save}>
                            <div className=" h-fit w-full grid grid-cols-3 gap-x-10 pt-3">
                                <div className="grid grid-rows-2">
                                    <Form.Item label="Id" name="id" hidden>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label="No. Pesanan"
                                        name="no_pesanan"
                                        className='text-xl'
                                        rules={[{ required: false, message: 'Mohon Masukan No. Pesanan!' }]}>
                                        <Input disabled type='number' size="large" className='h-14 w-full' placeholder='[Auto]' />
                                    </Form.Item>
                                    <Form.Item
                                        label="Estimasi Tiba"
                                        name="estimasi_tiba"
                                        rules={[{ required: false, message: 'Mohon Masukan Estimasi Tiba!' }]}>
                                        <Space direction="vertical" className='w-full' size={12}>
                                            <DatePicker
                                                style={{
                                                    height: 55,
                                                }}
                                                className='w-full'
                                                size="large"
                                                onChange={handleDatePicker}
                                            />
                                        </Space>
                                    </Form.Item>
                                    <Form.Item
                                        label="Supplier"
                                        name="supplier"
                                        rules={[{ required: false, message: 'Mohon Masukan Supplierl!' }]}>
                                        <SearchDropDown SelectFunc={(e) => console.log(e)} option={supplierList} />
                                    </Form.Item>
                                    <Form.Item
                                        label="Lokasi"
                                        name="lokasi"
                                        rules={[{ required: false, message: 'Mohon Masukan Lokasi!' }]}>
                                        <SearchDropDown SelectFunc={(e) => console.log(e)} option={locationList} />
                                    </Form.Item>
                                    <Form.Item
                                        label="Tanggal Order"
                                        name="tanggal_order"
                                        rules={[{ required: false, message: 'Mohon Masukan tanggal Order!' }]}>
                                        <Space direction="vertical" className='w-full' size={12}>
                                            <DatePicker
                                                style={{
                                                    height: 55,
                                                }}
                                                className='w-full'
                                                size="large"
                                                onChange={handleDatePicker}
                                            />
                                        </Space>
                                    </Form.Item>
                                    <Form.Item
                                        label="Keterangan"
                                        name="keterangan"
                                        rules={[{ required: false, message: 'Mohon Masukan Keterangan!' }]}>
                                        {/* <Input size="large" className='h-14 w-full' /> */}
                                        <Space direction="vertical" className='w-full' size={12}>
                                            <TextArea
                                                className='h-44 text-xl'
                                                onChange={(e) => console.log(e.target.value)}
                                                placeholder="Ketrangan"
                                                autoSize={{ minRows: 3, maxRows: 4 }}
                                            />
                                        </Space>
                                    </Form.Item>

                                </div>
                                <div className="grid grid-rows-6">
                                    <Form.Item
                                        label="Ekspedisi"
                                        name="ekspedisi"
                                        rules={[{ required: false, message: 'Mohon Masukan Ekspedisi!' }]}>
                                        <SearchDropDown SelectFunc={(e) => console.log(e)} option={ekspedisiList} />
                                    </Form.Item>
                                    <Form.Item
                                        label="Kode Marking"
                                        name="kode_marking"
                                        rules={[{ required: false, message: 'Mohon Masukan Kode Marking!' }]}>
                                        <Input size="large" className='h-14' />
                                    </Form.Item>
                                    <Form.Item
                                        label="CBM"
                                        name="cbm"
                                        rules={[{ required: false, message: 'Mohon Masukan CBM!' }]}>
                                        <Input size="large" className='h-14' />
                                    </Form.Item>
                                    <Form.Item
                                        label="Harga Pre CBM"
                                        name="harga_cbm"
                                        rules={[{ required: false, message: 'Mohon Masukan Harga Per CBM!' }]}>
                                        <Input size="large" className='h-14' />
                                    </Form.Item>
                                    <Form.Item
                                        label="Tagihan"
                                        name="tagihan"
                                        rules={[{ required: false, message: 'Mohon Masukan Tagihan!' }]}>
                                        <Input size="large" className='h-14' />
                                    </Form.Item>

                                </div>

                                <div className='flex justify-end h-[70%] items-end gap-5 mr-10 flex-col'>
                                    <div className="grid grid-rows-2 w-[90%] bg-white-400 h-full rounded-lg p-5">
                                        <div className='flex flex-col justify-evenly h-[90%] gap-10  border-b border-grey-400'>
                                            <span className='font-extrabold text-2xl'>Rincian</span>
                                            <span className='text-2xl font-medium'>2 Product (20 Qty)</span>
                                        </div>
                                        <div className='flex flex-col gap-5 py-5 justify-center h-[100%]'>
                                            <div className='font-extrabold text-3xl w-full grid grid-cols-3'> <div className=' col-span-2'>Total Ekspedisi</div> <div >Rp 50.000</div></div>
                                            <div className='font-extrabold text-3xl w-full grid grid-cols-3'> <div className='col-span-2'>Total Supplier</div> <div>¥ 500.000</div></div>
                                        </div>
                                        <button className='text-xl h-14 bg-blue-500 rounded-md text-white-50 font-bold' onClick={() => setSuccess(true)}>Buat Pesanan</button>
                                    </div>
                                </div>

                            </div>
                            <div className='w-full flex justify-between border-t border-dashed border-gray-300'>
                                <div className='flex items-center gap-2'><div className='w-4 h-4 bg-blue-600 rounded-full'></div  > <span className='text-xl text-grey-400'>PILIH PRODUK</span></div>
                                <div className='flex justify-end py-5 text-blue-500'>
                                    <button onClick={() => setCreateCount([...createCount, {
                                        id: createCount.length == 0 ? 0 : createCount.length + 1,
                                        produk: `Wristband-L ${createCount.length == 0 ? 0 : createCount.length + 1} `,
                                        sku: '',
                                        qty: createCount.length == 0 ? 0 : createCount.length + 1,
                                        harga_satuan_cny: 0,
                                        kurs: 0,
                                        harga_satuan_idr: 0,
                                        total_cny: 0,
                                        total_idr: 0
                                    }])} className="font-bold rounded-md flex justify-center gap-2 items-center border border-blue-500  text-blue-500 w-48 h-12 ">
                                        <span className='text-blue-600 text-2xl'>+</span><span className='text-blue-500 '>Tambah Produk</span>
                                    </button>
                                </div>
                            </div>
                        </Form>
                        <div className='grid grid-cols-3 py-5'>
                            <table className="min-w-full col-span-3 bg-white">
                                <thead className=" bg-white-400">
                                    <tr className="">
                                        <th className="py-4 px-4 text-center">Produk</th>
                                        <th className="py-4 px-4 text-center">SKU</th>
                                        <th className="py-4 px-4 text-center">Qty</th>
                                        <th className="py-4 px-4 text-center">Harga Satuan (CNY)</th>
                                        <th className="py-4 px-4 text-center">1 CNY {`->`} IDR</th>
                                        <th className="py-4 px-4 text-center border-r-4 border-blue-300">Harga Satuan (IDR)</th>
                                        <th className="py-4 px-4 text-center">Total (CNY)</th>
                                        <th className="py-4 px-4 text-center">Total (IDR)</th>
                                        <th className="py-4 px-4 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white-7000 text-white-10 bg-white-50">
                                    {Array.from({ length: createCount.length }, (_, index) => (
                                        <tr key={index} className="border-gray-500 ">
                                            <td className="py-4 px-4 text-center">
                                                <SearchDropDown SelectFunc={(e) => { console.log(e), addSku(e, index) }} option={produk} />
                                            </td>
                                            <td className="py-4 px-4 text-center">
                                                <input disabled type="search" className='outline-none border-b-4 pl-2 text-grey-300 border-white-600 bg-white-500 h-14' value={createCount[index].sku} />
                                            </td>
                                            <td className="py-4 px-4 text-center">
                                                <input type="search" onChange={(e) => updateState('qty', e.target.value, index)} className='outline-none border-b-4 text-lg border-white-600 h-14' />
                                            </td>
                                            <td className=" ">
                                                <div className='py-4 px-4 text-center flex flex-row'>
                                                    <div className='border-b-4 py-1 border-white-600 flex items-center text-white-800 h-14 pr-2'>¥</div> <input type="search" onChange={(e) => updateState('harga-satuan-cny', e.target.value, index)} className='outline-none border-b-4 text-lg border-white-600 h-14' />
                                                </div>
                                            </td>
                                            <td className=" ">
                                                <div className='py-4 px-4 text-center flex flex-row'>
                                                    <div className='border-b-4 py-1 border-white-600 flex items-center text-white-800 h-14 px-2'>Rp</div> <input type="search" onChange={(e) => updateState('kurs', e.target.value, index)} className='outline-none border-b-4 text-lg border-white-600 h-14' />
                                                </div>
                                            </td>
                                            <td className="py-4 px-4 text-center border-r-4 border-blue-300">
                                                <input type="search" disabled value={formatIDR(createCount[index].harga_satuan_idr)} className='outline-none border-b-4 px-2 border-white-600 text-lg bg-white-500 h-14' />
                                            </td>
                                            <td className="py-4 px-4 text-center text-lg">
                                                <CurrencyFormatter type={'cny'} amount={createCount[index].total_cny} />
                                            </td>
                                            <td className="py-4 px-4 text-center text-lg">
                                                <CurrencyFormatter type={'idr'} amount={createCount[index].total_idr} />
                                            </td>
                                            <td className="py-4 px-4 justify-center flex flex-row gap-3">
                                                <img
                                                    src={DeleteIcon}
                                                    width={30}
                                                    height={30}
                                                    onClick={() => { setSuccessDelete(true), setId(index) }}
                                                    alt="delete"
                                                    className="cursor-pointer hover:scale-105 transition-all"
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <ModalWrapper modalOpen={success} setModalOpen={setSuccess}>
                <div className='h-72 w-full grid grid-rows-2 absolute top-0 rounded-lg'>
                    <div className='w-full h-full top-0 flex flex-col bg-[#10B43E]'>
                        <div className='w-full text-end px-5 py-2 text-white-200 text-2xl font-medium' > <span className='cursor-pointer text-white-50' onClick={() => setSuccess(false)}>X</span></div>
                        <img className=' absolute top-7 left-[40%]' src={ceklis} alt="" />
                    </div>
                    <div className='w-full h-full top-0 bg-white-50'>
                        <div className='w-full text-center px-5 py-2 text-black text-3xl font-bold'>Success!</div>
                        <div className='w-full text-center px-5 py-2 text-black text-2xl font-medium'>Pesanan kamu telah berhasil dibuat</div>
                    </div>
                </div>
            </ModalWrapper>
            <ModalWrapper modalOpen={successDelete} setModalOpen={setSuccessDelete}>
                <div className='h-96 w-full grid grid-rows-2 absolute top-0 rounded-lg'>
                    <div className='w-full h-full top-0 flex flex-col bg-[#F13535]'>
                        <div className='w-full text-end px-5 py-2 text-white-200 text-2xl font-medium' > <span className='cursor-pointer text-white-50' onClick={() => setSuccessDelete(false)}>X</span></div>
                        <img className=' absolute top-[15%] left-[40%]' src={deleteSuccessIcon} alt="" />
                    </div>
                    <div className='w-full h-full top-0 bg-white-50'>
                        <div className='w-full text-center px-5 py-2 text-black text-2xl font-bold'>Menghapus produk ini?</div>
                        <div className='w-full text-center px-5 py-2 text-black text-lg font-medium'>Apakah kamu yakin untuk menghapus
                            “Produk : {createCount[id]?.produk}” ?</div>
                        <div className='w-full flex justify-center gap-5'>
                            <button className='border border-grey-200 px-5 text-xl rounded-md'>Batal </button>
                            <button className='border bg-red-500 text-white-50 p-2 px-5 text-xl rounded-md' onClick={() => handleDelete(id)}>Ya, Hapus </button>
                        </div>
                    </div>
                </div>
            </ModalWrapper>
            <ModalWrapper modalOpen={addProduct} setModalOpen={setAddProduct}>
                <div className='h-96 w-full grid bg-white-50 grid-rows-2 items-start px-5 absolute top-0 rounded-lg'>
                    <div className='w-full text-end py-2 text-white-200 text-2xl font-medium' > <span className='cursor-pointer text-black' onClick={() => setSuccessDelete(false)}>X</span></div>
                    {/* <SearchDropDown option={product} SelectFunc={(e) => console.log(e)} /> */}
                    <input placeholder='Tambah Produk' type="text" className='w-full h-12 px-2 border border-grey-200 rounded-lg ' />
                    <div className=' h-72 mt-2 rounded-lg overflow-auto flex flex-col gap-2 '>
                        <div className='h-14 bg-white-400 hover:bg-blue-200 rounded-lg flex flex-col p-1 px-2'>
                            <span className='font-bold text-lg'>Wristband L</span>
                            <span>SK1234</span>
                        </div>
                        <div className='h-14 bg-white-400 hover:bg-blue-200 rounded-lg flex flex-col p-1 px-2'>
                            <span className='font-bold text-lg'>Wristband L</span>
                            <span>SK1234</span>
                        </div>
                        <div className='h-14 bg-white-400 hover:bg-blue-200 rounded-lg flex flex-col p-1 px-2'>
                            <span className='font-bold text-lg'>Wristband L</span>
                            <span>SK1234</span>
                        </div>
                        <div className='h-14 bg-white-400 hover:bg-blue-200 rounded-lg flex flex-col p-1 px-2'>
                            <span className='font-bold text-lg'>Wristband L</span>
                            <span>SK1234</span>
                        </div>
                        <div className='h-14 bg-white-400 hover:bg-blue-200 rounded-lg flex flex-col p-1 px-2'>
                            <span className='font-bold text-lg'>Wristband L</span>
                            <span>SK1234</span>
                        </div>
                        <div className='h-14 bg-white-400 hover:bg-blue-200 rounded-lg flex flex-col p-1 px-2'>
                            <span className='font-bold text-lg'>Wristband L</span>
                            <span>SK1234</span>
                        </div>
                        <div className='h-14 bg-white-400 hover:bg-blue-200 rounded-lg flex flex-col p-1 px-2'>
                            <span className='font-bold text-lg'>Wristband L</span>
                            <span>SK1234</span>
                        </div>


                    </div>
                </div>
            </ModalWrapper>
        </>
    )
}

export default CreateTransaksi