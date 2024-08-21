import './scss/app.scss';
import Header from './components/Header.jsx';
import { Home } from './pages/Home.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Cart } from './pages/Cart.jsx';
import { useState } from 'react';
import React from 'react';
import { FullPizza } from './pages/FullPizza.jsx';
import { MainLayout } from './layouts/MainLayout.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<FullPizza />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
