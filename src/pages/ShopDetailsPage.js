// ShopDetailsPage.js — no Splide/Swiper, wrapped JSX
import React, { useState } from "react";

import { Header } from "../components/index/Header";
import Footer from "../components/index/Footer";
import { products2 } from "../components/index/main/SellingStart";
import { products } from "./ShopPage";
import { useParams } from "react-router-dom";
export default function ShopDetailsPage() {
  // Quantity / option
  const { id } = useParams();
  const productId = Number(id);
  const product =
    products.find((item) => item.id === productId) ||
    products2.find((item) => item.id === productId);
  const [qty, setQty] = useState(1);
  const incQty = () => setQty((q) => q + 1);
  const decQty = () => setQty((q) => (q > 1 ? q - 1 : 1));
  const [size, setSize] = useState("S");
  const [color, setColor] = useState("green");

  return (
    <>
      <Header />

      <main>
        {/* BREADCRUMB SECTION START */}
        <div className="ul-container">
          <div className="ul-breadcrumb">
            <h2 className="ul-breadcrumb-title">Shop Details</h2>
            <div className="ul-breadcrumb-nav" aria-label="Breadcrumb">
              <a href="index.html">
                <i className="flaticon-home" /> Home
              </a>
              <i className="flaticon-arrow-point-to-right" aria-hidden="true" />
              <a href="shop.html">Shop</a>
              <i className="flaticon-arrow-point-to-right" aria-hidden="true" />
              <span className="current-page" aria-current="page">
                Shop Details
              </span>
            </div>
          </div>
        </div>
        {/* BREADCRUMB SECTION END */}

        {/* MAIN CONTENT SECTION START */}
        <div className="ul-inner-page-container">
          <div className="ul-product-details">
            <div className="ul-product-details-top">
              <div className="row ul-bs-row row-cols-lg-2 row-cols-1 align-items-center">
                {/* img */}
                <div className="col flex justify-center items-center h-full">
                  {/* (you can place an image gallery here later) */}
                  {/* {product.img} */}
                  <img
                    src={`/${product.img}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* txt */}
                <div className="col">
                  <div className="ul-product-details-txt">
                    {/* product rating */}
                    <div className="ul-product-details-rating">
                      <span className="rating" aria-label="5 out of 5">
                        <i className="flaticon-star" />
                        <i className="flaticon-star" />
                        <i className="flaticon-star" />
                        <i className="flaticon-star" />
                        <i className="flaticon-star" />
                      </span>
                      <span className="review-number">
                        (2 Customer Reviews)
                      </span>
                    </div>

                    {/* price */}
                    <span className="ul-product-details-price">
                      {product.price}
                    </span>

                    {/* product title */}
                    <h3 className="ul-product-details-title">
                      {product.title}
                    </h3>

                    {/* product description */}
                    <p className="ul-product-details-descr">
                      Aliquam hendrerit a augue insuscipit. Etiam aliquam massa
                      quis des mauris commodo venenatis ligula commodo leez sed
                      blandit convallis dignissim onec vel pellentesque neque.
                    </p>

                    {/* product options */}
                    <div className="ul-product-details-options">
                      <div className="ul-product-details-option ul-product-details-sizes">
                        <span className="title">Size</span>
                        <form
                          className="variants"
                          onSubmit={(e) => e.preventDefault()}
                        >
                          {["S", "M", "L", "XL", "XXL"].map((s) => (
                            <label
                              key={s}
                              htmlFor={`ul-product-details-size-${s}`}
                            >
                              <input
                                type="radio"
                                name="product-size"
                                id={`ul-product-details-size-${s}`}
                                checked={size === s}
                                onChange={() => setSize(s)}
                                hidden
                              />
                              <span
                                className={`size-btn ${
                                  size === s ? "active" : ""
                                }`}
                              >
                                {s}
                              </span>
                            </label>
                          ))}
                        </form>
                      </div>

                      <div className="ul-product-details-option ul-product-details-colors">
                        <span className="title">Color</span>
                        <form
                          className="variants"
                          onSubmit={(e) => e.preventDefault()}
                        >
                          {[
                            { key: "green", cls: "green" },
                            { key: "blue", cls: "blue" },
                            { key: "brown", cls: "brown" },
                            { key: "red", cls: "red" },
                          ].map((c, idx) => (
                            <label
                              key={c.key}
                              htmlFor={`ul-product-details-color-${idx + 1}`}
                            >
                              <input
                                type="radio"
                                name="product-color"
                                id={`ul-product-details-color-${idx + 1}`}
                                checked={color === c.key}
                                onChange={() => setColor(c.key)}
                                hidden
                              />
                              <span
                                className={`color-btn ${c.cls} ${
                                  color === c.key ? "active" : ""
                                }`}
                              />
                            </label>
                          ))}
                        </form>
                      </div>
                    </div>

                    {/* product quantity */}
                    <div className="ul-product-details-option ul-product-details-quantity">
                      <span className="title">Quantity</span>
                      <form
                        className="ul-product-quantity-wrapper"
                        onSubmit={(e) => e.preventDefault()}
                      >
                        <input
                          type="number"
                          className="ul-product-quantity"
                          value={qty}
                          min={1}
                          readOnly
                        />
                        <div className="btns">
                          <button
                            type="button"
                            className="quantityIncreaseButton"
                            onClick={incQty}
                            aria-label="Increase quantity"
                          >
                            <i className="flaticon-plus" />
                          </button>
                          <button
                            type="button"
                            className="quantityDecreaseButton"
                            onClick={decQty}
                            aria-label="Decrease quantity"
                          >
                            <i className="flaticon-minus-sign" />
                          </button>
                        </div>
                      </form>
                    </div>

                    {/* product actions */}
                    <div className="ul-product-details-actions">
                      <div className="left">
                        <button
                          className="add-to-cart"
                          onClick={() =>
                            alert(
                              `Added ${qty} item(s), Size: ${size}, Color: ${color}`
                            )
                          }
                        >
                          Add to Cart{" "}
                          <span className="icon">
                            <i className="flaticon-cart" />
                          </span>
                        </button>
                        <button className="add-to-wishlist">
                          <span className="icon">
                            <i className="flaticon-heart" />
                          </span>{" "}
                          Add to wishlist
                        </button>
                      </div>
                      <div className="share-options">
                        <button aria-label="Share to Facebook">
                          <i className="flaticon-facebook-app-symbol" />
                        </button>
                        <button aria-label="Share to Twitter">
                          <i className="flaticon-twitter" />
                        </button>
                        <button aria-label="Share to LinkedIn">
                          <i className="flaticon-linkedin-big-logo" />
                        </button>
                        <a href="#" aria-label="YouTube">
                          <i className="flaticon-youtube" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* row */}
            </div>
            {/* top */}

            <div className="ul-product-details-bottom">
              {/* description */}
              <div className="ul-product-details-long-descr-wrapper">
                <h3 className="ul-product-details-inner-title">
                  Item Description
                </h3>
                <p>
                  Phasellus eget fermentum mauris. Suspendisse nec dignissim
                  nulla. Integer non quam commodo, scelerisque felis id,
                  eleifend turpis. … (demo text)
                </p>
              </div>

              {/* reviews */}
              <div className="ul-product-details-reviews">
                <h3 className="ul-product-details-inner-title">02 Reviews</h3>

                <div className="ul-product-details-review">
                  <div className="ul-product-details-review-reviewer-img">
                    <img src="assets/img/reviewer-img-1.png" alt="Reviewer" />
                  </div>
                  <div className="ul-product-details-review-txt">
                    <div className="header">
                      <div className="left">
                        <h4 className="reviewer-name">Temptics Pro</h4>
                        <h5 className="review-date">
                          March 20, 2023 at 2:37 pm
                        </h5>
                      </div>
                      <div className="right">
                        <div className="rating" aria-label="4 out of 5">
                          <i className="flaticon-star" />
                          <i className="flaticon-star" />
                          <i className="flaticon-star" />
                          <i className="flaticon-star" />
                          <i className="flaticon-star-3" />
                        </div>
                      </div>
                    </div>
                    <p>Phasellus eget fermentum mauris…</p>
                    <button className="ul-product-details-review-reply-btn">
                      Reply
                    </button>
                  </div>
                </div>

                <div className="ul-product-details-review">
                  <div className="ul-product-details-review-reviewer-img">
                    <img src="assets/img/reviewer-img-2.png" alt="Reviewer" />
                  </div>
                  <div className="ul-product-details-review-txt">
                    <div className="header">
                      <div className="left">
                        <h4 className="reviewer-name">Temptics Pro</h4>
                        <h5 className="review-date">
                          March 20, 2023 at 2:37 pm
                        </h5>
                      </div>
                      <div className="right">
                        <div className="rating" aria-label="4 out of 5">
                          <i className="flaticon-star" />
                          <i className="flaticon-star" />
                          <i className="flaticon-star" />
                          <i className="flaticon-star" />
                          <i className="flaticon-star-3" />
                        </div>
                      </div>
                    </div>
                    <p>Phasellus eget fermentum mauris…</p>
                    <button className="ul-product-details-review-reply-btn">
                      Reply
                    </button>
                  </div>
                </div>
              </div>

              {/* review form */}
              <div className="ul-product-details-review-form-wrapper">
                <h3 className="ul-product-details-inner-title">
                  Write A Review
                </h3>
                <span className="note">
                  Your email address will not be published.
                </span>
                <form
                  className="ul-product-details-review-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="form-group rating-field-wrapper">
                    <span className="title">Rate this product? *</span>
                    <div className="rating-field">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <button
                          type="button"
                          key={i}
                          aria-label={`Rate ${i + 1}`}
                        >
                          <i className="flaticon-star-3" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="row row-cols-2 row-cols-xxs-1 ul-bs-row">
                    <div className="form-group">
                      <input
                        type="text"
                        name="review-name"
                        id="review-name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="review-email"
                        id="review-email"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="form-group col-12">
                      <textarea
                        name="review-message"
                        id="review-message"
                        placeholder="Your Review"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <button type="submit">
                      Post Review{" "}
                      <span>
                        <i className="flaticon-up-right-arrow" />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* bottom */}
          </div>
        </div>
        {/* MAIN CONTENT SECTION END */}
      </main>
      <Footer />
    </>
  );
}
