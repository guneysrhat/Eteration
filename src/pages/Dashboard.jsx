import React, { useEffect, useState } from "react";

import useProductCalls from "../hooks/useProductCalls";
import { useSelector } from "react-redux";

import { Outlet } from "react-router-dom";

function Dashboard() {
  const { getData } = useProductCalls();
  const { products } = useSelector((state) => state.product);
  const [cartProducts, setCartProducts] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  useEffect(() => {
    getData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };

  const total = cartProducts.reduce(
    (acc, product) => acc + product.quantity * parseFloat(product.price),
    0
  );
  return (
    <div className="flex">
      <div className="w-screen min-h-screen bg-gray-100">
        <div className="bg-[#2A59FE] shadow">
          <div className="max-w-7xl mx-auto py-4 px-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-white ">Eteration</h1>
              <div className="pr-48 relative">
                <span className="absolute left-2 top-[7px]">
                  <img
                    src="/icons/search.svg"
                    alt="Search Icon"
                    className="h-5 w-5"
                  />
                </span>
                <input
                  type="search"
                  name="search"
                  id=""
                  value={searchKeyword}
                  onChange={handleSearch}
                  placeholder="Search"
                  className="w-[408px] h-8 pl-8 pr-2 py-2 pb-[9px] bg-white bg-opacity-95 flex-col justify-start items-start gap-[5px] inline-flex"
                />
              </div>
              <div className="flex items-center gap-4">
                <button className="text-white hover:text-gray-900 flex items-center">
                  <img
                    src="/icons/cart.svg"
                    alt="Your SVG"
                    className="fill-white hover:fill-gray-900 mr-1"
                  />
                  {total.toFixed(2)} ₺
                </button>
                <button className="text-white hover:text-gray-900 flex items-center">
                  <img
                    src="/icons/user.svg"
                    alt="Your SVG"
                    className="fill-white hover:fill-gray-900 mr-1"
                  />
                  Kerem
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-4 px-6 ">
          <div className="py-3">
            <Outlet
              context={{
                products,
                cartProducts,
                setCartProducts,
                searchKeyword,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
