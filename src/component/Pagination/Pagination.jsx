import "./Pagination.scss";

function Pagination({ totalItems, pageSize, page, onPageChange, onPageSizeChange, pageSizeOptions = [10, 20, 50, 100] }) {
    const totalPages = Math.ceil(totalItems / pageSize);
    const maxVisiblePages = 5;

    const getPageNumbers = () => {
        const pageNumbers = [];

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            let leftSide = Math.max(2, page - 2);
            let rightSide = Math.min(totalPages - 1, page + 2);
            if (page <= 3) {
                rightSide = Math.min(totalPages - 1, maxVisiblePages);
              } else if (page >= totalPages - 2) {
                leftSide = Math.max(2, totalPages - (maxVisiblePages - 1));
              }
          
            pageNumbers.push(1);
            if (leftSide > 2) {
                pageNumbers.push("...");
            }
            for (let i = leftSide; i <= rightSide; i++) {
                pageNumbers.push(i);
            }
            if (rightSide < totalPages - 2) {
                pageNumbers.push("...");
            }
            pageNumbers.push(totalPages);
        }

        return pageNumbers;
    };
    return (
        <div className="pagination">
            <button className="prev-btn btn" disabled={page == 1} onClick={() => onPageChange(page - 1)}>
                Prev
            </button>
            {getPageNumbers().map((pageNum) => {
                return (
                    <span
                        className={`page-nums ${pageNum === page ? "active" : ""}`}
                        key={pageNum}
                        onClick={() => {
                            if (page !== pageNum) {
                                onPageChange(pageNum);
                            }
                        }}>
                        {pageNum}
                    </span>
                );
            })}
            <button className="next-btn btn" disabled={page == totalPages} onClick={() => onPageChange(page + 1)}>
                Next
            </button>
            <select
                className="pagesize-select"
                value={pageSize}
                onChange={(e) => {
                    onPageSizeChange(e.target.value);
                }}>
                {pageSizeOptions.map((size) => (
                    <option key={size}>{size}</option>
                ))}
            </select>
            <span>total: {totalItems}</span>
        </div>
    );
}
export default Pagination;
