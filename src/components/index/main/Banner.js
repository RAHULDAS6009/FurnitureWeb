import React, { useState, useEffect } from "react";

const Banner = () => {
  const slides = [
    {
      img: "assets/img/banner-slide-1.jpg",
      subTitle: "Perfect for Summer Evenings",
      title: "Casual and Stylish for All Seasons",
      price: 129,
      link: "/shop",
      extraClass: "",
    },
    {
      img: "assets/img/banner-slide-2.jpg",
      subTitle: "Comfort Meets Style",
      title: "Stay Trendy with Our New Collection",
      price: 149,
      link: "/shop",
      extraClass: "ul-banner-slide--2",
    },
    {
      img: "assets/img/banner-slide-3.jpg",
      subTitle: "New Arrivals",
      title: "Upgrade Your Wardrobe Effortlessly",
      price: 179,
      link: "/shop",
      extraClass: "ul-banner-slide--3",
    },
  ];

  const initialBannerImages = [
    "assets/img/banner-img-slide-1.jpg",
    "assets/img/banner-img-slide-2.jpg",
    "assets/img/banner-img-slide-3.jpg",
  ];

  const [bannerImages, setBannerImages] = useState(initialBannerImages);
  const [mainBannerIndex, setMainBannerIndex] = useState(0);

  // Infinite rotation every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMainBannerIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
      setBannerImages((prev) => {
        const newArr = [...prev];
        const first = newArr.shift();
        newArr.push(first);
        return newArr;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  const mainSlide = slides[mainBannerIndex];

  return (
    <>
      {/* BANNER SECTION START */}
      <div className="overflow-hidden">
        <div className="ul-container">
          <section className="ul-banner">
            {/* Main banner */}
            <div className="ul-banner-slider-wrapper">
              <div className="ul-banner-slider swiper">
                <div className="swiper-wrapper">
                  <BannerSlide {...mainSlide} />
                </div>

                {/* Navigation */}
                <div className="ul-banner-slider-nav-wrapper">
                  <div className="ul-banner-slider-nav">
                    <button
                      className="prev"
                      onClick={() => {
                        setMainBannerIndex(
                          (prev) => (prev - 1 + slides.length) % slides.length
                        );
                        setBannerImages((prev) => {
                          const newArr = [...prev];
                          const last = newArr.pop();
                          newArr.unshift(last);
                          return newArr;
                        });
                      }}
                    >
                      <span className="icon">
                        <i className="flaticon-down"></i>
                      </span>
                    </button>
                    <button
                      className="next"
                      onClick={() => {
                        setMainBannerIndex(
                          (prev) => (prev + 1) % slides.length
                        );
                        setBannerImages((prev) => {
                          const newArr = [...prev];
                          const first = newArr.shift();
                          newArr.push(first);
                          return newArr;
                        });
                      }}
                    >
                      <span className="icon">
                        <i className="flaticon-down"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail slider */}
            <div className="ul-banner-img-slider-wrapper">
              <div className="ul-banner-img-slider swiper">
                <div className="flex h-full w-[220%] gap-5">
                  {bannerImages.map((img, i) => (
                    <div key={i} className="">
                      <img
                        src={img}
                        alt={`Banner ${i}`}
                        className="cursor-pointer"
                        onClick={() => setMainBannerIndex(i)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* BANNER SECTION END */}
    </>
  );
};

function BannerSlide({ img, subTitle, title, price, link, extraClass = "" }) {
  return (
    <div className={`swiper-slide ul-banner-slide ${extraClass} `}>
      <div className="ul-banner-slide-img">
        <img src={img} alt="Banner" />
      </div>
      <div className="ul-banner-slide-txt">
        <span className="ul-banner-slide-sub-title">{subTitle}</span>
        <h1 className="ul-banner-slide-title">{title}</h1>
        <p className="ul-banner-slide-price">
          Starting From <span className="price">${price}</span>
        </p>
        <a href={link} className="ul-btn">
          SHOP NOW <i className="flaticon-up-right-arrow"></i>
        </a>
      </div>
    </div>
  );
}

export default Banner;
