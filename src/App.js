import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Component/Header';
import Footer from './Component/Footer';
import Login from './Component/Login';
import Signup from './Component/Signup';
import './App.css';
import './pagination.css';
import { AuthContextProvider } from './Context/AuthContext';
import ProtectedRoute from './Component/ProtectedRoute';
import Dashboard from './Component/Dashboard';
import RecipeManager from './Component/Recipes/RecipeManager';
import BlogManager from './Component/BlogManager';
import TipsManager from './Component/TipsManager';
import ReviewManager from "./Component/ReviewManager";
import Mabeshowheader from './Component/Mabeshowheader';
import BackToTopBtn from './Component/BackToTopBtn';
import BreakfastSnacks from './Component/Recipes/BreakfastSnacks';
import Appetizers from "./Component/Recipes/Appetizers";



function App(location) {
  
  return (
    <BrowserRouter>
    <Mabeshowheader>
      <Header/>
    </Mabeshowheader>
    
    <AuthContextProvider>
      <Routes>
        <Route  path="/login" element={<Login/>} />
        <Route path='/signup' element={<Signup />} />
        <Route  path="/recipemanager" element={<RecipeManager/>} />
        <Route  path="/blogmanager" element={<BlogManager/>} />
        <Route  path="/tipsmanager" element={<TipsManager/>} />
        <Route  path="/reviewmanager" element={<ReviewManager/>} />
        <Route  path="/breakfastsnacks" element={<BreakfastSnacks/>} />
        <Route  path="/appetizers" element={<Appetizers/>} />
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
    <BackToTopBtn/>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
