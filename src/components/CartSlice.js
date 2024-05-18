import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addSubscibe(state, action) {
      const itemIndex = state.vidoes.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.videos[itemIndex].quantity += 1;
      } else {
      }
    },
  },
});

export const { addSubscibe } = CartSlice.actions;
export default CartSlice.reducer;
