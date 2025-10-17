import React from "react";

const GallerySection = () => {
  const galleryItems = [
    "assets/img/gallery-item-1.jpg",
    "assets/img/gallery-item-2.jpg",
    "assets/img/gallery-item-3.jpg",
    "assets/img/gallery-item-4.jpg",
    "assets/img/gallery-item-5.jpg",
    "assets/img/gallery-item-6.jpg",
    "assets/img/gallery-item-1.jpg",
    "assets/img/gallery-item-2.jpg",
  ];

  return (
    <div className="ul-gallery overflow-hidden mx-auto">
      <div className="ul-gallery-slider swiper">
        <div className="swiper-wrapper">
          {galleryItems.map((imgSrc, index) => (
            <div className="ul-gallery-item swiper-slide" key={index}>
              <img src={imgSrc} alt="Gallery Image" />
              <div className="ul-gallery-item-btn-wrapper">
                <a href={imgSrc} data-fslightbox="gallery">
                  <i className="flaticon-instagram"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
