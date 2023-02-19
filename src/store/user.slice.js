import { createSlice } from "@reduxjs/toolkit";

export const {actions: userActions, reducer: userReducer} = createSlice( {
  name: "user",
  initialState: {
    users: [],
    user: {},
    isAuth: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    logout: (state) => {
      state.user = {};
      state.isAuth = false;
    },
  },
});
