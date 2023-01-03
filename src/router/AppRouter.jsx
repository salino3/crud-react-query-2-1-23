import React from 'react'
import FirstPage from '../pages/FirstPage';
import { Routes, Route } from "react-router-dom";
import SecondPage from '../pages/SecondPage';
import PageNotFound from '../components/PageNotFound';

const AppRouter = () => {

  return (
    <>
      <Routes>
        <Route path={"/"} element={<FirstPage />} />
        <Route path={"/second"} element={<SecondPage />} />
        <Route path={"/*"} element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default AppRouter