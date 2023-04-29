import { createSlice } from "@reduxjs/toolkit";
import { fetchTweets } from "./operations";
import { addFollowers } from "./operations";

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchTweets.pending](state) {
      state.isLoading = true;
    },
    [fetchTweets.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTweets.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addFollowers.pending](state) {
      state.isLoading = true
    },
    [addFollowers.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addFollowers.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const tweetsReducer = tweetsSlice.reducer;
