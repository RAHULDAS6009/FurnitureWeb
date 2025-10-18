import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
const products = [
  {
    id: 1,
    price: "$99.00",
    discount: "25% Off",
    img: "assets/img/product-img-1.jpg",
    title: "Orange Airsuit",
    category: "Fashion Bag",
    detailsUrl: "shop-details.html",
    categoryUrl: "/shop",
  },
  {
    id: 2,
    price: "$89.00",
    discount: "10% Off",
    img: "assets/img/product-img-2.jpg",
    title: "Blue Backpack",
    category: "Travel Bag",
    detailsUrl: "shop-details.html",
    categoryUrl: "/shop",
  },
  {
    id: 3,
    price: "$120.00",
    discount: "30% Off",
    img: "assets/img/product-img-3.jpg",
    title: "Leather Handbag",
    category: "Luxury Bag",
    detailsUrl: "shop-details.html",
    categoryUrl: "/shop",
  },
  {
    id: 4,
    price: "$70.00",
    discount: "15% Off",
    img: "assets/img/product-img-4.jpg",
    title: "Stylish Tote",
    category: "Women Bag",
    detailsUrl: "shop-details.html",
    categoryUrl: "/shop",
  },
  {
    id: 5,
    price: "$60.00",
    discount: "20% Off",
    img: "assets/img/product-img-5.jpg",
    title: "Canvas Shopper",
    category: "Casual Bag",
    detailsUrl: "shop-details.html",
    categoryUrl: "/shop",
  },
  {
    id: 6,
    price: "$110.00",
    discount: "18% Off",
    img: "assets/img/product-img-6.jpg",
    title: "Compact Purse",
    category: "Accessories",
    detailsUrl: "shop-details.html",
    categoryUrl: "/shop",
  },
];

export const ShopPage = () => {
  //   const data = useSelector();
  //   useEffect(() => {
  //     console.log(data);
  //   }, []);
  return (
    <div>
      {/* SIDEBAR SECTION START  */}
      <div className="ul-sidebar">
        {/* header  */}
        <div className="ul-sidebar-header">
          <div className="ul-sidebar-header-logo">
            <a href="index.html">
              <img src="assets/img/logo.svg" alt="logo" className="logo" />
            </a>
          </div>
          {/* sidebar closer  */}
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
            Phasellus pharetra, velit viverra lacinia consequat, ipsum odio
            mollis dolor, nec facilisis arcu arcu ultricies sapien. Quisque ut
            dapibus nunc. Vivamus sit amet efficitur velit. Phasellus eget
            fermentum mauris. Suspendisse nec dignissim nulla. Integer non quam
            commodo, scelerisque felis id, eleifend turpis. Phasellus in nulla
            quis erat tempor tristique eget vel purus. Nulla pharetra pharetra
            pharetra. Praesent varius eget justo ut lacinia. Phasellus pharetra
            velit.
          </p>
        </div>

        {/* product slider  */}
        <div className="ul-sidebar-products-wrapper d-none d-lg-flex">
          <div className="ul-sidebar-products-slider swiper">
            <div className="swiper-wrapper">
              {/* product card  */}
              <div className="swiper-slide">
                <div className="ul-product">
                  <div className="ul-product-heading">
                    <span className="ul-product-price">$99.00</span>
                    <span className="ul-product-discount-tag">25% Off</span>
                  </div>

                  <div className="ul-product-img">
                    <img
                      src="assets/img/product-img-1.jpg"
                      alt="Product Image"
                    />

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

              {/* product card  */}
              <div className="swiper-slide">
                <div className="ul-product">
                  <div className="ul-product-heading">
                    <span className="ul-product-price">$99.00</span>
                    <span className="ul-product-discount-tag">25% Off</span>
                  </div>

                  <div className="ul-product-img">
                    <img
                      src="assets/img/product-img-2.jpg"
                      alt="Product Image"
                    />

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

              {/* product card  */}
              <div className="swiper-slide">
                <div className="ul-product">
                  <div className="ul-product-heading">
                    <span className="ul-product-price">$99.00</span>
                    <span className="ul-product-discount-tag">25% Off</span>
                  </div>

                  <div className="ul-product-img">
                    <img
                      src="assets/img/product-img-2.jpg"
                      alt="Product Image"
                    />

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
            Phasellus pharetra, velit viverra lacinia consequat, ipsum odio
            mollis dolor, nec facilisis arcu arcu ultricies sapien. Quisque ut
            dapibus nunc. Vivamus sit amet efficitur velit. Phasellus eget
            fermentum mauris. Suspendisse nec dignissim nulla. Integer non quam
            commodo, scelerisque felis id, eleifend turpis. Phasellus in nulla
            quis erat tempor tristique eget vel purus. Nulla pharetra pharetra
            pharetra. Praesent varius eget justo ut lacinia. Phasellus pharetra
            velit.
          </p>
        </div>

        {/* sidebar footer  */}
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
      {/* SIDEBAR SECTION END  */}

      {/* HEADER SECTION START  */}
      <header className="ul-header">
        {/* header top  */}
        <div className="ul-header-top">
          <div className="ul-header-top-slider splide">
            <div className="splide__track">
              <ul className="splide__list">
                <li className="splide__slide">
                  <p className="ul-header-top-slider-item">
                    <i className="flaticon-sparkle"></i> limited time offer
                  </p>
                </li>
                <li className="splide__slide">
                  <p className="ul-header-top-slider-item">
                    <i className="flaticon-sparkle"></i> limited time offer
                  </p>
                </li>
                <li className="splide__slide">
                  <p className="ul-header-top-slider-item">
                    <i className="flaticon-sparkle"></i> limited time offer
                  </p>
                </li>
                <li className="splide__slide">
                  <p className="ul-header-top-slider-item">
                    <i className="flaticon-sparkle"></i> limited time offer
                  </p>
                </li>
                <li className="splide__slide">
                  <p className="ul-header-top-slider-item">
                    <i className="flaticon-sparkle"></i> limited time offer
                  </p>
                </li>
                <li className="splide__slide">
                  <p className="ul-header-top-slider-item">
                    <i className="flaticon-sparkle"></i> limited time offer
                  </p>
                </li>
                <li className="splide__slide">
                  <p className="ul-header-top-slider-item">
                    <i className="flaticon-sparkle"></i> limited time offer
                  </p>
                </li>
                <li className="splide__slide">
                  <p className="ul-header-top-slider-item">
                    <i className="flaticon-sparkle"></i> limited time offer
                  </p>
                </li>
                <li className="splide__slide">
                  <p className="ul-header-top-slider-item">
                    <i className="flaticon-sparkle"></i> limited time offer
                  </p>
                </li>
                <li className="splide__slide">
                  <p className="ul-header-top-slider-item">
                    <i className="flaticon-sparkle"></i> limited time offer
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* header bottom  */}
        <div className="ul-header-bottom">
          <div className="ul-container">
            <div className="ul-header-bottom-wrapper">
              {/* header left  */}
              <div className="header-bottom-left">
                <div className="logo-container">
                  <a href="index.html" className="d-inline-block">
                    <img
                      src="assets/img/logo.svg"
                      alt="logo"
                      className="logo"
                    />
                  </a>
                </div>

                {/* search form  */}
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

              {/* header nav  */}
              <div className="ul-header-nav-wrapper">
                <div className="to-go-to-sidebar-in-mobile">
                  <nav className="ul-header-nav">
                    <a href="index.html">Home</a>
                    <a href="/shop">Shop</a>
                    <a href="/shop">Women</a>
                    <a href="/shop">Men's</a>
                    <a href="/shop">Kids</a>
                    <a href="blog.html">Blog</a>

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
                              <a href="shop-details.html">Shop Details</a>
                            </li>
                            <li>
                              <a href="wishlist.html">Wishlist</a>
                            </li>
                            <li>
                              <a href="cart.html">Cart</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
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

              {/* actions  */}
              <div className="ul-header-actions">
                <button className="ul-header-mobile-search-opener d-xxl-none">
                  <i className="flaticon-search-interface-symbol"></i>
                </button>
                <a href="login.html">
                  <i className="flaticon-user"></i>
                </a>
                <a href="wishlist.html">
                  <i className="flaticon-heart"></i>
                </a>
                <a href="/cart">
                  <i className="flaticon-shopping-bag"></i>
                </a>
              </div>

              {/* sidebar opener  */}
              <div className="d-inline-flex">
                <button className="ul-header-sidebar-opener">
                  <i className="flaticon-hamburger"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* HEADER SECTION END  */}

      <main>
        {/* BREADCRUMB SECTION START  */}
        <div className="ul-container">
          <div className="ul-breadcrumb">
            <h2 className="ul-breadcrumb-title">Shop Left Sidebar</h2>
            <div className="ul-breadcrumb-nav">
              <a href="index.html">
                <i className="flaticon-home"></i> Home
              </a>
              <i className="flaticon-arrow-point-to-right"></i>
              <span className="current-page">Shop</span>
            </div>
          </div>
        </div>
        {/* BREADCRUMB SECTION END  */}

        {/* MAIN CONTENT SECTION START  */}
        <div className="ul-inner-page-container">
          <div className="ul-inner-products-wrapper">
            <div className="row ul-bs-row flex-column-reverse flex-md-row">
              {/* left side bar  */}
              <div className="col-lg-3 col-md-4">
                <div className="ul-products-sidebar">
                  {/* single widget / search  */}
                  <div className="ul-products-sidebar-widget ul-products-search">
                    <form action="#" className="ul-products-search-form">
                      <input
                        type="text"
                        name="product-search"
                        id="ul-products-search-field"
                        placeholder="Search Items"
                      />
                      <button>
                        <i className="flaticon-search-interface-symbol"></i>
                      </button>
                    </form>
                  </div>

                  {/* single widget / price filter  */}
                  <div className="ul-products-sidebar-widget ul-products-price-filter">
                    <h3 className="ul-products-sidebar-widget-title">
                      Filter by price
                    </h3>
                    <form action="#" className="ul-products-price-filter-form">
                      <div id="ul-products-price-filter-slider"></div>
                      <span className="filtered-price">$19 - $69</span>
                    </form>
                  </div>

                  {/* single widget / categories  */}
                  <div className="ul-products-sidebar-widget ul-products-categories">
                    <h3 className="ul-products-sidebar-widget-title">
                      Categories
                    </h3>

                    <div className="ul-products-categories-link">
                      <a href="#">
                        <span>
                          <i className="flaticon-arrow-point-to-right"></i>{" "}
                          Lifestyle
                        </span>
                      </a>
                      <a href="#">
                        <span>
                          <i className="flaticon-arrow-point-to-right"></i>{" "}
                          Beauty &amp; Fashion
                        </span>
                      </a>
                      <a href="#">
                        <span>
                          <i className="flaticon-arrow-point-to-right"></i>{" "}
                          Fitness &amp; Health
                        </span>
                      </a>
                      <a href="#">
                        <span>
                          <i className="flaticon-arrow-point-to-right"></i> Food
                          &amp; Cooking
                        </span>
                      </a>
                      <a href="#">
                        <span>
                          <i className="flaticon-arrow-point-to-right"></i> Tech
                          &amp; Gadgets
                        </span>
                      </a>
                      <a href="#">
                        <span>
                          <i className="flaticon-arrow-point-to-right"></i>{" "}
                          Entertainment
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* single widget / color filter  */}
                  <div className="ul-products-sidebar-widget ul-products-color-filter">
                    <h3 className="ul-products-sidebar-widget-title">
                      Filter By Color
                    </h3>

                    <div className="ul-products-color-filter-colors">
                      <a href="/shop" className="black">
                        <span className="left">
                          <span className="color-prview"></span> Black
                        </span>
                        <span>14</span>
                      </a>
                      <a href="/shop" className="green">
                        <span className="left">
                          <span className="color-prview"></span> Green
                        </span>
                        <span>14</span>
                      </a>
                      <a href="/shop" className="blue">
                        <span className="left">
                          <span className="color-prview"></span> Blue
                        </span>
                        <span>14</span>
                      </a>
                      <a href="/shop" className="red">
                        <span className="left">
                          <span className="color-prview"></span> Red
                        </span>
                        <span>14</span>
                      </a>
                      <a href="/shop" className="yellow">
                        <span className="left">
                          <span className="color-prview"></span> Yellow
                        </span>
                        <span>14</span>
                      </a>
                      <a href="/shop" className="brown">
                        <span className="left">
                          <span className="color-prview"></span> Brown
                        </span>
                        <span>14</span>
                      </a>
                      <a href="/shop" className="white">
                        <span className="left">
                          <span className="color-prview"></span> White
                        </span>
                        <span>14</span>
                      </a>
                    </div>
                  </div>

                  {/* single widget /product status */}
                  <div className="ul-products-sidebar-widget">
                    <h3 className="ul-products-sidebar-widget-title">
                      Product Status
                    </h3>

                    <div className="ul-products-categories-link">
                      <a href="#">
                        <span>
                          <i className="flaticon-arrow-point-to-right"></i> In
                          stock
                        </span>
                      </a>
                      <a href="#">
                        <span>
                          <i className="flaticon-arrow-point-to-right"></i> On
                          Sale
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* single widget / size filter  */}
                  <div className="ul-products-sidebar-widget">
                    <h3 className="ul-products-sidebar-widget-title">
                      Filter By Sizes
                    </h3>

                    <div className="ul-products-color-filter-colors">
                      <a href="/shop">
                        <span className="left">S</span>
                        <span>14</span>
                      </a>
                      <a href="/shop">
                        <span className="left">L</span>
                        <span>14</span>
                      </a>
                      <a href="/shop">
                        <span className="left">M</span>
                        <span>14</span>
                      </a>
                      <a href="/shop">
                        <span className="left">XL</span>
                        <span>14</span>
                      </a>
                      <a href="/shop">
                        <span className="left">XXL</span>
                        <span>14</span>
                      </a>
                    </div>
                  </div>

                  {/* single widget / review  */}
                  <div className="ul-products-sidebar-widget ul-products-rating-filter">
                    <h3 className="ul-products-sidebar-widget-title">
                      Review Star
                    </h3>

                    <div className="ul-products-rating-filter-ratings">
                      {/* single rating filter  */}
                      <div className="single-rating-wrapper">
                        <label for="ul-products-review-5-star">
                          <span className="left">
                            <input
                              type="checkbox"
                              name="jo-checkout-agreement"
                              id="ul-products-review-5-star"
                              hidden
                            />
                            <span className="stars">
                              <span>
                                <i className="flaticon-star"></i>
                              </span>
                              <span>
                                <i className="flaticon-star"></i>
                              </span>
                              <span>
                                <i className="flaticon-star"></i>
                              </span>
                              <span>
                                <i className="flaticon-star"></i>
                              </span>
                              <span>
                                <i className="flaticon-star"></i>
                              </span>
                            </span>
                          </span>
                          <span className="right">5 Only</span>
                        </label>
                      </div>

                      {/* single rating filter  */}
                      <div className="single-rating-wrapper">
                        <label for="ul-products-review-4-star">
                          <span className="left">
                            <input
                              type="checkbox"
                              name="jo-checkout-agreement"
                              id="ul-products-review-4-star"
                              hidden
                            />
                            <span className="stars">
                              <span>
                                <i className="flaticon-star"></i>
                              </span>
                              <span>
                                <i className="flaticon-star"></i>
                              </span>
                              <span>
                                <i className="flaticon-star"></i>
                              </span>
                              <span>
                                <i className="flaticon-star"></i>
                              </span>
                              <span>
                                <i className="flaticon-star"></i>
                              </span>
                            </span>
                          </span>
                          <span className="right">4 & up</span>
                        </label>
                      </div>

                      {/* single rating filter  */}
                      <div className="single-rating-wrapper">
                        <label for="ul-products-review-3-star">
                          <span className="left">
                            <input
                              type="checkbox"
                              name="jo-checkout-agreement"
                              id="ul-products-review-3-star"
                              hidden
                            />
                            <span className="stars">
                              <span>
                                <i className="flaticon-star"></i>
                              </span>
                              <span>
                                <i className="flaticon-star"></i>
                              </span>
                              <span>
                                <i className="flaticon-star"></i>
                              </span>
                              <span>
                                <i className="flaticon-star"></i>
                              </span>
                              <span>
                                <i className="flaticon-star"></i>
                              </span>
                            </span>
                          </span>
                          <span className="right">3 & up</span>
                        </label>
                      </div>

                      {/* single rating filter  */}
                      <div className="single-rating-wrapper">
                        <label for="ul-products-review-2-star">
                          <span className="left">
                            <input
                              type="checkbox"
                              name="jo-checkout-agreement"
                              id="ul-products-review-2-star"
                              hidden
                            />
                            <span className="stars">
                              <span>
                                <i className="flaticon-star"></i>
                              </span>
                              <span>
                                <i className="flaticon-star"></i>
                              </span>
                            </span>
                          </span>
                          <span className="right">2 & up</span>
                        </label>
                      </div>

                      {/* single rating filter  */}
                      <div className="single-rating-wrapper">
                        <label for="ul-products-review-1-star">
                          <span className="left">
                            <input
                              type="checkbox"
                              name="jo-checkout-agreement"
                              id="ul-products-review-1-star"
                              hidden
                            />
                            <span className="stars">
                              <span>
                                <i className="flaticon-star"></i>
                              </span>
                            </span>
                          </span>
                          <span className="right">1 & up</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* right products container  */}
              <div className="col-lg-9 col-md-8">
                <div className="row ul-bs-row row-cols-lg-3 row-cols-2 row-cols-xxs-1">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* pagination  */}
                <div className="ul-pagination">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="flaticon-left-arrow"></i>
                      </a>
                    </li>
                    <li className="pages">
                      <a href="#" className="active">
                        01
                      </a>
                      <a href="#">02</a>
                      <a href="#">03</a>
                      <a href="#">04</a>
                      <a href="#">05</a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="flaticon-arrow-point-to-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MAIN CONTENT SECTION END  */}
      </main>

      {/* FOOTER SECTION START  */}
      <footer className="ul-footer">
        <div className="ul-inner-container">
          <div className="ul-footer-top">
            {/* single links column  */}
            <div className="ul-footer-top-widget">
              <h3 className="ul-footer-top-widget-title">Brands</h3>

              <div className="ul-footer-top-widget-links">
                <a href="#">Zara</a>
                <a href="#">Guess</a>
                <a href="#">Mango</a>
                <a href="#">LCWaikiki</a>
                <a href="#">Monda</a>
              </div>
            </div>

            {/* single links column  */}
            <div className="ul-footer-top-widget">
              <h3 className="ul-footer-top-widget-title">Categories</h3>

              <div className="ul-footer-top-widget-links">
                <a href="#">Watches</a>
                <a href="#">Watch Accessories</a>
                <a href="#">Clocks</a>
                <a href="#">Jewellery</a>
                <a href="#">Women’s Collection</a>
              </div>
            </div>

            {/* single links column  */}
            <div className="ul-footer-top-widget">
              <h3 className="ul-footer-top-widget-title">Accessories</h3>

              <div className="ul-footer-top-widget-links">
                <a href="#">Order Tracking</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Tutorials</a>
                <a href="#">FAQ</a>
              </div>
            </div>

            {/* single links column  */}
            <div className="ul-footer-top-widget">
              <h3 className="ul-footer-top-widget-title">Services</h3>

              <div className="ul-footer-top-widget-links">
                <a href="#">Sale</a>
                <a href="#">Quick Ship</a>
                <a href="#">New Designs</a>
                <a href="#">Protection Plan</a>
                <a href="#">Gift Cards</a>
              </div>
            </div>

            {/* single links column  */}
            <div className="ul-footer-top-widget">
              <h3 className="ul-footer-top-widget-title">Policies</h3>

              <div className="ul-footer-top-widget-links">
                <a href="#">Policy</a>
                <a href="#">Dressy Inside</a>
                <a href="#">About Us</a>
                <a href="#">Company</a>
                <a href="#">Careers</a>
              </div>
            </div>

            {/* single links column  */}
            <div className="ul-footer-top-widget">
              <h3 className="ul-footer-top-widget-title">Help</h3>

              <div className="ul-footer-top-widget-links">
                <a href="#">Contact us</a>
                <a href="#">About us</a>
                <a href="#">Reviews</a>
                <a href="#">Terms of Service</a>
                <a href="#">Refund policy</a>
              </div>
            </div>
          </div>

          <div className="ul-footer-middle">
            {/* single widget  */}
            <div className="ul-footer-middle-widget">
              <h3 className="ul-footer-middle-widget-title">
                Download Our Apps
              </h3>
              <div className="ul-footer-middle-widget-content">
                <div className="app-links">
                  <a href="#">
                    <img
                      src="assets/img/android.png"
                      alt="Play Store Link Image"
                    />
                  </a>
                  <a href="#">
                    <img src="assets/img/ios.png" alt="App Store Link Image" />
                  </a>
                </div>
              </div>
            </div>

            {/* single widget  */}
            <div className="ul-footer-middle-widget">
              <h3 className="ul-footer-middle-widget-title">Follow us</h3>
              <div className="ul-footer-middle-widget-content">
                <div className="social-links">
                  <a href="#">
                    <i className="flaticon-facebook-app-symbol"></i>
                  </a>
                  <a href="#">
                    <i className="flaticon-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="flaticon-linkedin-big-logo"></i>
                  </a>
                  <a href="#">
                    <i className="flaticon-youtube"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* single widget  */}
            <div className="ul-footer-middle-widget">
              <h3 className="ul-footer-middle-widget-title">
                Need help? Call now!
              </h3>
              <div className="ul-footer-middle-widget-content">
                <div className="contact-nums">
                  <a href="tel:1234567890">(500) 8001 8588</a>,{" "}
                  <a href="tel:1234567890">(500) 544 6550</a>
                </div>
              </div>
            </div>

            {/*  */}

            {/* single widget  */}
            <div className="ul-footer-middle-widget align-self-center">
              <a href="index.html">
                <img
                  src="assets/img/logo-white.svg"
                  alt="logo"
                  className="logo"
                />
              </a>
            </div>
          </div>

          <div className="ul-footer-bottom">
            <p className="copyright-txt">
              Copyright 2024 ©{" "}
              <a href="https://temptics.com/" className="ul-footer-bottom-link">
                Temptics
              </a>
            </p>
            <img
              src="assets/img/payment-methods.png"
              alt="payment methods logos"
            />
          </div>
        </div>
      </footer>
      {/* FOOTER SECTION END  */}
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { id, price, discount, img, title, category, detailsUrl, categoryUrl } =
    product;

  const dispatch = useDispatch();

  return (
    <div className="col">
      <div className="ul-product">
        <div className="ul-product-heading">
          <span className="ul-product-price">{price}</span>
          <span className="ul-product-discount-tag">{discount}</span>
        </div>

        <div className="ul-product-img">
          <img src={img} alt={title} />

          <div className="ul-product-actions">
            <button onClick={() => dispatch(addToCart(product))}>
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
            <a href={detailsUrl}>{title}</a>
          </h4>
          <h5 className="ul-product-category">
            <a href={categoryUrl}>{category}</a>
          </h5>
        </div>
      </div>
    </div>
  );
};
