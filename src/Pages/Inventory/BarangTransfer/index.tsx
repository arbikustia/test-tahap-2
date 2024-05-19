import React, { useState } from 'react'
import deleteSuccessIcon from '@/assets/icons/delete-icon.svg'
import ModalWrapper from '@/Components/Modal/ModalWrapper';
import { Segmented } from 'antd';
import ListTransferBarang from './ListTransferBarang';
import KonfirmasiTransferBarang from './KonfirmasiTransferBrang';

type Align = 'List Transfer Barang' | 'Konfirmasi Transfer Barang';
const TransferBarang = () => {
    const [successDelete, setSuccessDelete] = useState(false)
    const [cuurentTab, setCurrentTab] = useState('List Transfer Kembali')

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
                            </div>
                            <div className="w-full overflow-y-auto max-h-[58vh]">
                                <>
                                    <Segmented
                                        defaultValue="List Transfer Barang"
                                        size='large'
                                        style={{ marginBottom: 8 }}
                                        onChange={(value) => setCurrentTab(value as Align)}
                                        options={['List Transfer Barang', 'Konfirmasi Transfer Barang']}
                                    />
                                </>
                                <div>
                                    {cuurentTab == 'List Transfer Barang' ? <ListTransferBarang /> :  <KonfirmasiTransferBarang />}
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

export default TransferBarang