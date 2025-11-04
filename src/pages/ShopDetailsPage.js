// src/pages/ShopDetailsPage.jsx
import React, { useState, useEffect } from "react";
import { Header } from "../components/index/Header";
import Footer from "../components/index/Footer";
// import { products2 } from "../components/index/main/SellingStart";
// import { products } from "./ShopPage";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import { useDispatch } from "react-redux";
import { addToCart, getCartTotal } from "../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { products } from "../data/Data";

/* -------------------------------------------------------
   DYNAMIC REVIEWS STORE (per product)
   - Edit/add entries by product id
   - Replace sample media paths with your real assets
------------------------------------------------------- */
const reviewsByProduct = {
  1: {
    rating: 4.3,
    verdict: "Very Good",
    count: 60559,
    highlights: ["Comfortable fit", "Value for money", "Good build quality"],
    media: [
      {
        type: "image",
        src: "/assets/reviews/p1_img1.jpg",
        alt: "Customer photo 1",
      },
      {
        type: "image",
        src: "/assets/reviews/p1_img2.jpg",
        alt: "Customer photo 2",
      },
      {
        type: "video",
        src: "/assets/reviews/p1_video.mp4",
        poster: "/assets/reviews/p1_video_poster.jpg",
      },
      {
        type: "image",
        src: "/assets/reviews/p1_img3.jpg",
        alt: "Customer photo 3",
      },
      {
        type: "image",
        src: "/assets/reviews/p1_img4.jpg",
        alt: "Customer photo 4",
      },
      // add more if you like; grid shows first 5 and overlays +N
    ],
    reviews: [
      {
        user: "Rohit",
        stars: 5,
        date: "Mar 12, 2025",
        text: "Shoes are superb! Cushioning is great for daily use.",
      },
      {
        user: "Aisha",
        stars: 4,
        date: "Feb 28, 2025",
        text: "Color matches the photos. Laces a bit long but overall nice.",
      },
    ],
  },
  2: {
    rating: 4.1,
    verdict: "Good",
    count: 1289,
    highlights: ["Lightweight", "Looks premium"],
    media: [
      {
        type: "image",
        src: "/assets/reviews/p2_img1.jpg",
        alt: "Customer photo 1",
      },
      {
        type: "video",
        src: "/assets/reviews/p2_vid.mp4",
        poster: "/assets/reviews/p2_vid_poster.jpg",
      },
      {
        type: "image",
        src: "/assets/reviews/p2_img2.jpg",
        alt: "Customer photo 2",
      },
    ],
    reviews: [
      {
        user: "Kunal",
        stars: 4,
        date: "Jan 05, 2025",
        text: "Worth the price.",
      },
    ],
  },
  // more product ids...
};

const StarRow = ({ value }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {stars.map((s, i) => (
        <span
          key={i}
          style={{
            color: s <= value ? "#fbbf24" : "#d1d5db",
            fontSize: 14,
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const ReviewMediaGrid = ({ media }) => {
  if (!media.length) return null;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 100px)",
        gap: 8,
      }}
    >
      {media.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Review media ${i + 1}`}
          style={{
            width: 100,
            height: 100,
            objectFit: "cover",
            borderRadius: 8,
            cursor: "pointer",
          }}
        />
      ))}
    </div>
  );
};

export const ReviewsSection = ({ pid, reviews = [] }) => {
  if (!reviews.length) {
    return (
      <section className="ul-product-details-reviews" style={{ marginTop: 24 }}>
        <h3 className="ul-product-details-inner-title">Ratings and reviews</h3>
        <p>No reviews yet. Be the first to review this product.</p>
      </section>
    );
  }

  // Calculate average rating & summary
  const averageRating =
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  const ratingText =
    averageRating >= 4.5
      ? "Excellent"
      : averageRating >= 3.5
      ? "Good"
      : averageRating >= 2.5
      ? "Average"
      : "Poor";

  const allMedia = reviews.flatMap((r) => r.images || []);

  return (
    <section className="ul-product-details-reviews" style={{ marginTop: 24 }}>
      {/* Header Summary */}
      <div
        className="flex items-center gap-3"
        style={{ display: "flex", alignItems: "center", gap: 12 }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "#e8f5e9",
            color: "#1b5e20",
            padding: "4px 8px",
            borderRadius: 6,
            fontWeight: 700,
          }}
        >
          {averageRating.toFixed(1)} <span style={{ fontSize: 12 }}>★</span>
          <span style={{ marginLeft: 6, fontWeight: 600 }}>{ratingText}</span>
        </div>
        <span style={{ color: "#6b7280" }}>
          based on {reviews.length} reviews
        </span>
      </div>

      {/* Media Grid */}
      {allMedia.length > 0 && (
        <div style={{ marginTop: 12 }}>
          <ReviewMediaGrid media={allMedia} />
        </div>
      )}

      {/* Individual Reviews */}
      <div style={{ marginTop: 20 }}>
        {reviews.map((r, i) => (
          <article
            key={i}
            className="ul-product-details-review"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              borderBottom: "1px solid #e5e7eb",
              paddingBottom: 12,
              marginBottom: 12,
            }}
          >
            <div
              className="header"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <h4 style={{ margin: 0 }}>{r.user}</h4>
              </div>
              <StarRow value={r.rating} />
            </div>

            <p style={{ margin: "4px 0", color: "#374151" }}>{r.comment}</p>

            {r.images?.length > 0 && (
              <div style={{ marginTop: 6 }}>
                <ReviewMediaGrid media={r.images} />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

/* ====================== MAIN PAGE ====================== */
export default function ShopDetailsPage() {
  const { id } = useParams();
  const productId = id;
  const product = products.find((item) => item.id === productId);
  // products2.find((item) => item.id === productId);

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("S");
  const [color, setColor] = useState("green");
  const dispatch = useDispatch();

  // ✅ Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const incQty = () => setQty((q) => q + 1);
  const decQty = () => setQty((q) => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    if (!product) return;
    dispatch(addToCart({ ...product, size, color, quantity: qty }));
    dispatch(getCartTotal());
    toast.success(`${qty} × ${product.title} added to cart`, {
      position: "top-right",
      autoClose: 2000,
      theme: "colored",
    });
  };

  if (!product) {
    return (
      <>
        <Header />
        <div className="ul-container" style={{ padding: 24 }}>
          <p>Product not found.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <ToastContainer />
      <main>
        {/* BREADCRUMB SECTION START */}
        <div className="ul-container">
          <div className="ul-breadcrumb">
            <h2 className="ul-breadcrumb-title">Shop Details</h2>
            <div className="ul-breadcrumb-nav" aria-label="Breadcrumb">
              <a href="/">
                <i className="flaticon-home" /> Home
              </a>
              <i className="flaticon-arrow-point-to-right" aria-hidden="true" />
              <a href="/shop">Shop</a>
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
                  <Carousel slides={product.images} />
                </div>

                {/* txt */}
                <div className="col">
                  <div className="ul-product-details-txt">
                    {/* product rating (static display) */}
                    <div className="ul-product-details-rating">
                      <span
                        className="rating"
                        aria-label={`${product.rating} out of 5`}
                      >
                        {Array.from({ length: 5 }, (_, index) => {
                          const starValue = index + 1;
                          if (product.rating >= starValue) {
                            // full star
                            return (
                              <i
                                key={index}
                                className="flaticon-star"
                                style={{ color: "#FFD700" }}
                              />
                            );
                          } else if (product.rating >= starValue - 0.5) {
                            // half star
                            return (
                              <i
                                key={index}
                                className="flaticon-star"
                                style={{
                                  background:
                                    "linear-gradient(90deg, #FFD700 50%, #ccc 50%)",
                                  WebkitBackgroundClip: "text",
                                  color: "transparent",
                                }}
                              />
                            );
                          } else {
                            // empty star
                            return (
                              <i
                                key={index}
                                className="flaticon-star"
                                style={{ color: "#ccc" }}
                              />
                            );
                          }
                        })}
                        <span style={{ marginLeft: 6, fontWeight: 500 }}>
                          {product.rating.toFixed(1)}
                        </span>
                      </span>

                      <span className="review-number">
                        ({product.reviews.length} customer reviews)
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
                      {product.description}
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
                          onClick={handleAddToCart}
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
                  {product.title}
                </h3>
                <p>{product.description || "No description."}</p>
              </div>

              {/* ✅ DYNAMIC ratings + media + text reviews */}
              <ReviewsSection pid={productId} reviews={product.reviews} />

              {/* (optional) keep your review form below if you want */}
            </div>
          </div>
        </div>
        {/* MAIN CONTENT SECTION END */}
      </main>
      <Footer />
    </>
  );
}
