import React from "react";

const Pagination = ({
  totalProducts,
  productsPerPage,
  currentPage,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const maxVisiblePages = 8;

    if (!totalPages || totalPages <= 1) {
      return null;
    }

    const pageNumbers = [];
    const startPage = Math.max(
      1,
      (currentPage ?? 1) - Math.floor(maxVisiblePages / 2)
    );
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (startPage > 1) {
      pageNumbers.push(<span key="startEllipsis">...</span>);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => onPageChange?.(i)}
          className={`cursor-pointer  px-2 py-1 ${
            currentPage === i
              ? "bg-primary text-white w-8 h-10 border rounded-2"
              : "text-greyscale500"
          }`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      pageNumbers.push(<span key="endEllipsis">...</span>);
    }

    return pageNumbers;
  };
  return (
    <div className="mb-2 mt-4 flex justify-center gap-x-2 text-center items-center">
      <button
        onClick={() => onPageChange?.(currentPage ? currentPage - 1 : 1)}
        disabled={currentPage === 1}
        className="cursor-pointer px-2 py-1 text-sm font-normal  text-greyscale500 flex  items-center gap-x-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.06678 12.3328C5.11054 12.4379 5.1718 12.5343 5.25932 12.6131L11.3857 18.7438C11.7271 19.0854 12.2784 19.0854 12.6198 18.7438C12.9611 18.4023 12.9611 17.8505 12.6198 17.5089L7.98995 12.8758L18.1248 12.8758C18.6062 12.8758 19 12.4817 19 12C19 11.5183 18.6062 11.1242 18.1248 11.1242L7.9812 11.1242L12.611 6.49109C12.9523 6.14951 12.9523 5.59775 12.611 5.25618C12.2697 4.91461 11.7183 4.91461 11.377 5.25618L5.25057 11.3869C5.1718 11.4657 5.11054 11.5621 5.05802 11.6672C4.97926 11.8774 4.97926 12.1226 5.06678 12.3328Z"
            fill="#697488"
          />
        </svg>
        <span>Prev</span>
      </button>

      {renderPageNumbers()}
      <button
        onClick={() => onPageChange?.(currentPage ? currentPage + 1 : 1)}
        className="cursor-pointer  px-2 py-1 text-sm font-normal text-greyscale500 flex  items-center gap-x-2"
        disabled={currentPage === Math.ceil(totalProducts / productsPerPage)}
      >
        <span>Next</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.9332 11.6672C18.8895 11.5621 18.8282 11.4657 18.7407 11.3869L12.6143 5.25618C12.2729 4.91461 11.7216 4.91461 11.3802 5.25618C11.0389 5.59775 11.0389 6.14951 11.3802 6.49108L16.01 11.1242L5.8752 11.1242C5.39384 11.1242 5 11.5183 5 12C5 12.4817 5.39384 12.8758 5.8752 12.8758L16.0188 12.8758L11.389 17.5089C11.0477 17.8505 11.0477 18.4023 11.389 18.7438C11.7303 19.0854 12.2817 19.0854 12.623 18.7438L18.7494 12.6131C18.8282 12.5342 18.8895 12.4379 18.942 12.3328C19.0207 12.1226 19.0207 11.8774 18.9332 11.6672Z"
            fill="#697488"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
