import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  if (localStorage.getItem('token')) {
    console.log(localStorage.getItem('token'));
    return <Outlet />;
  } else {
    return <Navigate to={`/log-in`} />;
  }
};

export default ProtectedRoutes;