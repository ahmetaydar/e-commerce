import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { cartTotalPriceSelector } from "../../store/selectors";

const Navbar = () => {
  const totalPrice = useSelector(cartTotalPriceSelector);
  return (
    <div className="bg-primary flex items-center justify-center relative">
      <Image
        src="/logo.svg"
        width={140}
        height={40}
        className="py-4"
        alt="logo"
        priority
      />
      <div className="flex items-center justify-center w-[129px] bg-[#147594] h-[72px] absolute right-28 gap-x-2">
        <img src="/basket.svg" />
        <span className="text-white text-sm font-semibold tracking-[0.016em]">
          ₺ {totalPrice}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
