import Breadcrumb from '@/Components/Breadcrumb'
import ModalWrapper from '@/Components/Modal/ModalWrapper';
import { Form, Input } from 'antd';
import { useState } from 'react';
import ceklis from '@/assets/icons/ceklis.svg'
import MasterService from '@/Services/Api/MasterData/MasterService';
import { masterVarianType } from '@/Types/MasterData';

const CreateMasterVarian = () => {
    const [success, setSuccess] = useState(false);
    const [form] = Form.useForm<Partial<masterVarianType> >();

    const items = [
        {
            label: 'Master Varian',
            path: '/master/varian'
        },
        {
            label: 'Tambah Varian',
            path: '/master/varian/create'
        }
    ];

    const save = async (value:Partial<masterVarianType> ) => {
        try{
            console.log(value)
            await MasterService.postMasterVarian(value.varian)
        }finally{ 
            setSuccess(true)
         }
     }


    return (
        <>
            <div className="w-full grid h-fit overflow-auto bg-white-50 rounded-xl p-3 my-5">
                <Breadcrumb items={items} />
                <div className=" w-full h-fit">
                    <div className=' flex flex-col row-span-1 py-4 gap-4 h-fit text-3xl'>
                        <span className='font-extrabold'>Tambah Varian</span>
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
                                        label="Varian"
                                        name="varian"
                                        className='text-xl'
                                        rules={[{ required: false, message: 'Mohon Masukan Varian!' }]}>
                                        <Input  type='text' size="large" className='h-14 w-full' placeholder='Input Varian' />
                                    </Form.Item>
                                    
                                </div>
                                
                            </div>
                            <div className='w-full flex justify-end border-t border-dashed border-gray-300'>
                                <div className='flex justify-end py-5 text-blue-500 gap-5'>
                                    <button className="font-bold rounded-md flex justify-center gap-2 items-center border border-blue-500  text-blue-500 w-48 h-12 ">
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
                        <div className='w-full text-center px-5 py-2 text-black text-2xl font-medium'>Master Data telah berhasil dibuat</div>
                    </div>
                </div>
            </ModalWrapper>
        </>
    )
}

export default CreateMasterVarian