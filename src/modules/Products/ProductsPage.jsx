import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Product from "./components/Product";


export default function ProductsPage() {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Product />} />
    </Routes></div>
  )
}
