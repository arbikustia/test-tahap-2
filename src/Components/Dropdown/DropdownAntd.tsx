import React from 'react';
import { Dropdown, Menu } from 'antd';
import { useNavigate } from 'react-router-dom'; // import useHistory
import { dropdownAntdType } from '@/Types/Dropdown.Types';
import arrowDown from "@/assets/icons/arrow-down.svg";

interface dropdownProps {
    data: dropdownAntdType[];
}

const DropdownAntd = ({ data }: dropdownProps) => {
    const navigate = useNavigate()

    return (
        <div className="flex gap-12">
            {data.map((item, index) => (
                <Dropdown key={index} overlay={
                    <Menu style={{ fontSize: '2.2rem' }}>
                        {item.data.map((menuItem, menuItemIndex) => (
                            menuItem === 'separator' ? (
                                <Menu.Divider key={menuItemIndex} />
                            ) : (
                                <Menu.Item
                                    style={{ fontSize: '1.2rem' }}
                                    className='text-4xl'
                                    key={menuItem.key}
                                    onClick={() => navigate(`/${menuItem.key}`)}> {/* Add onClick event */}
                                    {menuItem.label}
                                </Menu.Item>
                            )
                        ))}
                    </Menu>
                }>
                    <a
                        className="ant-dropdown-link flex justify-center items-center gap-2 text-xl text-white-50"
                        onClick={(e) => e.preventDefault()}>
                        {item.label} <img src={arrowDown} alt="" />
                    </a>
                </Dropdown>
            ))}
        </div>
    );
};

export default DropdownAntd;
