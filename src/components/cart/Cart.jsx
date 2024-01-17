import React, { useEffect } from "react";

const Cart = ({ cartProducts, setCartProducts, updatedCartProducts }) => {
  useEffect(() => {
    // Save cartProducts to localStorage whenever it changes
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);
  const handleQuantityChange = (productId, change) => {
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              quantity: Math.max(0, product.quantity + change),
            }
          : product
      )
    );
  };

  return (
    <div className="p-4  bg-white shadow-2xl">
      {updatedCartProducts.map((product) => (
        <div key={product.id} className="mb-2">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs font-normal font-['Montserrat']">
                {product.name}
              </p>
              <p className="text-blue-600 text-[10px] font-medium font-['Montserrat']">
                {product.price} ₺
              </p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => handleQuantityChange(product.id, -1)}
                className="px-2 bg-gray-200 rounded-lg"
              >
                -
              </button>
              <span className=" bg-blue-600 text-white px-2">
                {product.quantity}
              </span>
              <button
                onClick={() => handleQuantityChange(product.id, 1)}
                className="px-[6px] bg-gray-200 rounded-lg"
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
