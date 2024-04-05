import React from 'react'
import {Route, Routes } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Header from './Header';
import { AuthContextProvider } from '../Context/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from './Dashboard';

const Mheader = () => {
  return (
    <>
    <Header/>
    <AuthContextProvider>
      <Routes>
        <Route  path="/login" element={<Login/>} />
        <Route path='/signup' element={<Signup />} />
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthContextProvider>
    </>
  )
}

export default Mheader

