import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/index.tsx';
import ConfigProviderAntd from './ConfigAntd.tsx';
import { Provider } from 'react-redux';
import store from './Store/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ConfigProviderAntd>
      <RouterProvider router={router} />
    </ConfigProviderAntd>
  </Provider>
);
