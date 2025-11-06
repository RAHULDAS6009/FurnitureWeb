import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addToCart, getCartTotal } from "../../../redux/cartSlice";
import { ProductCard } from "../../../pages/ShopPage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { products } from "../../../data/Data";

const FlashSaleSection = () => {
  const dispatch = useDispatch();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // ✅ make payload match ShopPage cart item shape
  const handleAdd = (rawProduct, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!rawProduct) return;

    // ensure we always have images: []
    const images =
      rawProduct.images && Array.isArray(rawProduct.images)
        ? rawProduct.images
        : rawProduct.img
        ? [rawProduct.img]
        : rawProduct.image
        ? [rawProduct.image]
        : [];

    const payload = {
      ...rawProduct,
      images, // ✅ cart can now use images[0]
      quantity:
        rawProduct.quantity && rawProduct.quantity > 0
          ? rawProduct.quantity
          : 1,
    };

    dispatch(addToCart(payload));
    dispatch(getCartTotal());
  };

  return (
    <div className="overflow-hidden">
      <div className="ul-container">
        <div className="ul-flash-sale">
          <div className="ul-inner-container">
            {/* header ... keep yours */}
            <div className="ul-section-heading ul-flash-sale-heading">
              <div className="left">
                <span className="ul-section-sub-title">New Collection</span>
                <h2 className="ul-section-title">Trending Flash Sell</h2>
              </div>

              <a href="/shop" className="ul-btn">
                View All Collection <i className="flaticon-up-right-arrow"></i>
              </a>

              <div className="ul-products-slider-nav ul-products-slider-flash-nav">
                <button className="prev" ref={prevRef}>
                    <i className="flaticon-left-arrow"></i>
                </button>
                <button className="next" ref={nextRef}>
                    <i className="flaticon-arrow-point-to-right"></i>
                </button>
              </div>
            </div>

            {/* slider */}
            <Swiper
              className="ul-flash-sale-slider"
              modules={[Navigation]}
              spaceBetween={24}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="ul-product-card-wrap" style={{ position: "relative" }}>
                    {/* ✅ use the real ProductCard, but pass correct prop name */}
                    <ProductCard
                      product={product}
                      onAddClick={() => handleAdd(product)}
                    />

                    {/* overlay quick add — stays as backup */}
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
          </div>
        </div>
      </div>

      <style>{`
        .ul-product-card-wrap {
          position: relative;
        }
        .ul-addtocart-quick {
            position: absolute;
            right: 12px;
            bottom: 12px;
            z-index: 20;
            border: none;
            background: #ef2853;
            color: #fff;
            width: 40px;
            height: 40px;
            border-radius: 999px;
            display: grid;
            place-items: center;
            cursor: pointer;
            opacity: 0.92;
        }
        .ul-addtocart-quick:hover { opacity: 1; }
      `}</style>
    </div>
  );
};

export default FlashSaleSection;
