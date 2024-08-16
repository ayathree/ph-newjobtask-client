import { useEffect, useState } from "react";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); 
    const [totalPages, setTotalPages] = useState(1); 
    const [filter,setFilter]=useState('')
    const [filterTwo,setFilterTwo]=useState('')
    const [sort, setSort]=useState('')
    const productsPerPage = 6; 
    const btnNumbers = [...Array(totalPages).keys()].map(element => element + 1);

    useEffect(() => {
        fetch(`http://localhost:5000/allProducts?page=${currentPage}&limit=${productsPerPage}&filter=${filter}&filterTwo=${filterTwo}&sort=${sort}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setTotalPages(data.totalPages);
            });
    }, [currentPage,filter,filterTwo,sort]); 

    return (
        <div>
            {/* <h2>Products Available: {products.length} </h2> */}
           <div className="flex flex-col lg:flex-row justify-between items-center ">
           <div>
           <p>Category Name</p>
            <select onChange={e=>setFilter(e.target.value)} value={filter} name="category" className="select select-error w-full max-w-xs">
  <option></option>
  <option>Kitchenware</option>
  <option>Electronics</option>
  <option>Bedding</option>
  <option>Furniture</option>
  <option>Fitness</option>
  <option>Footwear</option>
  <option>Apparel</option>
  <option>Outdoors</option>
  <option>Personal Care</option>
</select>
           </div>
           <div>
           <p>Brand Name</p>
            <select onChange={e=>setFilterTwo(e.target.value)} value={filterTwo} name="brand" className="select select-error w-full max-w-xs">
<option></option>
  <option>HydraFlow</option>
 <option >GreenSip</option>
 <option >HeatWave</option>
 <option >QuietTunes</option>
 <option >DreamLand</option>
 <option >BrightHome</option>
 <option >SoundWave</option>
 <option >ComfortZone</option>
 <option >FitFlex</option>
 <option >SpeedRun</option>
 <option >UrbanStyle</option>
 <option >TechGear</option>
 <option >HealthWatch</option>
 <option >PureWater</option>
 <option >CaféBrew</option>
 <option >FreshSqueeze</option>
 <option >AdventureGear</option>
 <option >EcoControl</option>
 <option >PureAir</option>
 <option >BrightSmile</option>
 <option >GlowSkin</option>
 <option >SafeHome</option>
 </select>
 


           </div>
           <div>
           <p>Sorting By</p>
            <select onChange={e=>setSort(e.target.value)} value={sort} name="sort" className="select select-error w-full max-w-xs">
  <option></option>
  <option value='low'>Price Low to High</option>
  <option value='high'>Price High to Low</option>
  <option value='new'>Date Newest first</option>
  
</select>

           </div>
           </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center">
                {products.map(product => (
                    <div key={product.id} className="card bg-purple-200 m-5 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">
                                {product.productName}
                                <br />
                                {product.categoryName}
                                <br />
                                {product.brandName}
                                <br />
                                {product.dateAdded}
                                <br />
                                {product.price}
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
