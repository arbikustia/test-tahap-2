import Breadcrumb from '@/Components/Breadcrumb'
import ModalWrapper from '@/Components/Modal/ModalWrapper';
import { Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import ceklis from '@/assets/icons/ceklis.svg'
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchDropDown } from '@/Components/Dropdown/SearchDropDown';
import MasterService from '@/Services/Api/MasterData/MasterService';
import { peringatanStokType } from '@/Types/Inventory';
import { masterLokasiType } from '@/Types/MasterData';
import InventoryService from '@/Services/Api/Inventory';

const CreatePeringatanStok = () => {
    const [success, setSuccess] = useState(false);
    const [form] = Form.useForm<peringatanStokType>();
    const [dataBarang, setDataBarang] = useState([])
    const [dataLokasi, setDataLokasi] = useState([])
    const [valueBarang, setValuebarang] = useState('')
    const [valueLokasi, setValueLokasi] = useState('')
    const location = useLocation()
    const navigate = useNavigate()

    const items = [
        {
            label: 'Peringatan Stok',
            path: '/inventory/peringatan-stock'
        },
        {
            label: 'Tambah Peringatan Stok',
            path: '/inventory/peringatan-stock/create'
        }
    ];

    const getBarang = async () => {
        try {
            const response = await MasterService.dataMasterBarangAll()
            setDataBarang(response.data.data)
        } finally { /* empty */ }
    }
    const getLokasi = async () => {
        try {
            const response = await MasterService.dataMasterLokasiAll()
            setDataLokasi(response.data.data)
        } finally { /* empty */ }
    }

    const sku = dataBarang.map((item: peringatanStokType) => ({
        value: item.id,
        label: item.sku + '-' + item.nama_barang
    }));
    const barang = dataBarang.map((item: peringatanStokType) => ({
        value: item.id,
        label: item.nama_barang
    }));
    const varian = dataBarang.map((item: peringatanStokType) => ({
        value: item.id,
        label: item.varian
    }));
    const lokasi = dataLokasi.map((item: masterLokasiType) => ({
        value: item.id,
        label: item.nama_lokasi
    }));


    useEffect(() => {
        getBarang()
        getLokasi()
    }, [])

    const save = async (value: Partial<peringatanStokType>) => {
        try {
            console.log(value)
            const id = location?.state?.data?.id ? location?.state?.data?.id : ''
            if (id !== '') {
                const body = {
                    id:id,
                    id_barang: valueBarang ? valueBarang : location?.state?.data?.id_barang,
                    id_lokasi: valueLokasi ? valueLokasi : location?.state?.data?.id_lokasi,
                    minimal_stok: value.MinimalStok,
                }
                await InventoryService.putPeringatanStok(location?.state?.data?.id, body)
            } else {
                const body = {
                    daftar_peringatan_stok: [
                        {
                            id_barang: valueBarang,
                            id_lokasi: valueLokasi,
                            minimal_stok: value.MinimalStok,
                        }
                    ]
                }
                await InventoryService.postPeringatanStok(body)
            }
            setSuccess(true)
        } catch { /* empty */ }
    }


    useEffect(() => {
        form.setFieldsValue({
            MinimalStok: location?.state?.data?.MinimalStok,
        });
        console.log(location?.state?.data)
    }, [])


    return (
        <>
            <div className="w-full grid h-fit overflow-auto bg-white-50 rounded-xl p-3 my-5">
                <Breadcrumb items={items} />
                <div className=" w-full h-fit">
                    <div className=' flex flex-col row-span-1 py-4 gap-4 h-fit text-3xl'>
                        <span className='font-extrabold'>Tambah Peringatan Stok</span>
                    </div>
                    <div className=''>
                        <Form
                            form={form}
                            layout="vertical"
                            requiredMark={false}
                            autoComplete="off"
                            className="w-full h-fit p-5"
                            onFinish={save}>
                            <div className=" h-fit w-full grid grid-cols-2 gap-x-10 pt-3">
                                <div className="">
                                    <Form.Item label="Id" name="id" hidden>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        label="SKU"
                                        name="sku"
                                        className='text-xl'
                                        rules={[{ required: false, message: 'Mohon Masukan SKU!' }]}>
                                        <SearchDropDown SelectFunc={(e) => setValuebarang(e)} option={sku} defaultSelectedValue={location?.state?.data?.id_barang ? location?.state?.data?.id_barang : ''} />
                                    </Form.Item>
                                    <Form.Item
                                        label="Lokasi"
                                        name="lokasi"
                                        rules={[{ required: false, message: 'Mohon Masukan Lokasi!' }]}>
                                        <SearchDropDown SelectFunc={(e) => setValueLokasi(e)} option={lokasi} defaultSelectedValue={location?.state?.data ? location?.state?.data?.id_lokasi : ''} />
                                    </Form.Item>
                                    <Form.Item
                                        label="Peringatan Stok"
                                        name="MinimalStok"
                                        rules={[{ required: false, message: 'Mohon Masukan Peringatan Stok!' }]}>
                                        <Input type='number' size="large" className='h-14 w-full' placeholder='Input Peringatan Stok' />
                                    </Form.Item>
                                </div>
                                <div className="    ">
                                    <Form.Item
                                        label="Nama Barang"
                                        name="nama_barang"
                                        rules={[{ required: false, message: 'Mohon Masukan Nama Barang!' }]}>
                                        {valueBarang !== '' || location?.state?.data ?
                                            <SearchDropDown isDisabled SelectFunc={(e) => console.log(e)} option={barang} defaultSelectedValue={location?.state?.data ? location?.state?.data?.id_barang : valueBarang} />
                                            :
                                            <div className='w-full h-14 border bg-white-500 border-white-600 rounded-md flex px-5 items-center'></div>
                                        }
                                        {/* <Input disabled type='text' size="large" className='h-14 w-full' placeholder='[Otomatis]' /> */}
                                    </Form.Item>
                                    <Form.Item
                                        label="Varian"
                                        name="varian"
                                        rules={[{ required: false, message: 'Mohon Masukan Varian!' }]}>
                                        {valueBarang !== '' || location?.state?.data ?
                                            <SearchDropDown isDisabled SelectFunc={(e) => console.log(e)} option={varian} defaultSelectedValue={location?.state?.data ? location?.state?.data?.id_barang : valueBarang} />
                                            :
                                            <div className='w-full h-14 border bg-white-500 border-white-600 rounded-md flex px-5 items-center'></div>
                                        }
                                    </Form.Item>


                                </div>
                            </div>
                            <div className='w-full flex justify-end border-t border-dashed border-gray-300'>
                                <div className='flex justify-end py-5 text-blue-500 gap-5'>
                                    <button className="font-bold rounded-md flex justify-center gap-2 items-center border border-blue-500  text-blue-500 w-48 h-12 " onClick={() => navigate('/inventory/peringatan-stock')}>
                                        <span className='text-blue-500 text-lg'>Batalkan</span>
                                    </button>
                                    <button className="font-bold rounded-md flex justify-center gap-2 items-center border border-blue-500 bg-blue-600 w-48 h-12 ">
                                        <span className='text-white-50 text-lg ' onClick={() => save}>Simpan</span>
                                    </button>
                                </div>
                            </div>
                        </Form>
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
                        <div className='w-full text-center px-5 py-2 text-black text-2xl font-medium'>Data telah berhasil dibuat</div>
                    </div>
                </div>
            </ModalWrapper>
        </>
    )
}

export default CreatePeringatanStok