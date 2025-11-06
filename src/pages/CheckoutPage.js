import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/index/Header";
import Footer from "../components/index/Footer";

export const CheckoutPage = () => {
  const navigate = useNavigate();
  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwb5APRylVF9qNBPNyfMT80KyL3WC6km1lvLErTE8-Oxb8vuvM1zQLby8ZdQYNH34Wy/exec";

  const [billing, setBilling] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
    email: "kunalbossr15@gmail.com",
  });

  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  const handleChange = (field, value) =>
    setBilling((prev) => ({ ...prev, [field]: value }));

  const handlePlaceOrder = async () => {
    if (!cart.length) {
      alert("Your cart is empty!");
      return;
    }

    const subtotal = cart.reduce(
      (acc, item) =>
        acc + parseFloat(item.price.replace("$", "")) * item.quantity,
      0
    );
    const tax = 10;
    const total = subtotal + tax;

    const orderData = {
      order_id: Math.floor(Math.random() * 1000000),
      customer_name: `${billing.firstName} ${billing.lastName}`,
      email: billing.email,
      phone: billing.phone,
      address_line1: billing.address1,
      address_line2: billing.address2,
      city: billing.city,
      state: billing.state,
      zipcode: billing.zipcode,
      country: billing.country,
      cart: cart, // includes image URLs
      total: total.toFixed(2),
    };

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      alert("✅ Order submitted! Check your email and sheet.");
      localStorage.removeItem("cart");
      navigate("/order-confirmed");
    } catch (err) {
      console.error("Error:", err);
      alert("❌ Failed to submit order.");
    }
  };

  return (
    <div>
      <Header />

      <main className="ul-container">
        <h2 className="ul-breadcrumb-title">Checkout</h2>

        {/* Billing form */}
        <section className="ul-checkout-form">
          <h3 className="ul-checkout-title">Billing Details</h3>
          <div className="row row-cols-lg-2 row-cols-1 ul-bs-row">
            <div className="form-group">
              <label>First Name*</label>
              <input
                type="text"
                value={billing.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Last Name*</label>
              <input
                type="text"
                value={billing.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Street Address*</label>
              <input
                type="text"
                value={billing.address1}
                onChange={(e) => handleChange("address1", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Address 2</label>
              <input
                type="text"
                value={billing.address2}
                onChange={(e) => handleChange("address2", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>City*</label>
              <input
                type="text"
                value={billing.city}
                onChange={(e) => handleChange("city", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>State*</label>
              <input
                type="text"
                value={billing.state}
                onChange={(e) => handleChange("state", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Zip Code*</label>
              <input
                type="text"
                value={billing.zipcode}
                onChange={(e) => handleChange("zipcode", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Country*</label>
              <input
                type="text"
                value={billing.country}
                onChange={(e) => handleChange("country", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Phone*</label>
              <input
                type="text"
                value={billing.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>
            {/* <div className="form-group col-lg-12">
              <label>Email*</label>
              <input
                type="email"
                value={billing.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div> */}
          </div>
          <br />
          <button
            type="button"
            onClick={handlePlaceOrder}
            className="ul-checkout-form-btn"
            
          >
            Place Your Order
          </button>
          
        </section>

        {/* Order summary */}
        <aside className="ul-checkout-bill-summary">
          <h4>Your Order</h4>
          {cart.map((item, i) => (
            <div key={i} className="single-row">
              <span>
                {item.title} (x{item.quantity})
              </span>
              <span>{item.price}</span>
            </div>
          ))}
          <div className="single-row">
            <span>Tax</span>
            <span>$10.00</span>
          </div>
          <div className="ul-checkout-bill-summary-footer ul-checkout-bill-summary-header">
            <span className="left">Total</span>
            <span className="right">
              $
              {(
                cart.reduce(
                  (acc, item) =>
                    acc +
                    parseFloat(item.price.replace("$", "")) * item.quantity,
                  0
                ) + 10
              ).toFixed(2)}
            </span>
          </div>
        </aside>
      </main>

      <Footer />
    </div>
  );
};


