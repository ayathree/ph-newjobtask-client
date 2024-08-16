import { useEffect, useState } from "react";



const Product = () => {
   
    const [products, setProducts]= useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/allProducts')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
             <h2>Bottles Available : {products.length} </h2>
             {
                products.map(product=><div key={product.id} className="card bg-base-100 w-96 shadow-xl">
                    
                    <div className="card-body">
                      <h2 className="card-title">
                       {product.productName}
                       
                        <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                      </div>
                    </div>
                  </div>)
             }
            
        </div>
    );
};

export default Product;