import React from "react";

function Pagination({ totalPages, setCurrentPage, currentPage }) {
  const countPagination = () => {
    let res = [];
    for (let i = currentPage - 7; i < currentPage + 10; i++) {
      if (i > 0 && res.length < 10) res.push(i);
    }
    return res;
  };
  const renderPagination = () => {
    return countPagination().map((page) => (
      <React.Fragment key={page}>
        {currentPage === page ? (
          <a className="relative z-10 inline-flex items-center bg-gray-50 px-4 py-2 text-sm font-semibold text-black focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            {page}
          </a>
        ) : (
          <a
            key={page}
            onClick={() => handleOnClickPage(page)}
            className="relative cursor-pointer inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-black focus:z-20 focus:outline-offset-0"
          >
            {page}
          </a>
        )}
      </React.Fragment>
    ));
  };

  const handleOnClickPage = (action) => {
    switch (action) {
      case "-": {
        setCurrentPage(currentPage - 1);
        break;
      }
      case "+": {
        setCurrentPage(currentPage + 1);
        break;
      }
      default:
        setCurrentPage(action);
    }
  };

  return (
    <nav className="inline-flex -space-x-px rounded-md shadow-sm mx-auto py-10 w-full justify-center">
      <button
        disabled={currentPage == 1}
        onClick={() => handleOnClickPage("-")}
        className="disabled:bg-slate-300 disabled:opacity-75 relative cursor-pointer inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      >
        <span className="sr-only">Previous</span>
        <svg
          className="h-4 w-4 fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </svg>
      </button>
      {currentPage > 8 && (
        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
          ...
        </span>
      )}
      {renderPagination()}
      {currentPage !== totalPages && (
        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
          ...
        </span>
      )}
      <button
        disabled={currentPage == totalPages}
        onClick={() => handleOnClickPage("+")}
        className="disabled:bg-slate-300 disabled:opacity-75 relative cursor-pointer inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      >
        <span className="sr-only">Next</span>
        <svg
          className="h-4 w-4 fill-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
        </svg>
      </button>
    </nav>
  );
}

export default Pagination;
