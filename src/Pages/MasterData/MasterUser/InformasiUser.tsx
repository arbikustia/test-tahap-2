import React from 'react'

const InformasiUser = () => {
    return (
        <div>
            <div className='flex flex-row text-xl font-bold items-center gap-5'><div className='w-4 h-4 bg-blue-500 rounded-full'></div> <span className='text-grey-300'>INFORMASI USER</span></div>
            <div className='w-1/3 flex flex-col gap-8 py-10 text-xl'>
                <div className=' grid grid-cols-2'>
                    <div>ID User</div>
                    <div>: User001</div>
                </div>
                <div className=' grid grid-cols-2 '>
                    <div>Username</div>
                    <div>: Adminbos</div>
                </div>
                <div className=' grid grid-cols-2 '>
                    <div>Password</div>
                    <div>: 2234</div>
                </div>
                <div className=' grid grid-cols-2 '>
                    <div>Level</div>
                    <div>: Admin</div>
                </div>
            </div>
        </div>
    )
}

export default InformasiUser