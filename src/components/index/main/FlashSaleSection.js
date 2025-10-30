import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const FlashSaleSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const flashProducts = [
    {
      img: "product-img-1.jpg",
      title: "Orange Airsuit",
      category: "Fashion Bag",
      price: "$99.00",
      discount: "25% Off",
    },
    {
      img: "product-img-2.jpg",
      title: "Blue Backpack",
      category: "Travel Bag",
      price: "$89.00",
      discount: "10% Off",
    },
    {
      img: "product-img-3.jpg",
      title: "Leather Handbag",
      category: "Luxury Bag",
      price: "$120.00",
      discount: "30% Off",
    },
    {
      img: "product-img-4.jpg",
      title: "Stylish Tote",
      category: "Women Bag",
      price: "$70.00",
      discount: "15% Off",
    },
    {
      img: "product-img-5.jpg",
      title: "Classic Shoulder Bag",
      category: "Women Bag",
      price: "$110.00",
      discount: "22% Off",
    },
    {
      img: "product-img-1.jpg",
      title: "Orange Airsuit",
      category: "Fashion Bag",
      price: "$99.00",
      discount: "25% Off",
    },
  ];

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

              {/* countdown mock for now */}
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
                0: { slidesPerView: 1 }, // mobile
                576: { slidesPerView: 2 }, // sm
                768: { slidesPerView: 3 }, // md
                1200: { slidesPerView: 4 }, // xl / desktop
              }}
              onBeforeInit={(swiper) => {
                // attach custom nav buttons
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
            >
              {flashProducts.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="ul-product">
                    {/* price / discount row */}
                    <div className="ul-product-heading">
                      <span className="ul-product-price">{item.price}</span>
                      <span className="ul-product-discount-tag">
                        {item.discount}
                      </span>
                    </div>

                    {/* image + hover actions */}
                    <div className="ul-product-img">
                      <img
                        src={`assets/img/${item.img}`}
                        alt={item.title}
                        loading="lazy"
                      />
                      <div className="ul-product-actions">
                        <button>
                          <i className="flaticon-shopping-bag"></i>
                        </button>
                        {/* <a href="#">
                          <i className="flaticon-hide"></i>
                        </a>
                        <button>
                          <i className="flaticon-heart"></i>
                        </button> */}
                      </div>
                    </div>

                    {/* text block */}
                    <div className="ul-product-txt">
                      <h4 className="ul-product-title">
                        <a href="/shopdetails">{item.title}</a>
                      </h4>
                      <h5 className="ul-product-category">
                        <a href="/shop">{item.category}</a>
                      </h5>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleSection;
