import React, { useEffect, useState } from 'react'
import PembayaranSelesaiIcon from '@/assets/icons/pembayaran-selesai.svg'
import PembayaranJatuhTempoIcon from '@/assets/icons/pembayaran-jatuh-tempo.svg'
import PembayaranBelumSelesaiIcon from '@/assets/icons/pembayaran-belum-selesai.svg'
import TotalRefundIcon from '@/assets/icons/total-refund.svg'
import { DatePicker, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
import InventoryService from '@/Services/Api/Inventory'

const { RangePicker } = DatePicker;

type dataDashboardType = {
    "data_barang": number,
    "barang_masuk": number,
    "barang_keluar": number,
    "total_user": number
}
const Dashboard = () => {
    const [dataDashboard, setDataDashboard] = useState<dataDashboardType>()

    const navigate = useNavigate()
    const handleDatePickerChange = (date: unknown, dateString: string[]) => {
        console.log('Selected Date:', date);
        console.log('Formatted Date String:', dateString);
        getData(dateString[0], dateString[1])

    };

    const getData = async (start?: string, end?: string) => {
        try {

            const params1: { Start?: string, End?: string, Type?: string } = {
                Start: '',
                End: '',
                Type: 'default',
            }
            const params2: { Start?: string, End?: string, Type?: string } = {
                Start: start,
                End: end,
                Type: '',
            }
            const response = await InventoryService.dataInventoryDashboard(start !== undefined ? params2 : params1)
            setDataDashboard(response.data.data)
            console.log(response.data.data)
        } finally { /* empty */ }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='w-full h-[85vh] bg-white-50 rounded-lg p-5'>
            <div className='text-grey-300 font-bold'>INVENTORY</div>
            <div className='text-4xl font-bold flex w-full justify-between items-center'>
                <div>DASHBOARD</div>
                <Space direction="vertical" size={12}>
                    <RangePicker style={{ height: '45px' }} onChange={handleDatePickerChange} />
                </Space>
            </div>
            <div className='w-full grid grid-cols-4 gap-5 h-96 justify-center items-center'>
                <div className='h-44 rounded-lg bg-green-300 border-4 border-green-300 bg-opacity-50 p-5 flex flex-col gap-5 cursor-pointer' onClick={() => navigate('/inventory/data-barang')} >
                    <span className='text-xl font-bold flex flex-row items-center gap-3'><img src={PembayaranSelesaiIcon} alt="" /> <span className='text-center'>Total Barang</span> <span className='text-3xl font-light'>{'>'}</span> </span>
                    <span className='text-7xl font-bold'>{dataDashboard?.data_barang ? dataDashboard?.data_barang : '-'}</span>
                </div>
                <div className='h-44 rounded-lg bg-red-300 border-4 border-red-300 bg-opacity-50 p-5 flex flex-col gap-5 cursor-pointer' onClick={() => navigate('/inventory/barang-masuk')} >
                    <span className='text-xl font-bold flex flex-row items-center gap-3'><img src={PembayaranJatuhTempoIcon} alt="" /> <span className='text-center'>Barang Masuk</span> <span className='text-3xl font-light'>{'>'}</span></span>
                    <span className='text-7xl font-bold'>{dataDashboard?.barang_masuk ? dataDashboard?.barang_masuk : '-'}</span>
                </div>
                <div className='h-44 rounded-lg bg-yellow-300 border-4 border-yellow-300 bg-opacity-50 p-5 flex flex-col gap-5 cursor-pointer' onClick={() => navigate('/inventory/barang-keluar')}>
                    <span className='text-xl font-bold flex flex-row items-center gap-3'><img src={PembayaranBelumSelesaiIcon} alt="" /> <span className='text-center'>Barang Keluar</span> <span className='text-3xl font-light'>{'>'}</span></span>
                    <span className='text-7xl font-bold'>{dataDashboard?.barang_keluar ? dataDashboard?.barang_keluar : '-'}</span>
                </div>
                <div className='h-44 rounded-lg bg-blue-300 border-4 border-blue-300 bg-opacity-50 p-5 flex flex-col gap-5 cursor-pointer' onClick={() => navigate('/inventory/data-user')}>
                    <span className='text-xl font-bold flex flex-row items-center gap-3'><img src={TotalRefundIcon} alt="" /> <span className='text-center'>Total User</span> <span className='text-3xl font-light'>{'>'}</span></span>
                    <span className='text-7xl font-bold'>{dataDashboard?.total_user ? dataDashboard?.total_user : '-'}</span>
                </div>
            </div>
        </div>
    )
}

export default Dashboard