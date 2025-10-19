import React from "react";
import { Header } from "../components/index/Header";
import Footer from "../components/index/Footer";

export const Login = () => {
  return (
    <div>
      <Header />
      <main>
        {/* BREADCRUMB SECTION START   */}
        <div className="ul-container">
          <div className="ul-breadcrumb">
            <h2 className="ul-breadcrumb-title">Log In</h2>
            <div className="ul-breadcrumb-nav">
              <a href="index.html">
                <i className="flaticon-home"></i> Home
              </a>
              <i className="flaticon-arrow-point-to-right"></i>
              <span className="current-page">Log In</span>
            </div>
          </div>
        </div>
        {/* BREADCRUMB SECTION END   */}

        <div className="ul-container">
          <div className="ul-login">
            <div className="ul-inner-page-container">
              <div className="row justify-content-evenly align-items-center flex-column-reverse flex-md-row">
                <div className="col-md-5">
                  <div className="ul-login-img text-center">
                    <img src="assets/img/login-img.svg" alt="Login Image" />
                  </div>
                </div>

                <div className="col-xl-4 col-md-7">
                  <form action="#" className="ul-contact-form">
                    <div className="row">
                      {/* email   */}
                      <div className="form-group">
                        <div className="position-relative">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter Email Address"
                          />
                        </div>
                      </div>
                      {/*  */}
                      {/* password   */}
                      <div className="form-group">
                        <div className="position-relative">
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter Password"
                          />
                        </div>
                      </div>
                    </div>
                    {/* submit btn   */}
                    <button type="submit">Log In</button>
                  </form>

                  <p className="text-center mt-4 mb-0">
                    Already have an account? <a href="/register">Sign Up</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
