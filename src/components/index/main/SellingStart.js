import React from "react";

const MostSellingSection = () => {
  return (
    <div className="ul-container">
      <section className="ul-products ul-most-selling-products">
        <div className="ul-inner-container">
          <div className="ul-section-heading flex-lg-row flex-column text-md-start text-center">
            <div className="left">
              <span className="ul-section-sub-title">most selling items</span>
              <h2 className="ul-section-title">
                Top selling Categories This Week
              </h2>
            </div>

            <div className="right">
              <div className="ul-most-sell-filter-navs">
                <button type="button" data-filter="all">
                  All Products
                </button>
                <button type="button" data-filter=".best-selling">
                  Best Selling
                </button>
                <button type="button" data-filter=".on-selling">
                  On Selling
                </button>
                <button type="button" data-filter=".top-rating">
                  Top Rating
                </button>
              </div>
            </div>
          </div>

          {/* Products grid */}
          <div className="ul-bs-row row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 ul-filter-products-wrapper">
            {[
              "product-img-sm-1.jpg",
              "product-img-sm-2.jpg",
              "product-img-sm-3.jpg",
              "product-img-sm-4.jpg",
              "product-img-sm-5.jpg",
              "product-img-sm-6.jpg",
              "product-img-sm-7.jpg",
              "product-img-sm-8.jpg",
              "product-img-sm-9.jpg",
              "product-img-sm-10.jpg",
              "product-img-sm-11.jpg",
              "product-img-sm-12.jpg",
            ].map((img, index) => (
              <div
                key={index}
                className={`mix col ${
                  index % 3 === 0
                    ? "best-selling"
                    : index % 3 === 1
                    ? "on-selling"
                    : "top-rating"
                }`}
              >
                <div className="ul-product-horizontal">
                  <div className="ul-product-horizontal-img">
                    <img src={`assets/img/${img}`} alt="Product Image" />
                  </div>

                  <div className="ul-product-horizontal-txt">
                    <span className="ul-product-price">$99.00</span>
                    <h4 className="ul-product-title">
                      <a href="shop-details.html">Orange Airsuit</a>
                    </h4>
                    <h5 className="ul-product-category">
                      <a href="/shop">Fashion Bag</a>
                    </h5>
                    <div className="ul-product-rating">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="star">
                          <i className="flaticon-star"></i>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MostSellingSection;
