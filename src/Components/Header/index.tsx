import React from 'react'

interface Header {
    title: string
}
const Header = ({ title } : Header) => {
    return (
      <div className="w-full flex gap-3 items-center">
        <div className="text-2xl w-full font-semibold">{title}</div>
      </div>
    );
}

export default Header