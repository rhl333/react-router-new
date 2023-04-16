import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Admin from './components/Admin/Admin';
import Products from './components/Products/Products';
import ErrorPage from './components/404/404';
import Nav from './common/Nav/Nav';
import Product from './components/Products/Product';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
