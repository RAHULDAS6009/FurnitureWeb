import React from "react";
import "./App.css";
     // make sure Header has: export default Header
import Footer from "./common/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./pages/index";
import NotFoundPage from "./pages/NotFoundPage";
import ContactUs from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Sell from "./pages/Sell";

// 👉 Named exports:
import { CartPage } from "./pages/CartPage";
import { ShopPage } from "./pages/ShopPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

// 👉 Default export:
import ShopDetailsPage from "./pages/ShopDetailsPage";

import SearchResults from "./common/SearchResults"; // NEW: search results page


const App = () => {
  return (
    <Router>
      {/* Header on every page so the search bar is always available */}
    

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shopdetails/:id" element={<ShopDetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/sell" element={<Sell />} />

        {/* 🔎 NEW: search route */}
        <Route path="/search" element={<SearchResults />} />

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
      {/* for suggestion we need to hit ctrl + space */}
    </Router>
  );
};

export default App;
