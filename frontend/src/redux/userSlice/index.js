import { createSlice } from "@reduxjs/toolkit";
import { setProfile } from "./reducer";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    authenticated: false,
    role: "user",
    id: null,
  },
  reducers: {
    setProfile,
  },
});

export const userActions = userSlice.actions;
export default userSlice;
