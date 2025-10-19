import React from "react";
import { Header } from "../components/index/Header";
import Footer from "../components/index/Footer";

export const CheckoutPage = () => {
  return (
    <div>
      <Header />
      <main>
        {/* BREADCRUMB SECTION START  */}
        <div className="ul-container">
          <div className="ul-breadcrumb">
            <h2 className="ul-breadcrumb-title">Checkout</h2>
            <div className="ul-breadcrumb-nav">
              <a href="index.html">
                <i className="flaticon-home"></i> Home
              </a>
              <i className="flaticon-arrow-point-to-right"></i>
              <span className="current-page">Checkout</span>
            </div>
          </div>
        </div>
        {/* BREADCRUMB SECTION END  */}

        {/* CHEKOUT SECTION START  */}
        <div className="ul-cart-container">
          <h3 className="ul-checkout-title">Billing Details</h3>
          <form action="#" className="ul-checkout-form">
            <div className="row ul-bs-row row-cols-2 row-cols-xxs-1">
              {/* left side / checkout form  */}
              <div className="col">
                <div className="row row-cols-lg-2 row-cols-1 ul-bs-row">
                  {/* first name  */}
                  <div className="form-group">
                    <label for="firstname">First Name*</label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="Enter Your First Name"
                    />
                  </div>

                  {/* last name  */}
                  <div className="form-group">
                    <label for="lastname">Last Name*</label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      placeholder="Enter Your First Name"
                    />
                  </div>

                  {/* company name  */}
                  <div className="form-group">
                    <label for="companyname">Company Name</label>
                    <input
                      type="text"
                      name="companyname"
                      id="companyname"
                      placeholder="Enter Your Company Name"
                    />
                  </div>

                  {/* country  */}
                  <div className="form-group ul-checkout-country-wrapper">
                    <label for="ul-checkout-country">Country*</label>
                    <select name="country" id="ul-checkout-country">
                      <option data-placeholder="true">Select Country</option>
                      <option value="2">United States</option>
                      <option value="3">United Kingdom</option>
                      <option value="4">Germany</option>
                      <option value="5">France</option>
                      <option value="6">India</option>
                    </select>
                  </div>

                  {/* address 1  */}
                  <div className="form-group">
                    <label for="address1">Street Address*</label>
                    <input
                      type="text"
                      name="address1"
                      id="address1"
                      placeholder="1837 E Homer M Adams Pkwy"
                    />
                  </div>

                  {/* address 2  */}
                  <div className="form-group">
                    <label for="address2">Address 2*</label>
                    <input
                      type="text"
                      name="address2"
                      id="address2"
                      placeholder="1837 E Homer M Adams Pkwy"
                    />
                  </div>

                  {/* city  */}
                  <div className="form-group">
                    <label for="city">City or Town*</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Enter Your City or Town"
                    />
                  </div>

                  {/* state  */}
                  <div className="form-group">
                    <label for="state">State*</label>
                    <input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="Enter Your State"
                    />
                  </div>

                  {/* postcode  */}
                  <div className="form-group">
                    <label for="zipcode">ZIP Code*</label>
                    <input
                      type="text"
                      name="zipcode"
                      id="zipcode"
                      placeholder="Enter Your Postcode"
                    />
                  </div>

                  {/* phone  */}
                  <div className="form-group">
                    <label for="phone">Phone*</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Enter Your Phone Number"
                    />
                  </div>

                  {/* email  */}
                  <div className="form-group col-lg-12">
                    <label for="email">Email Address*</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>
              </div>

              {/* right side / different address  */}
              <div className="col">
                <div className="form-group">
                  <label for="ul-checkout-different-address-field">
                    Shift to A Different Address
                  </label>
                  <textarea
                    name="different-address"
                    id="ul-checkout-different-address-field"
                    placeholder="2801 Lafayette Blvd, Norfolk, Vermont 23509, united state"
                  ></textarea>
                </div>

                {/* different address checkbox  */}
                <div className="ul-checkout-payment-methods">
                  <div className="form-group">
                    <label for="payment-option-1">
                      <input
                        type="radio"
                        name="payment-methods"
                        id="payment-option-1"
                        hidden
                        checked
                      />
                      <span className="ul-radio-wrapper"></span>
                      <span className="ul-checkout-payment-method">
                        <span className="title">Direct Bank Transfer</span>
                        <span className="descr">
                          Neque porro est qui dolorem ipsum quia quaed inventor
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Aelltes port lacus quis enim var sed
                          efficitur
                        </span>
                      </span>
                    </label>
                  </div>

                  <div className="form-group">
                    <label for="payment-option-2">
                      <input
                        type="radio"
                        name="payment-methods"
                        id="payment-option-2"
                        hidden
                      />
                      <span className="ul-radio-wrapper"></span>
                      <span className="ul-checkout-payment-method">
                        <span className="title">
                          Ship To A Different Address?
                        </span>
                      </span>
                    </label>
                  </div>
                  <button type="submit" className="ul-checkout-form-btn">
                    Place Your Order
                  </button>
                </div>
              </div>
            </div>
          </form>
          {/*  */}
          {/* bill summary  */}
          <div className="row ul-bs-row row-cols-2 row-cols-xxs-1">
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
          </div>
        </div>
        {/* CHEKOUT SECTION END  */}
      </main>
      <Footer />
    </div>
  );
};
