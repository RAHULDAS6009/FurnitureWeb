import React, { useState } from "react";
import useIsMobile from "../../hooks/useIsMobile";
export default function SiderBar({ onClose }) {
  const isMobile = useIsMobile();
  return (
    <div
      className="fixed top-0 right-0 h-full overflow-x-hidden p-10 overflow-y-scroll w-[80%] lg:w-[600px] bg-white shadow-2xl z-50 transition-transform duration-300 animate-slide-in
    animate-slide-out
    flex 
    flex-col
    "
    >
      {/* <!-- header --> */}
      <div className="ul-sidebar-header">
        <div className="ul-sidebar-header-logo">
          <a href="/">
            <img src="assets/img/logo.svg" alt="logo" className="logo" />
          </a>
        </div>
        {/* <!-- sidebar closer --> */}
        <button className="ul-sidebar-closer" onClick={onClose}>
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
                    <a href="/shopdetails">Orange Airsuit</a>
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
                    <a href="/shop-details">Orange Airsuit</a>
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
                    <a href="/shopdetails">Orange Airsuit</a>
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

      <div>{isMobile && <MobileSidebarNav />}</div>
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

function MobileSidebarNav() {
  const [openMegaMenu, setOpenMegaMenu] = useState(false);

  return (
    <div className="block lg:hidden ">
      {/* Wrapper */}
      <div className="p-4 bg-white  border-b">
        <nav className="flex flex-col space-y-3 text-gray-800">
          {/* Main Links */}
          <a href="/" className="hover:text-red-600">
            Home
          </a>
          <a href="/shop" className="hover:text-red-600">
            Shop
          </a>
          <a href="/shop" className="hover:text-red-600">
            Women
          </a>
          <a href="/shop" className="hover:text-red-600">
            Men's
          </a>
          <a href="/shop" className="hover:text-red-600">
            Kids
          </a>
          <a href="/blog" className="hover:text-red-600">
            Blog
          </a>

          {/* Dropdown Section */}
          <div className="border-t pt-3">
            <button
              onClick={() => setOpenMegaMenu(!openMegaMenu)}
              className="flex justify-between items-center w-full font-medium hover:text-red-600"
            >
              Pages
              <span className="text-sm">{openMegaMenu ? "−" : "+"}</span>
            </button>

            {/* Mega Menu */}
            {openMegaMenu && (
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-3 rounded-lg">
                {/* Inner Pages */}
                <div>
                  <h4 className="font-semibold uppercase  text-red-500 mb-2">
                    Inner Pages
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a href="/about" className="hover:text-red-600">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="/blog" className="hover:text-red-600">
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a href="/blog-2" className="hover:text-red-600">
                        Blogs Layout 2
                      </a>
                    </li>
                    <li>
                      <a href="/blog-details" className="hover:text-red-600">
                        Blog Details
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="hover:text-red-600">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="/faq" className="hover:text-red-600">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="/our-store" className="hover:text-red-600">
                        Our Store
                      </a>
                    </li>
                    <li>
                      <a href="/reviews" className="hover:text-red-600">
                        Reviews
                      </a>
                    </li>
                    <li>
                      <a href="/login" className="hover:text-red-600">
                        Log In
                      </a>
                    </li>
                    <li>
                      <a href="/register" className="hover:text-red-600">
                        Sign Up
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Shop Pages */}
                <div>
                  <h4 className="font-semibold uppercase  text-red-500 mb-2">
                    Shop Pages
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a href="/shop" className="hover:text-red-600">
                        Shop Left Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="/shop" className="hover:text-red-600">
                        Shop Right Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="/shop" className="hover:text-red-600">
                        Shop Full Width
                      </a>
                    </li>
                    <li>
                      <a href="/shopdetails" className="hover:text-red-600">
                        Shop Details
                      </a>
                    </li>
                    <li>
                      <a href="shop" className="hover:text-red-600">
                        Wishlist
                      </a>
                    </li>
                    <li>
                      <a href="/cart" className="hover:text-red-600">
                        Cart
                      </a>
                    </li>
                    <li>
                      <a href="/checkout" className="hover:text-red-600">
                        Checkout
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Men's */}
                <div>
                  <h4 className="font-semibold uppercase  text-red-500 mb-2">
                    Men's
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a href="/shop" className="hover:text-red-600">
                        Clothing
                      </a>
                    </li>
                    <li>
                      <a href="/shop" className="hover:text-red-600">
                        Footwear
                      </a>
                    </li>
                    <li>
                      <a href="/shop" className="hover:text-red-600">
                        Accessories
                      </a>
                    </li>
                    <li>
                      <a href="/shop" className="hover:text-red-600">
                        Activewear
                      </a>
                    </li>
                    <li>
                      <a href="/shop" className="hover:text-red-600">
                        Grooming
                      </a>
                    </li>
                    <li>
                      <a href="/shop" className="hover:text-red-600">
                        Ethnic Wear
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Women's */}
                <div>
                  <h4 className="font-semibold uppercase  text-red-500 mb-2">
                    Women's
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a href="/shop" className="hover:text-red-600">
                        Clothing
                      </a>
                    </li>
                    <li>
                      <a href="/shop" className="hover:text-red-600">
                        Footwear
                      </a>
                    </li>
                    <li>
                      <a href="/shop" className="hover:text-red-600">
                        Bags & Accessories
                      </a>
                    </li>
                    <li>
                      <a href="/shop" className="hover:text-red-600">
                        Activewear
                      </a>
                    </li>
                    <li>
                      <a href="/shop" className="hover:text-red-600">
                        Beauty & Grooming
                      </a>
                    </li>
                    <li>
                      <a href="/shop" className="hover:text-red-600">
                        Ethnic Wear
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Children's */}
                <div>
                  <h4 className="font-semibold uppercase  text-red-500 mb-2">
                    Children's
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a href="/shop" className="hover:text-red-600">
                        Clothing
                      </a>
                    </li>
                    <li>
                      <a href="/shop" className="hover:text-red-600">
                        Footwear
                      </a>
                    </li>
                    <li>
                      <a href="/shop" className="hover:text-red-600">
                        Accessories
                      </a>
                    </li>
                    <li>
                      <a href="/shop" className="hover:text-red-600">
                        Toys & Games
                      </a>
                    </li>
                    <li>
                      <a href="/shop" className="hover:text-red-600">
                        Baby Essentials
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Jewellery */}
                <div>
                  <h4 className="font-semibold uppercase  text-red-500 mb-2">
                    Jewellery
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a href="/shop" className="hover:text-red-600">
                        Ethnic & Traditional
                      </a>
                    </li>
                    <li>
                      <a href="/shop" className="hover:text-red-600">
                        Bridal
                      </a>
                    </li>
                    <li>
                      <a href="/shop" className="hover:text-red-600">
                        Bracelets
                      </a>
                    </li>
                    <li>
                      <a href="/shop" className="hover:text-red-600">
                        Rings
                      </a>
                    </li>
                    <li>
                      <a href="/shop" className="hover:text-red-600">
                        Earrings
                      </a>
                    </li>
                    <li>
                      <a href="/shop" className="hover:text-red-600">
                        Chains & Pendants
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
