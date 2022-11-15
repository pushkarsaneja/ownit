import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function Protected({
  authenticated,
  children,
  isManufacturerRoute,
  isManufacturer,
  isDistributorRoute,
  isDistributor,
  redirect = "/auth",
  redirectAdmin = "/",
}) {
  if (!authenticated) return <Navigate to={redirect} />;

  if (isManufacturerRoute && !isManufacturer)
    return <Navigate to={redirectAdmin} />;

  if (isDistributorRoute && !isDistributor)
    return <Navigate to={redirectAdmin} />;
  return children ? children : <Outlet />;
}

export default Protected;
