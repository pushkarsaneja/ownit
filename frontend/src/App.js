import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NewProduct from "./pages/NewProduct";
import VerifyProduct from "./pages/VerifyProduct";
import ProductInfo from "./pages/ProductInfo";
import ScanQr from "./pages/ScanQr";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/verifyproduct" element={<VerifyProduct />} />
        <Route path="/verifyproduct/scan" element={<ScanQr />} />
        <Route path="/productinfo/:refId" element={<ProductInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
