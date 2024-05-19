import React, { useEffect, useState } from 'react'
import deleteSuccessIcon from '@/assets/icons/delete-icon.svg'
import ModalWrapper from '@/Components/Modal/ModalWrapper';
import { Segmented } from 'antd';
import ListTransferKembali from './ListTransferKembali';
import KonfirmasiTransferBarang from './KonfirmasiTransferBarang';

type Align = 'start' | 'center' | 'end';
const TransferBarangkembali = () => {
    const [successDelete, setSuccessDelete] = useState(false)
    const [cuurentTab, setCurrentTab] = useState('List Transfer Kembali')


    useEffect(() => {
        console.log(cuurentTab)
    }, [cuurentTab])
    return (
        <>
            <div className="w-full grid h-fit bg-black-10 ">
                <div className="flex-shrink-0 w-full py-4 ">
                    <div className="w-full flex flex-col items-start gap-4 flex-shrink-0">
                        <div className="w-full flex flex-col items-end gap-4 self-stretch rounded-xl bg-white-50 dark:bg-grey-700 p-4">
                            <div className="w-full flex justify-between items-center py-4">
                                <div className='flex  flex-col'>
                                    <span className="text-md">INVENTORY</span>
                                    <span className=" text-black font-extrabold text-2xl">Transfer Kembali</span>
                                </div>
                                {/* <div className='flex items-end justify-around gap-x-10'>
                                    <div className="w-96 flex flex-col gap-2 justify-between">
                                        <Search searchHandler={searchHandler} />
                                    </div>
                                    <div className='text-blue-500'>
                                        <button onClick={() => navigate('/inventory/data/barang-masuk/create')} className="font-bold rounded-md flex justify-center gap-2 items-center  bg-blue-500 text-white-50 w-60 h-12 hover:bg-blue-800">
                                            <img src={Plus} alt="" /><span className='text-white-500'>Tambah Barang Masuk</span>
                                        </button>
                                    </div>

                                </div> */}
                            </div>
                            <div className="w-full overflow-y-auto max-h-[58vh]">
                                <>
                                    <Segmented
                                        defaultValue="List Transfer Kembali"
                                        size='large'
                                        style={{ marginBottom: 8 }}
                                        onChange={(value) => setCurrentTab(value as Align)}
                                        options={['List Transfer Kembali', 'Konfirmasi Transfer Barang']}
                                    />
                                </>
                                <div>
                                    {cuurentTab == 'List Transfer Kembali' ? <ListTransferKembali /> : <KonfirmasiTransferBarang />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

export default TransferBarangkembali