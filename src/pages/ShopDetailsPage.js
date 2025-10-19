import React from "react";
import { Header } from "../components/index/Header";
import Footer from "../components/index/Footer";

export const ShopDetailsPage = () => {
  // -----------------------------
  // 🧩 DATA SECTION
  // -----------------------------
  const sidebarProducts = [
    {
      id: 1,
      price: "$99.00",
      discount: "25% Off",
      img: "assets/img/product-img-1.jpg",
      title: "Orange Airsuit",
      category: "Fashion Bag",
    },
    {
      id: 2,
      price: "$99.00",
      discount: "25% Off",
      img: "assets/img/product-img-2.jpg",
      title: "Blue Airsuit",
      category: "Fashion Bag",
    },
    {
      id: 3,
      price: "$99.00",
      discount: "25% Off",
      img: "assets/img/product-img-3.jpg",
      title: "Classic Airsuit",
      category: "Fashion Bag",
    },
  ];

  const headerOffers = Array(10).fill("limited time offer");

  const productImages = [
    "assets/img/product-details-1.jpg",
    "assets/img/product-details-2.jpg",
  ];

  const reviews = [
    {
      id: 1,
      name: "Temptics Pro",
      date: "March 20, 2023 at 2:37 pm",
      img: "assets/img/reviewer-img-1.png",
      rating: 4,
      content:
        "Phasellus eget fermentum mauris. Suspendisse nec dignissim nulla. Integer non quam commodo...",
    },
    {
      id: 2,
      name: "John Doe",
      date: "March 21, 2023 at 1:15 pm",
      img: "assets/img/reviewer-img-2.png",
      rating: 5,
      content:
        "Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo venenatis...",
    },
  ];

  // -----------------------------
  // 🧱 COMPONENT SECTION
  // -----------------------------
  return (
    <div>
      <Header />
      {/* ---------------- PRODUCT DETAILS SECTION ---------------- */}
      <main>
        <div className="ul-container">
          <div className="ul-breadcrumb">
            <h2 className="ul-breadcrumb-title">Shop Details</h2>
            <div className="ul-breadcrumb-nav">
              <a href="/">
                <i className="flaticon-home"></i> Home
              </a>
              <i className="flaticon-arrow-point-to-right"></i>
              <a href="/shop">Shop</a>
              <i className="flaticon-arrow-point-to-right"></i>
              <span className="current-page">Shop Details</span>
            </div>
          </div>
        </div>

        <div className="ul-inner-page-container">
          <div className="ul-product-details">
            <div className="ul-product-details-top">
              <div className="row ul-bs-row row-cols-lg-2 row-cols-1 align-items-center">
                {/* Images */}
                <div className="col">
                  <div className="ul-product-details-img">
                    <div className="swiper-wrapper">
                      {productImages.map((src, idx) => (
                        <div key={idx} className="swiper-slide">
                          <img src={src} alt="Product" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="col">
                  <div className="ul-product-details-txt">
                    <div className="ul-product-details-rating">
                      <span className="rating">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <i key={i} className="flaticon-star"></i>
                          ))}
                      </span>
                      <span className="review-number">
                        (2 Customer Reviews)
                      </span>
                    </div>
                    <span className="ul-product-details-price">$120.00</span>
                    <h3 className="ul-product-details-title">
                      Front view modern dark sunglasses
                    </h3>
                    <p className="ul-product-details-descr">
                      Aliquam hendrerit a augue insuscipit. Etiam aliquam massa
                      quis des mauris commodo...
                    </p>

                    <div className="ul-product-details-actions">
                      <button className="add-to-cart">
                        Add to Cart <i className="flaticon-cart"></i>
                      </button>
                      <button className="add-to-wishlist">
                        <i className="flaticon-heart"></i> Add to Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="ul-product-details-reviews">
              <h3 className="ul-product-details-inner-title">
                {reviews.length.toString().padStart(2, "0")} Reviews
              </h3>
              {reviews.map((r) => (
                <div key={r.id} className="ul-product-details-review">
                  <div className="ul-product-details-review-reviewer-img">
                    <img src={r.img} alt={r.name} />
                  </div>
                  <div className="ul-product-details-review-txt">
                    <div className="header">
                      <div className="left">
                        <h4 className="reviewer-name">{r.name}</h4>
                        <h5 className="review-date">{r.date}</h5>
                      </div>
                      <div className="right">
                        <div className="rating">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <i
                                key={i}
                                className={
                                  i < r.rating
                                    ? "flaticon-star"
                                    : "flaticon-star-3"
                                }
                              ></i>
                            ))}
                        </div>
                      </div>
                    </div>
                    <p>{r.content}</p>
                    <button className="ul-product-details-review-reply-btn">
                      Reply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
