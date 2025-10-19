import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SiderBar from "./SiderBar";

export const Header = () => {
  const state = useSelector((state) => state.cart.data);
  const [items, setItem] = useState(0);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setItem(state.length);
  }, [state]);
  return (
    <div className="ul-header ">
      {/* <!-- header top --> */}
      <div className="cursor-default h-8 bg-black ul-header-top overflow-hidden whitespace-nowrap text-white flex items-center">
        <ul className="flex animate-scroll gap-10">
          {[...Array(10)].map((_, i) => (
            <li key={i} className="flex-shrink-0">
              <p className="ul-header-top-slider-item inline-flex items-center gap-2 text-[10px] uppercase tracking-wide">
                <i className="flaticon-sparkle"></i> limited time offer
              </p>
            </li>
          ))}
          {/* Duplicate list for seamless looping */}
          {[...Array(10)].map((_, i) => (
            <li key={`dup-${i}`} className="flex-shrink-0">
              <p className="ul-header-top-slider-item inline-flex items-center gap-2 text-[10px] uppercase tracking-wide">
                <i className="flaticon-sparkle"></i> limited time offer
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* <!-- header bottom --> */}
      <div className="ul-header-bottom">
        <div className="ul-container">
          <div className="ul-header-bottom-wrapper">
            {/* <!-- header left --> */}
            <div className="header-bottom-left">
              <div className="logo-container">
                <a href="/" className="d-inline-block">
                  <img src="assets/img/logo.svg" alt="logo" className="logo" />
                </a>
              </div>

              {/* <!-- search form --> */}
              <div className="ul-header-search-form-wrapper flex-grow-1 flex-shrink-0">
                <form action="#" className="ul-header-search-form">
                  <div className="dropdown-wrapper">
                    <select
                      name="search-category"
                      id="ul-header-search-category"
                    >
                      <option data-placeholder="true">Select Category</option>
                      <option value="1">Clothing</option>
                      <option value="2">Watches</option>
                      <option value="3">Jewellery</option>
                      <option value="4">Glasses</option>
                    </select>
                  </div>
                  <div className="ul-header-search-form-right">
                    <input
                      type="search"
                      name="header-search"
                      id="ul-header-search"
                      placeholder="Search Here"
                    />
                    <button type="submit">
                      <span className="icon">
                        <i className="flaticon-search-interface-symbol"></i>
                      </span>
                    </button>
                  </div>
                </form>

                <button className="ul-header-mobile-search-closer d-xxl-none">
                  <i className="flaticon-close"></i>
                </button>
              </div>
            </div>

            {/* <!-- header nav --> */}
            <div className="ul-header-nav-wrapper">
              <div className="to-go-to-sidebar-in-mobile">
                <nav className="ul-header-nav">
                  <a href="/">Home</a>
                  <a href="/shop">Shop</a>
                  <a href="/shop">Women</a>
                  <a href="/shop">Men's</a>
                  <a href="/shop">Kids</a>
                  <a href="/blog">Blog</a>

                  <div className="has-sub-menu has-mega-menu">
                    <a role="button">Pages</a>

                    <div className="ul-header-submenu ul-header-megamenu">
                      <div className="single-col">
                        <span className="single-col-title">Inner Pages</span>
                        <ul>
                          <li>
                            <a href="about.html">About</a>
                          </li>
                          <li>
                            <a href="blog.html">Blogs</a>
                          </li>
                          <li>
                            <a href="blog-2.html">Blogs Layout 2</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                          <li>
                            <a href="faq.html">FAQ</a>
                          </li>
                          <li>
                            <a href="our-store.html">Our Store</a>
                          </li>
                          <li>
                            <a href="reviews.html">Reviews</a>
                          </li>
                          <li>
                            <a href="login.html">Log In</a>
                          </li>
                          <li>
                            <a href="signup.html">Sign Up</a>
                          </li>
                        </ul>
                      </div>

                      <div className="single-col">
                        <span className="single-col-title">Shop Pages</span>
                        <ul>
                          <li>
                            <a href="/shop">Shop Left Sidebar</a>
                          </li>
                          <li>
                            <a href="shop-right-sidebar.html">
                              Shop Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="shop-no-sidebar.html">Shop Full Width</a>
                          </li>
                          <li>
                            <a href="/shopdetails">Shop Details</a>
                          </li>
                          <li>
                            <a href="wishlist.html">Wishlist</a>
                          </li>
                          <li>
                            <a href="/cart">Cart</a>
                          </li>
                          <li>
                            <a href="/checkout">Checkout</a>
                          </li>
                        </ul>
                      </div>

                      <div className="single-col">
                        <span className="single-col-title">Men's</span>
                        <ul>
                          <li>
                            <a href="#">Clothing</a>
                          </li>
                          <li>
                            <a href="#">Footwear</a>
                          </li>
                          <li>
                            <a href="#">Accessories</a>
                          </li>
                          <li>
                            <a href="#">Activewear</a>
                          </li>
                          <li>
                            <a href="#">Grooming</a>
                          </li>
                          <li>
                            <a href="#">Ethnic Wear</a>
                          </li>
                        </ul>
                      </div>

                      <div className="single-col">
                        <span className="single-col-title">Women's</span>
                        <ul>
                          <li>
                            <a href="#">Clothing</a>
                          </li>
                          <li>
                            <a href="#">Footwear</a>
                          </li>
                          <li>
                            <a href="#">Bags & Accessories</a>
                          </li>
                          <li>
                            <a href="#">Activewear</a>
                          </li>
                          <li>
                            <a href="#">Beauty & Grooming</a>
                          </li>
                          <li>
                            <a href="#">Ethnic Wear</a>
                          </li>
                        </ul>
                      </div>

                      <div className="single-col">
                        <span className="single-col-title">Children's</span>
                        <ul>
                          <li>
                            <a href="#">Clothing</a>
                          </li>
                          <li>
                            <a href="#">Footwear</a>
                          </li>
                          <li>
                            <a href="#">Accessories</a>
                          </li>
                          <li>
                            <a href="#">Toys & Games</a>
                          </li>
                          <li>
                            <a href="#">Baby Essentials</a>
                          </li>
                        </ul>
                      </div>

                      <div className="single-col">
                        <span className="single-col-title">Jewellery</span>
                        <ul>
                          <li>
                            <a href="#">Ethnic & Traditional Jewellery</a>
                          </li>
                          <li>
                            <a href="#">Bridal Jewellery</a>
                          </li>
                          <li>
                            <a href="#">Bracelets</a>
                          </li>
                          <li>
                            <a href="#">Rings</a>
                          </li>
                          <li>
                            <a href="#">Earrings</a>
                          </li>
                          <li>
                            <a href="#">Chains & Pendants</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>

            {/* <!-- actions --> */}
            <div className="ul-header-actions">
              <button className="ul-header-mobile-search-opener d-xxl-none">
                <i className="flaticon-search-interface-symbol"></i>
              </button>
              <a href="/login">
                <i className="flaticon-user"></i>
              </a>
              <a href="/wishlist">
                <i className="flaticon-heart"></i>
              </a>
              <a href="/cart">
                <i className="flaticon-shopping-bag relative">
                  <span className="text-[8px] font-semibold absolute -top-2  -right-1.5 bg-red-500 text-white rounded-full size-3 text-center items-center">
                    {items}
                  </span>
                </i>
              </a>
            </div>

            {/* <!-- sidebar opener --> */}
            <div className="d-inline-flex">
              <button
                className="ul-header-sidebar-opener"
                onClick={() => {
                  console.log(open);
                  setOpen(!open);
                }}
              >
                <i className="flaticon-hamburger"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {open && <SiderBar onClose={() => setOpen(false)} />}
    </div>
  );
};
