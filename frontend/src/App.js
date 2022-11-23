import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NewProduct from "./pages/NewProduct";
import VerifyProduct from "./pages/VerifyProduct";
import ProductInfo from "./pages/ProductInfo";
import ScanQr from "./pages/ScanQr";
import { useSelector } from "react-redux";
import SignIn from "./pages/signin/index";
import Protected from "./components/Protected";
import Home from "./pages/home";
import Manufacturer from "./pages/manufacturer";
import Distributor from "./pages/Distributor";
import Navbar from "./components/Navbar";

const App = () => {
  const { authenticated, role } = useSelector((state) => state.user);
  const isManufacturer = role?.toLowerCase() === "manufacturer";
  const isDistributor = role?.toLowerCase() === "distributor";

  return (
    <>
      <Router>
        <Navbar authenticated={authenticated} role={role} />
        <Routes>
          <Route path="/verifyproduct" element={<VerifyProduct />} />
          <Route path="/verifyproduct/scan" element={<ScanQr />} />
          <Route path="/productinfo/:refId" element={<ProductInfo />} />
          <Route
            exact
            path={"/auth"}
            element={<SignIn authenticated={authenticated} />}
          />

          <Route
            exact
            path={"/"}
            element={
              <Protected authenticated={authenticated}>
                <Home />
              </Protected>
            }
          />
          <Route
            exact
            path={"/manufacturer"}
            element={
              <Protected
                authenticated={authenticated}
                isManufacturerRoute={true}
                isManufacturer={isManufacturer}
              >
                <Manufacturer />
              </Protected>
            }
          />
          <Route
            exact
            path={"/distributor"}
            element={
              <Protected
                authenticated={authenticated}
                isDistributorRoute={true}
                isDistributor={isDistributor}
              >
                <Distributor />
              </Protected>
            }
          />

          <Route
            exact
            path="/manufacturer/define-product"
            element={
              <Protected
                authenticated={authenticated}
                isManufacturerRoute={true}
                isManufacturer={isManufacturer}
              >
                <NewProduct />
              </Protected>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
