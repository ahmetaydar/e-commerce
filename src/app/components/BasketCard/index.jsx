import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartTotalPriceSelector } from "../../store/selectors";
import { increament, decrement, clear } from "../../store/cartSlice";

const BasketCard = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = useSelector(cartTotalPriceSelector);
  return (
    <div className="border-x-8 border-y-[8.18px] border-primary rounded-2 w-[296px] pl-[22px] pt-[26px] max-h-[320px]  overflow-auto ">
      {cart.map((product) => (
        <div
          key={product.id}
          className="flex flex-row justify-between items-center px-4 py-2 border-b "
        >
          <div className="flex flex-col items-start">
            <div className="text-sm font-normal flex justify-start px-2">
              {product.name}
            </div>
            <div className="text-primary text-sm font-semibold flex justify-start ml-2 ">
              <span>₺</span>
              {product.price}
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <button
              className="text-primary text-sm font-semibold "
              onClick={() => {
                dispatch(decrement(product.id));
              }}
              disabled={product.quantity === 1}
            >
              -
            </button>
            <div className="bg-primary text-white w-8 h-8 flex justify-center items-center border rounded">
              {product.quantity}
            </div>
            <button
              className="text-primary text-sm font-semibold  "
              onClick={() => {
                dispatch(increament(product.id));
              }}
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div className="flex flex-row items-center px-4 py-2 justify-between">
        <button
          onClick={() => dispatch(clear())}
          className="bg-primary text-white text-sm font-semibold flex items-center justify-center w-24 h-12 border-primary border-2 rounded"
        >
          CLEAR
        </button>
        <div className="text-primary text-sm font-semibold flex items-center justify-center w-24 h-12 border-primary border-2 rounded">
          <span>₺</span>
          {totalPrice}
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
