import React from "react";

export default function SiderBar() {
  return (
    <div className="ul-sidebar">
      {/* <!-- header --> */}
      <div className="ul-sidebar-header">
        <div className="ul-sidebar-header-logo">
          <a href="index.html">
            <img src="assets/img/logo.svg" alt="logo" className="logo" />
          </a>
        </div>
        {/* <!-- sidebar closer --> */}
        <button className="ul-sidebar-closer">
          <i className="flaticon-close"></i>
        </button>
      </div>

      <div className="ul-sidebar-header-nav-wrapper d-block d-lg-none"></div>

      <div className="ul-sidebar-about d-none d-lg-block">
        <span className="title">About glamer</span>
        <p className="mb-0">
          Phasellus eget fermentum mauris. Suspendisse nec dignissim nulla.
          Integer non quam commodo, scelerisque felis id, eleifend turpis.
          Phasellus in nulla quis erat tempor tristique eget vel purus. Nulla
          pharetra pharetra pharetra. Praesent varius eget justo ut lacinia.
          Phasellus pharetra, velit viverra lacinia consequat, ipsum odio mollis
          dolor, nec facilisis arcu arcu ultricies sapien. Quisque ut dapibus
          nunc. Vivamus sit amet efficitur velit. Phasellus eget fermentum
          mauris. Suspendisse nec dignissim nulla. Integer non quam commodo,
          scelerisque felis id, eleifend turpis. Phasellus in nulla quis erat
          tempor tristique eget vel purus. Nulla pharetra pharetra pharetra.
          Praesent varius eget justo ut lacinia. Phasellus pharetra velit.
        </p>
      </div>

      {/* <!-- product slider --> */}
      <div className="ul-sidebar-products-wrapper d-none d-lg-flex">
        <div className="ul-sidebar-products-slider swiper">
          <div className="swiper-wrapper">
            {/* <!-- product card --> */}
            <div className="swiper-slide">
              <div className="ul-product">
                <div className="ul-product-heading">
                  <span className="ul-product-price">$99.00</span>
                  <span className="ul-product-discount-tag">25% Off</span>
                </div>

                <div className="ul-product-img">
                  <img src="assets/img/product-img-1.jpg" alt="Product Image" />

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
                    <a href="shop-details.html">Orange Airsuit</a>
                  </h4>
                  <h5 className="ul-product-category">
                    <a href="/shop">Fashion Bag</a>
                  </h5>
                </div>
              </div>
            </div>

            {/* <!-- product card --> */}
            <div className="swiper-slide">
              <div className="ul-product">
                <div className="ul-product-heading">
                  <span className="ul-product-price">$99.00</span>
                  <span className="ul-product-discount-tag">25% Off</span>
                </div>

                <div className="ul-product-img">
                  <img src="assets/img/product-img-2.jpg" alt="Product Image" />

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
                    <a href="shop-details.html">Orange Airsuit</a>
                  </h4>
                  <h5 className="ul-product-category">
                    <a href="/shop">Fashion Bag</a>
                  </h5>
                </div>
              </div>
            </div>

            {/* <!-- product card --> */}
            <div className="swiper-slide">
              <div className="ul-product">
                <div className="ul-product-heading">
                  <span className="ul-product-price">$99.00</span>
                  <span className="ul-product-discount-tag">25% Off</span>
                </div>

                <div className="ul-product-img">
                  <img src="assets/img/product-img-2.jpg" alt="Product Image" />

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
                    <a href="shop-details.html">Orange Airsuit</a>
                  </h4>
                  <h5 className="ul-product-category">
                    <a href="/shop">Fashion Bag</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ul-sidebar-products-slider-nav flex-shrink-0">
          <button className="prev">
            <i className="flaticon-left-arrow"></i>
          </button>
          <button className="next">
            <i className="flaticon-arrow-point-to-right"></i>
          </button>
        </div>
      </div>

      <div className="ul-sidebar-about d-none d-lg-block">
        <p className="mb-0">
          Phasellus eget fermentum mauris. Suspendisse nec dignissim nulla.
          Integer non quam commodo, scelerisque felis id, eleifend turpis.
          Phasellus in nulla quis erat tempor tristique eget vel purus. Nulla
          pharetra pharetra pharetra. Praesent varius eget justo ut lacinia.
          Phasellus pharetra, velit viverra lacinia consequat, ipsum odio mollis
          dolor, nec facilisis arcu arcu ultricies sapien. Quisque ut dapibus
          nunc. Vivamus sit amet efficitur velit. Phasellus eget fermentum
          mauris. Suspendisse nec dignissim nulla. Integer non quam commodo,
          scelerisque felis id, eleifend turpis. Phasellus in nulla quis erat
          tempor tristique eget vel purus. Nulla pharetra pharetra pharetra.
          Praesent varius eget justo ut lacinia. Phasellus pharetra velit.
        </p>
      </div>

      {/* <!-- sidebar footer --> */}
      <div className="ul-sidebar-footer">
        <span className="ul-sidebar-footer-title">Follow us</span>

        <div className="ul-sidebar-footer-social">
          <a href="#">
            <i className="flaticon-facebook-app-symbol"></i>
          </a>
          <a href="#">
            <i className="flaticon-twitter"></i>
          </a>
          <a href="#">
            <i className="flaticon-instagram"></i>
          </a>
          <a href="#">
            <i className="flaticon-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
