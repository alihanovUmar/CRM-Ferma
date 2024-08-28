import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Clients from './components/Clients'
export default function ClientsPage() {
    return (
        <Routes>
            <Route path='/' element={<Clients />} />
            
        </Routes>
    )
}