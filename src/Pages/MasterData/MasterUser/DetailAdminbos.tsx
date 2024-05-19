import Breadcrumb from '@/Components/Breadcrumb'
import editIcon from '@/assets/icons/edit.svg'
import { Tabs, TabsProps } from 'antd';
import InformasiUser from './InformasiUser';
import HakAkses from './HakAkses';


const DetailAdminbos = () => {
    const item = [
        {
            label: 'Master User',
            path: '/refund/master-user'
        },
        {
            label: 'Admin',
            path: '/refund/master-user/detail'
        }
    ];

    const items: TabsProps['items'] = [
        {
          key: '1',
          label: 'Informasi User',
          children: <InformasiUser/>,
        },
        {
          key: '2',
          label: 'Hak Akses',
          children: <HakAkses/>,
        }
      ];
      
    return (
        <>
            <div className="w-full grid h-[85vh] overflow-auto bg-white-50 rounded-xl p-3 my-5">
                <Breadcrumb items={item} />
                <div className=" w-full h-[100vh]">
                    <div className=' flex flex-col row-span-1 py-2 gap-4 h-fit text-2xl'>
                        <div className='flex flex-row w-full justify-between items-center pr-10'>
                            <span className='font-extrabold my-10 text-4xl'>Detail Adminbos</span>
                            <button onClick={() => console.log(true)} className=" rounded-md flex justify-center gap-2 items-center border-4 border-blue-500  text-blue-500 w-36 h-12 ">
                                <img src={editIcon} alt="" /><span className='text-blue-500 font-extrabold text-lg '  >Edit Data</span>
                            </button>
                        </div>
                        <Tabs
                            defaultActiveKey="1"
                            type="card"
                            items={items}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailAdminbos