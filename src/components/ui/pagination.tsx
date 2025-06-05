'use client';
import * as React from "react";
import {
  MoreHorizontalIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import IconDownArrow from "../icons/IconDownArrow";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const maxVisiblePages = 10;

  const pageNumbers = React.useMemo(() => {
    const pages: (number | "...")[] = [];

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
    let endPage = startPage + maxVisiblePages - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = totalPages - maxVisiblePages + 1;
    }

    if (startPage > 1) {
      pages.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages) {
      pages.push("...");
    }

    return pages;
  }, [currentPage, totalPages]);

  return (
    <nav className="flex justify-center items-center gap-10 md:gap-2">
      {/* Previous Button */}
      <button
        className={arrowButtonStyle(currentPage === 1)}
        onClick={() => onPageChange?.(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <IconDownArrow fill={iconStyle(currentPage === 1)} className="h-8 w-8 rotate-90" />
      </button>

      {/* Page Buttons */}
      {pageNumbers.map((page, idx) =>
        page === "..." ? (
          <span
            key={`ellipsis-${idx}`}
            className="text-gray-400 px-2 flex items-center justify-center"
          >
            <MoreHorizontalIcon className="w-4 h-4" />
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange?.(page)}
            className={cn(
              "md:w-[66px] md:h-[66px] rounded-xl text-sm font-medium md:border transition",
              currentPage === page
                ? "border-purple-700 text-purple-900"
                : "border-purple-200 text-gray-600 hover:border-purple-400"
            )}
          >
            {page}
          </button>
        )
      )}

      {/* Next Button */}
      <button
        className={arrowButtonStyle(currentPage === totalPages)}
        onClick={() => onPageChange?.(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <IconDownArrow fill={iconStyle(currentPage === totalPages)} className="h-8 w-8 -rotate-90" />
      </button>
    </nav>
  );
};
const iconStyle = ((disabled: boolean) =>
  cn(
    
    disabled
      ? '#e1cee4'
      : '#9F63A9'
  ));
const arrowButtonStyle = (disabled: boolean) =>
  cn(
    "w-8 h-8 flex items-center justify-center rounded-full  transition",
    disabled
      ? "text-purple-100 border-transparent cursor-not-allowed"
      : "text-purple-600 border-purple-200 hover:border-purple-400"
  );

export default Pagination;
