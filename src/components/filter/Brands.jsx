import React, { useState } from "react";

const Brands = ({ selectedBrands, setSelectedBrands, products }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleBrandToggle = (brandName) => {
    setSelectedBrands((prevSelected) => {
      if (prevSelected.includes(brandName)) {
        return prevSelected.filter((name) => name !== brandName);
      } else {
        return [...prevSelected, brandName];
      }
    });
  };

  const uniqueBrands = Array.from(
    new Set(products?.map((product) => product.brand))
  );

  return (
    <div className="p-4 bg-white shadow-2xl h-[180px] overflow-y-auto">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search brands..."
        className="mb-4 p-1 border border-gray-300 rounded w-[180px]"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div>
        {uniqueBrands
          .filter((brand) =>
            brand.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((uniqueBrand) => (
            <div key={uniqueBrand} className="mb-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedBrands.includes(uniqueBrand)}
                  onChange={() => handleBrandToggle(uniqueBrand)}
                />
                {uniqueBrand}
              </label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Brands;
