// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  favoriteItems: [],
  totalAmount: 0,
  totalQuantity: 0,
  totalFavoriteItems:0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);

      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price) * existingItem.quantity;
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    addFav: (state, action) => {
        const newItem = action.payload;
        const existingItem = state.cartItems.find((item) => item.id === newItem.id);
  
        state.totalFavoriteItems++;
  
        if (!existingItem) {
          state.cartItems.push({
            id: newItem.id,
            productName: newItem.productName,
            imgUrl: newItem.imgUrl,
            price: newItem.price,
            quantity: 1,
            totalPrice: newItem.price,
          });
        } else {
          existingItem.quantity++;
          existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price) * existingItem.quantity;
        }
  
        state.totalAmount = state.cartItems.reduce(
          (total, item) => total + Number(item.price) * Number(item.quantity),
          0
        );
      },
      deleteFav: (state, action) => {
        const id = action.payload;
        const existingItem = state.cartItems.find((item) => item.id === id);
      
        if (existingItem) {
          existingItem.quantity--;
          existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price);
      
          if (existingItem.quantity === 0) {
            state.cartItems = state.cartItems.filter((item) => item.id !== id);
          }
        }
      
        state.totalFavoriteItems = state.cartItems.reduce(
          (total, item) => total + Number(item.quantity),
          0
        );
      },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
