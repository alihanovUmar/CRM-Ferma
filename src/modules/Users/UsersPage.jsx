import React from 'react'
import { Route, Routes } from "react-router-dom";
import User from "./components/User";

export default function UsersPage() {
  return (
    <Routes>
       <Route path="/" element={<User />} />
    </Routes>
  );
}
