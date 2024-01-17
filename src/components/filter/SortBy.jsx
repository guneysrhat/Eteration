import React from "react";

const SortBy = ({ sortBy, setSortBy }) => {
  const handleSortChange = (value) => {
    setSortBy(value);
  };

  return (
    <div className=" p-4 bg-white shadow-2xl ">
      <div className="mb-4">
        <label className="block">
          <input
            type="radio"
            name="sortBy"
            className="mr-2 border-blue-500"
            checked={sortBy === "old-to-new"}
            onChange={() => handleSortChange("old-to-new")}
          />
          Old to New
        </label>
      </div>

      <div className="mb-4">
        <label className="block">
          <input
            type="radio"
            name="sortBy"
            className="mr-2"
            checked={sortBy === "new-to-old"}
            onChange={() => handleSortChange("new-to-old")}
          />
          New to Old
        </label>
      </div>

      <div className="mb-4">
        <label className="block">
          <input
            type="radio"
            name="sortBy"
            className="mr-2"
            checked={sortBy === "price-high-to-low"}
            onChange={() => handleSortChange("price-high-to-low")}
          />
          Price High to Low
        </label>
      </div>

      <div className="mb-4">
        <label className="block">
          <input
            type="radio"
            name="sortBy"
            className="mr-2"
            checked={sortBy === "price-low-to-high"}
            onChange={() => handleSortChange("price-low-to-high")}
          />
          Price Low to High
        </label>
      </div>
    </div>
  );
};

export default SortBy;
