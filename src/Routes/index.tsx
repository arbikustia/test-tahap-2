import App from '@/App';
import React, { Suspense, lazy } from 'react';
import Loader from '@/Components/Loader';
import { Navigate, createBrowserRouter } from 'react-router-dom';


const Login = lazy(() => import('@/Pages/Login/index'));
const Home = lazy(() => import('@/Pages/Home/index'));
const Pembelian = lazy(() => import('@/Pages/Pembelian/index'));
const TransaksiPembelian = lazy(() => import('@/Pages/Pembelian/TransaksiPembelian'));
const CreateTransaksi = lazy(() => import('@/Pages/Pembelian/CreateTransaksi'));
const DetailPembelian = lazy(() => import('@/Pages/Pembelian/DetailPembelian'));
const Refund = lazy(() => import('@/Pages/Refund/index'));
const RefundDashboard = lazy(() => import('@/Pages/Refund/Dashboard/Dashboard'));
const PeringatanKomplain = lazy(() => import('@/Pages/Refund/PeringatanKomplain/KomplainJatuhTempo'));
const TambahKomplain = lazy(() => import('@/Pages/Refund/TambahKomplain/index'));
const TambahKomplainForm = lazy(() => import('@/Pages/Refund/TambahKomplain/TambahKomplain'));
const Inventory = lazy(() => import('@/Pages/Inventory/index'));
const InventoryDashboard = lazy(() => import('@/Pages/Inventory/Dashboard/index'));
const BarangMasuk = lazy(() => import('@/Pages/Inventory/Dashboard/BarangMasuk'));
const BarangKeluar = lazy(() => import('@/Pages/Inventory/Dashboard/BarangKeluar'));
const DataBarangInventory = lazy(() => import('@/Pages/Inventory/Dashboard/DataBarang'));
const DataUserInventory = lazy(() => import('@/Pages/Inventory/Dashboard/DataUser'));
const PeringatanStok = lazy(() => import('@/Pages/Inventory/PeringatanStok/index'));
const CreatePeringatanStok = lazy(() => import('@/Pages/Inventory/PeringatanStok/TambahPeringatanStok'));
const BarangMasukInventory = lazy(() => import('@/Pages/Inventory/BarangMasuk/index'));
const TambahBarangMasukInventory = lazy(() => import('@/Pages/Inventory/BarangMasuk/TambahBarangMasuk'));
const TransferBarangkembali = lazy(() => import('@/Pages/Inventory/Transferkembali/index'));
const TambahaTransferBarangkembali = lazy(() => import('@/Pages/Inventory/Transferkembali/TambahTransferKembali'));
const TambahaTransferBarang = lazy(() => import('@/Pages/Inventory/BarangTransfer/index'));
const TambahaTransferBarangCreate = lazy(() => import('@/Pages/Inventory/BarangTransfer/TambahTransferBarang'));

const MasterData = lazy(() => import('@/Pages/MasterData/index'));
const MasterUser = lazy(() => import('@/Pages/MasterData/MasterUser/index'));
const DetailUser = lazy(() => import('@/Pages/MasterData/MasterUser/DetailAdminbos'));
const MasterBarang = lazy(() => import('@/Pages/MasterData/MasterBarang/index'));
const MasterBarangCreate = lazy(() => import('@/Pages/MasterData/MasterBarang/CreateMasterBarang'));
const MasterLocation = lazy(() => import('@/Pages/MasterData/MasterLokasi/index'));
const TambahMasterLokasi = lazy(() => import('@/Pages/MasterData/MasterLokasi/TambahLokasi'));
const MasterRak = lazy(() => import('@/Pages/MasterData/MasterRak/index'));
const MasterRakCreate = lazy(() => import('@/Pages/MasterData/MasterRak/TambahRak'));
const MasterEkspedisi = lazy(() => import('@/Pages/MasterData/MasterEkspedisi/index'));
const MasterEkspedisiCreate = lazy(() => import('@/Pages/MasterData/MasterEkspedisi/TambahEkspedisi'));
const MasterSupplier = lazy(() => import('@/Pages/MasterData/MasterSupplier/index'));
const MasterMarketplace = lazy(() => import('@/Pages/MasterData/MasterMarketplace/index'));
const MasterMarketPlaceCreate = lazy(() => import('@/Pages/MasterData/MasterMarketplace/TambahMarketPlace'));
const MasterSupplierCreate = lazy(() => import('@/Pages/MasterData/MasterSupplier/TambahSupplier'));
const MasterVarian = lazy(() => import('@/Pages/MasterData/MasterVarian/index'));
const TambahaMasterVarian = lazy(() => import('@/Pages/MasterData/MasterVarian/CreateMasterVarian'));


const Ekspedisi = lazy(() => import('@/Pages/Ekspedisi/index'));
const DashboardEkspedisi = lazy(() => import('@/Pages/Ekspedisi/Dashboard/index'));


const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" />
  },
  {
    path: 'login',
    element: (
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    )
  },
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/home',
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        )
      }, {
        path: '/pembelian',
        element: (
          <Suspense fallback={<Loader />}>
            <Pembelian />
          </Suspense>),
        children: [
          {
            path: '/pembelian/transaksi',
            element: (
              <Suspense fallback={<Loader />}>
                <TransaksiPembelian />
              </Suspense>
            )
          },
          {
            path: '/pembelian/create/transaksi',
            element: (
              <Suspense fallback={<Loader />}>
                <CreateTransaksi />
              </Suspense>
            )
          },
          {
            path: '/pembelian/detail',
            element: (
              <Suspense fallback={<Loader />}>
                <DetailPembelian />
              </Suspense>
            )
          },
        ]
      },
      {
        path: '/refund',
        element: (
          <Suspense fallback={<Loader />}>
            <Refund />
          </Suspense>),
        children: [
          {
            path: '/refund/dashboard',
            element: (
              <Suspense fallback={<Loader />}>
                <RefundDashboard />
              </Suspense>
            )
          },
          {
            path: '/refund/peringatan-komplain',
            element: (
              <Suspense fallback={<Loader />}>
                <PeringatanKomplain />
              </Suspense>
            )
          },
          {
            path: '/refund/komplain',
            element: (
              <Suspense fallback={<Loader />}>
                <TambahKomplain />
              </Suspense>
            )
          },
          {
            path: '/refund/komplain/tambah-komplain',
            element: (
              <Suspense fallback={<Loader />}>
                <TambahKomplainForm />
              </Suspense>
            )
          }

        ]
      },
      {
        path: '/inventory',
        element: (
          <Suspense fallback={<Loader />}>
            <Inventory />
          </Suspense>),
        children: [
          {
            path: '/inventory/dashboard',
            element: (
              <Suspense fallback={<Loader />}>
                <InventoryDashboard />
              </Suspense>
            )
          },
          {
            path: '/inventory/barang-masuk',
            element: (
              <Suspense fallback={<Loader />}>
                <BarangMasuk />
              </Suspense>
            )
          },
          {
            path: '/inventory/barang-keluar',
            element: (
              <Suspense fallback={<Loader />}>
                <BarangKeluar />
              </Suspense>
            )
          },
          {
            path: '/inventory/data-barang',
            element: (
              <Suspense fallback={<Loader />}>
                <DataBarangInventory />
              </Suspense>
            )
          },
          {
            path: '/inventory/data-user',
            element: (
              <Suspense fallback={<Loader />}>
                <DataUserInventory />
              </Suspense>
            )
          },
          {
            path: '/inventory/peringatan-stock',
            element: (
              <Suspense fallback={<Loader />}>
                <PeringatanStok />
              </Suspense>
            )
          },
          {
            path: '/inventory/peringatan-stock/create',
            element: (
              <Suspense fallback={<Loader />}>
                <CreatePeringatanStok />
              </Suspense>
            )
          },
          {
            path: '/inventory/data/barang-masuk',
            element: (
              <Suspense fallback={<Loader />}>
                <BarangMasukInventory />
              </Suspense>
            )
          },
          {
            path: '/inventory/data/barang-masuk/create',
            element: (
              <Suspense fallback={<Loader />}>
                <TambahBarangMasukInventory />
              </Suspense>
            )
          },
          {
            path: '/inventory/transfer-barang-kembali',
            element: (
              <Suspense fallback={<Loader />}>
                <TransferBarangkembali />
              </Suspense>
            )
          },
          {
            path: '/inventory/transfer-barang-kembali/create',
            element: (
              <Suspense fallback={<Loader />}>
                <TambahaTransferBarangkembali />
              </Suspense>
            )
          },
          {
            path: '/inventory/transfer-barang',
            element: (
              <Suspense fallback={<Loader />}>
                <TambahaTransferBarang />
              </Suspense>
            )
          },
          {
            path: '/inventory/transfer-barang/create',
            element: (
              <Suspense fallback={<Loader />}>
                <TambahaTransferBarangCreate />
              </Suspense>
            )
          },


        ]
      },
      {
        path: '/master',
        element: (
          <Suspense fallback={<Loader />}>
            <MasterData />
          </Suspense>),
        children: [
          {
            path: '/master/user',
            element: (
              <Suspense fallback={<Loader />}>
                <MasterUser />
              </Suspense>
            )
          },
          {
            path: '/master/user/detail',
            element: (
              <Suspense fallback={<Loader />}>
                <DetailUser />
              </Suspense>
            )
          },
          {
            path: '/master/barang',
            element: (
              <Suspense fallback={<Loader />}>
                <MasterBarang />
              </Suspense>
            )
          },
          {
            path: '/master/barang/create',
            element: (
              <Suspense fallback={<Loader />}>
                <MasterBarangCreate />
              </Suspense>
            )
          },
          {
            path: '/master/lokasi',
            element: (
              <Suspense fallback={<Loader />}>
                <MasterLocation />
              </Suspense>
            )
          },
          {
            path: '/master/lokasi/create',
            element: (
              <Suspense fallback={<Loader />}>
                <TambahMasterLokasi />
              </Suspense>
            )
          },
          {
            path: '/master/rak',
            element: (
              <Suspense fallback={<Loader />}>
                <MasterRak />
              </Suspense>
            )
          },
          {
            path: '/master/rak/create',
            element: (
              <Suspense fallback={<Loader />}>
                <MasterRakCreate />
              </Suspense>
            )
          },
          {
            path: '/master/ekspedisi',
            element: (
              <Suspense fallback={<Loader />}>
                <MasterEkspedisi />
              </Suspense>
            )
          },
          {
            path: '/master/ekspedisi/create',
            element: (
              <Suspense fallback={<Loader />}>
                <MasterEkspedisiCreate />
              </Suspense>
            )
          },
          {
            path: '/master/supplier',
            element: (
              <Suspense fallback={<Loader />}>
                <MasterSupplier />
              </Suspense>
            )
          },
          {
            path: '/master/supplier/create',
            element: (
              <Suspense fallback={<Loader />}>
                <MasterSupplierCreate />
              </Suspense>
            )
          },
          {
            path: '/master/market-place',
            element: (
              <Suspense fallback={<Loader />}>
                <MasterMarketplace />
              </Suspense>
            )
          },
          {
            path: '/master/market-place/create',
            element: (
              <Suspense fallback={<Loader />}>
                <MasterMarketPlaceCreate />
              </Suspense>
            )
          },
          {
            path: '/master/varian',
            element: (
              <Suspense fallback={<Loader />}>
                <MasterVarian />
              </Suspense>
            )
          },
          {
            path: '/master/varian/create',
            element: (
              <Suspense fallback={<Loader />}>
                <TambahaMasterVarian />
              </Suspense>
            )
          },
        ]
      },
      {
        path: '/ekspedisi',
        element: (
          <Suspense fallback={<Loader />}>
            <Ekspedisi />
          </Suspense>),
        children: [
          {
            path: '/ekspedisi/dashboard',
            element: (
              <Suspense fallback={<Loader />}>
                <DashboardEkspedisi />
              </Suspense>
            )
          },



        ]
      },
    ]
  },

]);

export default router;
