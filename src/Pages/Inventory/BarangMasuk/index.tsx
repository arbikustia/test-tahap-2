import React, { useState } from 'react'
import PaginatorApi from '@/Components/Table/PaginationApi';
import Plus from '@/assets/icons/plus.svg';
import { useNavigate } from 'react-router-dom';
import Search from '@/Components/Search/Search';
// import EditIcon from '@/assets/icons/edite-table.svg'
import deleteSuccessIcon from '@/assets/icons/delete-icon.svg'
// import DeleteIcon from '@/assets/icons/delete-table.svg'
import ModalWrapper from '@/Components/Modal/ModalWrapper';
import { Button } from 'antd';
import ExportIcon from '@/assets/icons/export.svg';
import useFetchInventoryBarangMasuk from '@/Hooks/Inventory/InventoryBarangMasukSlice';
import { inventoryBarangMasukType } from '@/Types/Inventory';
import InventoryService from '@/Services/Api/Inventory';
import { downloadFile } from '@/Lib/Utils/DownloadFile';




const BarangMasukInventory = () => {
    const navigate = useNavigate()
    const [successDelete, setSuccessDelete] = useState(false)
    const [dataDelte, setDataDelete] = useState({
        name: '',
        id: ''
    });

    const {
        dataInventoryBarangMasuk,
        pagination,
        limitChangeHandler,
        pageChangeHandler,
        searchHandler,
        queryParams,
        setQueryParams,
    } = useFetchInventoryBarangMasuk();

    const downloadExcel = async () => {
        // setDownloadLoad1(true);
        try {
            const response = await InventoryService.dataBarangMasukDownload(queryParams);
            downloadFile(response);
        } catch (error) {
            //   openNotification('error', 'Something went wrong');
        } finally {
            //   setDownloadLoad1(false);
        }
    };


    const deleteData = async () => {
        try {
            await InventoryService.deleteBarangMasuk(dataDelte.id);
        } finally {
            setSuccessDelete(false)
            setQueryParams({
                ...queryParams,
                PageNumber: 1
            })
        }
    };



    return (
        <>
            <div className="w-full grid h-fit bg-black-10 ">
                <div className="flex-shrink-0 w-full py-4 ">
                    <div className="w-full flex flex-col items-start gap-4 flex-shrink-0">
                        <div className="w-full flex flex-col items-end gap-4 self-stretch rounded-xl bg-white-50 dark:bg-grey-700 p-4">
                            <div className="w-full flex justify-between items-center py-4">
                                <div className='flex  flex-col'>
                                    <span className="text-md">INVENTORY</span>
                                    <span className=" text-black font-extrabold text-2xl">Barang Masuk</span>
                                </div>
                                <div className='flex items-end justify-around gap-x-10'>
                                    <div className="w-96 flex flex-col gap-2 justify-between">
                                        <Search searchHandler={searchHandler} />
                                    </div>
                                    <div className='text-blue-500'>
                                        <button onClick={() => navigate('/inventory/data/barang-masuk/create')} className="font-bold rounded-md flex justify-center gap-2 items-center  bg-blue-500 text-white-50 w-60 h-12 hover:bg-blue-800">
                                            <img src={Plus} alt="" /><span className='text-white-500'>Tambah Barang Masuk</span>
                                        </button>
                                    </div>
                                    <div className='text-blue-500'>
                                        <Button
                                            className="border-4 font-bold flex justify-center items-center border-blue-500 text-blue-500 w-44 h-12"
                                            type="text"
                                            onClick={downloadExcel}
                                            icon={<img src={ExportIcon} />}
                                            size={'large'}>
                                            <span className='text-blue-500'>Export (.xlxs)</span>
                                        </Button>
                                    </div>
                                </div>

                            </div>
                            <div className="w-full overflow-y-auto max-h-[58vh]">
                                <table className="min-w-full bg-white">
                                    <thead className=" bg-white-500 dark:bg-grey-600">
                                        <tr className="">
                                            <th className="py-2 px-4 text-center">No</th>
                                            <th className="py-2 px-4 text-center">SKU</th>
                                            <th className="py-2 px-4 text-center">Nama Barang</th>
                                            <th className="py-2 px-4 text-center">Varian</th>
                                            <th className="py-2 px-4 text-center">Barang Masuk</th>
                                            <th className="py-2 px-4 text-center">Jumlah Stok Rak</th>
                                            <th className="py-2 px-4 text-center">Rak</th>
                                            <th className="py-2 px-4 text-center">Lokasi</th>
                                            <th className="py-2 px-4 text-center">Tanggal Masuk</th>
                                            {/* <th className="py-2 px-4 text-center">Aktivitas</th> */}
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white-7000 text-white-10 bg-white-50 dark:bg-grey-700 ">
                                        {dataInventoryBarangMasuk.map((item: inventoryBarangMasukType, index: number) => (
                                            <tr key={`table-${index}`} className="border-gray-300 border-b ">
                                                <td className="py-2 px-4 text-center">
                                                    {index + 1}
                                                </td>
                                                <td className="py-2 px-4 text-center">
                                                    {item.sku}
                                                </td>
                                                <td className="py-2 px-4 text-center">
                                                    {item.nama_barang}
                                                </td>
                                                <td className="py-2 px-4 text-center">
                                                    {item.varian}
                                                </td>
                                                <td className="py-2 px-4 text-center">
                                                    {item.quantity}
                                                </td>
                                                <td className="py-2 px-4 text-center">
                                                    {item.quantity}
                                                </td>
                                                <td className="py-2 px-4 text-center">
                                                    {item.rak}
                                                </td>
                                                <td className="py-2 px-4 text-center">
                                                    {item.lokasi}
                                                </td>
                                                <td className="py-2 px-4 text-center">
                                                    {item.tanggal_masuk}
                                                </td>
                                                {/* <td className="py-4 px-4  text-left flex gap-x-2 justify-center items-center ">
                                                    <img
                                                        src={EditIcon}
                                                        onClick={() => navigate(`/inventory/data/barang-masuk/create`, {
                                                            state: {
                                                                data:[ {
                                                                    id_barang: item.id_barang,
                                                                    id_lokasi: item.id_lokasi,
                                                                    id_rak: item.id_rak,
                                                                    quantity: item.quantity,
                                                                }],
                                                                id: item.id,
                                                                nama_barang: item.nama_barang,
                                                                varian: item.varian,

                                                            }
                                                        })}
                                                        width={40}
                                                        height={40}
                                                        alt="edit"
                                                        className="cursor-pointer hover:scale-105 transition-all p-1"
                                                    />
                                                    <img
                                                        src={DeleteIcon}
                                                        width={40}
                                                        height={40}
                                                        onClick={() => { setSuccessDelete(true), setDataDelete({ name: item.nama_barang, id: item.id }) }}
                                                        alt="delete"
                                                        className="cursor-pointer hover:scale-105 transition-all p-1"
                                                    />
                                                </td> */}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </div>
                            <PaginatorApi
                                limit={queryParams.PageSize!}
                                page={queryParams.PageNumber!}
                                setLimit={limitChangeHandler}
                                setPage={pageChangeHandler}
                                totalPage={pagination.TotalPages}
                            />
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
                            <button className='border bg-red-500 text-white-50 p-2 px-5 text-xl rounded-md' onClick={deleteData}>Ya, Hapus </button>
                        </div>
                    </div>
                </div>
            </ModalWrapper>
        </>
    )
}

export default BarangMasukInventory