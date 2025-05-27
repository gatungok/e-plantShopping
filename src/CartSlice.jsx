import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add a plant to the cart (or increase qty if already present)
    addItem: (state, action) => {
      console.log("[CartSlice] addItem payload:", action.payload);
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // Remove all of a given plant from the cart
    removeItem: (state, action) => {
      console.log("[CartSlice] removeItem for name:", action.payload);
      // action.payload should be the plant's name
      state.items = state.items.filter((item) => item.name !== action.payload);
    },

    // Set a specific quantity for a plant already in the cart
    updateQuantity: (state, action) => {
      console.log("[CartSlice] updateQuantity payload:", action.payload);
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
