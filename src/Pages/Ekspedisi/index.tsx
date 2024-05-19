import React from 'react'
import { Outlet } from 'react-router-dom'

const Ekspedisi = () => {
    return (
        <div className='flex flex-col '>
            <div className="w-full grid h-fit ">
                <Outlet />
            </div>
        </div>
    )
}

export default Ekspedisi