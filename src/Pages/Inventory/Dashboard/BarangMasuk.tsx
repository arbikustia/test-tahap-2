import { SearchDropDown } from '@/Components/Dropdown/SearchDropDown'
import React from 'react'
import { Button, DatePicker, Space } from 'antd';
import PaginatorApi from '@/Components/Table/PaginationApi';
import ExportIcon from '@/assets/icons/export.svg';
import Search from '@/Components/Search/Search';
import Breadcrumb from '@/Components/Breadcrumb';
import { barangMasukType } from '@/Types/Inventory/Dashboard.Types';
import useFetchBarangMasuk from '@/Hooks/BarangMasukSlice';

const { RangePicker } = DatePicker;


const BarangMasuk = () => {
  const items = [
    {
      label: 'Dashboard',
      path: '/inventory/dashboard'
    },
    {
      label: 'Riwayat Barang Masuk',
      path: '/inventory/barang-masuk'
    }
  ];

  const location = [
    {
      label: 'GUDANG JKT',
      value: 'gudang_jkt'
    }
  ]
  const {
    dataBarangMasuk,
    pagination,
    limitChangeHandler,
    pageChangeHandler,
    queryParams,
  } = useFetchBarangMasuk();

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

  const handleDatePickerChange = (date: unknown, dateString: string[]) => {
    console.log('Selected Date:', date);
    console.log('Formatted Date String:', dateString[0]);
  };

  return (
    <>
      <div className="w-full grid h-fit bg-black-10 ">
        <div className="flex-shrink-0 w-full py-4 ">
          <div className="w-full flex flex-col items-start gap-4 flex-shrink-0">
            <div className="w-full flex flex-col items-end gap-4 self-stretch rounded-xl bg-white-50 dark:bg-grey-700 p-4">
              <div className='w-full'>
                <Breadcrumb items={items} />
              </div>
              <div className="w-full flex justify-between items-center py-4">
                <div className='flex  flex-col'>
                  <span className="text-md">INVENTORY</span>
                  <span className=" text-black font-extrabold text-2xl">Riwayat Barang Masuk</span>
                </div>
                <div className='flex items-end justify-around gap-x-10'>
                  <div className="w-96 flex flex-col gap-2 justify-between">
                    <Search searchHandler={() => console.log()} />
                  </div>
                  <div className="w-44 flex flex-col gap-2 justify-between">
                    <SearchDropDown SelectFunc={(e) => console.log(e)} option={location} />
                  </div>
                  <Space direction="vertical" size={12}>
                    <span>Select Date</span>
                    <RangePicker style={{ height: '45px' }} onChange={handleDatePickerChange} />
                  </Space>
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
                </div>
              </div>
              <div className="w-full overflow-y-auto max-h-[58vh]">
                <table className="min-w-full bg-white">
                  <thead className=" bg-white-500 dark:bg-grey-600">
                    <tr className="">
                      <th className="py-2 px-4 text-center">No</th>
                      <th className="py-2 px-4 text-center">ID_User</th>
                      <th className="py-2 px-4 text-center">SKU</th>
                      <th className="py-2 px-4 text-center">Nama Barang</th>
                      <th className="py-2 px-4 text-center">Varian</th>
                      <th className="py-2 px-4 text-center">Stok</th>
                      <th className="py-2 px-4 text-center">No Rak</th>
                      <th className="py-2 px-4 text-center">Tanggal</th>
                      <th className="py-2 px-4 text-center">Catatan</th>
                      <th className="py-2 px-4 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white-7000 text-white-10 bg-white-50 dark:bg-grey-700 ">
                    {dataBarangMasuk.map((item: barangMasukType, index: number) => (
                      <tr key={`table-${index}`} className="border-gray-500">
                        <td className="py-2 px-4 text-center ">
                            {index + 1}.
                        </td>
                        <td className="py-2 px-4 text-center">
                          {item.id_user}
                        </td>
                        <td className="py-2 px-4 text-center ">
                          {item.sku}
                        </td>
                        <td className="py-2 px-4 text-center ">
                          {item.nama_barang}
                        </td>
                        <td className="py-2 px-4 text-center ">
                          {item.varian}
                        </td>
                        <td className="py-3 px-4  flex items-end justify-center ">
                          {item.stok}
                        </td>
                        <td className="py-2 px-4 text-center ">
                          {item.no_rak}
                        </td>
                        <td className="py-2 px-4 text-center ">
                          {item.tanggal}
                        </td>
                        <td className="py-2 px-4 text-center ">
                          {item.catatan ? item.catatan : '--'}
                        </td>
                        <td className="py-2 px-4 text-center flex justify-center ">
                          <div className={`w-fit px-3 py-1 rounded-md font-bold text-md border-2 text-end ${item.status == 'selesai' ? 'bg-green-200 bg-opacity-40 border-green-600 text-green-700' : 'bg-yellow-400 bg-opacity-40 border-yellow-600 text-yellow-700'} `} >
                            {item.status}
                          </div>
                        </td>

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

    </>
  )
}

export default BarangMasuk