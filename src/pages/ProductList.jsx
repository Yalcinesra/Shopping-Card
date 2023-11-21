import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  let subTotal=products.reduce((total,item)=>+(item.price*item.dampingRate)*item.amount+(total),0)
 
  const BASE_URL = "https://63f4e5583f99f5855db9e941.mockapi.io/products";

  const getData = async () => {
    try {
      const { data } = await axios(
        BASE_URL
      );
      console.log(data);
      setProducts(data);
      setError(false); // işlem başarılı olursa erroru false a çekiyorum
    } catch (error) {
      console.log(error);
      setError(true); //catche düştüğünde error ini true değerine çekiyorum
    } finally {
      setLoading(false); // işlem try a da catche de girse farketmez her türlü loadingi false çekiyoruz ki ne olduğunu kullancıya yansıtabilelim
    }
  };
useEffect(() => {
  getData();
}, [])

  

  if (error) {
    return <p>Something went wrong..... </p>;
  }

  return (
    <div className="container mt-3">
      <div className="d-sm-block d-md-flex">
        {loading === true ? (
          <p> Loading....</p>
        ) : (
          <>
            <article id="product-panel" className="col-md-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} getData={getData}/>
              ))}
            </article>
            <article className="col-md-4 m-3">
              <CardTotal  subTotal={subTotal}/>
            </article>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
