import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const shouldDisplayEllipsis = totalPages > 3;
  return (
    <div className="flex justify-center mt-4">
      {currentPage > 1 && (
        <button className="py-1" onClick={() => onPageChange(currentPage - 1)}>
          <img
            src="/icons/left-arrow.svg"
            alt="Left Arrow"
            className="w-5 h-5"
          />
        </button>
      )}
      {pages.map((page) => {
        if (
          page === 1 ||
          page === totalPages ||
          Math.abs(currentPage - page) < 2
        ) {
          return (
            <button
              key={page}
              className={`px-3 py-1 ${
                currentPage === page
                  ? "bg-white shadow-lg text-[#2A59FE] rounded-lg font-bold"
                  : "text-gray-600"
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          );
        } else if (
          shouldDisplayEllipsis &&
          (page === 2 || page === totalPages - 1)
        ) {
          return (
            <span key={`ellipsis-${page}`} className="px-3 py-1">
              ...
            </span>
          );
        }
        return null;
      })}
      {currentPage < totalPages && (
        <button className="py-1" onClick={() => onPageChange(currentPage + 1)}>
          <img
            src="/icons/right-arrow.svg"
            alt="Right Arrow"
            className="w-5 h-5"
          />
        </button>
      )}
    </div>
  );
};

export default Pagination;
