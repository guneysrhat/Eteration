import React, { useCallback, useEffect, useState } from "react";
import SortBy from "../components/filter/SortBy";
import Brands from "../components/filter/Brands";
import Model from "../components/filter/Model";
import Cart from "../components/cart/Cart";
import Checkout from "../components/cart/Checkout";
import ProductCard from "../components/cards/ProductCard";
import Pagination from "../components/pagination/Pagination";
import { useOutletContext } from "react-router-dom";

const ProductList = () => {
  const { products, cartProducts, setCartProducts, searchKeyword } =
    useOutletContext();

  const [sortBy, setSortBy] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const storedCartProducts = localStorage.getItem("cartProducts");
    if (storedCartProducts) {
      setCartProducts(JSON.parse(storedCartProducts));
    }
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  const filteredProducts = products?.filter((product) => {
    return (
      (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
      (selectedModels.length === 0 || selectedModels.includes(product.model)) &&
      product.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );
  });

  const sortedProducts = filteredProducts
    ? [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
          case "old-to-new":
            return new Date(a.createdAt) - new Date(b.createdAt);
          case "new-to-old":
            return new Date(b.createdAt) - new Date(a.createdAt);
          case "price-high-to-low":
            return b.price - a.price;
          case "price-low-to-high":
            return a.price - b.price;
          default:
            return 0;
        }
      })
    : [];

  const productsPerPage = 12;

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = sortedProducts.slice(startIndex, endIndex);

  const updatedCartProducts = cartProducts.filter(
    (product) => product.quantity > 0
  );

  return (
    <div className="flex">
      <div className="w-1/5 pt-4 pr-4 ">
        <div className="mb-4">
          <div className="text-zinc-800 text-opacity-70 text-xs font-normal font-['Montserrat']  pb-2">
            Sort By
          </div>
          <SortBy sortBy={sortBy} setSortBy={setSortBy} />
        </div>
        <div className="mb-4">
          <div className="text-zinc-800 text-opacity-70 text-xs font-normal font-['Montserrat']  pb-2">
            Brands
          </div>
          <Brands
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            products={products}
          />
        </div>
        <div>
          <div className="text-zinc-800 text-opacity-70 text-xs font-normal font-['Montserrat']  pb-2">
            Model
          </div>
          <Model
            selectedModels={selectedModels}
            setSelectedModels={setSelectedModels}
            products={products}
          />
        </div>
      </div>

      <div className="w-3/5 pt-4">
        <div className="  grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              setCartProducts={setCartProducts}
              cartProducts={cartProducts}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(sortedProducts.length / productsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>

      <div className="w-1/5 pt-4 pl-4 ">
        <div className="mb-6">
          {updatedCartProducts.length > 0 && (
            <Cart
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
              updatedCartProducts={updatedCartProducts}
            />
          )}
        </div>
        <div className="mb-4">
          <Checkout cartProducts={cartProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
