import Breadcrumb from '@/Components/Breadcrumb'
import ModalWrapper from '@/Components/Modal/ModalWrapper';
import { createExample } from '@/Constant/EXAMPLE_DUMMY';
import { DatePicker, Form, Input, Space } from 'antd';
import { useState } from 'react';
import ceklis from '@/assets/icons/ceklis.svg'
import deleteSuccessIcon from '@/assets/icons/delete-icon.svg'
import { SearchDropDown } from '@/Components/Dropdown/SearchDropDown';
import { useNavigate } from 'react-router-dom';



const TambahKomplain = () => {
    const [success, setSuccess] = useState(false);
    const [successDelete, setSuccessDelete] = useState(false);
    const navigate = useNavigate()
    const items = [
        {
            label: 'Refund',
            path: '/refund/komplain'
        },
        {
            label: 'Tambah komplain',
            path: '/refund/komplain/tambah-komplain'
        }
    ];
    const marketplacelist = [
        {
            label: 'TOKOPEDIA',
            value: 'tokopedia',
        },
        {
            label: 'SHOPEE',
            value: 'shopee',
        },
        {
            label: 'OLX',
            value: 'olx',
        },
    ]

    const [form] = Form.useForm<createExample>();

    const save = () => {

    }

    const handleDatePicker = (date: unknown, dateString: string) => {
        console.log('Selected Date:', date);
        console.log('Formatted Date String:', dateString);
        // setData({ ...data, date: dateString })
    };

    return (
        <>
            <div className="w-full grid h-[85vh] overflow-auto bg-white-50 rounded-xl p-3 my-5">
                <Breadcrumb items={items} />
                <div className=" w-full h-[100vh]">
                    <div className=' flex flex-col row-span-1 py-5 gap-4 h-fit text-2xl'>
                        <span className='font-extrabold'>Tambah Komplain</span>
                        <span className='font-medium text-lg flex items-center gap-2 mt-5'><div className='w-3 h-3 bg-blue-600 rounded-full'></div> ISI DATA KOMPLAIN</span>
                    </div>
                    <Form
                        form={form}
                        layout="vertical"
                        requiredMark={false}
                        autoComplete="off"
                        className="w-full h-fit p-5"
                        onFinish={save}>
                        <div className=" h-fit w-full grid grid-cols-2 gap-x-10 pt-3">
                            <div className="grid grid-rows-2">
                                <Form.Item label="Id" name="id" hidden>
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    className='text-xl'
                                    rules={[{ required: false, message: 'Mohon Masukan Username!' }]}>
                                    <Input type='number' size="large" className='h-14 w-full ' placeholder='Input Username' />
                                </Form.Item>
                                <Form.Item
                                    label="Tanggal"
                                    name="tanggal"
                                    rules={[{ required: false, message: 'Mohon Masukan Tanggal!' }]}>
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
                                    label="Marketplace"
                                    name="marketplace"
                                    rules={[{ required: false, message: 'Mohon Masukan marketplace!' }]}>
                                    <SearchDropDown option={marketplacelist} SelectFunc={(e) => console.log(e)} />
                                </Form.Item>
                                <Form.Item
                                    label="No Pesanan"
                                    name="no_pesanan"
                                    rules={[{ required: false, message: 'Mohon Masukan Nomer Pesanan!' }]}>
                                    <Input size="large" className='h-14 w-full' placeholder='Input No Pesanan' />
                                </Form.Item>
                                <Form.Item
                                    label="Produk Refund"
                                    name="produk_refund"
                                    rules={[{ required: false, message: 'Mohon Masukan Produk Refund!' }]}>
                                    <Input size="large" className='h-14 w-full' placeholder='Tulis Produk Refund' />
                                </Form.Item>
                                <Form.Item
                                    label="SKU"
                                    name="sku"
                                    rules={[{ required: false, message: 'Mohon Masukan SKU!' }]}>
                                    <Input size="large" className='h-14 w-full' placeholder='Tulis SKU Barang' />

                                </Form.Item>
                            </div>
                            <div className="grid grid-rows-6">
                                <Form.Item
                                    label="Harga Produk"
                                    name="harga_produk"
                                    rules={[{ required: false, message: 'Mohon Masukan Harga Produk!' }]}>
                                    <Input type='number' addonBefore='Rp' size="large" className='h-14' placeholder='Tulis Nominal' />
                                </Form.Item>
                                <Form.Item
                                    label="QTY"
                                    name="qty"
                                    rules={[{ required: false, message: 'Mohon Masukan Jumlah Barang!' }]}>
                                    <Input type='number' size="large" className='h-14' placeholder='Tulis Jumlah Barang' />
                                </Form.Item>
                                <Form.Item
                                    label="Harga Total Produk Refund"
                                    name="harga_total_produk_refund"
                                    rules={[{ required: false, message: 'Mohon Masukan Harga Total Produk Refund!' }]}>
                                    <Input addonBefore='Rp' type='number' size="large" className='h-14' placeholder='Tulis Nominal' />
                                </Form.Item>
                                <Form.Item
                                    label="Permasalahan"
                                    name="harga_cbm"
                                    rules={[{ required: false, message: 'Mohon Masukan permasalahan!' }]}>
                                    <Input size="large" className='h-14' placeholder='Tulis Permasalahan' />
                                </Form.Item>
                                <Form.Item
                                    label="Notifikasi"
                                    name="notifikasi"
                                    rules={[{ required: false, message: 'Mohon Masukan Notifikasi!' }]}>
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

                            </div>
                        </div>
                        <div className='w-full  grid grid-cols-2 justify-center'>
                            <div className='border-t border-dashed border-gray-300 flex items-center gap-2'></div>
                            <div className='border-t border-dashed border-gray-300 flex justify-end py-5 gap-10 text-blue-500'>
                                <button onClick={() => navigate('/refund/peringatan-komplain')} className="font-bold rounded-md flex justify-center gap-2 items-center border border-blue-500 w-44 h-12 ">
                                    <span className='text-blue-500 text-md' >Batalkan</span>
                                </button>
                                <button onClick={() => setSuccess(true)} className="font-bold rounded-lg flex justify-center gap-2 items-center border bg-blue-500 w-44 h-12 ">
                                    <span className='text-white-50 text-md '  >Buat Pesanan</span>
                                </button>

                            </div>
                        </div>
                    </Form>
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
                            “Produk : Wristband-L” ?</div>
                        <div className='w-full flex justify-center gap-5'>
                            <button className='border border-grey-200 px-5 text-xl rounded-md'>Batal </button>
                            <button className='border bg-red-500 text-white-50 p-2 px-5 text-xl rounded-md'>Ya, Hapus </button>
                        </div>
                    </div>
                </div>
            </ModalWrapper>
        </>
    )
}

export default TambahKomplain