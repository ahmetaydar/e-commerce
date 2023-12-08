"use client";
import React, { useEffect, useState } from "react";

const TagsFilter = ({ setSelectedTags, products, selectedTags }) => {
    const [uniqueTags, setUniqueTags] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const getUniqueTags = () => {
            const tags = new Set(products.map((product) => product.tags));
            return ["All", ...tags];
        };

        setUniqueTags(getUniqueTags());
    }, [products]);

    const handleTagsFilterChange = (tags) => {
        setSelectedTags(tags);
    };

    const filteredTags = uniqueTags.filter((tags) =>
        tags.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getTagsProductCount = (tags) => {
        if (tags === "All") {
            return products.length;
        } else {
            return products.filter((product) => product.tags === tags).length;
        }
    };
    console.log(selectedTags, "selectedTags");

    return (
        <div className="pl-[104px] pt-5">
            <h1 className="text-greyscale500 text-[13px] font-semibold mb-3">
                Tags
            </h1>
            <div className="w-[296px] h-[244px] container bg-white rounded-sm border-noneshadow-sm p-6 hover:border-black300  ">
                <input
                    type="text"
                    placeholder="Search Tags"
                    className="w-[248px] h-12 ps-3 border-2 rounded-sm outline-none border-black100"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="mt-[17px] max-h-[120px] overflow-auto ">
                    <ul>
                        {filteredTags.map((tags) => (
                            <li
                                key={tags}
                                className="flex items-center gap-2 "
                                onClick={() => handleTagsFilterChange(tags)}>
                                <span className="hover:cursor-pointer">
                                    <img
                                        src={
                                            selectedTags === tags
                                                ? "/images/squarecheckedicon.svg"
                                                : "/images/squareicon.svg"
                                        }
                                        alt="square"
                                    />
                                </span>
                                <span className="text-black600 font-normal text-sm tracking-wide">
                                    {tags}
                                </span>
                                <span className="text-black300 font-normal tracking-wide ">
                                    ({getTagsProductCount(tags)})
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TagsFilter;
