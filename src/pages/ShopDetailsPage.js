import React from "react";
import { Header } from "../components/index/Header";
import Footer from "../components/index/Footer";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useParams } from "react-router";
import { products } from "./ShopPage";
import { products2 } from "../components/index/main/SellingStart";

const sidebarProducts = [
  {
    id: 1,
    price: "$99.00",
    discount: "25% Off",
    img: "assets/img/product-img-1.jpg",
    title: "Orange Airsuit",
    category: "Fashion Bag",
  },
  {
    id: 2,
    price: "$99.00",
    discount: "25% Off",
    img: "assets/img/product-img-2.jpg",
    title: "Blue Airsuit",
    category: "Fashion Bag",
  },
  {
    id: 3,
    price: "$99.00",
    discount: "25% Off",
    img: "assets/img/product-img-3.jpg",
    title: "classNameic Airsuit",
    category: "Fashion Bag",
  },
];
const productImages = [
  "/assets/img/product-details-1.jpg",
  "/assets/img/product-details-2.jpg",
];
const reviews = [
  {
    id: 1,
    name: "Temptics Pro",
    date: "March 20, 2023 at 2:37 pm",
    img: "assets/img/reviewer-img-1.png",
    rating: 4,
    content:
      "Phasellus eget fermentum mauris. Suspendisse nec dignissim nulla. Integer non quam commodo...",
  },
  {
    id: 2,
    name: "John Doe",
    date: "March 21, 2023 at 1:15 pm",
    img: "assets/img/reviewer-img-2.png",
    rating: 5,
    content:
      "Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo venenatis...",
  },
];
export const ShopDetailsPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const headerOffers = Array(10).fill("limited time offer");
  const product =
    products.find((item) => item.id === Number(id)) ||
    products2.find((item) => item.id === Number(id));
  console.log(product);

  if (!product) {
    console.warn(`Product with id ${id} not found`);
  }

  // -----------------------------
  // 🧱 COMPONENT SECTION
  // -----------------------------
  return (
    <div>
      <Header />
      {/* ---------------- PRODUCT DETAILS SECTION ---------------- */}
      <main>
        <div classNameName="ul-container">
          <div classNameName="ul-breadcrumb">
            <h2 classNameName="ul-breadcrumb-title">Shop Details</h2>
            <div classNameName="ul-breadcrumb-nav">
              <a href="/">
                <i classNameName="flaticon-home"></i> Home
              </a>
              <i classNameName="flaticon-arrow-point-to-right"></i>
              <a href="/shop">Shop</a>
              <i classNameName="flaticon-arrow-point-to-right"></i>
              <span classNameName="current-page">Shop Details</span>
            </div>
          </div>
        </div>

        <div classNameName="ul-inner-page-container">
          <div classNameName="ul-product-details">
            <div classNameName="ul-product-details-top">
              <div classNameName="row ul-bs-row row-cols-lg-2 row-cols-1 align-items-center">
                {/*Product  Images */}
                <div classNameName="col">
                  <div classNameName="ul-product-details-img">
                    <div classNameName="swiper-wrapper">
                      <div classNameName="swiper-slide">
                        {/* {`../../public/${product.img}`} */}
                        <img src={"/" + product.img} alt="Product" />
                      </div>
                      {/* ))} */}
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div classNameName="col">
                  <div classNameName="ul-product-details-txt">
                    <div classNameName="ul-product-details-rating">
                      <span classNameName="rating">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <i key={i} classNameName="flaticon-star"></i>
                          ))}
                      </span>
                      <span classNameName="review-number">
                        (2 Customer Reviews)
                      </span>
                    </div>
                    <span classNameName="ul-product-details-price">
                      {product.price}
                    </span>
                    <h3 classNameName="ul-product-details-title">
                      {product.title}
                    </h3>
                    <p classNameName="ul-product-details-descr">
                      {product.category}
                    </p>
                    {/* <!-- product options --> */}
                    <div className="ul-product-details-options">
                      <div className="ul-product-details-option ul-product-details-sizes">
                        <span className="title">Size</span>

                        <form action="#" className="variants">
                          <label for="ul-product-details-size-1">
                            <input
                              type="radio"
                              name="product-size"
                              id="ul-product-details-size-1"
                              checked
                            />
                            <span className="size-btn">S</span>
                          </label>

                          <label for="ul-product-details-size-2">
                            <input
                              type="radio"
                              name="product-size"
                              id="ul-product-details-size-2"
                            />
                            <span className="size-btn">M</span>
                          </label>

                          <label for="ul-product-details-size-3">
                            <input
                              type="radio"
                              name="product-size"
                              id="ul-product-details-size-3"
                            />
                            <span className="size-btn">L</span>
                          </label>

                          <label for="ul-product-details-size-4">
                            <input
                              type="radio"
                              name="product-size"
                              id="ul-product-details-size-4"
                            />
                            <span className="size-btn">XL</span>
                          </label>

                          <label for="ul-product-details-size-5">
                            <input
                              type="radio"
                              name="product-size"
                              id="ul-product-details-size-5"
                            />
                            <span className="size-btn">XXL</span>
                          </label>
                        </form>
                      </div>

                      <div className="ul-product-details-option ul-product-details-colors">
                        <span className="title">Color</span>
                        <form action="#" className="variants">
                          <label for="ul-product-details-color-1">
                            <input
                              type="radio"
                              name="product-color"
                              id="ul-product-details-color-1"
                              checked
                            />
                            <span className="color-btn green"></span>
                          </label>

                          <label for="ul-product-details-color-2">
                            <input
                              type="radio"
                              name="product-color"
                              id="ul-product-details-color-2"
                            />
                            <span className="color-btn blue"></span>
                          </label>

                          <label for="ul-product-details-color-3">
                            <input
                              type="radio"
                              name="product-color"
                              id="ul-product-details-color-3"
                            />
                            <span className="color-btn brown"></span>
                          </label>

                          <label for="ul-product-details-color-4">
                            <input
                              type="radio"
                              name="product-color"
                              id="ul-product-details-color-4"
                            />
                            <span className="color-btn red"></span>
                          </label>
                        </form>
                      </div>
                    </div>

                    {/* <!-- product quantity --> */}
                    <div className="ul-product-details-option ul-product-details-quantity">
                      <span className="title">Quantity</span>
                      <form action="#" className="ul-product-quantity-wrapper">
                        <input
                          type="number"
                          name="product-quantity"
                          id="ul-product-details-quantity"
                          className="ul-product-quantity"
                          value="1"
                          min="1"
                          readonly
                        />
                        <div className="btns">
                          <button
                            type="button"
                            className="quantityIncreaseButton"
                          >
                            <i className="flaticon-plus"></i>
                          </button>
                          <button
                            type="button"
                            className="quantityDecreaseButton"
                          >
                            <i className="flaticon-minus-sign"></i>
                          </button>
                        </div>
                      </form>
                    </div>

                    <div classNameName="ul-product-details-actions">
                      <button
                        classNameName="group add-to-cart flex  gap-2 rounded-full px-4 py-1"
                        onClick={() => {
                          dispatch(
                            addToCart({
                              id: 10,
                              price: "$120.00",
                              discount: "25% Off",
                              img: "assets/img/product-details-1.jpg",
                              title: "Front view modern dark sunglasses",
                              category: "Fashion Bag",
                            })
                          );
                        }}
                      >
                        Add to Cart
                        <i classNameName="flaticon-cart  text-white group-hover:animate-bounce"></i>
                      </button>
                      <button classNameName="group add-to-wishlist rounded-full px-3 py-1 text-white flex items-center gap-2">
                        <i classNameName="group-hover:animate-bounce flaticon-heart"></i>{" "}
                        Add to Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div classNameName="ul-product-details-reviews">
              <h3 classNameName="ul-product-details-inner-title">
                {reviews.length.toString().padStart(2, "0")} Reviews
              </h3>
              {reviews.map((r) => (
                <div key={r.id} classNameName="ul-product-details-review">
                  <div classNameName="ul-product-details-review-reviewer-img">
                    <img src={r.img} alt={r.name} />
                  </div>
                  <div classNameName="ul-product-details-review-txt">
                    <div classNameName="header">
                      <div classNameName="left">
                        <h4 classNameName="reviewer-name">{r.name}</h4>
                        <h5 classNameName="review-date">{r.date}</h5>
                      </div>
                      <div classNameName="right">
                        <div classNameName="rating">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <i
                                key={i}
                                classNameName={
                                  i < r.rating
                                    ? "flaticon-star"
                                    : "flaticon-star-3"
                                }
                              ></i>
                            ))}
                        </div>
                      </div>
                    </div>
                    <p>{r.content}</p>
                    <button classNameName="ul-product-details-review-reply-btn">
                      Reply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
