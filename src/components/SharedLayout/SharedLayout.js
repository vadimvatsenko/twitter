import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from "components/Header";
import Loader from 'components/Loader';
import Footer from 'components/Footer';
import { Layout, Main } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Layout>
      <Header />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </Layout>
  );
}
