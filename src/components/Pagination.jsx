const Pagination = ({ page, totalPages, setPage }) => {
    return (
      <div className="flex justify-center mt-4">
        <button
          className="px-3 py-1 bg-gray-300 rounded mx-1 disabled:opacity-50"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>
        <span className="px-4 py-1">{page} / {totalPages}</span>
        <button
          className="px-3 py-1 bg-gray-300 rounded mx-1 disabled:opacity-50"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
  