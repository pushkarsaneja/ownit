import React from "react";
import NewProduct from "./pages/NewProduct";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/signin";
import Protected from "./components/Protected";
import Home from "./pages/home";
import Manufacturer from "./pages/manufacturer";
import Distributor from "./pages/Distributor";

const App = () => {
  const { authenticated, role } = useSelector((state) => state.user);
  const isManufacturer = role?.toLowerCase() === "manufacturer";
  const isDistributor = role?.toLowerCase() === "distributor";
  console.log(isManufacturer, isDistributor);
  return (
    <Routes>
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
  );
};

export default App;
