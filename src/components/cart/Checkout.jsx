import React from "react";
import { toastSuccessNotify } from "../../helper/ToastNotify";
const Checkout = ({ cartProducts }) => {
  const total = cartProducts.reduce(
    (acc, product) => acc + product.quantity * parseFloat(product.price),
    0
  );

  const handleCheckout = () => {
    toastSuccessNotify("Your order has been created successfully");
    console.log("Checkout clicked!");
  };

  return (
    <div className="p-4  bg-white shadow-2xl ">
      <div className="text-black text-sm text-[13px] font-normal font-['Montserrat'] pb-2">
        Total Price:
        <span className="text-blue-600 text-[13px] font-normal font-['Montserrat'] mb-3">
          {" "}
          {total.toFixed(2)} ₺
        </span>
      </div>

      <button
        onClick={handleCheckout}
        className="bg-blue-600 text-white w-full py-[5px] text-[13px] rounded-md hover:bg-blue-700 transition duration-300 mt-3 font-['Work Sans']"
      >
        Checkout
      </button>
    </div>
  );
};

export default Checkout;
