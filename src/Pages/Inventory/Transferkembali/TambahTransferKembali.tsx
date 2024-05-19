import Breadcrumb from '@/Components/Breadcrumb'
import ModalWrapper from '@/Components/Modal/ModalWrapper';
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import ceklis from '@/assets/icons/ceklis.svg'
import { useNavigate } from 'react-router-dom';
import { SearchDropDown } from '@/Components/Dropdown/SearchDropDown';
import Delete from '@/assets/icons/delete-table.svg'

type dataBarangType = {
    sku: string
    nama_barang: string,
    qty: number
    stok: number
    rak: string
}[]


const CreateTransferKembali = () => {
    const [success, setSuccess] = useState(false);
    const [databarang, setDatabarang] = useState<dataBarangType>([
        {
            sku: '',
            nama_barang: '',
            qty: 0,
            stok: 0,
            rak: ''
        }
    ])
    const navigate = useNavigate()

    const items = [
        {
            label: 'Transfer Kembali',
            path: '/inventory/transfer-barang-kembali'
        },
        {
            label: 'Tambah Transfer Kembali',
            path: '/inventory/transfer-barang-kembali/create'
        }
    ];

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

    const handleDelete = (id: number) => {
        // Lakukan penghapusan elemen pada indeks ke-2 menggunakan splice
        const updatedData = [...databarang]; // Buat salinan array
        updatedData.splice(id, 1); // Hapus 1 elemen pada indeks ke-2
        setDatabarang(updatedData);
    };

    const updateState = (type: string, value: string, index: number) => {
        if (databarang.length > index) {
            if (type == 'sku') {
                const updatedSku = [...databarang];
                updatedSku[index].sku = value
                setDatabarang(updatedSku);
            } else if (type == 'qty') {
                const updatedQty = [...databarang];
                updatedQty[index].qty = parseInt(value);
                setDatabarang(updatedQty);
            } else if (type == 'rak') {
                const updatedRak = [...databarang];
                updatedRak[index].rak = value;
                setDatabarang(updatedRak);
            }
        } else {
            console.error("Index 2 is out of range.");
        }
    };

    useEffect(() => {
        console.log(databarang)
    }, [databarang])
    return (
        <>
            <div className="w-full grid h-fit overflow-auto bg-white-50 rounded-xl p-3 my-5">
                <Breadcrumb items={items} />
                <div className=" w-full h-fit">
                    <div className=' flex flex-row justify-between row-span-1 py-4 gap-4 h-fit '>
                        <span className='font-extrabold text-3xl'>Tambah Transfer Kembali</span>
                        <div className='text-blue-500' onClick={() => setDatabarang([...databarang, {
                            sku: '',
                            nama_barang: '',
                            qty: 0,
                            stok: 0,
                            rak: ''
                        }])}>
                            <Button
                                className="border-2 font-bold flex justify-center items-center border-blue-500 text-blue-500 w-56 h-12"
                                type="text"
                                size={'large'}>
                                <span className='text-blue-500'>+ Tambah Barang Masuk</span>
                            </Button>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex py-5 gap-2 items-center'>
                            <div className='w-4 h-4 bg-blue-500 rounded-full'></div><div className='text-md font-semibold'>ID transaksi :  TR123ABC</div>
                        </div>
                        <div className=" h-fit w-full grid grid-rows-4 gap-5 pt-3 space-y-3">
                            <div className='grid grid-cols-9 gap-5'>
                                <div className='flex flex-col col-span-2'>
                                    <span className='font-semibold'>Lokasi Tujuan</span>
                                    <SearchDropDown SelectFunc={(e) => console.log('sku', e)} option={locationList} />
                                </div>
                            </div>
                            {Array.from({ length: databarang.length }, (_, index) => (
                                <div key={index} className="grid grid-cols-9 gap-5">
                                    <div className='flex flex-col col-span-2'>
                                        <span className='font-semibold'>SKU</span>
                                        <SearchDropDown SelectFunc={(e) => updateState('sku', e, index)} option={locationList} />
                                    </div>
                                    <div className='flex flex-col col-span-2'>
                                        <span className='font-semibold'>Nama Barang</span>
                                        <input disabled type="text" placeholder={`${databarang[index].nama_barang}`} className='w-full h-12 rounded-md border-2 border-grey-200 px-5' />
                                    </div>
                                    <div className='flex flex-col col-span-2'>
                                        <span className='font-semibold'>Qty</span>
                                        <input type="text" onChange={(e) => updateState('qty', e.target.value, index)} placeholder='Masukan Qty' className='w-full h-12 rounded-md border-2 border-grey-200 px-5' />
                                    </div>
                                    <div className='flex flex-col col-span-2'>
                                        <span className='font-semibold'>Stok</span>
                                        <input disabled type="text" className='w-full h-12 rounded-md border-2 border-grey-200 px-5' />
                                    </div>
                                    <div className='flex flex-col justify-center '>
                                        <div className='w-full bg flex justify-center h-12 items-center'><img src={Delete} onClick={() => handleDelete(index)} alt="delete" className='w-10 cursor-pointer' /></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='w-full flex justify-end border-t border-dashed border-gray-300'>
                            <div className='flex justify-end py-5 text-blue-500 gap-5'>
                                <button className="font-bold rounded-md flex justify-center gap-2 items-center border border-blue-500  text-blue-500 w-48 h-12 " onClick={() => navigate('/inventory/peringatan-stock')}>
                                    <span className='text-blue-500 text-lg'>Batalkan</span>
                                </button>
                                <button className="font-bold rounded-md flex justify-center gap-2 items-center border border-blue-500 bg-blue-600 w-48 h-12 ">
                                    <span className='text-white-50 text-lg ' onClick={() => setSuccess(true)}>Simpan</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalWrapper modalOpen={success} setModalOpen={setSuccess}>
                <div className='h-72 w-full grid grid-rows-2 absolute -top-20 rounded-lg'>
                    <div className='w-full h-full top-0 flex flex-col bg-[#10B43E]'>
                        <div className='w-full text-end px-5 py-2 text-white-200 text-2xl font-medium' > <span className='cursor-pointer text-white-50' onClick={() => setSuccess(false)}>X</span></div>
                        <img className=' absolute top-7 left-[40%]' src={ceklis} alt="" />
                    </div>
                    <div className='w-full h-full top-0 bg-white-50'>
                        <div className='w-full text-center px-5 py-2 text-black text-3xl font-bold'>Success!</div>
                        <div className='w-full text-center px-5 py-2 text-black text-2xl font-medium'>Master Data telah berhasil dibuat</div>
                    </div>
                </div>
            </ModalWrapper>
        </>
    )
}

export default CreateTransferKembali