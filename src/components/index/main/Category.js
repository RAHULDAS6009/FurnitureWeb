import React from "react";


const CategorySection = () => {
  const categories = [
    { img: "assets/img/category-1.jpg", label: "MEN", active: true },
    { img: "assets/img/category-2.jpg", label: "KIDS" },
    { img: "assets/img/category-3.jpg", label: "PANTS" },
    { img: "assets/img/category-4.jpg", label: "WOMEN" },
    { img: "assets/img/category-5.jpg", label: "JEANS" },
    { img: "assets/img/category-6.jpg", label: "SWEATER" },
    { img: "assets/img/category-7.jpg", label: "SHOE" },
    { img: "assets/img/category-1.jpg", label: "MEN 2" },
    { img: "assets/img/category-2.jpg", label: "KIDS 2" },
  ];

  return (
    <section className="category-strip">
      <div className="category-row">
        {categories.map((cat, i) => (
          <div key={i} className="category-item">
            <a
              href="/shop"
              className={`category-card ${cat.active ? "active" : ""}`}
            >
              <div className="category-avatar">
                <img src={cat.img} alt={cat.label} />
              </div>
              <div className="category-text">{cat.label}</div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
