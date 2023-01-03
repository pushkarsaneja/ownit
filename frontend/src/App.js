import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NewProduct from "./pages/NewProduct";
import VerifyProduct from "./pages/VerifyProduct";
import ProductInfo from "./pages/ProductInfo";
import ScanQr from "./pages/ScanQr";
import { useSelector } from "react-redux";
import SignIn from "./pages/SignIn";
import Protected from "./components/Protected";
import Home from "./pages/home";
import Manufacturer from "./pages/manufacturer";
import Distributor from "./pages/Distributor";
import Navbar from "./components/Navbar";
import Assets from "./pages/Assets";
import Test from "./pages/test";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import TransactionInfo from "./pages/TransactionInfo";

const App = () => {
  const { authenticated, role } = useSelector((state) => state.user);
  const isManufacturer = role?.toLowerCase() === "manufacturer";
  const isDistributor = role?.toLowerCase() === "distributor";
  const isAuthority = role?.toLowerCase() === "authority";
  return (
    <>
      <Router>
        <Navbar authenticated={authenticated} role={role} />
        <Routes>
          <Route path="/verifyproduct" element={<VerifyProduct />} />
          <Route path="/main" element={<Main />} />
          <Route path="/test" element={<Test />} />
          <Route path="/verifyproduct/scan" element={<ScanQr />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/productinfo/:refId" element={<ProductInfo />} />
          <Route path="/lot/:lotId" element={<ProductInfo />} />
          <Route path="/transaction/:trxnId" element={<TransactionInfo />} />
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
          <Route
            exact
            path="/Dashboard"
            element={
              <Protected
                authenticated={authenticated}
                isAuthority={isAuthority}
                isAuthorityRoute={true}
              >
                <Dashboard />
              </Protected>
            }
          />

          <Route
            exact
            path="/profile"
            element={
              <Protected authenticated={authenticated}>
                <Profile />
              </Protected>
            }
          />

          <Route
            exact
            path="/transactions"
            element={
              <Protected authenticated={authenticated}>
                <Transactions />
              </Protected>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
