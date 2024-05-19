import Breadcrumb from '@/Components/Breadcrumb'
import ModalWrapper from '@/Components/Modal/ModalWrapper';
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import ceklis from '@/assets/icons/ceklis.svg'
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchDropDown } from '@/Components/Dropdown/SearchDropDown';
import Delete from '@/assets/icons/delete-table.svg'
import { peringatanStokType } from '@/Types/Inventory';
import MasterService from '@/Services/Api/MasterData/MasterService';
import { masterLokasiType, masterRakType } from '@/Types/MasterData';
import InventoryService from '@/Services/Api/Inventory';
import { useCookies } from 'react-cookie';
import ConfirmIcon from '@/assets/icons/confirm-icon.svg'

export type dataBarangType = {
    id_barang: string,
    id_lokasi: string,
    id_rak: string,
    quantity: number,
    username:string
}[]


const CreateBarangMasuk = () => {
    const location = useLocation()
    const [success, setSuccess] = useState(false);
    const [dataListBarang, setDataListBarang] = useState<peringatanStokType[]>([])
    const [dataLokasi, setDataLokasi] = useState([])
    const [confirm, setConfirm] = useState(false);
    const [dataRak, setDataRak] = useState([])
    const [cookies] = useCookies([ 'user'])

    const [databarang, setDatabarang] = useState<dataBarangType>([
        {
            "id_barang": "",
            "id_lokasi": "",
            "id_rak": "",
            "quantity": 0,
            username:cookies.user

        }
    ])
    const navigate = useNavigate()

    const items = [
        {
            label: 'Barang Masuk',
            path: '/inventory/data/barang-masuk'
        },
        {
            label: 'Tambah Barang Masuk',
            path: '/inventory/data/barang-masuk/create'
        }
    ];

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
                updatedSku[index].id_barang = value
                setDatabarang(updatedSku);
            } else if (type == 'qty') {
                const updatedQty = [...databarang];
                updatedQty[index].quantity = parseInt(value);
                setDatabarang(updatedQty);
            } else if (type == 'rak') {
                const updatedRak = [...databarang];
                updatedRak[index].id_rak = value;
                setDatabarang(updatedRak);
            }
            else if (type == 'lokasi') {
                const updatedLokasi = [...databarang];
                updatedLokasi[index].id_lokasi = value;
                setDatabarang(updatedLokasi);
            }
        } else {
            console.error("Index 2 is out of range.");
        }
    };


    const getBarang = async () => {
        try {
            const response = await MasterService.dataMasterBarangAll()
            setDataListBarang(response.data.data)
        } finally { /* empty */ }
    }
    const getLokasi = async () => {
        try {
            const response = await MasterService.dataMasterLokasiAll()
            setDataLokasi(response.data.data)
        } finally { /* empty */ }
    }
    const getRak = async () => {
        try {
            const response = await MasterService.dataMasterRakAll()
            setDataRak(response.data.data)
        } finally { /* empty */ }
    }

    const sku = dataListBarang.map((item: peringatanStokType) => ({
        value: item.id,
        label: item.sku + '-' + item?.nama_barang
    }));
    const lokasi = dataLokasi.map((item: masterLokasiType) => ({
        value: item.id,
        label: item.nama_lokasi
    }));
    const rak = dataRak.map((item: masterRakType) => ({
        value: item.id,
        label: item.nomor_rak
    }));

    useEffect(() => {
        getBarang()
        getLokasi()
        getRak()
        if (location?.state?.data[0]?.quantity) {
            updateState('qty', location?.state?.data[0]?.quantity, 0)
        }
        console.log('state', location?.state)

    }, [])

    const save = async () => {
        try {
            // console.log('asdasd', location.state.data)
            if (location?.state?.id) {
                const id = location?.state?.id
                const body = {
                    "id": id,
                    "id_barang":databarang[0].id_barang ? databarang[0].id_barang : location?.state?.data[0]?.id_barang,
                    "id_lokasi":databarang[0].id_lokasi ? databarang[0].id_lokasi : location?.state?.data[0]?.id_lokasi,
                    "id_rak": databarang[0].id_rak ? databarang[0].id_rak : location?.state?.data[0]?.id_rak,
                    "quantity": databarang[0].quantity ? databarang[0].quantity : location?.state?.data[0]?.quantity
                }

                await InventoryService.putBarangMasuk(id, body)
            } else {
                const body = {
                    "daftar_barang_masuk": databarang
                }
                await InventoryService.postBarangMasuk(body)
            }
            setConfirm(false)
            setSuccess(true)
        } catch { /* empty */ }
    }

    useEffect(() => {
        console.log(databarang)
    }, [databarang])

    return (
        <>
            <div className="w-full grid h-fit overflow-auto bg-white-50 rounded-xl p-3 my-5">
                <Breadcrumb items={items} />
                <div className=" w-full h-fit">
                    <div className=' flex flex-row justify-between row-span-1 py-4 gap-4 h-fit '>
                        <span className='font-extrabold text-3xl'>Tambah barang Masuk</span>
                        {location?.state?.id
                            ? ''
                            : <div className='text-blue-500' onClick={() => setDatabarang([...databarang, {
                                "id_barang": "",
                                "id_lokasi": "",
                                "id_rak": "",
                                "quantity": 0,
                                username:cookies.user
                            }])}>
                                <Button
                                    className="border-2 font-bold flex justify-center items-center border-blue-500 text-blue-500 w-56 h-12"
                                    type="text"
                                    size={'large'}>
                                    <span className='text-blue-500'>+ Tambah Barang Masuk</span>
                                </Button>
                            </div>

                        }
                    </div>
                    <div className=''>
                        <div className=" h-[60vh] w-full  overflow-auto">
                            <div className=" h-fit w-full grid grid-rows-4 gap-5 pt-3">
                                {Array.from({ length: databarang.length }, (_, index) => (
                                    <div key={index} className="grid grid-cols-7 gap-5">
                                        <div className='flex flex-col col-span-1'>
                                            <span className='font-semibold'>SKU</span>
                                            <SearchDropDown SelectFunc={(e) => updateState('sku', e, index)} option={sku} defaultSelectedValue={databarang[index].id_barang ? databarang[index].id_barang : location?.state?.data[index]?.id_barang} />
                                        </div>
                                        <div className='flex flex-col col-span-1'>
                                            <span className='font-semibold'>Nama Barang</span>
                                            {databarang[index].id_barang ?
                                                <div className='w-full h-14 border bg-white-500 border-white-600 rounded-md flex px-5 items-center'>{
                                                    dataListBarang.filter((item: peringatanStokType) => item.id === databarang[index].id_barang)
                                                        .map(filteredItem => (
                                                            <div key={filteredItem.id} className='flex flex-col'>
                                                                <span>{filteredItem.nama_barang}</span>
                                                            </div>
                                                        ))
                                                }</div>
                                                : <div className='w-full h-14 border bg-white-500 border-white-600 rounded-md flex px-5 items-center'>{
                                                    dataListBarang.filter((item: peringatanStokType) => item.id === location?.state?.data[0]?.id_barang)
                                                        .map(filteredItem => (
                                                            <div key={filteredItem.id} className='flex flex-col'>
                                                                <span>{filteredItem.nama_barang}</span>
                                                            </div>
                                                        ))
                                                }</div>}
                                        </div>
                                        <div className='flex flex-col col-span-1'>
                                            <span className='font-semibold'>Varian</span>
                                            {databarang[index].id_barang ?
                                                <div className='w-full h-14 border bg-white-500 border-white-600 rounded-md flex px-5 items-center'>{
                                                    dataListBarang.filter((item: peringatanStokType) => item.id === databarang[index].id_barang)
                                                        .map(filteredItem => (
                                                            <div key={filteredItem.id} className='flex flex-col'>
                                                                <span>{filteredItem.varian}</span>
                                                            </div>
                                                        ))
                                                }</div>
                                                : <div className='w-full h-14 border bg-white-500 border-white-600 rounded-md flex px-5 items-center'>{
                                                    dataListBarang.filter((item: peringatanStokType) => item.id === location?.state?.data[0]?.id_barang)
                                                        .map(filteredItem => (
                                                            <div key={filteredItem.id} className='flex flex-col'>
                                                                <span>{filteredItem.varian}</span>
                                                            </div>
                                                        ))
                                                }</div>}
                                        </div>
                                        <div className='flex flex-col col-span-1 '>
                                            <span className='font-semibold'>Jumlah Barang Masuk</span>
                                            <input type="number" onChange={(e) => updateState('qty', e.target.value, index)} value={databarang[index].quantity} placeholder='Masukan Qty' className='w-full h-14 rounded-md border-2 border-grey-200 px-5' />
                                        </div>
                                        <div className='flex flex-col col-span-1'>
                                            <span className='font-semibold'>Rak</span>
                                            <SearchDropDown SelectFunc={(e) => updateState('rak', e, index)} option={rak} defaultSelectedValue={databarang[index].id_rak ? databarang[index].id_rak : location?.state?.data[0].id_rak} />

                                        </div>
                                        <div className='flex flex-col col-span-1'>
                                            <span className='font-semibold'>Lokasi</span>
                                            <SearchDropDown SelectFunc={(e) => updateState('lokasi', e, index)} option={lokasi} defaultSelectedValue={databarang[index].id_lokasi ? databarang[index].id_lokasi : location?.state?.data[0].id_lokasi} />
                                        </div>
                                        <div className='flex flex-col justify-center items-center h-14 mt-6'>
                                            <div className='w-full bg flex justify-center h-12 items-center'><img src={Delete} onClick={() => handleDelete(index)} alt="delete" className='w-10 cursor-pointer' /></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='w-full flex justify-end border-t border-dashed border-gray-300'>
                            <div className='flex justify-end py-5 text-blue-500 gap-5'>
                                <button className="font-bold rounded-md flex justify-center gap-2 items-center border border-blue-500  text-blue-500 w-48 h-12 " onClick={() => navigate('/inventory/data/barang-masuk')}>
                                    <span className='text-blue-500 text-lg'>Batalkan</span>
                                </button>
                                <button className="font-bold rounded-md flex justify-center gap-2 items-center border border-blue-500 bg-blue-600 w-48 h-12 " onClick={() => setConfirm(true)}>
                                    <span className='text-white-50 text-lg' >Simpan</span>
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
            <ModalWrapper modalOpen={confirm} setModalOpen={setConfirm}>
                <div className='h-96 w-full grid grid-rows-2 absolute -top-32 rounded-lg'>
                    <div className='w-full h-full top-0 flex flex-col bg-[#F0B400] rounded-tr-xl rounded-tl-xl'>
                        <div className='w-full text-end px-5 py-2 text-white-200 text-2xl font-medium' > <span className='cursor-pointer text-white-50' onClick={() => setConfirm(false)}>X</span></div>
                        <img className=' absolute top-[15%] left-[40%]' src={ConfirmIcon} alt="" />
                    </div>
                    <div className='w-full h-full top-0 bg-white-50 rounded-br-xl rounded-bl-xl'>
                        <div className='w-full text-center px-5 py-2 text-black text-2xl font-bold'>Konfirmasi Data</div>
                        <div className='w-full text-center px-5 py-2 text-black text-lg font-medium'>Pastikan Data Yang Anda Masukan Sudah Benar!</div>
                        <div className='w-full flex justify-center gap-5'>
                            <button className='border borfer-grey-500 w-36 p-2 px-5 text-xl rounded-md'>Batal </button>
                            <button className='border bg-[#F0B400] w-36 text-white-50 p-2 px-5 text-xl rounded-md' onClick={save}>Simpan</button>
                        </div>
                    </div>
                </div>
            </ModalWrapper>
        </>
    )
}

export default CreateBarangMasuk