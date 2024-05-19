import React from 'react'
import { Outlet } from 'react-router-dom'

const Refund = () => {
    return (
        <div className='flex flex-col '>
            <div className="w-full grid h-fit ">
                <Outlet />
            </div>
        </div>
    )
}

export default Refund