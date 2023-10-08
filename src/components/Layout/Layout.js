import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={styles.container}>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
