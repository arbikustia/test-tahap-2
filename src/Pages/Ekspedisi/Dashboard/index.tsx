import React from 'react'
import PembayaranSelesaiIcon from '@/assets/icons/pembayaran-selesai.svg'
import PembayaranJatuhTempoIcon from '@/assets/icons/pembayaran-jatuh-tempo.svg'
import PembayaranBelumSelesaiIcon from '@/assets/icons/pembayaran-belum-selesai.svg'
import TotalRefundIcon from '@/assets/icons/total-refund.svg'
import { DatePicker, Space } from 'antd'
import { useNavigate } from 'react-router-dom'

const { RangePicker } = DatePicker;

const Dashboard = () => {

    const navigate = useNavigate()
    const handleDatePickerChange = (date: unknown, dateString: string[]) => {
        console.log('Selected Date:', date);
        console.log('Formatted Date String:', dateString[0]);
      };
    
    return (
        <div className='w-full h-[85vh] bg-white-50 rounded-lg p-5'>
            <div className='text-grey-300 font-bold'>EKSPEDISI</div>
            <div className='text-4xl font-bold flex w-full justify-between items-center'>
                <div>DASHBOARD</div>
                <Space direction="vertical" size={12}>
                    <RangePicker style={{height: '45px'}} onChange={handleDatePickerChange} />
                </Space>
            </div>
            <div className='w-full grid grid-cols-4 gap-5 h-96 justify-center items-center'>
                <div className='h-44 rounded-lg bg-green-300 border-4 border-green-300 bg-opacity-50 p-5 flex flex-col gap-5'>
                    <span className='text-xl font-bold flex flex-row items-center gap-3'><img src={PembayaranSelesaiIcon} alt="" /> <span className='text-center'>Total Pengiriman Selesai</span> <span className='text-3xl font-light'>{'>'}</span> </span>
                    <span className='text-7xl font-bold'>13</span>
                </div>
                <div className='h-44 rounded-lg bg-red-300 border-4 border-red-300 bg-opacity-50 p-5 flex flex-col gap-5' onClick={() => navigate('/inventory/barang-masuk')} >
                    <span className='text-xl font-bold flex flex-row items-center gap-3'><img src={PembayaranJatuhTempoIcon} alt="" /> <span className='text-center'>Total Pengiriman Telat</span> <span className='text-3xl font-light'>{'>'}</span></span>
                    <span className='text-7xl font-bold'>11</span>
                </div>
                <div className='h-44 rounded-lg bg-yellow-300 border-4 border-yellow-300 bg-opacity-50 p-5 flex flex-col gap-5' onClick={() => navigate('/inventory/barang-keluar')}>
                    <span className='text-xl font-bold flex flex-row items-center gap-3'><img src={PembayaranBelumSelesaiIcon} alt="" /> <span className='text-center'>Total Pembayaran Jatuh Tempo</span> <span className='text-3xl font-light'>{'>'}</span></span>
                    <span className='text-7xl font-bold'>10</span>
                </div>
                <div className='h-44 rounded-lg bg-blue-300 border-4 border-blue-300 bg-opacity-50 p-5 flex flex-col gap-5'>
                    <span className='text-xl font-bold flex flex-row items-center gap-3'><img src={TotalRefundIcon} alt="" /> <span className='text-center'>Total Pembayaran Lunas</span> <span className='text-3xl font-light'>{'>'}</span></span>
                    <span className='text-7xl font-bold'>75</span>
                </div>
            </div>
        </div>
    )
}

export default Dashboard