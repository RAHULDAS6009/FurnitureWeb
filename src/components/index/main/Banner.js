import React from "react";

const Banner = () => {
  return (
    <>
      {/* BANNER SECTION START */}
      <div className="overflow-hidden">
        <div className="ul-container">
          <section className="ul-banner">
            <div className="ul-banner-slider-wrapper">
              <div className="ul-banner-slider swiper">
                <div className="swiper-wrapper">
                  {/* single slide */}
                  <div className="swiper-slide ul-banner-slide">
                    <div className="ul-banner-slide-img">
                      <img src="assets/img/banner-slide-1.jpg" alt="Banner" />
                    </div>
                    <div className="ul-banner-slide-txt">
                      <span className="ul-banner-slide-sub-title">
                        Perfect for Summer Evenings
                      </span>
                      <h1 className="ul-banner-slide-title">
                        Casual and Stylish for All Seasons
                      </h1>
                      <p className="ul-banner-slide-price">
                        Starting From <span className="price">$129</span>
                      </p>
                      <a href="shop.html" className="ul-btn">
                        SHOP NOW <i className="flaticon-up-right-arrow"></i>
                      </a>
                    </div>
                  </div>

                  {/* single slide */}
                  <div className="swiper-slide ul-banner-slide ul-banner-slide--2">
                    <div className="ul-banner-slide-img">
                      <img src="assets/img/banner-slide-2.jpg" alt="Banner" />
                    </div>
                    <div className="ul-banner-slide-txt">
                      <span className="ul-banner-slide-sub-title">
                        Perfect for Summer Evenings
                      </span>
                      <h1 className="ul-banner-slide-title">
                        Casual and Stylish for All Seasons
                      </h1>
                      <p className="ul-banner-slide-price">
                        Starting From <span className="price">$129</span>
                      </p>
                      <a href="shop.html" className="ul-btn">
                        SHOP NOW <i className="flaticon-up-right-arrow"></i>
                      </a>
                    </div>
                  </div>

                  {/* single slide */}
                  <div className="swiper-slide ul-banner-slide ul-banner-slide--3">
                    <div className="ul-banner-slide-img">
                      <img src="assets/img/banner-slide-3.jpg" alt="Banner" />
                    </div>
                    <div className="ul-banner-slide-txt">
                      <span className="ul-banner-slide-sub-title">
                        Perfect for Summer Evenings
                      </span>
                      <h1 className="ul-banner-slide-title">
                        Casual and Stylish for All Seasons
                      </h1>
                      <p className="ul-banner-slide-price">
                        Starting From <span className="price">$129</span>
                      </p>
                      <a href="shop.html" className="ul-btn">
                        SHOP NOW <i className="flaticon-up-right-arrow"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* slider navigation */}
                <div className="ul-banner-slider-nav-wrapper">
                  <div className="ul-banner-slider-nav">
                    <button className="prev">
                      <span className="icon">
                        <i className="flaticon-down"></i>
                      </span>
                    </button>
                    <button className="next">
                      <span className="icon">
                        <i className="flaticon-down"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="ul-banner-img-slider-wrapper">
              <div className="ul-banner-img-slider swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src="assets/img/banner-img-slide-1.jpg" alt="Banner" />
                  </div>
                  <div className="swiper-slide">
                    <img src="assets/img/banner-img-slide-2.jpg" alt="Banner" />
                  </div>
                  <div className="swiper-slide">
                    <img src="assets/img/banner-img-slide-3.jpg" alt="Banner" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* BANNER SECTION END */}
    </>
  );
};

export default Banner;
