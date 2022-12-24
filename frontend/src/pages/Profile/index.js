import React from "react";
import { useSelector } from "react-redux";
import ConsumerProfile from "../../components/Profile/ConsumerProfile";
import DistributorProfile from "../../components/Profile/DistributorProfile";
import ManufacturerProfile from "../../components/Profile/ManufacturerProfile";

function Profile() {
  const { role } = useSelector((state) => state.user);
  if (role === "manufacturer") return <ManufacturerProfile />;
  else if (role === "distributor") return <DistributorProfile />;
  return <ConsumerProfile />;
}

export default Profile;
