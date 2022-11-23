import React from "react";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
  const params = useParams();

  return <div>Reference Id: {params.refId}</div>;
};

export default ProductInfo;
