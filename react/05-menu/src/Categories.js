import React from "react";

const Categories = ({ filterItems, items }) => {
    const categories = ["all", ...new Set(items.map((item) => item.category))];
    return (
        <div className="btn-container">
            {categories.map((category) => {
                return (
                    <button
                        className="filter-btn"
                        onClick={() => filterItems(category)}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
};

export default Categories;
