import { createSlice } from "@reduxjs/toolkit";
import Products from "../Data/Products";

const initialState = {
  cardItems: Products,
  quantity: 6,
  total: 0
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    clearBasket: (state) => {
      state.cardItems = [];
      state.quantity = 0;
      state.total = 0;
    },
    removeItem: (state, action) => {
      // console.log(action);
      const itemId = action.payload;
      state.cardItems = state.cardItems.filter((item) => item.id !== itemId);
      if (state.cardItems < 1) {
        state.quantity = 0;
        state.total = 0;
      }
    },
    increase: (state, action) => {
      const cardItem = state.cardItems.find(
        (item) => item.id === action.payload
      );
      cardItem.quantity += 1;
    },
    decrease: (state, action) => {
      const itemId = action.payload;
      const cardItem = state.cardItems.find(
        (item) => item.id === action.payload
      );
      cardItem.quantity -= 1;
      if (cardItem.quantity < 1) {
        state.cardItems = state.cardItems.filter((item) => item.id !== itemId);
      }
      if (state.cardItems < 1) {
        state.quantity = 0;
        state.total = 0;
      }
    },
    totalBasket: (state) => {
      let total = 0;
      let quantity = 0;
      state.cardItems.forEach((item) => {
        total += item.quantity * item.price;
        console.log(total);
        quantity += item.quantity;
        console.log(quantity);
      });
      state.quantity = quantity;
      state.total = total;
    }
  }
});

export const {
  clearBasket,
  removeItem,
  increase,
  decrease,
  totalBasket
} = cardSlice.actions;

export default cardSlice.reducer;
