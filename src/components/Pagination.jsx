import "./Pagination.css";
const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    const totalPages = pages.length
    let pageShort
    if (totalPages > 10) {
        if (currentPage > totalPages - 5) {
            pageShort = pages.slice(totalPages - 10, totalPages)
        } else if (currentPage > 5) {
            pageShort = pages.slice(currentPage - 5, currentPage + 5)
        } else {
            pageShort = pages.slice(0, 10)
        }
    } else {
        pageShort = pages.slice(0, totalPages)
    }

    return (
        <div className='pagination'>
            {pageShort.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == currentPage ? "active" : ""}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;