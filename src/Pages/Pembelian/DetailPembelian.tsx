import Breadcrumb from '@/Components/Breadcrumb'
import ModalWrapper from '@/Components/Modal/ModalWrapper';
import { useEffect, useState } from 'react';
import ceklis from '@/assets/icons/ceklis.svg'
import editIcon from '@/assets/icons/edit.svg'
import deleteSuccessIcon from '@/assets/icons/delete-icon.svg'
import DeleteIcon from '@/assets/icons/trash.svg'
import TransaksiPembelianService from '@/Services/Api/Pembelian/PembelianService';
import { DATA_DETAIL_TRANSAKSI_PEMBELIAN } from '@/Constant/Pembelian/PEMBELIAN_DUMMY';
import { ProdukType } from '@/Types/Pembelian/Pembelian.Types';
import { SearchDropDown } from '@/Components/Dropdown/SearchDropDown';



const DetailPembelian = () => {
    const [success, setSuccess] = useState(false);
    const [successDelete, setSuccessDelete] = useState(false);
    const [addProduct, setAddProduct] = useState(false);
    const [detailPembelian, setDetailPembelian] = useState(DATA_DETAIL_TRANSAKSI_PEMBELIAN);
    const items = [
        {
            label: 'Pembelian',
            path: '/pembelian/transaksi'
        },
        {
            label: 'Transaksi Pembelian',
            path: '/pembelian/transaksi'
        },
        {
            label: detailPembelian[0].no_pesanan,
            path: ''
        },
    ];

    const produk = detailPembelian[0].data_produk?.map((item: ProdukType) => ({
        value: item.id_produk,
        label: item.produk + item.sku
    }));
    

    const getDetail = async () => {
        const response = await TransaksiPembelianService.dataDetailTransaksiPembelian()
        setDetailPembelian(response.data.data)
    }

    useEffect(() => {
        getDetail()
    }, [])


    return (
        <>
            <div className="w-full grid h-[85vh] overflow-auto bg-white-50 rounded-xl p-3 my-5">
                <Breadcrumb items={items} />
                <div className=" w-full h-[100vh]">
                    <div className=' flex flex-col row-span-1 py-4 gap-4 h-fit text-2xl'>
                        <div className='flex flex-row w-full justify-between items-center pr-10'>
                            <span className='font-extrabold my-10 text-4xl'>{detailPembelian[0].no_pesanan}</span>
                            <button onClick={() => setAddProduct(true)} className=" rounded-md flex justify-center gap-2 items-center border-4 border-blue-500  text-blue-500 w-36 h-12 ">
                                <img src={editIcon} alt="" /><span className='text-blue-500 font-extrabold text-lg '  >Edit Data</span>
                            </button>
                        </div>
                        <span className='font-medium text-2xl flex items-center gap-2 '><div className='w-3 h-3 bg-blue-600 rounded-full'></div> ISI DATA PESANAN</span>
                    </div>
                    <div className=" h-fit w-full grid grid-cols-3 gap-x-10 pt-3">
                        <div className="grid grid-rows-6">
                            <div className='w-full h-8 items-center text-2xl flex flex-row justify-between'>
                                <div className='w-full flex justify-start'>Estimasi Tiba</div>
                                <div className='w-full flex justify-start'>: {detailPembelian[0].estimasi_tiba}</div>
                            </div>
                            <div className='w-full h-8 items-center text-2xl flex flex-row justify-between'>
                                <div className='w-full flex justify-start'>Supplier</div>
                                <div className='w-full flex justify-start'>: {detailPembelian[0].supplier}</div>
                            </div>
                            <div className='w-full h-8 items-center text-2xl flex flex-row justify-between'>
                                <div className='w-full flex justify-start'>Lokasi</div>
                                <div className='w-full flex justify-start'>: {detailPembelian[0].lokasi}</div>
                            </div>
                            <div className='w-full h-8 items-center text-2xl flex flex-row justify-between'>
                                <div className='w-full flex justify-start'>Tanggal Order</div>
                                <div className='w-full flex justify-start'>: {detailPembelian[0].tanggal_order}</div>
                            </div>
                            <div className='w-full h-8 items-center text-2xl flex flex-row justify-between'>
                                <div className='w-full flex justify-start'>Keterangan</div>
                                <div className='w-full flex justify-start'>: {detailPembelian[0].keterangan}</div>
                            </div>
                        </div>
                        <div className="grid grid-rows-6">
                            <div className='w-full h-8 items-center text-2xl flex flex-row justify-between'>
                                <div className='w-full flex justify-start'>Ekspedisi</div>
                                <div className='w-full flex justify-start'>: {detailPembelian[0].ekspedisi}</div>
                            </div>
                            <div className='w-full h-8 items-center text-2xl flex flex-row justify-between'>
                                <div className='w-full flex justify-start'>Kode Marking</div>
                                <div className='w-full flex justify-start'>: {detailPembelian[0].kode_marking}</div>
                            </div>
                            <div className='w-full h-8 items-center text-2xl flex flex-row justify-between'>
                                <div className='w-full flex justify-start'>CBM (gr)</div>
                                <div className='w-full flex justify-start'>: {detailPembelian[0].cbm}</div>
                            </div>
                            <div className='w-full h-8 items-center text-2xl flex flex-row justify-between'>
                                <div className='w-full flex justify-start'>Harga per CBM</div>
                                <div className='w-full flex justify-start'>: {detailPembelian[0].harga_per_cbm}</div>
                            </div>
                            <div className='w-full h-8 items-center text-2xl flex flex-row justify-between'>
                                <div className='w-full flex justify-start'>tagihan</div>
                                <div className='w-full flex justify-start'>: {detailPembelian[0].tagihan}</div>
                            </div>
                        </div>
                        <div className='flex justify-end h-[100%] items-end gap-5 mr-10 flex-col'>
                            <div className="grid grid-rows-2 w-[90%] bg-white-400 h-full rounded-lg p-5">
                                <div className='flex flex-col justify-evenly h-[90%] gap-10  border-b border-grey-400'>
                                    <span className='font-extrabold text-2xl'>Rincian</span>
                                    <span className='text-lg font-semibold'>{detailPembelian[0].data_produk.length} Product ({detailPembelian[0].data_produk.reduce((total, item) => total + item.qty, 0)} Qty)</span>
                                </div>
                                <div className='flex flex-col gap-10 py-5 justify-center h-[100%]'>
                                    <div className='font-extrabold text-2xl w-full grid grid-cols-3'> <div className='col-span-2'>Total Supplier</div> <div>¥ {detailPembelian[0].total_supplier}</div></div>
                                    <div className='font-extrabold text-2xl w-full grid grid-cols-3'> <div className=' col-span-2'>Total Ekspedisi</div> <div >Rp {detailPembelian[0].total_ekspedisi}</div></div>
                                </div>
                                    {/* <button className='text-xl bg-blue-500rounded-xl h-14 text-white-50 font-bold' onClick={() => setSuccess(true)}>Buat Pesanan</button> */}
                            </div>
                            <div className='w-full flex flex-col justify-end items-end text-xl text-white-900'>
                                <span>Dibuat oleh {detailPembelian[0].created_by}</span>
                                <span>{detailPembelian[0].time}</span>
                            </div>
                        </div>

                    </div>
                    <div className='w-full grid grid-cols-3 justify-center '>
                        <div className='border-t  border-dashed py-10 border-gray-300 flex items-center gap-2'>
                            <div className='w-4 h-4 bg-blue-600 rounded-full'></div  >
                            <span className='text-xl text-grey-400'>PILIH PRODUK</span>
                        </div>
                        <div className='border-t border-dashed border-gray-300 flex justify-end py-5 text-blue-500'>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 py-5'>
                        <table className="min-w-full col-span-3 bg-white">
                            <thead className=" bg-white-400">
                                <tr className="">
                                    <th className="py-4 px-4 text-center">Produk</th>
                                    <th className="py-4 px-4 text-center">SKU</th>
                                    <th className="py-4 px-4 text-center">Qty</th>
                                    <th className="py-4 px-4 text-center">Harga Satuan (CNY)</th>
                                    <th className="py-4 px-4 text-center">1 CNY {`->`} IDR</th>
                                    <th className="py-4 px-4 text-center border-r-4 border-blue-300">Harga Satuan (IDR)</th>
                                    <th className="py-4 px-4 text-center">Total (CNY)</th>
                                    <th className="py-4 px-4 text-center">Total (IDR)</th>
                                    <th className="py-4 px-4 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white-7000 text-white-10 bg-white-50">
                                {detailPembelian[0].data_produk.map((item: ProdukType, index: number) => (
                                    <tr key={index} className="border-gray-500">
                                        <td className="py-4 px-4 text-center">
                                            <SearchDropDown SelectFunc={(e) => console.log(e)} defaultSelectedValue={item.id_produk} option={produk} />
                                        </td>
                                        <td className="py-4 px-4 text-center">
                                            <input disabled type="search" value={item.sku} className='outline-none border-b-4 border-white-600 bg-white-500 h-10' />
                                        </td>
                                        <td className="py-4 px-4 text-center">
                                            <input type="search" value={item.qty} className='outline-none border-b-4 border-white-600 h-10' />
                                        </td>
                                        <td className="py-4 px-4 text-center ">
                                            <input type="search" value={`¥ ${item.harga_satuan_cny}`} className='outline-none border-b-4 border-white-600 h-10    ' />
                                        </td>
                                        <td className="py-4 px-4 text-center ">
                                            <input type="search" value={`Rp ${item.kurs}`} className='outline-none border-b-4 border-white-600 h-10' />
                                        </td>
                                        <td className="py-4 px-4 text-center border-r-4 border-blue-300 ">
                                            <input type="search" disabled value={`Rp ${item.harga_satuan_idr}`} className='outline-none border-b-4 border-white-600 bg-white-500 h-10' />
                                        </td>
                                        <td className="py-4 px-4 text-center ">
                                            Rp {item.total_cny}
                                        </td>
                                        <td className="py-4 px-4 text-center ">
                                            Rp {item.total_idr}
                                        </td>
                                        <td className="py-4 px-4 justify-center flex flex-row gap-3">
                                            <img
                                                src={DeleteIcon}
                                                width={30}
                                                height={30}
                                                onClick={() =>
                                                    // deleteAction(`ACC Tool Code: ${item.type}`, item.id, setId)
                                                    setSuccessDelete(true)
                                                }
                                                alt="delete"
                                                className="cursor-pointer hover:scale-105 transition-all"
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ModalWrapper modalOpen={success} setModalOpen={setSuccess}>
                <div className='h-72 w-full grid grid-rows-2 absolute top-0 rounded-lg'>
                    <div className='w-full h-full top-0 flex flex-col bg-[#10B43E]'>
                        <div className='w-full text-end px-5 py-4 text-white-200 text-2xl font-medium' > <span className='cursor-pointer text-white-50' onClick={() => setSuccess(false)}>X</span></div>
                        <img className=' absolute top-7 left-[40%]' src={ceklis} alt="" />
                    </div>
                    <div className='w-full h-full top-0 bg-white-50'>
                        <div className='w-full text-center px-5 py-4 text-black text-3xl font-bold'>Success!</div>
                        <div className='w-full text-center px-5 py-4 text-black text-2xl font-medium'>Pesanan kamu telah berhasil dibuat</div>
                    </div>
                </div>
            </ModalWrapper>
            <ModalWrapper modalOpen={successDelete} setModalOpen={setSuccessDelete}>
                <div className='h-96 w-full grid grid-rows-2 absolute top-0 rounded-lg'>
                    <div className='w-full h-full top-0 flex flex-col bg-[#F13535]'>
                        <div className='w-full text-end px-5 py-4 text-white-200 text-2xl font-medium' > <span className='cursor-pointer text-white-50' onClick={() => setSuccessDelete(false)}>X</span></div>
                        <img className=' absolute top-[15%] left-[40%]' src={deleteSuccessIcon} alt="" />
                    </div>
                    <div className='w-full h-full top-0 bg-white-50'>
                        <div className='w-full text-center px-5 py-4 text-black text-2xl font-bold'>Menghapus produk ini?</div>
                        <div className='w-full text-center px-5 py-4 text-black text-lg font-medium'>Apakah kamu yakin untuk menghapus
                            “Produk : Wristband-L” ?</div>
                        <div className='w-full flex justify-center gap-5'>
                            <button className='border border-grey-200 px-5 text-xl rounded-md'>Batal </button>
                            <button className='border bg-red-500 text-white-50 p-2 px-5 text-xl rounded-md'>Ya, Hapus </button>
                        </div>
                    </div>
                </div>
            </ModalWrapper>
            <ModalWrapper modalOpen={addProduct} setModalOpen={setAddProduct}>
                <div className='h-96 w-full grid bg-white-50 grid-rows-2 items-start px-5 absolute top-0 rounded-lg'>
                    <div className='w-full text-end py-4 text-white-200 text-2xl font-medium' > <span className='cursor-pointer text-black' onClick={() => setSuccessDelete(false)}>X</span></div>
                    {/* <SearchDropDown option={product} SelectFunc={(e) => console.log(e)} /> */}
                    <input placeholder='Tambah Produk' type="text" className='w-full h-12 px-2 border border-grey-200 rounded-lg ' />
                    <div className=' h-72 mt-2 rounded-lg overflow-auto flex flex-col gap-2 '>
                        <div className='h-14 bg-white-400 hover:bg-blue-200 rounded-lg flex flex-col p-1 px-2'>
                            <span className='font-bold text-lg'>Wristband L</span>
                            <span>SK1234</span>
                        </div>
                        <div className='h-14 bg-white-400 hover:bg-blue-200 rounded-lg flex flex-col p-1 px-2'>
                            <span className='font-bold text-lg'>Wristband L</span>
                            <span>SK1234</span>
                        </div>
                        <div className='h-14 bg-white-400 hover:bg-blue-200 rounded-lg flex flex-col p-1 px-2'>
                            <span className='font-bold text-lg'>Wristband L</span>
                            <span>SK1234</span>
                        </div>
                        <div className='h-14 bg-white-400 hover:bg-blue-200 rounded-lg flex flex-col p-1 px-2'>
                            <span className='font-bold text-lg'>Wristband L</span>
                            <span>SK1234</span>
                        </div>
                        <div className='h-14 bg-white-400 hover:bg-blue-200 rounded-lg flex flex-col p-1 px-2'>
                            <span className='font-bold text-lg'>Wristband L</span>
                            <span>SK1234</span>
                        </div>
                        <div className='h-14 bg-white-400 hover:bg-blue-200 rounded-lg flex flex-col p-1 px-2'>
                            <span className='font-bold text-lg'>Wristband L</span>
                            <span>SK1234</span>
                        </div>
                        <div className='h-14 bg-white-400 hover:bg-blue-200 rounded-lg flex flex-col p-1 px-2'>
                            <span className='font-bold text-lg'>Wristband L</span>
                            <span>SK1234</span>
                        </div>


                    </div>
                </div>
            </ModalWrapper>
        </>
    )
}

export default DetailPembelian