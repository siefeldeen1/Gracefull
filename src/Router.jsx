import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom';
import Home_page from './pages/home_page/home_page';

export default function Router() {
  return useRoutes([
    {path: '/', element:  <Home_page/> },

    
    ])

}
