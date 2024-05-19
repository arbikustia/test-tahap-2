// import { BackgroundVariants } from '@/Lib/Variants/Global.variants';
import { cn } from '@/Lib/Utils/Class.utils';
import logoHellomo from '@/assets/icons/logo-hellomo.svg';
import { useEffect, useRef, useState } from 'react';
// import dayjs from 'dayjs';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import DropdownAntd from '../Dropdown/DropdownAntd';
import { dropdownAntdType } from '@/Types/Dropdown.Types';
import { IoIosNotifications } from "react-icons/io";

import { MdArrowOutward } from "react-icons/md";




const items: dropdownAntdType[] = [
  {
    label: 'Inventory',
    data: [
      { label: 'Dashboard', key: 'inventory/dashboard' },
      { label: 'Peringatan Stock', key: 'inventory/peringatan-stock' },
      { label: 'Barang Masuk', key: 'inventory/data/barang-masuk' },
      { label: 'Transfer barang kembali', key: 'inventory/transfer-barang-kembali' },
      { label: 'Transfer Barang', key: 'inventory/transfer-barang' },
    ],
  },
  {
    label: 'Pembelian',
    data: [
      { label: 'Transaksi pembelian', key: 'pembelian/transaksi' }
    ],
  },
  {
    label: 'Refund',
    data: [
      { label: 'Dashboard', key: 'refund/dashboard' },
      { label: 'Peringatan Komplain', key: 'refund/peringatan-komplain' },
      { label: 'Tambah Komplain', key: 'refund/komplain' },
    ],
  },
  {
    label: 'Ekspedisi',
    data: [
      { label: 'Dashboard', key: 'ekspedisi/dashboard' },
      { label: 'Pencarian Ekspedisi', key: 'ekspedisi/pencarian-ekspedisi' },
      { label: 'Pembayaran Jatuh Tempo', key: 'ekspedisi/pembayaran -jatuh-tempo' },
      { label: 'Konfirmasi Barang Sampai', key: 'ekspedisi/konfirmasi-barang-sampai' },
      { label: 'Estimasi Ekspedisi', key: 'ekspedisi/estimasi-ekspedisi' },
      { label: 'Setting', key: 'ekspedisi/setting' },
    ],
  },
  {
    label: 'Master Data',
    data: [
      { label: 'Master User', key: 'master/user' },
      { label: 'Master Barang', key: 'master/barang' },
      { label: 'Master Lokasi', key: 'master/lokasi' },
      { label: 'Master Rak Layout', key: 'master/rak' },
      { label: 'Master Ekspedisi', key: 'master/ekspedisi' },
      { label: 'Master Supplier', key: 'master/supplier' },
      { label: 'Master Market Place', key: 'master/market-place' },
      { label: 'Master Varian', key: 'master/varian' },
    ],
  },
];

const NavBar = () => {
  const [date, setDate] = useState(new Date());



  const [notification, setNotification] = useState([])



  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);


  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      className={cn(
        `w-full fixed h-[116px] p-4 border-b-2 bg-blue-600 border-b-white-600 dark:border-b-grey-500 flex justify-between items-center flex-shrink-0`,
        // BackgroundVariants()
      )}>
      <div className={cn(`flex items-center gap-2`,)}>
        {/* <Logo mode={'default'} size={'large'} className={BackgroundVariants()} /> */}
        <img src={logoHellomo} alt="icon-eid" className='w-40 ' />

      </div>
      <div className=''>
        <DropdownAntd data={items} />
      </div>
      <div
        className={cn(
          'min-w-fit flex justify-start items-center gap-6 mr-6',
          // BackgroundVariants()
        )}>
        {/* <p
          className={cn(
            'text-2xl font-normal text-white-50 dark:text-white-900',
            // BackgroundVariants()
          )}>
          {`${dayjs(date).format('dddd, D MMM YYYY').toUpperCase()} | `}
          <span className={cn('bg-transparent text-white-50 dark:text-white-500 font-bold')}>
            {dayjs(date).format('h:mm:ss')}
          </span>
        </p> */}
        <div className="items-center relative inline-block" ref={dropdownRef}>
          <div className='flex items-center gap-x-2 border-l-2 border-gray-500 pl-5'>
            <button onClick={handleDropdownClick} className="">
              <IoIosNotifications className='text-white  w-10 p-2 h-auto text-4xl border border-gray-500 rounded-lg' />
            </button>

          </div>
          {isDropdownOpen && (
            <div className="absolute top-23 right-0 rounded-md w-96 h-96 bg-grey-700 flex flex-col ">
              <div className="w-full h-16 flex justify-start items-center pl-5 text-lg bg-grey-700">
                Notification
              </div>
              <div className="overflow-auto pt-3 text-white">
                <div
                  className="w-full h-20 flex flex-row justify-start items-start p-3 gap-2 border border-grey-500">
                  {/* <img src={IconNotification} alt="" className="w-[10%]" /> */}
                  <IoIosNotifications className='text-white  w-10 p-2 h-auto text-4xl border border-gray-500 rounded-lg' />
                  <div className="w-[90%] flex flex-row">
                    <div className="flex flex-col w-full justify-between">
                      <div className="text-md font-bold">title</div>
                      <div className='text-xs'>content </div>
                    </div>
                    <div className='text-xs cursor-pointer text-blue-500 w-44 flex items-center justify-end'>See more <MdArrowOutward /></div>
                  </div>
                </div>
              </div>
            </div>
          )}
         
        </div>
        <Space size={16} wrap>
          <Avatar className='bg-white-50 w-10 flex justify-center items-center h-10' icon={<UserOutlined />} />
        </Space>
        {/* <DarkModeSwitch /> */}
      </div>
    </div>
  );
};

export default NavBar;
