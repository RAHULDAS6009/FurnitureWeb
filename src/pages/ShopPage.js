// ShopPage.jsx — One-line Flipkart-style filter bar (pill dropdowns)
// Exports (named): products, ShopPage, ProductCard

import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, getCartTotal } from "../redux/cartSlice";
import { Header } from "../components/index/Header";
import { useNavigate } from "react-router-dom";
import Footer from "../components/index/Footer";

export const products = [
  { id: 1, price: "$99.00",  discount: "25% Off", img: "assets/img/product-img-1.jpg", title: "Orange Airsuit",  category: "Fashion Bag",  detailsUrl: "/shopdetails", categoryUrl: "/shop", quantity: 1, color: "black", size: "S",  rating: 5, inStock: true,  onSale: true  },
  { id: 2, price: "$89.00",  discount: "10% Off", img: "assets/img/product-img-2.jpg", title: "Blue Backpack",   category: "Travel Bag",  detailsUrl: "/shopdetails", categoryUrl: "/shop", quantity: 1, color: "blue",  size: "M",  rating: 4, inStock: true,  onSale: true  },
  { id: 3, price: "$120.00", discount: "30% Off", img: "assets/img/product-img-3.jpg", title: "Leather Handbag", category: "Luxury Bag",  detailsUrl: "/shopdetails", categoryUrl: "/shop", quantity: 1, color: "brown", size: "L",  rating: 5, inStock: true,  onSale: true  },
  { id: 4, price: "$70.00",  discount: "15% Off", img: "assets/img/product-img-4.jpg", title: "Stylish Tote",    category: "Women Bag",   detailsUrl: "/shopdetails", categoryUrl: "/shop", quantity: 1, color: "yellow",size: "XL", rating: 3, inStock: true,  onSale: false },
  { id: 5, price: "$60.00",  discount: "20% Off", img: "assets/img/product-img-5.jpg", title: "Canvas Shopper",  category: "Casual Bag", detailsUrl: "/shopdetails", categoryUrl: "/shop", quantity: 1, color: "green", size: "S",  rating: 4, inStock: true,  onSale: true  },
  { id: 6, price: "$110.00", discount: "18% Off", img: "assets/img/product-img-6.jpg", title: "Compact Purse",   category: "Accessories",detailsUrl: "/shopdetails", categoryUrl: "/shop", quantity: 1, color: "white", size: "M",  rating: 4, inStock: false, onSale: false },
];

const parsePrice = (p) => {
  if (typeof p === "number") return p;
  const n = Number(String(p).replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : 0;
};

export const ShopPage = () => {
  // single-line dropdown filter state
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState(""); // e.g., "0-50", "50-100", "200+"
  const [sortBy, setSortBy] = useState("relevance");
  const [color, setColor] = useState(""); // single-select for compactness
  const [status, setStatus] = useState(""); // "", "in_stock", "on_sale"
  const [minRating, setMinRating] = useState(0);

  // (optional) keep search but not in the one-line bar; comment out if not needed
  // const [q, setQ] = useState("");

  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))),
    []
  );
  const colorOptions = useMemo(
    () => Array.from(new Set(products.map((p) => p.color))),
    []
  );

  // predefined price ranges for the dropdown
  const priceRanges = [
    { key: "", label: "Any Price" },
    { key: "0-50", label: "Under $50" },
    { key: "50-100", label: "$50 – $100" },
    { key: "100-200", label: "$100 – $200" },
    { key: "200+", label: "$200 & above" },
  ];

  const filtered = useMemo(() => {
    let list = [...products];

    // If you want text search, un-comment:
    // if (q.trim()) {
    //   const term = q.toLowerCase();
    //   list = list.filter(
    //     (p) =>
    //       p.title.toLowerCase().includes(term) ||
    //       p.category.toLowerCase().includes(term)
    //   );
    // }

    if (category) list = list.filter((p) => p.category === category);
    if (color) list = list.filter((p) => p.color === color);

    // status
    if (status === "in_stock") list = list.filter((p) => p.inStock);
    if (status === "on_sale") list = list.filter((p) => p.onSale);

    // rating
    if (minRating > 0) list = list.filter((p) => (p.rating || 0) >= minRating);

    // price range
    if (priceRange) {
      list = list.filter((p) => {
        const pr = parsePrice(p.price);
        if (priceRange === "200+") return pr >= 200;
        const [lo, hi] = priceRange.split("-").map(Number);
        return pr >= lo && pr <= hi;
      });
    }

    // sort
    switch (sortBy) {
      case "price_asc":
        list.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        break;
      case "price_desc":
        list.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        break;
      case "title_asc":
        list.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title_desc":
        list.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        // relevance = no-op
        break;
    }

    return list;
  }, [category, color, status, minRating, priceRange, sortBy]);

  const clearAll = () => {
    setCategory("");
    setPriceRange("");
    setSortBy("relevance");
    setColor("");
    setStatus("");
    setMinRating(0);
  };

  return (
    <>
    <div>
      <Header />

      {/* ONE-LINE FILTER BAR */}
      <section className="ul-container" style={{ marginTop: 20 }}>
        <div className="ul-toolbar-inline">
          {/* Category */}
          <select
            className="ul-pill ul-select ul-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            aria-label="Category"
            title="Category"
          >
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          {/* Price Range */}
          <select
            className="ul-pill ul-select ul-control"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            aria-label="Price"
            title="Price"
          >
            {priceRanges.map((r) => (
              <option key={r.key} value={r.key}>{r.label}</option>
            ))}
          </select>

          {/* Sort By */}
          <select
            className="ul-pill ul-select ul-control"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Sort by"
            title="Sort by"
          >
            <option value="relevance">Sort: Relevance</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
            <option value="title_asc">Title: A → Z</option>
            <option value="title_desc">Title: Z → A</option>
          </select>

          {/* Colors */}
          <select
            className="ul-pill ul-select ul-control"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            aria-label="Color"
            title="Color"
          >
            <option value="">All Colors</option>
            {colorOptions.map((c) => (
              <option key={c} value={c}>{c[0].toUpperCase() + c.slice(1)}</option>
            ))}
          </select>

          {/* Status */}
          <select
            className="ul-pill ul-select ul-control"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            aria-label="Status"
            title="Status"
          >
            <option value="">Any Status</option>
            <option value="in_stock">In stock</option>
            <option value="on_sale">On sale</option>
          </select>

          {/* Min Rating */}
          <select
            className="ul-pill ul-select ul-control"
            value={minRating}
            onChange={(e) => setMinRating(Number(e.target.value))}
            aria-label="Min rating"
            title="Min rating"
          >
            <option value={0}>Any Rating</option>
            <option value={5}>5 only</option>
            <option value={4}>4 & up</option>
            <option value={3}>3 & up</option>
            <option value={2}>2 & up</option>
            <option value={1}>1 & up</option>
          </select>

          {/* Clear */}
          <button type="button" className="ul-pill ul-control" onClick={clearAll}>
            Clear
          </button>

          {/* Optional: live count */}
          <div className="ul-toolbar-count">Showing <strong>{filtered.length}</strong> / {products.length}</div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="ul-inner-page-container" style={{ marginTop: 12 }}>
        <div className="row ul-bs-row row-cols-lg-3 row-cols-2 row-cols-xxs-1">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {filtered.length === 0 && (
            <div className="col" style={{ padding: 24 }}>
              <p>No products match your filters.</p>
            </div>
          )}
        </div>
      </section>
      <div class="ul-pagination">
                            <ul>
                                <li><a href="#"><i class="flaticon-left-arrow"></i></a></li>
                                <li class="pages">
                                    <a href="#" class="active">01</a>
                                    <a href="#">02</a>
                                    <a href="#">03</a>
                                    <a href="#">04</a>
                                    <a href="#">05</a>
                                </li>
                                <li><a href="#"><i class="flaticon-arrow-point-to-right"></i></a></li>
                            </ul>
                        </div>
    </div> <br></br>
     <Footer /></>
    
  );
};

export const ProductCard = ({ product }) => {
  const { id, price, discount, img, title, category, detailsUrl, categoryUrl } = product;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (p) => {
    dispatch(addToCart(p));
    dispatch(getCartTotal());
  };

  return (
      
    <div className="col">
      <div
        className="ul-product"
        onClick={() => navigate(`/shopdetails/${id}`)}
        style={{ cursor: "pointer" }}
      >
        <div className="ul-product-heading">
          <span className="ul-product-price">{price}</span>
          <span className="ul-product-discount-tag">{discount}</span>
        </div>
        <div className="ul-product-img">
          <img src={img} alt={title} />
          <div className="ul-product-actions" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => handleAddToCart(product)}>
              <i className="flaticon-shopping-bag" />
            </button>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <i className="flaticon-hide" />
            </a>
            <button>
              <i className="flaticon-heart" />
            </button>
          </div>
        </div>
        <div className="ul-product-txt">
          <h4 className="ul-product-title">
            <a href={detailsUrl} onClick={(e) => e.preventDefault()}>{title}</a>
          </h4>
          <h5 className="ul-product-category">
            <a href={categoryUrl} onClick={(e) => e.preventDefault()}>{category}</a>
          </h5>
        </div>
      </div>
      
    </div>

  

    
    
  );
};
