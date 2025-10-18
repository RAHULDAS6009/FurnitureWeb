import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../components/index/Header";
import {
  updateQuantity,
  removeItem,
  getCartTotal,
  resetCart,
} from "../redux/cartSlice";

export const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.data);
  const [totalAmount, setTotalAmount] = useState(0);
  const totalItems = useSelector((state) => state.cart.totalItems);

  useEffect(() => {
    // Convert all prices (like "$89") to numbers and sum up
    const total = cart.reduce((sum, item) => {
      const numericPrice = parseFloat(item.price.replace("$", ""));
      return sum + numericPrice * item.quantity;
    }, 0);

    setTotalAmount(total);
  }, [cart]);

  const handleIncrease = (id) => {
    const product = cart.find((item) => item.id === id);
    if (product) {
      dispatch(updateQuantity({ id, quantity: Number(product.quantity) + 1 }));
    }
  };

  const handleDecrease = (id) => {
    const product = cart.find((item) => item.id === id);
    if (product && product.quantity > 1) {
      dispatch(updateQuantity({ id, quantity: Number(product.quantity) - 1 }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem({ id }));
  };

  const handleResetCart = () => {
    dispatch(resetCart());
  };
  return (
    <div>
      {/*  SIDEBAR SECTION START  */}
      <div className="ul-sidebar">
        {/*  header  */}
        <div className="ul-sidebar-header">
          <div className="ul-sidebar-header-logo">
            <a href="/">
              <img src="assets/img/logo.svg" alt="logo" className="logo" />
            </a>
          </div>
          {/*  sidebar closer  */}
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

        {/*  product slider  */}
        <div className="ul-sidebar-products-wrapper d-none d-lg-flex">
          <div className="ul-sidebar-products-slider swiper">
            <div className="swiper-wrapper">
              {/*  product card  */}
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
                      <a href="/shop-details">Orange Airsuit</a>
                    </h4>
                    <h5 className="ul-product-category">
                      <a href="/shop">Fashion Bag</a>
                    </h5>
                  </div>
                </div>
              </div>

              {/*  product card  */}
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
                      <a href="/shop-details">Orange Airsuit</a>
                    </h4>
                    <h5 className="ul-product-category">
                      <a href="/shop">Fashion Bag</a>
                    </h5>
                  </div>
                </div>
              </div>

              {/*  product card  */}
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
                      <a href="/shop-details">Orange Airsuit</a>
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

        {/*  sidebar footer  */}
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
      {/*  SIDEBAR SECTION END  */}

      <Header />

      <main>
        {/* BREADCRUMB SECTION */}
        <div className="ul-container">
          <div className="ul-breadcrumb">
            <h2 className="ul-breadcrumb-title">Cart List</h2>
            <div className="ul-breadcrumb-nav">
              <a href="/">
                <i className="flaticon-home"></i> Home
              </a>
              <i className="flaticon-arrow-point-to-right"></i>
              <span className="current-page">Cart List</span>
            </div>
          </div>
        </div>

        <div className="ul-cart-container">
          <div className="cart-top">
            <div className="table-responsive">
              <table className="ul-cart-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.length > 0 ? (
                    cart.map((item) => (
                      <CartItem
                        key={item.id}
                        item={item}
                        onIncrease={() => handleIncrease(item.id)}
                        onDecrease={() => handleDecrease(item.id)}
                        onRemove={() => handleRemove(item.id)}
                      />
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" style={{ textAlign: "center" }}>
                        Your cart is empty
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="ul-cart-actions">
              <button
                className="ul-cart-update-cart-btn"
                onClick={handleResetCart}
              >
                Reset Cart
              </button>
            </div>
          </div>

          <div className="cart-bottom">
            <div className="ul-cart-expense-overview">
              <h3 className="ul-cart-expense-overview-title">Total</h3>
              <div className="middle">
                <div className="single-row">
                  <span className="inner-title">Subtotal</span>
                  <span className="number">${totalAmount.toFixed(2)}</span>
                </div>
                <div className="single-row">
                  <span className="inner-title">Shipping Fee</span>
                  <span className="number">$15.00</span>
                </div>
              </div>
              <div className="bottom">
                <div className="single-row">
                  <span className="inner-title">Total</span>
                  <span className="number">
                    ${(totalAmount + 15).toFixed(2)}
                  </span>
                </div>
                <button className="ul-cart-checkout-direct-btn">
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/*  FOOTER SECTION START  */}
      <footer className="ul-footer">
        <div className="ul-inner-container">
          <div className="ul-footer-top">
            {/*  single links column  */}
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

            {/*  single links column  */}
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

            {/*  single links column  */}
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

            {/*  single links column  */}
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

            {/*  single links column  */}
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

            {/*  single links column  */}
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
            {/*  single widget  */}
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

            {/*  single widget  */}
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

            {/*  single widget  */}
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

            {/*  single widget  */}
            <div className="ul-footer-middle-widget align-self-center">
              <a href="/">
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
      {/*  FOOTER SECTION END  */}
    </div>
  );
};
// src/components/ProductCard.jsx
const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  const { title, image, price, quantity } = item;

  return (
    <tr>
      <td>
        <div className="ul-cart-product">
          <a href="/shop-details" className="ul-cart-product-img">
            <img src={image} alt={title} />
          </a>
          <a href="/shop-details" className="ul-cart-product-title">
            {title}
          </a>
        </div>
      </td>

      <td>
        <span className="ul-cart-item-price">{price}</span>
      </td>

      <td>
        <div className="ul-product-details-quantity mt-0">
          <form action="#" className="ul-product-quantity-wrapper">
            <input
              type="number"
              name="product-quantity"
              className="ul-product-quantity"
              value={quantity}
              min="1"
              readOnly
            />
            <div className="btns">
              <button
                type="button"
                className="quantityIncreaseButton"
                onClick={onIncrease}
              >
                <i className="flaticon-plus"></i>
              </button>
              <button
                type="button"
                className="quantityDecreaseButton"
                onClick={onDecrease}
              >
                <i className="flaticon-minus-sign"></i>
              </button>
            </div>
          </form>
        </div>
      </td>

      <td>
        <span className="ul-cart-item-subtotal">
          ${price.replace("$", "") * quantity}
        </span>
      </td>

      <td>
        <div className="ul-cart-item-remove">
          <button onClick={onRemove}>
            <i className="flaticon-close"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};
