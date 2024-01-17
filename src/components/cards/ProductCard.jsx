import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, setCartProducts, cartProducts }) => {
  const navigate = useNavigate();

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

  const navigateToProductDetail = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="w-[180px]  bg-white border rounded-lg overflow-hidden shadow-md mb-4">
      <div onClick={navigateToProductDetail}>
        <img
          src={product.image}
          alt={product.name}
          className="w-[150px] h-[150px] object-cover mx-auto mt-4"
        />
        <div className="p-4">
          <p className="text-sm font-medium text-blue-600 mb-1">
            {product.price} ₺
          </p>
          <p className="text-xs font-normal font-montserrat ">{product.name}</p>
        </div>
      </div>

      <button
        className="bg-blue-600 text-white px-5 py-1 mb-2 ml-7  rounded-md hover:bg-blue-700 transition duration-300"
        onClick={addToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
