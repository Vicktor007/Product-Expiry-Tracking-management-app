import React,{ useState } from "react";




function calculateExpiryDate(dateOfExpiry) {
  const today = new Date();
  const expiryDate = new Date(dateOfExpiry);
  let timeDiff = expiryDate.getTime() - today.getTime();
  let days = Math.ceil(timeDiff / (1000 * 3600 * 24));
  let years = Math.floor(days / 365);
  days -= years * 365;
  let months = Math.floor(days / 30);
  days -= months * 30;

  if (timeDiff < 0) {
    return "expired";
  } else {
    return { years, months, days };
  }
}

export default function ProductDetails({ selectedProduct }) {
  const { product_name, product_category, production_date, expiry_date } =
    selectedProduct;
  
  const [shelf_life, setShelfLife] = useState("");
  
  const expiryDate = calculateExpiryDate(JSON.stringify(expiry_date));
  
  const used_shelf_life = `${Math.floor((new Date() - new Date(production_date)) / (1000 * 60 * 60 * 24))} days`;
  
  const remaining_shelflife = `${Math.floor((new Date(expiry_date) - new Date()) / (1000 * 60 * 60 * 24))} days`;
  
  if (shelf_life === "") {
    setShelfLife(`${Math.floor((new Date(expiry_date) - new Date(production_date)) / (1000 * 60 * 60 * 24))} days`);
  }
  
  return (
    <section>
      <h2 className="alert alert-accept ">
        {product_name} {product_category}
      </h2>
      <div className="card">
        <h2 className="fs-md">Pduct details</h2>
        <div className="card-text">
          <p>Date of Manufacture: {production_date}</p>
          <p>Expiry Date {expiryDate === "expired" ? "expired" : `${expiryDate.years} years, ${expiryDate.months} months, and ${expiryDate.days} days`}</p>
          <p>Shelf Life: {shelf_life}</p>
          <p>Used Shelf Life: {used_shelf_life}</p>
          <p>Remaining Shelf Life: {remaining_shelflife}</p>
        </div>
      </div>
    </section>
  );
}