import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";
export const products = [
  {
    id: 3,
    price: "$98.00",
    discount: "24% Off",
    image: "assets/img/product-img-1.jpg",
    title: "Orange Airsuit",
    category: "Fashion Bag",
    detailsUrl: "shop-details.html",
    categoryUrl: "/shop",
  },
  {
    id: 4,
    price: "$99.00",
    discount: "25% Off",
    image: "assets/img/product-img-2.jpg",
    title: "Orange Airsuit",
    category: "Fashion Bag",
    detailsUrl: "shop-details.html",
    categoryUrl: "/shop",
  },
  {
    id: 5,
    price: "$99.00",
    discount: "25% Off",
    image: "assets/img/product-img-3.jpg",
    title: "Orange Airsuit",
    category: "Fashion Bag",
    detailsUrl: "shop-details.html",
    categoryUrl: "/shop",
  },
];

const ProductsSection = () => {
  const dispatch = useDispatch();

  return (
    <>
      {/* PRODUCTS SECTION START */}
      <div className="ul-container">
        <section className="ul-products">
          <div className="ul-inner-container">
            <div className="ul-section-heading">
              <div className="left">
                <span className="ul-section-sub-title">Summer collection</span>
                <h2 className="ul-section-title">Shopping Every Day</h2>
              </div>

              <div className="right">
                <a href="#" className="ul-btn">
                  More Collection <i className="flaticon-up-right-arrow"></i>
                </a>
              </div>
            </div>

            <div className="row ul-bs-row">
              {/* 1st row */}
              <div className="col-lg-3 col-md-4 col-12">
                {/* sub banner */}
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

              <div className="col-lg-9 col-md-8 col-12">
                {/* products grid */}
                <div className="swiper ul-products-slider-1">
                  <div className="swiper-wrapper">
                    {products.map((product) => (
                      <div className="swiper-slide" key={product.id}>
                        <div className="ul-product">
                          <div className="ul-product-heading">
                            <span className="ul-product-price">
                              {product.price}
                            </span>
                            <span className="ul-product-discount-tag">
                              {product.discount}
                            </span>
                          </div>

                          <div className="ul-product-img">
                            <img src={product.image} alt={product.title} />

                            <div className="ul-product-actions">
                              <button
                                onClick={() => dispatch(addToCart(product.id))}
                              >
                                <i className="flaticon-shopping-bag"></i>
                              </button>
                              <a href="#">
                                <i className="flaticon-hide"></i>
                              </a>
                              <button>
                                <i className="flaticon-heart"></i>
                              </button>
                            </div>
                          </div>

                          <div className="ul-product-txt">
                            <h4 className="ul-product-title">
                              <a href={product.detailsUrl}>{product.title}</a>
                            </h4>
                            <h5 className="ul-product-category">
                              <a href={product.categoryUrl}>
                                {product.category}
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* slider navigation */}
                <div className="ul-products-slider-nav ul-products-slider-1-nav">
                  <button className="prev">
                    <i className="flaticon-left-arrow"></i>
                  </button>
                  <button className="next">
                    <i className="flaticon-arrow-point-to-right"></i>
                  </button>
                </div>
              </div>

              {/* 2nd row */}
              <div className="col-lg-3 col-md-4 col-12">
                {/* sub banner */}
                <div className="ul-products-sub-banner">
                  <div className="ul-products-sub-banner-img">
                    <img
                      src="assets/img/products-sub-banner-2.jpg"
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

              <div className="col-lg-9 col-md-8 col-12">
                {/* products grid */}
                <div className="swiper ul-products-slider-2">
                  <div className="swiper-wrapper">
                    {/* product card */}
                    <div className="swiper-slide">
                      <div className="ul-product">
                        <div className="ul-product-heading">
                          <span className="ul-product-price">$99.00</span>
                          <span className="ul-product-discount-tag">
                            25% Off
                          </span>
                        </div>

                        <div className="ul-product-img">
                          <img
                            src="assets/img/product-img-1.jpg"
                            alt="Product"
                          />

                          <div className="ul-product-actions">
                            <button>
                              <i className="flaticon-shopping-bag"></i>
                            </button>
                            <a href="#">
                              <i className="flaticon-hide"></i>
                            </a>
                            <button>
                              <i className="flaticon-heart"></i>
                            </button>
                          </div>
                        </div>

                        <div className="ul-product-txt">
                          <h4 className="ul-product-title">
                            <a href="shop-details.html">Orange Airsuit</a>
                          </h4>
                          <h5 className="ul-product-category">
                            <a href="/shop">Fashion Bag</a>
                          </h5>
                        </div>
                      </div>
                    </div>

                    {/* product card */}
                    <div className="swiper-slide">
                      <div className="ul-product">
                        <div className="ul-product-heading">
                          <span className="ul-product-price">$99.00</span>
                          <span className="ul-product-discount-tag">
                            25% Off
                          </span>
                        </div>

                        <div className="ul-product-img">
                          <img
                            src="assets/img/product-img-2.jpg"
                            alt="Product"
                          />

                          <div className="ul-product-actions">
                            <button>
                              <i className="flaticon-shopping-bag"></i>
                            </button>
                            <a href="#">
                              <i className="flaticon-hide"></i>
                            </a>
                            <button>
                              <i className="flaticon-heart"></i>
                            </button>
                          </div>
                        </div>

                        <div className="ul-product-txt">
                          <h4 className="ul-product-title">
                            <a href="shop-details.html">Orange Airsuit</a>
                          </h4>
                          <h5 className="ul-product-category">
                            <a href="/shop">Fashion Bag</a>
                          </h5>
                        </div>
                      </div>
                    </div>

                    {/* product card */}
                    <div className="swiper-slide">
                      <div className="ul-product">
                        <div className="ul-product-heading">
                          <span className="ul-product-price">$99.00</span>
                          <span className="ul-product-discount-tag">
                            25% Off
                          </span>
                        </div>

                        <div className="ul-product-img">
                          <img
                            src="assets/img/product-img-3.jpg"
                            alt="Product"
                          />

                          <div className="ul-product-actions">
                            <button>
                              <i className="flaticon-shopping-bag"></i>
                            </button>
                            <a href="#">
                              <i className="flaticon-hide"></i>
                            </a>
                            <button>
                              <i className="flaticon-heart"></i>
                            </button>
                          </div>
                        </div>

                        <div className="ul-product-txt">
                          <h4 className="ul-product-title">
                            <a href="shop-details.html">Orange Airsuit</a>
                          </h4>
                          <h5 className="ul-product-category">
                            <a href="/shop">Fashion Bag</a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* slider navigation */}
                <div className="ul-products-slider-nav ul-products-slider-2-nav">
                  <button className="prev">
                    <i className="flaticon-left-arrow"></i>
                  </button>
                  <button className="next">
                    <i className="flaticon-arrow-point-to-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* PRODUCTS SECTION END */}
    </>
  );
};

export default ProductsSection;
