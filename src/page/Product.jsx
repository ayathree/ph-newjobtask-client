import { useEffect, useState } from "react";
import { IoMdTime } from "react-icons/io";
import { MdDateRange } from "react-icons/md";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); 
    const [totalPages, setTotalPages] = useState(1); 
    const [filter, setFilter] = useState('');
    const [filterTwo, setFilterTwo] = useState('');
    const [sort, setSort] = useState('');
    const [search, setSearch]= useState('')
    const [minPrice, setMinPrice] = useState(''); 
    const [maxPrice, setMaxPrice] = useState(''); 
    const productsPerPage = 6; 
    const btnNumbers = [...Array(totalPages).keys()].map(element => element + 1);

    useEffect(() => {
        const queryParams = new URLSearchParams({
            page: currentPage,
            limit: productsPerPage,
            filter: filter || '',
            filterTwo: filterTwo || '',
            sort: sort || '',
            minPrice: minPrice || '', 
            maxPrice: maxPrice || '', 
            search : search || '',
        });

        fetch(`https://ph-newjobtask-server.vercel.app/allProducts?${queryParams.toString()}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setTotalPages(data.totalPages);
            });
    }, [currentPage, filter, filterTwo, sort, minPrice, maxPrice, search]); 

    const handleReset=()=>{
        setFilter('');
        setFilterTwo('');
        setMaxPrice('');
        setMinPrice('');
        setSort('');
        setSearch('')

    }

    const handleSearch=e=>{
        e.preventDefault()
        const text=e.target.search.value
        setSearch(text)
    }

    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-center items-center m-5" >
               <div>
               <p className="text-purple-500 font-bold">Search by Product Name</p>
            <form onSubmit={handleSearch}>
            <div className="join">
  <input className="input input-bordered join-item" name="search" placeholder="Product name" />
  <button className="btn bg-blue-300 join-item ">Search</button>
</div>
            </form>
               </div>
            </div>
            <div className="grid lg:grid-cols-6 grid-cols-2 justify-center items-center lg:m-5">
                <div className="p-5">
                    <p className="text-purple-500 font-bold">Category Name</p>
                    <select onChange={e => setFilter(e.target.value)} value={filter} name="category" className="select select-primary w-full max-w-xs">
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
                <div className="p-5">
                    <p className="text-purple-500 font-bold">Brand Name</p>
                    <select onChange={e => setFilterTwo(e.target.value)} value={filterTwo} name="brand" className="select select-primary w-full max-w-xs">
                        <option></option>
                        <option>HydraFlow</option>
                        <option>GreenSip</option>
                        <option>HeatWave</option>
                        <option>QuietTunes</option>
                        <option>DreamLand</option>
                        <option>BrightHome</option>
                        <option>SoundWave</option>
                        <option>ComfortZone</option>
                        <option>FitFlex</option>
                        <option>SpeedRun</option>
                        <option>UrbanStyle</option>
                        <option>TechGear</option>
                        <option>HealthWatch</option>
                        <option>PureWater</option>
                        <option>CaféBrew</option>
                        <option>FreshSqueeze</option>
                        <option>AdventureGear</option>
                        <option>EcoControl</option>
                        <option>PureAir</option>
                        <option>BrightSmile</option>
                        <option>GlowSkin</option>
                        <option>SafeHome</option>
                    </select>
                </div>
                <div className="p-5">
                    <p className="text-purple-500 font-bold">Sorting By</p>
                    <select onChange={e => setSort(e.target.value)} value={sort} name="sort" className="select select-primary w-full max-w-xs">
                        <option></option>
                        <option value="low">Price Low to High</option>
                        <option value="high">Price High to Low</option>
                        <option value="new">Date Newest first</option>
                    </select>
                </div>
                <div className="p-5">
                    <p className="text-purple-500 font-bold">Min Price</p>
                    <input
                        type="text"
                        placeholder="min price"
                        value={minPrice}
                        onChange={e => setMinPrice(e.target.value)}
                        className="input input-bordered input-primary w-full max-w-xs"
                    />
                </div>
                <div className="p-5">
                    <p className="text-purple-500 font-bold">Max Price</p>
                    <input
                        type="text"
                        placeholder="max price"
                        value={maxPrice}
                        onChange={e => setMaxPrice(e.target.value)}
                        className="input input-bordered input-primary w-full max-w-xs"
                    />
                </div>
                <div className="p-5">
                    <button onClick={handleReset} className="btn bg-blue-300">Reset</button>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center">
                {products.map(product => (
                    <div key={product.id} className="card bg-purple-200 m-5 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">
                                {product.productName}
                                <div className="badge badge-secondary">{product.ratings}</div>
                            </h2>
                            <img className="h-[200px]" src={product.productImage} alt="" />
                        <p><span className="font-bold">Brand Name :</span> {product.brandName}</p>
                        <p><span className="font-bold">Category :</span> {product.categoryName}</p>
                        <p>{product.description}</p>
                            <div className="card-actions lg:justify-end justify-evenly">
                                <div className="badge badge-outline">${product.price}</div>
                                <div className="badge badge-outline"><MdDateRange /> {product.dateAdded}</div>
                                <div className="badge badge-outline"><IoMdTime />  {product.time}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="lg:flex justify-center items-center mt-5 ">
                {/* Previous button */}
                <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 mx-1  capitalize bg-purple-500 rounded-md dark:bg-gray-800 dark:text-gray-600  text-white"
                >
                    Previous
                </button>

                {/* Pagination buttons */}
                {btnNumbers.map(btnNumber => (
                    <button
                        key={btnNumber}
                        onClick={() => setCurrentPage(btnNumber)}
                        className={`px-4 py-2 mx-1 transition-colors duration-300 transform  bg-blue-300 rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 hover:text-white ${btnNumber === currentPage ? 'bg-blue-500 text-white' : 'text-gray-700'}`}
                    >
                        {btnNumber}
                    </button>
                ))}

                {/* Next button */}
                <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 mx-1  transition-colors duration-300 transform bg-purple-500 rounded-md dark:bg-gray-800 dark:text-gray-200  text-white"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Product;
