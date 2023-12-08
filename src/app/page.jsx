"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import axios from "axios";
import ProductCard from "./components/ProductCard";
import Sorter from "./components/Sorter";
import BrandsFilter from "./components/BrandsFilter";
import TagsFilter from "./components/TagsFilter";
import Pagination from "./components/Pagination";
import BasketCard from "./components/BasketCard";
import Navbar from "./components/Navbar";

const Page = () => {
    const [products, setProducts] = React.useState([]);
    const [activeCategory, setActiveCategory] = React.useState("mugs");
    const [onSort, setOnSort] = React.useState("priceLowToHigh");
    const [selectedBrand, setSelectedBrand] = React.useState("All");
    const [selectedTags, setSelectedTags] = React.useState("All");

    //pagination start
    const [currentPage, setCurrentPage] = React.useState(1);
    const productsPerPage = 16;
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const displayedProducts = products.slice(startIndex, endIndex);
    //pagination end

    const fetchProducts = async () => {
        try {
            const { data } = await axios.get(`/api/products`);
            let filteredProducts = data.data.filter(
                (product) => product.category === activeCategory
            );

            if (selectedTags !== "All") {
                filteredProducts = filteredProducts.filter(
                    (product) => product.tags === selectedTags
                );
            }

            if (selectedBrand !== "All") {
                filteredProducts = filteredProducts.filter(
                    (product) => product.brand === selectedBrand
                );
            }

            switch (onSort) {
                case "priceLowToHigh":
                    filteredProducts = filteredProducts.sort(
                        (a, b) => a.price - b.price
                    );
                    break;
                case "priceHighToLow":
                    filteredProducts = filteredProducts.sort(
                        (a, b) => b.price - a.price
                    );
                    break;
                case "dateNewToOld":
                    filteredProducts = filteredProducts.sort(
                        (a, b) => new Date(b.date) - new Date(a.date)
                    );
                    break;
                case "dateOldToNew":
                    filteredProducts = filteredProducts.sort(
                        (a, b) => new Date(a.date) - new Date(b.date)
                    );
                    break;
                default:
                    break;
            }

            setProducts(filteredProducts);
        } catch (error) {
            console.log(error);
        }
    };

    const handleBrandFilterChange = (brand) => {
        setSelectedBrand(brand);
    };
    const handleTagsFilterChange = (tags) => {
        setSelectedTags(tags);
    };

    const handleButtonClick = (category) => {
        setActiveCategory(category);
        setSelectedBrand("All");
        setOnSort("priceLowToHigh");
        setSelectedTags("All");
        setCurrentPage(1);
    };

    React.useEffect(() => {
        fetchProducts();
    }, [activeCategory, onSort, selectedBrand, selectedTags]);

    const activeButtonStyle =
        "w-15 h-[30px] bg-primary text-white border-none rounded-sm";
    const inactiveButtonStyle =
        "w-15 h-[30px] bg-[#F2F0FD] text-primary border-none rounded-sm";

    return (
        <Provider store={store}>
            <div className="flex flex-col ">
                <Navbar />
                <main className="flex justify-between mt-5  ">
                    <aside className="w-[416px]">
                        <Sorter onSort={onSort} setOnSort={setOnSort} />
                        <BrandsFilter
                            products={products}
                            onFilterChange={handleBrandFilterChange}
                            selectedBrand={selectedBrand}
                            setSelectedBrand={setSelectedBrand}
                        />
                        <TagsFilter
                            products={products}
                            onFilterChange={handleTagsFilterChange}
                            selectedTags={selectedTags}
                            setSelectedTags={setSelectedTags}
                        />
                    </aside>
                    <section className="w-[608px]">
                        <h4 className="text-black500 text-xl font-normal tracking-[0.016em]">
                            Products
                        </h4>
                        <div className="flex gap-2 mt-4">
                            <button
                                className={
                                    activeCategory === "mugs"
                                        ? activeButtonStyle
                                        : inactiveButtonStyle
                                }
                                onClick={() => handleButtonClick("mugs")}>
                                mug
                            </button>
                            <button
                                className={
                                    activeCategory === "shirts"
                                        ? activeButtonStyle
                                        : inactiveButtonStyle
                                }
                                onClick={() => handleButtonClick("shirts")}>
                                shirt
                            </button>
                        </div>
                        <div className="grid grid-cols-4 gap-6 my-5 border rounded-sm shadow-sm bg-white p-5">
                            {displayedProducts.map((product) => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>
                        <div className="w-full items-center flex justify-center mb-5">
                            <Pagination
                                totalProducts={products.length}
                                productsPerPage={productsPerPage}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </section>
                    <aside className="w-[416px] mt-10 ml-4 ">
                        {" "}
                        <BasketCard />
                    </aside>
                </main>
            </div>
        </Provider>
    );
};

export default Page;
