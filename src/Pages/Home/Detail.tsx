
import { useLocation, useNavigate } from 'react-router-dom';

const Detail = () => {
    const navigate = useNavigate()
    const location = useLocation()
  return (
    <div className="h-[100%] flex flex-col justify-center items-center">
      <div className='w-full text-4xl px-10 h-20 flex items-center justify-end' onClick={() => navigate('/home')}>x</div>
      <div className='h-[50vh] flex flex-col justify-center items-center'>
        <div>Show the QR Code below to the cashier</div>
        <div>
          <img className='w-80' src={location?.state?.qrImg} alt="qr_not_found" />
        </div>
      </div>

    </div>
  );
};

export default Detail;
