export const setCurrentProduct = (state, action) => {
  state.product = action.payload;
};

export const removeCurrentProduct = (state, action) => {
  state.product = null;
};
