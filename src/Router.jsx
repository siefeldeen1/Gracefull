import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom';
import Home_page from './pages/home_page/home_page';
import Inputs from './pages/product_page/inputs';

export default function Router() {
  return useRoutes([
    {path: '/', element:  <Home_page/> },
    {path: '/product', element:  <Inputs/> },

    
    ])

}
