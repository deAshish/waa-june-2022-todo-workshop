import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@reduxjs";

export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAllPosts",
  async (param) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  }
);

const initialState = {
  posts: [],
  loading: "idle",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducer: {},

  extraReducer: (builder) => {
    builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
      state.posts.push(action.payload);
    });
  },
});

export default postsSlice.reducer;
