import { useEffect, useState } from "react";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // Track the current page
    const [totalPages, setTotalPages] = useState(1); // Track total pages available
    const productsPerPage = 6; // Set the number of products per page
    const btnNumbers = [...Array(totalPages).keys()].map(element => element + 1);

    useEffect(() => {
        fetch(`http://localhost:5000/allProducts?page=${currentPage}&limit=${productsPerPage}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setTotalPages(data.totalPages); // Set total pages based on response
            });
    }, [currentPage]); // Fetch data again whenever currentPage changes

    return (
        <div>
            {/* <h2>Products Available: {products.length} </h2> */}
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center">
                {products.map(product => (
                    <div key={product.id} className="card bg-purple-200 m-5 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">
                                {product.productName}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>Product description or details go here.</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center mt-5">
                {/* Previous button */}
                <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md dark:bg-gray-800 dark:text-gray-600 hover:bg-blue-500 hover:text-white"
                >
                    Previous
                </button>

                {/* Pagination buttons */}
                {btnNumbers.map(btnNumber => (
                    <button
                        key={btnNumber}
                        onClick={() => setCurrentPage(btnNumber)}
                        className={`px-4 py-2 mx-1 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 hover:text-white ${btnNumber === currentPage ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
                    >
                        {btnNumber}
                    </button>
                ))}

                {/* Next button */}
                <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 hover:text-white"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Product;
