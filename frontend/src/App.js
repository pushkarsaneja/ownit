import React, { useState } from "react";
import SignIn from "./pages/signin";
import { Route, Routes } from "react-router-dom";
import Protected from "./components/Protected";
import Home from "./pages/home";
import { useSelector } from "react-redux";
import Manufacturer from "./pages/manufacturer";
import Distributor from "./pages/Distributor";

const App = () => {
  const [text, setText] = useState("");
  const { authenticated, role } = useSelector((state) => state.user);
  const isManufacturer = role?.toLowerCase() === "manufacturer";
  const isDistributor = role?.toLowerCase() === "distributor";
  console.log(isManufacturer, isDistributor);
  return (
    <>
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
      </Routes>
    </>
  );
};

export default App;
