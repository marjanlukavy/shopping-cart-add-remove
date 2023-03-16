import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Action, Product, ProductsState } from "../utils/storeTypes";

export const setProductQuantity = createAction<{
  productId: number;
  quantity: number;
}>(Action.SetProductQuantity);

export const deleteProduct = createAction<{
  productId: number;
}>(Action.DeleteProduct);

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
  cart: [],
  cartAmount: 0,
};
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },
    fetchProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addToCart: (state, action) => {
      const { productId } = action.payload;

      const product = state.items.find((p: Product) => p.id === productId);

      // Validate the product
      if (!product) {
        console.log("Product not found:", productId);
        return;
      }

      const isPresent = state?.cart?.find((p) => p.id === productId);

      if (product) {
        if (isPresent) {
          state.cart = state.cart?.map((p) =>
            p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
          );
        } else {
          state.cart = [...state.cart, { ...product, quantity: 1 }];
        }
        const roundedNum = state.cart.reduce((total, item) => {
          return total + item.quantity * item.price;
        }, 0);

        state.cartAmount = +roundedNum.toFixed(2);
      }
    },
  },
  extraReducers: (builder) => {
    // update the product quantity, using id, and a specific 'quantity' value.
    builder.addCase(setProductQuantity, (state, action) => {
      const { productId, quantity } = action.payload;
      const item = state.cart.find((p) => p.id === productId);
      if (item) {
        item.quantity = quantity;
        const roundedNum = state.cart.reduce((total, item) => {
          return total + item.quantity * item.price;
        }, 0);
        state.cartAmount = +roundedNum.toFixed(2);
      }
    });

    // remove the product by id
    builder.addCase(deleteProduct, (state, action) => {
      const { productId } = action.payload;
      const isPresent = state.cart.find((p) => p.id === productId);

      // Validate the product
      if (!isPresent) {
        console.log("Product not found in cart:", productId);
        return;
      }

      state.cart = state.cart.filter((p) => p.id !== productId);
    });
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  addToCart,
} = productsSlice.actions;

export default productsSlice.reducer;
