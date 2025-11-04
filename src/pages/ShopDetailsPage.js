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

/* ------------------ Small helpers ------------------ */
const StarRow = ({ value = 0 }) => (
  <span className="rating" aria-label={`${value} out of 5`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <i
        key={i}
        className={i < Math.round(value) ? "flaticon-star" : "flaticon-star-3"}
        aria-hidden="true"
      />
    ))}
  </span>
);

/* ------------------ Lightbox Modal ------------------ */
const Lightbox = ({ open, item, onClose }) => {
  if (!open || !item) return null;
  return (
    <div
      className="ul-modal-overlay"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      style={{ backdropFilter: "blur(2px)" }}
    >
      <div
        className="ul-modal"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: 900 }}
      >
        <div className="ul-modal-header">
          <h4>Preview</h4>
          <button
            className="ul-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div
          className="ul-modal-body"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {item.type === "image" ? (
            <img
              src={item.src}
              alt={item.alt || "Review media"}
              style={{ maxHeight: "70vh", width: "auto", maxWidth: "100%" }}
            />
          ) : (
            <video
              src={item.src}
              poster={item.poster}
              controls
              style={{ maxHeight: "70vh", width: "100%" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

/* ------------------ Media Grid (thumbs) ------------------ */
const ReviewMediaGrid = ({ media = [] }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const open = (m) => {
    setActiveItem(m);
    setLightboxOpen(true);
  };
  const close = () => setLightboxOpen(false);

  const firstFive = media.slice(0, 5);
  const extraCount = Math.max(media.length - 5, 0);

  return (
    <>
      <div
        className="ul-review-media-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 8,
        }}
      >
        {firstFive.map((m, idx) => {
          const isLastWithExtra = idx === 4 && extraCount > 0;
          return (
            <button
              type="button"
              key={idx}
              onClick={() => open(m)}
              style={{
                position: "relative",
                width: "100%",
                paddingTop: "100%",
                borderRadius: 8,
                overflow: "hidden",
                background: "#f3f4f6",
              }}
              aria-label={
                m.type === "video" ? "Play review video" : "Open review image"
              }
            >
              {m.type === "image" ? (
                <img
                  src={m.src}
                  alt={m.alt || "Review media"}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  loading="lazy"
                />
              ) : (
                <>
                  <img
                    src={m.poster}
                    alt="Video preview"
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    loading="lazy"
                  />
                  <span
                    style={{
                      position: "absolute",
                      inset: "auto 8px 8px auto",
                      background: "rgba(0,0,0,.65)",
                      color: "#fff",
                      padding: "2px 6px",
                      borderRadius: 6,
                      fontSize: 12,
                    }}
                  >
                    ▶
                  </span>
                </>
              )}

              {isLastWithExtra && (
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,.45)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 16,
                  }}
                >
                  +{extraCount}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <Lightbox open={lightboxOpen} item={activeItem} onClose={close} />
    </>
  );
};

/* ------------------ Reviews Section (dynamic) ------------------ */
const ReviewsSection = ({ pid }) => {
  const data = reviewsByProduct[pid];

  if (!data) {
    return (
      <section className="ul-product-details-reviews" style={{ marginTop: 24 }}>
        <h3 className="ul-product-details-inner-title">Ratings and reviews</h3>
        <p>No reviews yet. Be the first to review this product.</p>
      </section>
    );
  }

  const {
    rating,
    verdict,
    count,
    media = [],
    highlights = [],
    reviews = [],
  } = data;

  return (
    <section className="ul-product-details-reviews" style={{ marginTop: 24 }}>
      {/* Summary Header (Flipkart-like) */}
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
          {rating.toFixed(1)} <span style={{ fontSize: 12 }}>★</span>
          <span style={{ marginLeft: 6, fontWeight: 600 }}>{verdict}</span>
        </div>
        <span style={{ color: "#6b7280" }}>
          based on {count.toLocaleString()} ratings by{" "}
          <span title="Verified Buyers">✔</span> Verified Buyers
        </span>
      </div>

      {/* Media Grid */}
      {media.length > 0 && (
        <div style={{ marginTop: 12 }}>
          <ReviewMediaGrid media={media} />
        </div>
      )}

      {/* Highlights */}
      {highlights.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <h4
            className="ul-product-details-inner-title"
            style={{ marginBottom: 8, fontSize: 16 }}
          >
            Features customers loved
          </h4>
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              listStyle: "none",
              padding: 0,
            }}
          >
            {highlights.map((h, i) => (
              <li
                key={i}
                style={{
                  background: "#f3f4f6",
                  padding: "6px 10px",
                  borderRadius: 999,
                }}
              >
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Individual Reviews */}
      {reviews.length > 0 && (
        <div style={{ marginTop: 16 }}>
          {reviews.map((r, i) => (
            <article
              key={i}
              className="ul-product-details-review"
              style={{ display: "flex", gap: 12 }}
            >
              <div
                className="ul-product-details-review-txt"
                style={{ flex: 1 }}
              >
                <div
                  className="header"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="left">
                    <h4 className="reviewer-name" style={{ margin: 0 }}>
                      {r.user}
                    </h4>
                    <h5
                      className="review-date"
                      style={{ margin: 0, color: "#6b7280" }}
                    >
                      {r.date}
                    </h5>
                  </div>
                  <div className="right">
                    <StarRow value={r.stars} />
                  </div>
                </div>
                <p style={{ marginTop: 6 }}>{r.text}</p>
              </div>
            </article>
          ))}
        </div>
      )}
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
                      {product.productdescription}
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
