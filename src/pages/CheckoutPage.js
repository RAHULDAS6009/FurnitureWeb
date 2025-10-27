// src/pages/CheckoutPage.js
import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/index/Header";
import Footer from "../components/index/Footer";

export const CheckoutPage = () => {
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

            <form action="#" className="ul-checkout-form" onSubmit={(e) => e.preventDefault()}>
              <div className="row ul-bs-row row-cols-lg-2 row-cols-1">
                {/* First Name */}
                <div className="form-group">
                  <label htmlFor="firstname">First Name*</label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Enter Your First Name"
                    autoComplete="given-name"
                    required
                  />
                </div>

                {/* Last Name */}
                <div className="form-group">
                  <label htmlFor="lastname">Last Name*</label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Enter Your Last Name"
                    autoComplete="family-name"
                    required
                  />
                </div>

                {/* Company */}
                <div className="form-group">
                  <label htmlFor="companyname">Company Name</label>
                  <input
                    type="text"
                    name="companyname"
                    id="companyname"
                    placeholder="Enter Your Company Name"
                    autoComplete="organization"
                  />
                </div>

                {/* Country */}
                <div className="form-group ul-checkout-country-wrapper">
                  <label htmlFor="ul-checkout-country">Country*</label>
                  <select name="country" id="ul-checkout-country" required>
                    <option value="" data-placeholder="true">
                      Select Country
                    </option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="IN">India</option>
                  </select>
                </div>

                {/* Address 1 */}
                <div className="form-group">
                  <label htmlFor="address1">Street Address*</label>
                  <input
                    type="text"
                    name="address1"
                    id="address1"
                    placeholder="1837 E Homer M Adams Pkwy"
                    autoComplete="address-line1"
                    required
                  />
                </div>

                {/* Address 2 */}
                <div className="form-group">
                  <label htmlFor="address2">Address 2</label>
                  <input
                    type="text"
                    name="address2"
                    id="address2"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    autoComplete="address-line2"
                  />
                </div>

                {/* City */}
                <div className="form-group">
                  <label htmlFor="city">City or Town*</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Enter Your City or Town"
                    autoComplete="address-level2"
                    required
                  />
                </div>

                {/* State */}
                <div className="form-group">
                  <label htmlFor="state">State*</label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="Enter Your State"
                    autoComplete="address-level1"
                    required
                  />
                </div>

                {/* ZIP */}
                <div className="form-group">
                  <label htmlFor="zipcode">ZIP Code*</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    placeholder="Enter Your Postcode"
                    autoComplete="postal-code"
                    required
                  />
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="phone">Phone*</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Enter Your Phone Number"
                    autoComplete="tel"
                    required
                  />
                </div>

                {/* Email */}
                <div className="form-group col-lg-12">
                  <label htmlFor="email">Email Address*</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    autoComplete="email"
                    required
                  />
                </div>

                {/* Ship to different address (text area moved under the form) */}
                <div className="form-group col-lg-12">
                  <label htmlFor="ul-checkout-different-address-field">
                    Ship to a Different Address
                  </label>
                  <textarea
                    name="different-address"
                    id="ul-checkout-different-address-field"
                    placeholder="2801 Lafayette Blvd, Norfolk, Vermont 23509, United States"
                    rows={3}
                  />
                </div>
              </div>
            </form>
          </section>

          {/* RIGHT: ORDER SUMMARY + PAYMENT (sticky) */}
          <aside className="ul-checkout-right">
            {/* Order Summary */}
            <div className="ul-checkout-bill-summary">
              <h4 className="ul-checkout-bill-summary-title">Your Order</h4>

              <div>
                <div className="ul-checkout-bill-summary-header">
                  <span className="left">Product</span>
                  <span className="right">Sub Total</span>
                </div>

                <div className="ul-checkout-bill-summary-body">
                  <div className="single-row">
                    <span className="left">Pain Relievers</span>
                    <span className="right">$15.00</span>
                  </div>
                  <div className="single-row">
                    <span className="left">Sub Total</span>
                    <span className="right">$15.00</span>
                  </div>
                  <div className="single-row">
                    <span className="left">Shipping</span>
                    <span className="right">Free</span>
                  </div>
                </div>

                <div className="ul-checkout-bill-summary-footer ul-checkout-bill-summary-header">
                  <span className="left">Total</span>
                  <span className="right">$15.00</span>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
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
                      Neque porro est qui dolorem ipsum quia quaed inventor
                      veritatis et quasi architecto beatae vitae dicta sunt
                      explicabo. Aelltes port lacus quis enim var sed
                      efficitur.
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

              <button type="submit" className="ul-checkout-form-btn">
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
