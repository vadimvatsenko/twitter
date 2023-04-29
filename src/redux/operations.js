import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://63d3e9f8a93a149755b5ebb6.mockapi.io/api/v1/";

export const fetchTweets = createAsyncThunk(
  "tweets/fetchAll",
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await axios.get("/blog", {
        params: {
          page,
          limit
        }
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addFollowers = createAsyncThunk(
  'tweets/addFollowers',
  async ({id, followers, avatar, tweets}, thunkAPI) => {
    try {
      const response = await axios.put(`/blog/${id}`, { followers, avatar, tweets});
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }


  }
)
