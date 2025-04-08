import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./pages/Account"
import Cart from "./pages/Cart"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path = "/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}