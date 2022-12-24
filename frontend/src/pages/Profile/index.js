import React from "react";
import { useSelector } from "react-redux";
import ConsumerProfile from "./ConsumerProfile";
import DistributorProfile from "./DistributorProfile";
import ManufacturerProfile from "./ManufacturerProfile";

function Profile() {
  const { role } = useSelector((state) => state.user);
  if (role === "manufacturer") return <ManufacturerProfile />;
  else if (role === "distributor") return <DistributorProfile />;
  return <ConsumerProfile />;
}

export default Profile;
