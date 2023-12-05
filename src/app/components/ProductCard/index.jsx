import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

const ProductCard = (product) => {
  const dispatch = useDispatch();
  return (
    <div
      key={product.id}
      className="bg-white w-[124px] h-[225px] flex flex-col justify-center"
    >
      <div className="border-[1.177px] rounded-xl w-[124px] h-[124px] bg-[#FEFEFE] flex items-center justify-center">
        <img
          src="/images/product.png"
          width={92}
          height={92}
          className="py-4"
          alt="logo"
        />
      </div>

      <div className="text-primary text-sm font-bold flex justify-start mt-2 ">
        <span>₺</span>
        {product.price}
      </div>
      <div className="text-sm font-semibold flex justify-start  ">
        {product.name}
      </div>

      <button
        className="bg-primary text-white text-xs font-semibold rounded-[2px] w-[124px] h-[22px] mt-2"
        onClick={() => {
          dispatch(addToCart(product));
        }}
      >
        Add
      </button>
    </div>
  );
};

export default ProductCard;
