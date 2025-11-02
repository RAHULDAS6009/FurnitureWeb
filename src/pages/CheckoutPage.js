import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../components/index/Header";
import Footer from "../components/index/Footer";
import emailjs from "emailjs-com";

export const CheckoutPage = () => {
  const navigate = useNavigate();
  const [authStatus, setAuthStatus] = useState("checking");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      setAuthStatus("unauthenticated");
      const timer = setTimeout(() => {
        navigate("/login");
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setAuthStatus("authenticated");
    }
  }, [navigate]);

  if (authStatus === "checking") {
    return (
      <div className="flex items-center justify-center h-screen text-lg text-gray-600">
        Checking authentication...
      </div>
    );
  }

  if (authStatus === "unauthenticated") {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-50">
        <div className="animate-pulse text-gray-700 text-xl font-medium mb-3">
          You’re not logged in.
        </div>
        <p className="text-gray-500 mb-6">
          Redirecting you to the login page in a few seconds...
        </p>
        <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

  // 📩 Handle order placement + email
  const handlePlaceOrder = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      if (!user?.email) {
        alert("No user email found in localStorage!");
        return;
      }

      if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
      }

      // 🧮 Calculate totals
      const subtotal = cart.reduce(
        (acc, item) =>
          acc + parseFloat(item.price.replace("$", "")) * item.quantity,
        0
      );
      const shipping = 0; // or calculate dynamically
      const tax = 10; // flat or % based
      const total = subtotal + shipping + tax;

      // 🧾 Prepare data for EmailJS template
      const templateParams = {
        order_id: Math.floor(Math.random() * 1000000),
        email: user.email,
        orders: cart.map((item) => ({
          name: item.title,
          price: item.price,
          units: item.quantity,
          img: item.img,
        })),
        cost: {
          shipping,
          tax,
          total,
        },
      };

      // ⚙️ Your EmailJS credentials
      const serviceId = process.env.REACT_APP_SERVICE_ID; // Replace with your real ID
      const templateId = process.env.REACT_APP_TEMPLATE_ID; // Replace with your template ID
      const publicKey = process.env.REACT_APP_PUBLIC_KEY; // Replace with your public key

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // 🧹 Clear cart and redirect
      localStorage.removeItem("cart");
      navigate("/order-confirmed");
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send confirmation email.");
    }
  };

  return (
    <div>
      <Header />

      <main>
        {/* BREADCRUMB */}
        <div className="ul-container">
          <div className="ul-breadcrumb">
            <h2 className="ul-breadcrumb-title">Checkout</h2>
            <nav className="ul-breadcrumb-nav" aria-label="Breadcrumb">
              <Link to="/">
                <i className="flaticon-home" /> Home
              </Link>
              <i className="flaticon-arrow-point-to-right" aria-hidden="true" />
              <span className="current-page" aria-current="page">
                Checkout
              </span>
            </nav>
          </div>
        </div>

        {/* DESKTOP GRID LAYOUT */}
        <div className="ul-container ul-checkout-grid">
          {/* LEFT: BILLING FORM */}
          <section className="ul-checkout-left">
            <h3 className="ul-checkout-title">Billing Details</h3>
            <form
              className="ul-checkout-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="row ul-bs-row row-cols-lg-2 row-cols-1">
                {/* Billing form fields */}
              </div>
            </form>
          </section>

          {/* RIGHT: ORDER SUMMARY */}
          <aside className="ul-checkout-right">
            <div className="ul-checkout-bill-summary">
              <h4 className="ul-checkout-bill-summary-title">Your Order</h4>
              <div>
                <div className="ul-checkout-bill-summary-header">
                  <span className="left">Product</span>
                  <span className="right">Sub Total</span>
                </div>
                <div className="ul-checkout-bill-summary-body">
                  {JSON.parse(localStorage.getItem("cart") || "[]").map(
                    (item, i) => (
                      <div className="single-row" key={i}>
                        <span className="left">
                          {item.title} (x{item.quantity})
                        </span>
                        <span className="right">{item.price}</span>
                      </div>
                    )
                  )}
                  <div className="single-row">
                    <span className="left">Shipping</span>
                    <span className="right">Free</span>
                  </div>
                  <div className="single-row">
                    <span className="left">Tax</span>
                    <span className="right">$10.00</span>
                  </div>
                </div>
                <div className="ul-checkout-bill-summary-footer ul-checkout-bill-summary-header">
                  <span className="left">Total</span>
                  <span className="right">
                    $
                    {(
                      JSON.parse(localStorage.getItem("cart") || "[]").reduce(
                        (acc, item) =>
                          acc +
                          parseFloat(item.price.replace("$", "")) *
                            item.quantity,
                        0
                      ) + 10
                    ).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* PAYMENT METHOD */}
            <div className="ul-checkout-payment-methods">
              <div className="form-group">
                <label htmlFor="payment-option-1" className="ul-payment-option">
                  <input
                    type="radio"
                    name="payment-methods"
                    id="payment-option-1"
                    hidden
                    defaultChecked
                  />
                  <span className="ul-radio-wrapper" aria-hidden="true"></span>
                  <span className="ul-checkout-payment-method">
                    <span className="title">Direct Bank Transfer</span>
                    <span className="descr">
                      Transfer directly to our bank account. Use your Order ID
                      as payment reference.
                    </span>
                  </span>
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="payment-option-2" className="ul-payment-option">
                  <input
                    type="radio"
                    name="payment-methods"
                    id="payment-option-2"
                    hidden
                  />
                  <span className="ul-radio-wrapper" aria-hidden="true"></span>
                  <span className="ul-checkout-payment-method">
                    <span className="title">Cash on Delivery</span>
                  </span>
                </label>
              </div>

              <button
                type="button"
                onClick={handlePlaceOrder}
                className="ul-checkout-form-btn"
              >
                Place Your Order
              </button>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};
