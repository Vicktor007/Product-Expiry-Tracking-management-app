import React, { useState } from "react";
import { PageWrapper } from "../components/styles/PageWrapper";
import Title from "../components/utilities/Title";
import ProductList from "../components/products/ProductList";
import data from "../db/product_data.json";
import ProductDetails from "../components/products/ProductDetails";
export default function Products() {
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
  const displaySelectedProduct = (product) => {
    setSelectedProduct(product);
  };
  return (
    <PageWrapper className="animate-left">
      <Title text="Products" />
      <div className="d-flex" style={{ gap: 30 }}>
        <ProductList
          // Product={ProductDetails}
          Product={filteredNames}
          searchName={searchName}
          handleProductClick={displaySelectedProduct}
        />
        {selectedProduct && <ProductDetails selectedProduct={selectedProduct} />}
      </div>
    </PageWrapper>
  );
}
