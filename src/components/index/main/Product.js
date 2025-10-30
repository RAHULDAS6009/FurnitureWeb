import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";
import { ProductCard } from "../../../pages/ShopPage";
import { products } from "../../../pages/ShopPage";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const ProductsSection = () => {
  const dispatch = useDispatch();

  // refs for row 1 navigation buttons
  const prevBtn1 = useRef(null);
  const nextBtn1 = useRef(null);

  // refs for row 2 navigation buttons
  const prevBtn2 = useRef(null);
  const nextBtn2 = useRef(null);

  return (
    <>
      {/* PRODUCTS SECTION START */}
      <div className="ul-container">
        <br />
        <section className="ul-products">
          <div className="ul-inner-container">
            {/* header row */}
            <div className="ul-section-heading">
              <div className="left">
                <span className="ul-section-sub-title">Summer collection</span>
                <h2 className="ul-section-title">Shopping Every Day</h2>
              </div>

              <div className="right">
                <a href="#" className="ul-btn">
                  More Collection <i className="flaticon-up-right-arrow"></i>
                </a>
              </div>
            </div>

            {/* MAIN GRID (2 rows) */}
            <div className="row ul-bs-row">
              {/* ---------- ROW 1 LEFT BANNER ---------- */}
              <div className="col-lg-3 col-md-4 col-12">
                <div className="ul-products-sub-banner">
                  <div className="ul-products-sub-banner-img">
                    <img
                      src="assets/img/products-sub-banner-1.jpg"
                      alt="Sub Banner"
                    />
                  </div>
                  <div className="ul-products-sub-banner-txt">
                    <h3 className="ul-products-sub-banner-title">
                      Trending Now Only This Weekend!
                    </h3>
                    <a href="/shop" className="ul-btn">
                      Shop Now <i className="flaticon-up-right-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* ---------- ROW 1 SLIDER ---------- */}
              <div className="col-lg-9 col-md-8 col-12">
                <Swiper
                  className="ul-products-slider-1"
                  modules={[Navigation]}
                  spaceBetween={24}
                  loop={true}
                  breakpoints={{
                    0: { slidesPerView: 1 }, // mobile shows 1 product
                    576: { slidesPerView: 2 }, // sm
                    992: { slidesPerView: 3 }, // lg
                    1200: { slidesPerView: 4 }, // xl
                  }}
                  onBeforeInit={(swiper) => {
                    // connect custom buttons
                    swiper.params.navigation.prevEl = prevBtn1.current;
                    swiper.params.navigation.nextEl = nextBtn1.current;
                  }}
                  navigation={{
                    prevEl: prevBtn1.current,
                    nextEl: nextBtn1.current,
                  }}
                >
                  {products.map((product) => (
                    <SwiperSlide key={product.id}>
                      {/* If ProductCard itself already returns outer div, just render it */}
                      <ProductCard product={product} />

                      {/* If ProductCard doesn't dispatch addToCart and you still need that button,
                          you can also drop custom CTA here */}
                      {/* 
                      <button
                        onClick={() => dispatch(addToCart(product))}
                        className="ul-addtocart-quick"
                      >
                        <i className="flaticon-shopping-bag"></i>
                      </button> 
                      */}
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* slider navigation row 1 */}
                <div className="ul-products-slider-nav ul-products-slider-1-nav">
                  <button className="prev" ref={prevBtn1}>
                    <i className="flaticon-left-arrow"></i>
                  </button>
                  <button className="next" ref={nextBtn1}>
                    <i className="flaticon-arrow-point-to-right"></i>
                  </button>
                </div>
              </div>

             

              
            </div>
          </div>
        </section>
      </div>
      
      {/* PRODUCTS SECTION END */}
       <div className="ul-container">
      <section className="ul-ad">
        <div className="ul-inner-container">
          <div className="ul-ad-content">
            <div className="ul-ad-txt">
              <span className="ul-ad-sub-title">Trending Products</span>
              <h2 className="ul-section-title">Get 30% Discount On All Hudis!</h2>

              <div className="ul-ad-categories">
                <span className="category">
                  <span><i className="flaticon-check-mark"></i></span>Zara
                </span>
                <span className="category">
                  <span><i className="flaticon-check-mark"></i></span>Gucie
                </span>
                <span className="category">
                  <span><i className="flaticon-check-mark"></i></span>Publo
                </span>
                <span className="category">
                  <span><i className="flaticon-check-mark"></i></span>Men's
                </span>
                <span className="category">
                  <span><i className="flaticon-check-mark"></i></span>Women's
                </span>
              </div>
            </div>

            <div className="ul-ad-img">
              <img src="assets/img/ad-img.png" alt="Ad" />
            </div>

            <a href="shop.html" className="ul-btn">
              Check Discount <i className="flaticon-up-right-arrow"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ProductsSection;
