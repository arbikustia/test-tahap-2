import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="w-full ">
        <div className={`flex flex-col bg-opacity-20 gap-8`}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
