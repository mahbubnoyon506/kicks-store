import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  size: number;
  color: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  wishlist: number[];
}

const initialState: CartState = {
  items: [],
  wishlist: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id,
        //   item.size === action.payload.size &&
        //   item.color === action.payload.color,
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push(action.payload);
      }
    },
    toggleWishlist: (state, action: PayloadAction<number>) => {
      const index = state.wishlist.indexOf(action.payload);
      if (index >= 0) {
        state.wishlist.splice(index, 1);
      } else {
        state.wishlist.push(action.payload);
      }
    },
  },
});

export const { addToCart, toggleWishlist } = cartSlice.actions;
export default cartSlice.reducer;
