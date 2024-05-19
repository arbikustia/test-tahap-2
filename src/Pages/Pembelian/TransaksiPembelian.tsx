import { SearchDropDown } from '@/Components/Dropdown/SearchDropDown'
import React, { useEffect, useState } from 'react'
import { Button } from 'antd';
import PaginatorApi from '@/Components/Table/PaginationApi';
import ExportIcon from '@/assets/icons/export.svg';
import Plus from '@/assets/icons/plus.svg';
import { useNavigate } from 'react-router-dom';
import useFetchTransaksiPembelian from '@/Hooks/PembelianSlice';
import { dataTableTransaksiPembelianType } from '@/Types/Pembelian/Pembelian.Types';
import TransaksiPembelianService from '@/Services/Api/Pembelian/PembelianService';
import { DATA_LOKASI } from '@/Constant/Pembelian/PEMBELIAN_DUMMY';
import ModalWrapper from '@/Components/Modal/ModalWrapper';
import ConfirmIcon from '@/assets/icons/confirm-icon.svg'


const TransaksiPembelian = () => {
    const navigate = useNavigate()
    const [location, setLocation] = useState(DATA_LOKASI)
    const [confirm, setConfirm] = useState(false);
    const status = [
        {
            label: 'Semua Status',
            value: ''
        },
        {
            label:'b001' + '-' + 'selesai' ,
            value:  'selesai'
        },
        {
            label: 'Dalam Perjalanan',
            value: 'dalam perjalanan'
        }
    ]


    const getLocation = async () => {
        const response = await TransaksiPembelianService.dataLokasi()
        setLocation(response.data.data)
    }
    const {
        dataTransaksiPembelian,
        pagination,
        limitChangeHandler,
        pageChangeHandler,
        queryParams,
    } = useFetchTransaksiPembelian();

    const downloadForm = async () => {
        // setDownloadLoad2(true);
        try {
            //   const response = await reportService.downloadReport(queryParams);
            //   downloadFile(response);
            // console.log('r',response.headers['x-download'])
        } catch (error) {
            //   openNotification('error', 'Something went wrong');
        } finally {
            //   setDownloadLoad2(false);
        }
    };

    useEffect(() => {
        getLocation()
    }, [])

    return (
        <>
            <div className="w-full grid h-fit bg-black-10 ">
                <div className="flex-shrink-0 w-full py-4 ">
                    <div className="w-full flex flex-col items-start gap-4 flex-shrink-0">
                        <div className="w-full flex flex-col items-end gap-4 self-stretch rounded-xl bg-white-50 dark:bg-grey-700 p-4">
                            <div className="w-full flex justify-between items-center py-4">
                                <div className='flex  flex-col'>
                                    <span className="text-md">PEMBELIAN</span>
                                    <span className=" text-black font-extrabold text-2xl">Transaksi Pembelian</span>
                                </div>
                                <div className='flex items-end justify-around gap-x-10'>
                                    <div className="w-44 flex flex-col gap-2 justify-between">
                                        <div>Status</div>
                                        <SearchDropDown SelectFunc={(e) => console.log(e)} option={status} />
                                    </div>
                                    <div className="w-44 flex flex-col gap-2 justify-between">
                                        <div>Location</div>
                                        <SearchDropDown SelectFunc={(e) => console.log(e)} option={location} />
                                    </div>
                                        <div className='text-blue-500'>
                                            <Button
                                                className="border-4 font-bold flex justify-center items-center border-blue-500 text-blue-500 w-44 h-12"
                                                type="text"
                                                onClick={downloadForm}
                                                icon={<img src={ExportIcon} />}
                                                size={'large'}>
                                                <span className='text-blue-500'>Export (.xlxs)</span>
                                            </Button>
                                        </div>
                                    <div className='text-blue-500'>
                                        <button onClick={() => navigate('/pembelian/create/transaksi')} className="font-bold rounded-md flex justify-center gap-2 items-center  bg-blue-500 text-white-50 w-48 h-12 hover:bg-blue-800">
                                            <img src={Plus} alt="" /><span className='text-white-500'>Tambah Pesanan</span>
                                        </button>
                                    </div>
                                </div>

                            </div>
                            <div className="w-full overflow-y-auto max-h-[58vh]">
                                <table className="min-w-full bg-white">
                                    <thead className=" bg-white-500 dark:bg-grey-600">
                                        <tr className="">
                                            <th className="py-2 px-4 text-center">No Pesanan</th>
                                            <th className="py-2 px-4 text-center">Supplier</th>
                                            <th className="py-2 px-4 text-center">Lokasi</th>
                                            <th className="py-2 px-4 text-center">Tanggal Order</th>
                                            <th className="py-2 px-4 text-center">Total Supplier</th>
                                            <th className="py-2 px-4 text-center">Total Ekspedisi</th>
                                            <th className="py-2 px-4 text-center">Status</th>
                                            <th className="py-2 px-4 text-center">Konfirmasi</th>
                                            <th className="py-2 px-4 text-center">Diterima Oleh</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white-7000 text-white-10 bg-white-50 dark:bg-grey-700 ">
                                        {dataTransaksiPembelian.map((item: dataTableTransaksiPembelianType, index: number) => (
                                            <tr key={`table-${index}`} className="border-gray-300 border-b">
                                                <td className="py-2 px-4 text-center ">
                                                    <a className='border-b-2 border-blue-500 text-blue-500 cursor-pointer' onClick={() => navigate('/pembelian/detail')}>
                                                        {item.no_pesanan}
                                                    </a>
                                                </td>
                                                <td className="py-2 px-4 text-center">
                                                    {item.supplier}
                                                </td>
                                                <td className="py-2 px-4 text-center ">
                                                    {item.lokasi}
                                                </td>
                                                <td className="py-2 px-4 text-center ">
                                                    {item.tanggal_order}
                                                </td>
                                                <td className="py-2 px-4 text-center ">
                                                    {item.total_supplier}
                                                </td>
                                                <td className="py-2 px-4 text-center ">
                                                    {item.total_ekspedisi}
                                                </td>
                                                <td className="py-3 px-4  flex items-end justify-center ">
                                                    <div className={`w-fit px-3 py-1 rounded-md font-bold text-md border-2 text-end ${item.status == 'Selesai' ? 'bg-green-200 bg-opacity-40 border-green-600 text-green-700' : 'bg-yellow-400 bg-opacity-40 border-yellow-600 text-yellow-700'} `} >
                                                        {item.status}
                                                    </div>
                                                </td>
                                                <td className="py-2 px-4 text-center ">
                                                    {item.status == 'Selesai'
                                                        ?
                                                        <button className={`px-5 h-10 rounded-md bg-blue-200 cursor-default font-bold text-md text-white-50`}>
                                                            Terima
                                                        </button>
                                                        :
                                                        <button onClick={() => setConfirm(true)} className={`px-5 h-10 rounded-md bg-blue-500 cursor-pointer font-bold text-md text-white-50`}>
                                                            Terima
                                                        </button>
                                                    }
                                                </td>
                                                <td className="py-2 px-4 text-center ">
                                                    {item.diterima_oleh ? item.diterima_oleh : '--'}
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
            <ModalWrapper modalOpen={confirm} setModalOpen={setConfirm}>
                <div className='h-96 w-full grid grid-rows-2 absolute -top-32 rounded-lg'>
                    <div className='w-full h-full top-0 flex flex-col bg-[#F0B400] rounded-tr-xl rounded-tl-xl'>
                        <div className='w-full text-end px-5 py-2 text-white-200 text-2xl font-medium' > <span className='cursor-pointer text-white-50' onClick={() => setConfirm(false)}>X</span></div>
                        <img className=' absolute top-[15%] left-[40%]' src={ConfirmIcon} alt="" />
                    </div>
                    <div className='w-full h-full top-0 bg-white-50 rounded-br-xl rounded-bl-xl'>
                        <div className='w-full text-center px-5 py-2 text-black text-2xl font-bold'>Terima Produk ?</div>
                        <div className='w-full text-center px-5 py-2 text-black text-lg font-medium'>Apakah kamu yakin sudah menerima produk “No Pesanan : PO-001” dengan benar ? </div>
                        <div className='w-full flex justify-center gap-5'>
                            <button className='border borfer-grey-500 w-36 p-2 px-5 text-xl rounded-md'>Batal </button>
                            <button className='border bg-[#F0B400] w-36 text-white-50 p-2 px-5 text-xl rounded-md'>Ya, Terima </button>
                        </div>
                    </div>
                </div>
            </ModalWrapper>
        </>
    )
}

export default TransaksiPembelian