"use client";
import React, { useEffect, useState } from "react";
import SquareCheckedIcon from "../Svgs/SquareCheckedIcon";
import SquareIcon from "../Svgs/SquareIcon";

const BrandsFilter = ({ setSelectedBrand, products }) => {
  const [uniqueBrands, setUniqueBrands] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getUniqueBrands = () => {
      const brands = new Set(products.map((product) => product.brand));
      return ["All", ...brands];
    };

    setUniqueBrands(getUniqueBrands());
  }, [products]);

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  const filteredBrands = uniqueBrands.filter((brand) =>
    brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getBrandProductCount = (brand) => {
    if (brand === "All") {
      return products.length;
    } else {
      return products.filter((product) => product.brand === brand).length;
    }
  };

  return (
    <div className="pl-[104px] pt-5">
      <h1 className="text-greyscale500 text-[13px] font-semibold mb-3">
        Brands
      </h1>
      <div className="w-[296px] h-[244px] container bg-white rounded-sm border-none shadow-sm p-6 hover:border-black300  ">
        <input
          type="text"
          placeholder="Search Brand"
          className="w-[248px] h-12 ps-3 border-2 rounded-sm outline-none border-black100"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="mt-[17px] max-h-[120px] overflow-auto ">
          <ul>
            {filteredBrands.map((brand) => (
              <li
                key={brand}
                className="flex items-center gap-2 "
                onClick={() => handleBrandChange(brand)}
              >
                <span className="hover:cursor-pointer">
                  <SquareCheckedIcon />
                </span>
                <span className="text-black600 font-normal text-sm tracking-wide">
                  {brand}
                </span>
                <span className="text-black300 font-normal tracking-wide ">
                  ({getBrandProductCount(brand)})
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BrandsFilter;
