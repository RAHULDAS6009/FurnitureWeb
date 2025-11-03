import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";
import { ProductCard } from "../../../pages/ShopPage";
import { products } from "../../../pages/ShopPage";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const FlashSaleSection = () => {
  const dispatch = useDispatch();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // ------- ensure the payload shape your slice expects -------
  const handleAdd = (rawProduct, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (!rawProduct) return;

    const product = {
      id: rawProduct.id,
      title: rawProduct.title,
      price: rawProduct.price, // e.g. "$99.00" (parse inside slice)
      img: rawProduct.img || rawProduct.image || rawProduct.thumbnail,
      category: rawProduct.category,
      size: rawProduct.size,
      color: rawProduct.color,
      inStock: rawProduct.inStock ?? true,
      onSale: rawProduct.onSale ?? false,
      discount: rawProduct.discount,
      detailsUrl: rawProduct.detailsUrl || "/shopdetails",
      categoryUrl: rawProduct.categoryUrl || "/shop",
      quantity: rawProduct.quantity && rawProduct.quantity > 0 ? rawProduct.quantity : 1,
    };

    if (!product.id) {
      console.warn("addToCart: product.id missing", product);
      return;
    }
    dispatch(addToCart(product));
  };

  return (
    <div className="overflow-hidden">
      <div className="ul-container">
        <div className="ul-flash-sale">
          <div className="ul-inner-container">
            {/* heading */}
            <div className="ul-section-heading ul-flash-sale-heading">
              <div className="left">
                <span className="ul-section-sub-title">New Collection</span>
                <h2 className="ul-section-title">Trending Flash Sell</h2>
              </div>

              {/* (optional) countdown UI */}
              <div className="ul-flash-sale-countdown-wrapper">
                <div className="ul-flash-sale-countdown">
                  <div className="days-wrapper">
                    <div className="days number">3</div>
                    <span className="txt">Days</span>
                  </div>
                  <div className="hours-wrapper">
                    <div className="hours number">06</div>
                    <span className="txt">Hours</span>
                  </div>
                  <div className="minutes-wrapper">
                    <div className="minutes number">34</div>
                    <span className="txt">Min</span>
                  </div>
                  <div className="seconds-wrapper">
                    <div className="seconds number">54</div>
                    <span className="txt">Sec</span>
                  </div>
                </div>
              </div>

              <a href="/shop" className="ul-btn">
                View All Collection <i className="flaticon-up-right-arrow"></i>
              </a>

              {/* nav arrows */}
              <div className="ul-products-slider-nav ul-products-slider-flash-nav">
                <button className="prev" ref={prevRef}>
                  <i className="flaticon-left-arrow"></i>
                </button>
                <button className="next" ref={nextRef}>
                  <i className="flaticon-arrow-point-to-right"></i>
                </button>
              </div>
            </div>

            {/* products slider */}
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
                  {/* If ProductCard supports onAdd, pass it */}
                  <div className="ul-product-card-wrap">
                    <ProductCard
                      product={product}
                      onAdd={(e) => handleAdd(product, e)}
                    />

                    {/* Quick Add button overlay (works even if ProductCard ignores onAdd) */}
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

      {/* Small CSS fix for click-through issues */}
      <style>{`
        .ul-product-card-wrap {
          position: relative;
        }
        .ul-addtocart-quick {
          position: absolute;
          right: 12px;
          bottom: 12px;
          z-index: 5; 
          pointer-events: auto; 
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
        /* In case an overlay covers the whole card, make sure quick button stays on top */
        .ul-product .ul-product-actions,
        .ul-product .ul-product-img::after {
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default FlashSaleSection;
