import React, { useState } from "react";
import { PageWrapper } from "../components/styles/PageWrapper";
import Title from "../components/utilities/Title";
import ProductList from "../components/product/ProductList";
import data from "../db/personnel-data.json";
import ProductDetails from "../components/product/ProductDetails";
export default function Product() {
  // const [personneDetails, setProductDetails] = useState(data);
  const [searchProduct, setsearchProduct] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const searchName = (e) => {
    setsearchProduct(e.target.value);
  };

  const filteredNames = data.filter((product) =>
    `${product.product_name} ${product.product_category}`
      .toLowerCase()
      .includes(searchProduct.toLowerCase())
  );
  const displaySelectedProduct = (person) => {
    setSelectedProduct(person);
  };
  return (
    <PageWrapper className="animate-left">
      <Title text="Product" />
      <div className="d-flex" style={{ gap: 30 }}>
        <ProductList
          // Product={ProductDetails}
          Product={filteredNames}
          searchName={searchName}
          handlePersonClick={displaySelectedProduct}
        />
        {selectedProduct && <ProductDetails selectedProduct={selectedProduct} />}
      </div>
    </PageWrapper>
  );
}
