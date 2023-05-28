import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CafePage from './components/CafePage';
import EmployeePage from './components/EmployeePage';
import AddEditCafePage from './components/AddEditCafePage';
import AddEditEmployeePage from './components/AddEditEmployeePage';

const RouterComponent = () => {
  return (
      <Routes>
          <Route path="/" element={<CafePage/>}/>
          <Route path="/cafes" element={<CafePage/>}/>
          <Route path="/employees" element={<EmployeePage/>}/>
          <Route path="/editcafe/:id" element={<AddEditCafePage />} />
          <Route path="/addcafe" element={<AddEditCafePage />} />
          <Route path="/editemployee/:id" element={<AddEditEmployeePage />} />
          <Route path="/addemployee" element={<AddEditEmployeePage />} />
      </Routes>
  );
};

export default RouterComponent;
