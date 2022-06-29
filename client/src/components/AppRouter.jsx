import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Music from '../pages/Music';
import { authRoutes, publicRoutes } from '../routes';
import { MUSIC_ROUTE } from '../utils/consts';

const AppRouter = () => {
  return (
    <Routes>
       {publicRoutes.map(route => 
        <Route
        element={<route.element/>}
        path={route.path}
        key={route.path}
        />
      )}
      
      {authRoutes.map(route => 
        <Route
        element={<route.element/>}
        path={route.path}
        key={route.path}
        />
      )}

    <Route path="/*" element={<Navigate to={MUSIC_ROUTE} replace />} />
    </Routes>

  )
}

export default AppRouter