import NavBar from '@/Components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="w-full h-screen overflow-hidden">
        <NavBar />
        <div className={`flex flex-col bg-blue-100 bg-opacity-20 h-full gap-8 p-3 pt-32`}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
