// !Configuración de rutas y navegación

// src/routes/AppRoutes.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importar las páginas principales
import Home from '../pages/Home';
// Agrega otras páginas y módulos según los necesites

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Agrega más rutas según tu aplicación */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
