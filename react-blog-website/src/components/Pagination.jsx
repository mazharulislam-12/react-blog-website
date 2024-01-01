
const Pagination = ({ onPageChange, currentPage, blogs, pageSize }) => {
    const totalPages = Math.ceil(blogs.length / pageSize)
    // console.log(totalPages);
    const renderPagenationLinks = () => {
        return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <li className={pageNumber === currentPage ? "activePagnation" : ""} key={pageNumber}>
                <a href="#" onClick={() => onPageChange = { pageNumber }}>{pageNumber}</a>
            </li>
        ))
    }
    return (
        <ul className="pagination my-8 flex-wrap gap-4">
            <li>
                <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} >Previous</button>
            </li>
            <div className="flex gap-1">{renderPagenationLinks()}</div>
            <li>
                <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} >Next</button>
            </li>
        </ul>
    );
};

export default Pagination;

// 2.14min