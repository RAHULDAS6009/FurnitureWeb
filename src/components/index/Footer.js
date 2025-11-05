import React from "react";

export default function Footer() {
  return (
    <div className="ul-footer ">
      <div className="ul-inner-container">
        <div className="ul-footer-middle">
          {/* <!-- single widget --> */}
          <div className="ul-footer-middle-widget">
            <div className="ul-footer-middle-widget-content"></div>
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
      <br />
      <br />
    </div>
  );
}
