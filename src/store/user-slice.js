// Redux
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAddress: "",
  provider: undefined,
  marketApproved: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserAddress(state, action) {
      state.userAddress = action.payload;
    },

    setProvider(state, action) {
      state.provider = action.payload;
    },

    setMarketApproved(state, action) {
      state.marketApproved = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
