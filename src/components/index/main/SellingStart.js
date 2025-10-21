import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export const products2 = [
  {
    id: 31,
    price: "$99.00",
    discount: "25% Off",
    img: "assets/img/product-img-sm-1.jpg",
    title: "Orange Airsuit",
    category: "best-selling",
    detailsUrl: "/shopdetails",
    categoryUrl: "/shop",
    quantity: 1,
  },
  {
    id: 32,
    price: "$89.00",
    discount: "10% Off",
    img: "assets/img/product-img-sm-2.jpg",
    title: "Blue Backpack",
    category: "on-selling",
    detailsUrl: "/shopdetails",
    categoryUrl: "/shop",
    quantity: 1,
  },
  {
    id: 33,
    price: "$120.00",
    discount: "30% Off",
    img: "assets/img/product-img-sm-3.jpg",
    title: "Leather Handbag",
    category: "top-rating",
    detailsUrl: "/shopdetails",
    categoryUrl: "/shop",
    quantity: 1,
  },
  {
    id: 34,
    price: "$70.00",
    discount: "15% Off",
    img: "assets/img/product-img-sm-4.jpg",
    title: "Stylish Tote",
    category: "best-selling",
    detailsUrl: "/shopdetails",
    categoryUrl: "/shop",
    quantity: 1,
  },
  {
    id: 35,
    price: "$60.00",
    discount: "20% Off",
    img: "assets/img/product-img-sm-5.jpg",
    title: "Canvas Shopper",
    category: "on-selling",
    detailsUrl: "/shopdetails",
    categoryUrl: "/shop",
    quantity: 1,
  },
  {
    id: 36,
    price: "$110.00",
    discount: "18% Off",
    img: "assets/img/product-img-sm-6.jpg",
    title: "Compact Purse",
    category: "top-rating",
    detailsUrl: "/shopdetails",
    categoryUrl: "/shop",
    quantity: 1,
  },
  {
    id: 37,
    price: "$95.00",
    discount: "12% Off",
    img: "assets/img/product-img-sm-7.jpg",
    title: "Classic Satchel",
    category: "best-selling",
    detailsUrl: "/shopdetails",
    categoryUrl: "/shop",
    quantity: 1,
  },
  {
    id: 38,
    price: "$80.00",
    discount: "8% Off",
    img: "assets/img/product-img-sm-8.jpg",
    title: "Urban Crossbody",
    category: "on-selling",
    detailsUrl: "/shopdetails",
    categoryUrl: "/shop",
    quantity: 1,
  },
  {
    id: 39,
    price: "$95.00",
    discount: "10% Off",
    img: "assets/img/product-img-sm-9.jpg",
    title: "Slim Laptop Bag",
    category: "top-rating",
    detailsUrl: "/shopdetails",
    categoryUrl: "/shop",
    quantity: 1,
  },
  {
    id: 40,
    price: "$105.00",
    discount: "15% Off",
    img: "assets/img/product-img-sm-10.jpg",
    title: "Sport Duffel",
    category: "best-selling",
    detailsUrl: "/shopdetails",
    categoryUrl: "/shop",
    quantity: 1,
  },
];

const MostSellingSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const navigate = useNavigate();
  // const products = [
  //   { id: 1, img: "product-img-sm-1.jpg", category: "best-selling" },
  //   { id: 2, img: "product-img-sm-2.jpg", category: "on-selling" },
  //   { id: 3, img: "product-img-sm-3.jpg", category: "top-rating" },
  //   { id: 4, img: "product-img-sm-4.jpg", category: "best-selling" },
  //   { id: 5, img: "product-img-sm-5.jpg", category: "on-selling" },
  //   { id: 6, img: "product-img-sm-6.jpg", category: "top-rating" },
  //   { id: 7, img: "product-img-sm-7.jpg", category: "best-selling" },
  //   { id: 8, img: "product-img-sm-8.jpg", category: "on-selling" },
  //   { id: 9, img: "product-img-sm-9.jpg", category: "top-rating" },
  //   { id: 10, img: "product-img-sm-10.jpg", category: "best-selling" },
  // ];

  const filteredProducts =
    activeFilter === "all"
      ? products2
      : products2.filter((p) => p.category === activeFilter);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="ul-container">
      <section className="ul-products ul-most-selling-products">
        <div className="ul-inner-container">
          {/* Heading */}
          <div className="ul-section-heading flex-lg-row flex-column text-md-start text-center">
            <div className="left">
              <span className="ul-section-sub-title">most selling items</span>
              <h2 className="ul-section-title">
                Top selling Categories This Week
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="right">
              <div className="ul-most-sell-filter-navs">
                {[
                  { label: "All Products", value: "all" },
                  { label: "Best Selling", value: "best-selling" },
                  { label: "On Selling", value: "on-selling" },
                  { label: "Top Rating", value: "top-rating" },
                ].map((tab) => (
                  <button
                    key={tab.value}
                    type="button"
                    className={activeFilter === tab.value ? "active" : ""}
                    onClick={() => handleFilterChange(tab.value)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="ul-bs-row row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 ul-filter-products-wrapper">
            {filteredProducts.map((product, index) => (
              <div
                onClick={() => {
                  navigate(`/shopdetails/${product.id}`);
                }}
                key={product.id}
                className={`mix col ${product.category} fade-in-up`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* {product.img} */}
                <div className="ul-product-horizontal">
                  <div className="ul-product-horizontal-img">
                    <img src={`${product.img}`} alt="Product" loading="lazy" />
                  </div>

                  <div className="ul-product-horizontal-txt">
                    <span className="ul-product-price">{product.price}</span>
                    <h4 className="ul-product-title">
                      <a href={`/shopdetails${product.id}`}>{product.title}</a>
                    </h4>
                    <h5 className="ul-product-category">
                      <a href="/shop">Fashion Bag</a>
                    </h5>
                    <div className="ul-product-rating">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="star">
                          <i className="flaticon-star"></i>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MostSellingSection;
