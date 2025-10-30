import React from "react";
// ⬇️ import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// ⬇️ import Swiper core styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// (Optional) if you want pagination dots/arrows later:
// import { Pagination, Navigation, Autoplay } from "swiper/modules";

const reviewsData = [
  {
    img: "review-author-1.png",
    name: "Esther Howard",
    role: "Web Designer",
    rating: 4,
    description:
      "Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed ullamcorper tristique nisl at pharetra turpis accumsan et etiam eu sollicitudin eros. In imperdiet accumsan.",
  },
  {
    img: "review-author-2.png",
    name: "Wade Warren",
    role: "Marketing Coordinator",
    rating: 4,
    description:
      "Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed ullamcorper tristique nisl at pharetra turpis accumsan et etiam eu sollicitudin eros. In imperdiet accumsan.",
  },
  {
    img: "review-author-3.png",
    name: "Esther Howard",
    role: "Nursing Assistant",
    rating: 4,
    description:
      "Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed ullamcorper tristique nisl at pharetra turpis accumsan et etiam eu sollicitudin eros. In imperdiet accumsan.",
  },
  {
    img: "review-author-4.png",
    name: "John Doe",
    role: "Medical Assistant",
    rating: 4,
    description:
      "Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed ullamcorper tristique nisl at pharetra turpis accumsan et etiam eu sollicitudin eros. In imperdiet accumsan.",
  },
  {
    img: "review-author-2.png",
    name: "Leslie Alexander",
    role: "Medical Assistant",
    rating: 4,
    description:
      "Praesent ut lacus a velit tincidunt aliquam a eget urna. Sed ullamcorper tristique nisl at pharetra turpis accumsan et etiam eu sollicitudin eros. In imperdiet accumsan.",
  },
];

const ReviewsSection = () => {
  return (
    <section className="ul-reviews overflow-hidden">
      {/* heading */}
      <div className="ul-section-heading text-center justify-content-center">
        <div>
          <span className="ul-section-sub-title">Customer Reviews</span>
          <h2 className="ul-section-title">Product Reviews</h2>
          <p className="ul-reviews-heading-descr">
            Our references are very valuable, the result of a great effort...
          </p>
        </div>
      </div>

      {/* Swiper slider */}
      <Swiper
        className="ul-reviews-slider"
        // basic behavior
        loop={true}
        spaceBetween={24}
        // responsive breakpoints
        breakpoints={{
          0: { slidesPerView: 1 },      // mobile
          640: { slidesPerView: 1 },    // small tablets
          768: { slidesPerView: 2 },    // md
          1024: { slidesPerView: 3 },   // desktop
        }}

        // If you want autoplay, uncomment:
        // autoplay={{ delay: 3000 }}

        // If you want pagination or navigation arrows, add modules & props
        // modules={[Pagination, Navigation, Autoplay]}
        // pagination={{ clickable: true }}
        // navigation={true}
      >
        {reviewsData.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="ul-review">
              <div className="ul-review-rating">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={
                      i < review.rating ? "flaticon-star" : "flaticon-star-3"
                    }
                  ></i>
                ))}
              </div>

              <p className="ul-review-descr">{review.description}</p>

              <div className="ul-review-bottom">
                <div className="ul-review-reviewer">
                  <div className="reviewer-image">
                    <img
                      src={`assets/img/${review.img}`}
                      alt="reviewer"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="reviewer-name">{review.name}</h3>
                    <span className="reviewer-role">{review.role}</span>
                  </div>
                </div>

                <div className="ul-review-icon">
                  <i className="flaticon-left"></i>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ReviewsSection;
