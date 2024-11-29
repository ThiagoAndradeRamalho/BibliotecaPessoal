import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/LoginPage.jsx';
import Register from '../pages/RegisterPage.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;