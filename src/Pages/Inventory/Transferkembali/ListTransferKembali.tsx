import React from 'react'
import useFetchMasterBarang from '@/Hooks/MasterData/MasterBarangSlice';
import { masterProdukType } from '@/Types/MasterData/MasterBarang.Type';
import EditIcon from '@/assets/icons/edite-table.svg'
import DeleteIcon from '@/assets/icons/delete-table.svg'
import PaginatorApi from '@/Components/Table/PaginationApi';
import Search from '@/Components/Search/Search';
import { useNavigate } from 'react-router-dom';
import Plus from '@/assets/icons/plus.svg';


const ListTransferKembali = () => {
    const navigate = useNavigate()


    const {
        dataMasterBarang,
        pagination,
        limitChangeHandler,
        pageChangeHandler,
        searchHandler,
        queryParams,
    } = useFetchMasterBarang();

    return (
        <>
            <div className="w-full flex justify-end items-center py-4">
                <div className='flex items-end justify-around gap-x-10'>
                    <div className="w-96 flex flex-col gap-2 justify-between">
                        <Search searchHandler={searchHandler} />
                    </div>
                    <div className='text-blue-500'>
                        <button onClick={() => navigate('/inventory/transfer-barang-kembali/create')} className="font-bold rounded-md flex justify-center gap-2 items-center  bg-blue-500 text-white-50 w-60 h-12 hover:bg-blue-800">
                            <img src={Plus} alt="" /><span className='text-white-500'>Tambah Peringatan Stok</span>
                        </button>
                    </div>
                    
                </div>

            </div>
            <div>
                <table className="min-w-full bg-white">
                    <thead className=" bg-white-500 dark:bg-grey-600">
                        <tr className="">
                            <th className="py-2 px-4 text-center">No</th>
                            <th className="py-2 px-4 text-center">ID Transaksi</th>
                            <th className="py-2 px-4 text-center">Lokasi Tujuan</th>
                            <th className="py-2 px-4 text-center">SKU</th>
                            <th className="py-2 px-4 text-center">Nama Barang</th>
                            <th className="py-2 px-4 text-center">Varian</th>
                            <th className="py-2 px-4 text-center">Jumlah</th>
                            <th className="py-2 px-4 text-center">Stok</th>
                            <th className="py-2 px-4 text-center">Status</th>
                            <th className="py-2 px-4 text-center">Tanggal Transfer</th>
                            <th className="py-2 px-4 text-center">Surat Jalan</th>
                            <th className="py-2 px-4 text-center">Aktivitas</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white-7000 text-white-10 bg-white-50 dark:bg-grey-700 ">
                        {dataMasterBarang.map((item: masterProdukType, index: number) => (
                            <tr key={`table-${index}`} className="border-gray-300 border-b ">
                                <td className="py-2 px-4 text-center">
                                    {index + 1}
                                </td>
                                <td className="py-2 px-4 text-center">
                                    {item.nama_barang}
                                </td>
                                <td className="py-2 px-4 text-center">
                                    {item.sku}
                                </td>
                                <td className="py-2 px-4 text-center">
                                    {item.varian}
                                </td>
                                <td className="py-2 px-4 text-center">
                                    {item.harga_default}
                                </td>
                                <td className="py-2 px-4 text-center">
                                    {item.last_update}
                                </td>
                                <td className="py-2 px-4 text-center">
                                    {item.last_update}
                                </td>
                                <td className="py-2 px-4 text-center">
                                    {item.last_update}
                                </td>
                                <td className="py-2 px-4 text-center">
                                    {item.last_update}
                                </td>
                                <td className="py-2 px-4 text-center">
                                    {item.last_update}
                                </td>
                                <td className="py-2 px-4 text-center">
                                    {item.last_update}
                                </td>
                                <td className="py-4 px-4  text-left flex gap-x-2 justify-center items-center ">
                                    <img
                                        src={EditIcon}
                                        width={40}
                                        height={40}
                                        alt="edit"
                                        className="cursor-pointer hover:scale-105 transition-all p-1"
                                    />
                                    <img
                                        src={DeleteIcon}
                                        width={40}
                                        height={40}
                                        onClick={() => console.log(true)}
                                        alt="delete"
                                        className="cursor-pointer hover:scale-105 transition-all p-1"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <PaginatorApi
                    limit={queryParams.PageSize!}
                    page={queryParams.PageNumber!}
                    setLimit={limitChangeHandler}
                    setPage={pageChangeHandler}
                    totalPage={pagination.TotalPages}
                />
            </div>
        </>
    )
}

export default ListTransferKembali