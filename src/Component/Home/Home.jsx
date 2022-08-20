import React, { useEffect, useState } from "react";
import CatagoriesDetalies from "../CatagoriesDetalies/CatagoriesDetalies";
import fackData from "../../fackData/generated.json";

const Home = (props) => {
  console.log(props);
  const { catagory } = props;
  const [products, setProducts] = useState([]);

  const FackData = fackData;
  useEffect(() => {
    const matchProduct = FackData.filter(
      (product) => product.catagory.toLowerCase() === catagory.toLowerCase()
    );
    setProducts(matchProduct);
  }, [catagory]);

  return (
    <div>
      <h1>Product Item :  {catagory} </h1>
      {products.map((pd) => (
        <CatagoriesDetalies product={pd}></CatagoriesDetalies>
      ))}
    </div>
  );
};

export default Home;
