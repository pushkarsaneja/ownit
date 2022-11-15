import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "../../redux/userSlice";
function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(
      userActions.setProfile({
        authenticated: false,
        name: null,
        role: null,
        email: null,
      })
    );
  };

  return (
    <div>
      <h1>YOu can only seee this is signed in</h1>
      <button onClick={() => navigate("/distributor")}>Distributor Link</button>
      <button onClick={() => navigate("/manufacturer")}>
        Manufacturer Link
      </button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
