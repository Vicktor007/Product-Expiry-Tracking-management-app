import React from "react";
import styled from "styled-components";
import Button from "../utilities/Button";
import SearchBar from "./SearchBar";
export const ProductCanvas = styled.div`
  max-height: 356px;
  max-width: 356px;
  overflow-y: scroll;
  overflow-x: hidden;
  box-shadow: 0 3px 15px 2px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 10px;
`;
export const ProductStyle = styled.li`
  cursor: pointer;
  padding: 10px;
  border: 1px solid darkblue;
  border-radius: 10px;
  margin-bottom: 1rem;
  /* box-shadow: 0 3px 15px 2px rgba(0, 0, 0, 0.1); */
  font-weight: 500;
`;
export default function ProductList({
  Product,
  searchName,
  handleProductClick,
}) {
  return (
    <section>
      <h2 className="mb-1">Product List</h2>
      <SearchBar handleInputChange={searchName} />
      <ProductCanvas className="mb-1">
        <ul>
          {Product.map((product) => (
            <ProductStyle
              className="bg-dark text-light"
              key={product.id}
              onClick={() => handleProductClick(product)}
            >
              {Product.first_name} {Product.last_name}
            </ProductStyle>
          ))}
        </ul>
      </ProductCanvas>
      <Button classes={"btn-accept btn-block"} text="Save" />
    </section>
  );
}
