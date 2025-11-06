import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addToCart, getCartTotal } from "../../../redux/cartSlice";
import { ProductCard } from "../../../pages/ShopPage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { products } from "../../../data/Data";

import { AddToCartModal } from "../../../pages/ShopPage";

const FlashSaleSection = () => {
  const dispatch = useDispatch();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // state for modal
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [chosenSize, setChosenSize] = React.useState("M");
  const [qty, setQty] = React.useState(1);

  const handleAdd = (product, e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setSelectedProduct(product);
    setChosenSize("M");
    setQty(1);
    setModalOpen(true);
  };

  const handleConfirmAdd = () => {
    if (!selectedProduct) return;
    dispatch(
      addToCart({
        ...selectedProduct,
        size: chosenSize,
        quantity: qty,
      })
    );
    setModalOpen(false);
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

              {/* countdown */}
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

              <div className="ul-products-slider-nav ul-products-slider-flash-nav">
                <button className="prev" ref={prevRef}>
                  <i className="flaticon-left-arrow"></i>
                </button>
                <button className="next" ref={nextRef}>
                  <i className="flaticon-arrow-point-to-right"></i>
                </button>
              </div>
            </div>

            {/* Swiper product list */}
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
                  <div className="ul-product-card-wrap">
                    <ProductCard
                      product={product}
                      onAddClick={(e) => handleAdd(product, e)}
                    />
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

      {/* Reuse modal from ShopPage */}
      <AddToCartModal
        open={modalOpen}
        product={selectedProduct}
        size={chosenSize}
        qty={qty}
        onSizeChange={setChosenSize}
        onQtyChange={setQty}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirmAdd}
      />

      <style>{`
        .ul-product-card-wrap { position: relative; }
        .ul-addtocart-quick {
          position: absolute;
          right: 12px;
          bottom: 12px;
          z-index: 5;
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
