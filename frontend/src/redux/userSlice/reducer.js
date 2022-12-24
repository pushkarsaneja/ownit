// set user profile incase of login logout
export const setProfile = (state, action) => {
  state.name = action.payload.name;
  state.authenticated = action.payload.authenticated;
  state.role = action.payload.role;
  state.id = action.payload.id;
};
