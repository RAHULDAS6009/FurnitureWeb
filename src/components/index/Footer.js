import React from "react";

export default function Footer() {
  return (
    <div className="ul-footer">
      <div className="ul-inner-container">
        <div className="ul-footer-top">
          {/* <!-- single links column --> */}
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

          {/* <!-- single links column --> */}
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

          {/* <!-- single links column --> */}
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

          {/* <!-- single links column --> */}
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

          {/* <!-- single links column --> */}
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

          {/* <!-- single links column --> */}
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
          {/* <!-- single widget --> */}
          <div className="ul-footer-middle-widget">
            <h3 className="ul-footer-middle-widget-title">Download Our Apps</h3>
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

          {/* <!-- single widget --> */}
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

          {/* <!-- single widget --> */}
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

          {/* <!-- single widget --> */}
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
    </div>
  );
}
