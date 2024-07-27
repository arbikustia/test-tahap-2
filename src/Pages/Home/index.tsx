import logo from '@/assets/images/logo-technopartner.png';
import motif from '@/assets/images/motif.png';
import { Carousel } from 'antd';
import home1 from '@/assets/images/home1.png';
import home2 from '@/assets/images/home2.png';
import qrCode from '@/assets/images/qrcode.png';
import menu2 from '@/assets/images/menu2.png';
import { useNavigate } from 'react-router-dom';
import useWindowSize from '@/Components/useWindowSize';
import ModalWrapper from '@/Components/Modal/ModalWrapper';
import { useEffect, useState } from 'react';
import HomeService from '@/Services/Api/HomeService';
import { useCookies } from 'react-cookie';
import CurrencyFormatter from '@/Components/CurrencyFormatter';
import { HomeType } from '@/Types/HomeType';

const Home = () => {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const navPath = window.location.pathname;
  const { width, height } = useWindowSize();
  const [cookies] = useCookies(['token']);
  const [data, setData] = useState<HomeType>();

  const contentStyle: React.CSSProperties = {
    height: width > 760 ? '400px' : '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#000'
  };

  const getData = async () => {
    try {
      const response = await HomeService.GetDataUser(cookies.token);
      console.log(response.data.result);
      setData(response.data.result);
    } catch {
      /* empty */
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(width, height);
  return (
    <div className="h-full">
      <div className="w-full flex flex-row justify-between items-center px-5 ">
        <img className="w-32" src={logo} alt="" />
        <div className="gap-4 lg:flex hidden">
          <div
            className="flex flex-row gap-1 cursor-pointer  text-sm justify-center items-center"
            onClick={() => navigate('/home')}>
            <img className="w-4" src={navPath == '/home' ? home1 : home2} alt="" />
            <span>Home</span>
          </div>
          <div
            className="flex flex-row cursor-pointer gap-1 text-sm justify-center items-center"
            onClick={() => navigate('/menu')}>
            <img className="w-4" src={menu2} alt="" />
            <span>Menu</span>
          </div>
        </div>
      </div>

      <div
        className="md:grid md:grid-cols-2 md:gap-5 md:px-3 justify-center items-center "
        style={{ backgroundImage: `url(${motif})`, backgroundSize: 'cover' }}>
        <div className="hero h-48 md:rounded-lg md:h-[85vh] p-2 flex justify-center items-center">
          <div className="w-[90%] h-[90%] shadow-xl bg-white-50 rounded-xl grid grid-rows-5  md:grid-rows-7 p-3">
            <div className="row-span-1 md:text-2xl">{data?.greeting}</div>
            <div className="row-span-1 font-bold md:text-2xl">{data?.name}</div>
            <div className="row-span-3 md:row-span-5 grid grid-cols-5 justify-between items-center">
              <div className="flex flex-row justify-between col-span-3 items-center ">
                <div
                  onClick={() => (width > 700 ? setSuccess(true) : navigate('/detail',{
                    state: {
                      qrImg : qrCode
                    }
                  }))}
                  className="bg-white-200 cursor-pointer w-20 h-20 md:w-44 md:h-44 rounded-full  shadow-lg flex justify-center items-center">
                  {/* data qr from response not found so i will use my qrcode */}
                  <img src={qrCode} className="w-10 lg:w-32 " alt="" />
                </div>
                <div className="border-l-2 font-semibold md:font-normal text-sm md:text-2xl h-10 px-5 flex justify-center items-center border-dashed">
                  Saldo <br />
                  Points
                </div>
              </div>
              <div className=" col-span-2 text-sm font-bold md:font-normal text-end md:text-2xl">
                <CurrencyFormatter type='idr' amount={data?.saldo}/> 
                <br />
                <span className='text-green-600'>{data?.point}</span> 
              </div>
            </div>
          </div>
        </div>
        <Carousel autoplay>
          {data?.banner?.map((item, index) => (
            <div key={index}>
              <h3 style={contentStyle} className="flex justify-center items-center">
                <img className="w-full" src={item} alt="" />
              </h3>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="w-full h-16 lg:hidden flex absolute  justify-around border items-center bottom-0">
        <div
          className="flex flex-col text-sm justify-center items-center"
          onClick={() => navigate('/home')}>
          <img className="w-6" src={navPath == '/home' ? home1 : home2} alt="" />
          <span>Home</span>
        </div>
        <div
          className="flex flex-col text-sm justify-center items-center"
          onClick={() => navigate('/menu')}>
          <img className="w-6" src={menu2} alt="" />
          <span>Menu</span>
        </div>
      </div>

      <ModalWrapper modalOpen={success} setModalOpen={setSuccess}>
        <div className="h-96 w-full grid grid-rows-3 bg-white-50 absolute -top-40 rounded-lg">
          <div className="w-full text-center px-5 py-2 text-black text-md font-medium">
            Show the QR Code below to the cashier
          </div>
          <div className="w-full h-full  flex justify-center items-center">
            <img className="w-40" src={data?.qrcode ? data?.qrcode : qrCode} alt="qr_not_fond" />
          </div>
          <div></div>
        </div>
      </ModalWrapper>
    </div>
  );
};

export default Home;
