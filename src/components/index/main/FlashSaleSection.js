import React from "react";

const FlashSaleSection = () => {
  return (
    <div className="overflow-hidden">
      <div className="ul-container">
        <div className="ul-flash-sale">
          <div className="ul-inner-container">
            {/* heading */}
            <div className="ul-section-heading ul-flash-sale-heading">
              <div className="left">
                <span className="ul-section-sub-title">New Collection</span>
                <h2 className="ul-section-title">Trending Flash Sell</h2>
              </div>

              <div className="ul-flash-sale-countdown-wrapper">
                <div className="ul-flash-sale-countdown">
                  <div className="days-wrapper">
                    <div className="days number">00</div>
                    <span className="txt">Days</span>
                  </div>
                  <div className="hours-wrapper">
                    <div className="hours number">00</div>
                    <span className="txt">Hours</span>
                  </div>
                  <div className="minutes-wrapper">
                    <div className="minutes number">00</div>
                    <span className="txt">Min</span>
                  </div>
                  <div className="seconds-wrapper">
                    <div className="seconds number">00</div>
                    <span className="txt">Sec</span>
                  </div>
                </div>
              </div>

              <a href="/shop" className="ul-btn">
                View All Collection <i className="flaticon-up-right-arrow"></i>
              </a>
            </div>

            {/* products slider */}
            <div className="ul-flash-sale-slider swiper">
              <div className="swiper-wrapper">
                {/* repeatable product card */}
                {[
                  "product-img-1.jpg",
                  "product-img-2.jpg",
                  "product-img-3.jpg",
                  "product-img-4.jpg",
                  "product-img-5.jpg",
                  "product-img-1.jpg",
                ].map((img, index) => (
                  <div key={index} className="swiper-slide">
                    <div className="ul-product">
                      <div className="ul-product-heading">
                        <span className="ul-product-price">$99.00</span>
                        <span className="ul-product-discount-tag">25% Off</span>
                      </div>

                      <div className="ul-product-img">
                        <img src={`assets/img/${img}`} alt="Product Image" />
                        <div className="ul-product-actions">
                          <button>
                            <i className="flaticon-shopping-bag"></i>
                          </button>
                          <a href="#">
                            <i className="flaticon-hide"></i>
                          </a>
                          <button>
                            <i className="flaticon-heart"></i>
                          </button>
                        </div>
                      </div>

                      <div className="ul-product-txt">
                        <h4 className="ul-product-title">
                          <a href="/shopdetails">Orange Airsuit</a>
                        </h4>
                        <h5 className="ul-product-category">
                          <a href="/shop">Fashion Bag</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
                {/* end product card */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleSection;
