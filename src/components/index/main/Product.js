import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addToCart, getCartTotal } from "../../../redux/cartSlice";
import { ProductCard } from "../../../pages/ShopPage";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { products } from "../../../data/Data";

const ProductsSection = () => {
  const dispatch = useDispatch();

  // refs for row 1 navigation buttons
  const prevBtn1 = useRef(null);
  const nextBtn1 = useRef(null);

  // 🛒 normalize to the SAME shape as ShopPage
  const handleAdd = (rawProduct, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!rawProduct) return;

    // make sure we always have images: []
    const images =
      Array.isArray(rawProduct.images) && rawProduct.images.length
        ? rawProduct.images
        : rawProduct.img
        ? [rawProduct.img]
        : rawProduct.image
        ? [rawProduct.image]
        : rawProduct.thumbnail
        ? [rawProduct.thumbnail]
        : [];

    const payload = {
      ...rawProduct,
      images, // ✅ cart can now do images[0]
      quantity:
        rawProduct.quantity && rawProduct.quantity > 0
          ? rawProduct.quantity
          : 1,
    };

    if (!payload.id) {
      console.warn("addToCart: product.id missing", payload);
      return;
    }

    dispatch(addToCart(payload));
    dispatch(getCartTotal());
  };

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
                <a href="/shop" className="ul-btn">
                  More Collection <i className="flaticon-up-right-arrow"></i>
                </a>
              </div>
            </div>

            <div className="row ul-bs-row">
              {/* left banner */}
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

              {/* slider */}
              <div className="col-lg-9 col-md-8 col-12">
                <Swiper
                  className="ul-products-slider-1"
                  modules={[Navigation]}
                  spaceBetween={24}
                  loop={true}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    576: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                    1200: { slidesPerView: 4 },
                  }}
                  onBeforeInit={(swiper) => {
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
                      <div className="ul-product-card-wrap h-full">
                        {/* ✅ use the real ProductCard, but pass correct prop name */}
                        <ProductCard
                          product={product}
                          onAddClick={() => handleAdd(product)}
                          // if your ProductCard also supports onQuickAdd, you can pass it too:
                          onQuickAdd={(e) => handleAdd(product, e)}
                        />

                        {/* overlay quick add as backup */}
                        <button
                          className="ul-addtocart-quick"
                          onClick={(e) => handleAdd(product, e)}
                          aria-label="Add to Cart"
                          title="Add to Cart"
                        >
                          <i className="flaticon-shopping-bag"></i>
                        </button>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* slider navigation */}
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

      {/* ad section (your original) */}
      <div className="ul-container">
        <section className="ul-ad">
          <div className="ul-inner-container">
            <div className="ul-ad-content">
              <div className="ul-ad-txt">
                <span className="ul-ad-sub-title">Trending Products</span>
                <h2 className="ul-section-title">
                  Get 30% Discount On All Hudis!
                </h2>

                <div className="ul-ad-categories">
                  <span className="category">
                    <span>
                      <i className="flaticon-check-mark"></i>
                    </span>
                    Zara
                  </span>
                  <span className="category">
                    <span>
                      <i className="flaticon-check-mark"></i>
                    </span>
                    Gucie
                  </span>
                  <span className="category">
                    <span>
                      <i className="flaticon-check-mark"></i>
                    </span>
                    Publo
                  </span>
                  <span className="category">
                    <span>
                      <i className="flaticon-check-mark"></i>
                    </span>
                    Men's
                  </span>
                  <span className="category">
                    <span>
                      <i className="flaticon-check-mark"></i>
                    </span>
                    Women's
                  </span>
                </div>
              </div>

              <div className="ul-ad-img">
                <img src="assets/img/ad-img.png" alt="Ad" />
              </div>

              <a href="/shop" className="ul-btn">
                Check Discount <i className="flaticon-up-right-arrow"></i>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* CSS fixes */}
      <style>{`
        .ul-product-card-wrap {
          position: relative;
        }
        .ul-addtocart-quick {
          position: absolute;
          right: 12px;
          bottom: 12px;
          z-index: 5;
          width: 40px;
          height: 40px;
          border: none;
          border-radius: 999px;
          background: #ef2853;
          color: #fff;
          display: grid;
          place-items: center;
          cursor: pointer;
          opacity: 0.92;
        }
        .ul-addtocart-quick:hover { opacity: 1; }

        /* make sure card overlays don't block the quick button */
        .ul-product .ul-product-actions,
        .ul-product .ul-product-img::after {
          pointer-events: none;
        }
      `}</style>
    </>
  );
};

export default ProductsSection;
