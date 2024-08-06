import { createSlice } from "@reduxjs/toolkit";
export const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: JSON.parse(localStorage.getItem("users")) || [],
  },
  reducers: {
    addUser(state, action) {
      state.value = [...state.value, action.payload];
      localStorage.setItem("users", JSON.stringify(state.value));
    },
    removeUser(state, action) {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
      localStorage.setItem("users", JSON.stringify(state.value));
    },
    renameUser(state, action) {
      let filterData = state.value.filter(
        (user) => user.id !== action.payload.id
      );
      state.value = filterData;
    },
    renameUserAdd(state, action) {
      state.value = [...state.value, action.payload];
      localStorage.setItem("users", JSON.stringify(state.value));
    },
  },
});

export const { addUser, removeUser, renameUser, renameUserAdd } =
  usersSlice.actions;
export default usersSlice.reducer;
