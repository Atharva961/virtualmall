import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

export default function Products() {
    const [productList, setProductList] = useState([]);
    const host = "http://localhost:5000";
    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch(`${host}/apis/product/getproducts`, {
                method: "GET",
                headers: {
                    "Accept": "*/*",
                    "User-Agent": "Thunder Client (https://www.thunderclient.com)"
                }
            });
            const json = await response.json();
            setProductList(json);
        }
        getProducts();
        console.log(productList);
    });
  return (
    <div>
      <h2>This is the list of our available products</h2>
      <div className="row">
      {
        productList.map(product=>{
            return <div key={product._id} className="col-md-3">
            <ProductItem prod = {product}/>
        </div>
        })
      }
      </div>
    </div>
  )
}
