import React, { useState } from "react";
import ProductForm from "../components/ProductForm";

import axios from "axios"

const NewProduct = () => {
  const initialValue = {
    name: "",
    price: 0,
    amount: 0,
    dampingRate: 0.8,
    image: "",
  };
  const [formVeri, setFormVeri] = useState(initialValue);
  // initialStatei apinin benden istediği değerlere göre oluşturdum ki herhangi bir ek düzenleme yapmadan veriyi olduğu gibi apiye gönderebileyim.

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://63f4e5583f99f5855db9e941.mockapi.io/products",
      formVeri
    );

    setFormVeri(initialValue);
  };

  return (
    <div className="container">
      <article
        id="add-product"
        className="mb-4 mt-4 col col-lg-6 mx-auto border rounded-2 bg-opacity-50 bg-light"
      >
        <h1 className="text-center"> New Product</h1>

        <ProductForm
          handleSubmit={handleSubmit}
          formVeri={formVeri}
          setFormVeri={setFormVeri}
        />
      </article>
    </div>
  );
};

export default NewProduct;
