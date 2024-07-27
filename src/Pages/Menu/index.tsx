/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from 'react';
import MenuService from '@/Services/Api/MenuService';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import home2 from '@/assets/images/home2.png';
import menu1 from '@/assets/images/menu1.png';
import CurrencyFormatter from '@/Components/CurrencyFormatter';
import { MenuType } from '@/Types/MenuType';

const Index = () => {
  const [current, setCurrent] = useState(0);
  const navPath = window.location.pathname;
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabRefs = useRef<any>([]);
  const contentRefs = useRef<any>({});
  const [cookies] = useCookies(['token']);
  const [data, setData] = useState<MenuType[]>();
  const navigate = useNavigate();

  useEffect(() => {
    if (tabRefs.current[current]) {
      const { offsetLeft, offsetWidth } = tabRefs.current[current];
      setIndicatorStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`
      });
    }
  }, [current]);

  const handleClick = (e: any, id: number) => {
    e.preventDefault();
    setCurrent(id);
    contentRefs.current[id]?.scrollIntoView({ behavior: 'smooth' });
  };

  const getData = async () => {
    const body = {
      show_all: 1,
      token: cookies.token
    };
    try {
      const response = await MenuService.GetMenu(body);
      setData(response.data.result.categories);
    } catch {
      /* empty */
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="h-28 w-full bg-white-50 fixed">
        <div className="w-full h-10 text-center lg:flex lg:flex-row lg:justify-between lg:items-center lg:px-10   text-xl mb-4">
          <span className='font-bold'>Menu</span>
          <div className="gap-4 lg:flex hidden">
            <div
              className="flex flex-row gap-1 cursor-pointer  text-sm justify-center items-center"
              onClick={() => navigate('/home')}>
              <img className="w-4" src={navPath == '/home' ? home2 : home2} alt="" />
              <span>Home</span>
            </div>
            <div
              className="flex flex-row cursor-pointer gap-1 text-sm justify-center items-center"
              onClick={() => navigate('/menu')}>
              <img className="w-4" src={menu1} alt="" />
              <span>Menu</span>
            </div>
          </div>
        </div>
        <div className="relative w-full  gap-2 overflow-auto hide-scrollbar  flex justify-start items-center text-center  border-b border-gray-300">
          {data?.map((item, index) => (
            <a
              key={index}
              ref={(el) => (tabRefs.current[index] = el)}
              onClick={(e) => handleClick(e, index)}
              href={`#${index}`}
              className={` w-full text-sm py-2 ${current === index ? 'text-blue-600' : 'text-gray-600'}`}>
              <span className='w-24 inline-block whitespace-nowrap'>{item.category_name}</span> 
            </a>
          ))}

          <div
            className="absolute w-full bottom-0 h-0.5 bg-blue-600 transition-all duration-300"
            style={indicatorStyle}></div>
        </div>
      </div>

      <div className="w-full h-full flex flex-col items-center pt-28 pb-20 ">
        <div className="w-full ">
          {data?.map((item, index) => (
            <div
              key={index}
              id={`${index}`}
              ref={(el) => (contentRefs.current[index] = el)}
              className="flex flex-col gap-1">
              <div className="bg-white-500  text-sm font-bold px-3 py-4">{item?.category_name}</div>
              {item?.menu.map((item, index) => (
                <div
                  key={index}
                  className="h-24 grid cursor-pointer shadow-md grid-cols-5 gap-2 justify-center items-center ">
                  <img className="w-20 row-span-1" src={item.photo} alt="" />
                  <div className="col-span-3">
                    <h1>{item.name}</h1>
                    <p className="text-sm">{item.description.slice(0, 60)}....</p>
                  </div>
                  <div className="col-span-1 text-sm">
                    <CurrencyFormatter type="idr" amount={item.price} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="w-full h-16 lg:hidden fixed flex bg-white-50  justify-around border items-center bottom-0">
          <div
            className="flex flex-col text-sm justify-center items-center"
            onClick={() => navigate('/home')}>
            <img className="w-6" src={navPath == '/menu' ? home2 : home2} alt="" />
            <span>Home</span>
          </div>
          <div
            className="flex flex-col text-sm justify-center items-center"
            onClick={() => navigate('/menu')}>
            <img className="w-6" src={menu1} alt="" />
            <span>Menu</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
