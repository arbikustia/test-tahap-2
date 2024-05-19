import React from 'react'
import useFetchExample from '@/Hooks/ExampleSlice';
import { getExample } from '@/Constant/EXAMPLE_DUMMY';
import PaginatorApi from '@/Components/Table/PaginationApi';
import Plus from '@/assets/icons/plus.svg';
import { useNavigate } from 'react-router-dom';
import Search from '@/Components/Search/Search';





const KomplainJatuhTempo = () => {
    const navigate = useNavigate()

    const {
        dataExample,
        pagination,
        limitChangeHandler,
        pageChangeHandler,
        searchHandler,
        queryParams,
    } = useFetchExample();

    return (
        <>
            <div className="w-full grid h-fit bg-black-10 ">
                <div className="flex-shrink-0 w-full py-4 ">
                    <div className="w-full flex flex-col items-start gap-4 flex-shrink-0">
                        <div className="w-full flex flex-col items-end gap-4 self-stretch rounded-xl bg-white-50 dark:bg-grey-700 p-4">
                            <div className="w-full flex justify-between items-center py-4">
                                <div className='flex  flex-col'>
                                    <span className="text-md">REFUND</span>
                                    <span className=" text-black font-extrabold text-2xl">Komplain Jatuh Tempo</span>
                                </div>
                                <div className='flex items-end justify-around gap-x-10'>
                                    <div className="w-44 flex flex-col gap-2 justify-between">
                                        <Search searchHandler={searchHandler} />
                                    </div>

                                </div>

                            </div>
                            <div className="w-full overflow-y-auto max-h-[58vh]">
                                <table className="min-w-full bg-white">
                                    <thead className=" bg-white-500 dark:bg-grey-600">
                                        <tr className="">
                                            <th className="py-2 px-4 text-center">No Pesanan</th>
                                            <th className="py-2 px-4 text-center">Username</th>
                                            <th className="py-2 px-4 text-center">Tanggal</th>
                                            <th className="py-2 px-4 text-center">Marketplace</th>
                                            <th className="py-2 px-4 text-center">Produk Refund</th>
                                            <th className="py-2 px-4 text-center">SKU</th>
                                            <th className="py-2 px-4 text-center">Harga</th>
                                            <th className="py-2 px-4 text-center">Qty</th>
                                            <th className="py-2 px-4 text-center">Jumlah Refund</th>
                                            <th className="py-2 px-4 text-center">Permasalahan</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white-7000 text-white-10 bg-white-50 dark:bg-grey-700 ">
                                        {dataExample.map((item: getExample, index: number) => (
                                            <tr key={`table-${index}`} className="border-gray-500">

                                                <td className="py-2 px-4 text-center">
                                                    {item.description_repair}
                                                </td>
                                                <td className="py-2 px-4 text-center">
                                                    {item.description_repair}
                                                </td>
                                                <td className="py-2 px-4 text-center">
                                                    {item.description_repair}
                                                </td>
                                                <td className="py-2 px-4 text-center">
                                                    {item.description_repair}
                                                </td>
                                                <td className="py-2 px-4 text-center">
                                                    {item.description_repair}
                                                </td>
                                                <td className="py-2 px-4 text-center">
                                                    {item.description_repair}
                                                </td>
                                                <td className="py-2 px-4 text-center ">
                                                    {item.datetime_entry}
                                                </td>
                                                <td className="py-2 px-4 text-center ">
                                                    {item.datetime_finish ? item.datetime_finish : '--'}
                                                </td>
                                                <td className="py-2 px-4 text-center ">
                                                    {item.nominal}
                                                </td>
                                                <td className="py-3 px-4  flex items-end justify-center ">
                                                    <div className='w-fit px-3 py-1 rounded-md bg-yellow-200 font-bold text-md text-end text-[#8C6B06]'>
                                                        {item.status}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </div>
                            {/* pagination here */}
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

        </>
    )
}

export default KomplainJatuhTempo