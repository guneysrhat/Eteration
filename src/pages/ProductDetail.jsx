import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useOutletContext, useParams } from "react-router-dom";
import useProductCalls from "../hooks/useProductCalls";
import Checkout from "../components/cart/Checkout";
import Cart from "../components/cart/Cart";

const ProductDetail = () => {
  const { id } = useParams();
  const { getData } = useProductCalls();
  const { products } = useSelector((state) => state.product);
  const [product, setProduct] = useState(null);
  const { cartProducts, setCartProducts } = useOutletContext();

  useEffect(() => {
    getData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const selectedProduct = products.find((p) => p.id === id);

    setProduct(selectedProduct);
  }, [id, products]);
  const updatedCartProducts = cartProducts.filter(
    (product) => product.quantity > 0
  );

  const addToCart = () => {
    const existingProduct = cartProducts.find((item) => item.id === product.id);

    if (existingProduct) {
      setCartProducts((prevProducts) =>
        prevProducts.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartProducts((prevProducts) => [
        ...prevProducts,
        { ...product, quantity: 1 },
      ]);
    }
  };
  return (
    <div className="flex justify-between">
      <div className="w-4/5 mr-4">
        {product ? (
          <div className="bg-white shadow-lg p-4 h-full flex ">
            <img
              src={product.image}
              alt={product.name}
              className="w-[500px]  object-cover mb-4"
            />
            <div>
              <h2 className="text-xl font-bold pt-4 px-4">{product.name}</h2>
              <p className="font-medium text-blue-600 pt-4 px-4">
                {product.price} ₺
              </p>
              <button
                className="bg-blue-600 text-white px-5 py-1  w-full ml-2 mt-4  rounded-md hover:bg-blue-700 transition duration-300"
                onClick={addToCart}
              >
                Add to Cart
              </button>
              <p className="text-md font-normal  pt-4 px-4">
                {product.description}
              </p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="flex flex-col w-1/5">
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

export default ProductDetail;
