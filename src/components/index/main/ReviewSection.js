import React from "react";

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
      <div className="ul-section-heading text-center justify-content-center">
        <div>
          <span className="ul-section-sub-title">Customer Reviews</span>
          <h2 className="ul-section-title">Product Reviews</h2>
          <p className="ul-reviews-heading-descr">
            Our references are very valuable, the result of a great effort...
          </p>
        </div>
      </div>

      {/* slider */}
      <div className="ul-reviews-slider swiper">
        <div className="swiper-wrapper">
          {reviewsData.map((review, index) => (
            <div key={index} className="swiper-slide">
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
                        alt="reviewer image"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
