import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",

  initialState: {
    products: null,
    loading: false,
    error: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getSuccess: (state, { payload }) => {
      state.loading = false;
      state.products = payload[0];
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, getSuccess, fetchFail } = productSlice.actions;
export default productSlice.reducer;
