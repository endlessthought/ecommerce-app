import { createSlice } from '@reduxjs/toolkit'
import cartAction from '../actions/cart.action';


const initialState = {
    cart: null,
    loading: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: cartAction,

})

export default cartSlice;

export const { addToCart, cartLoading, deleteFromCart, getCart } = cartSlice.actions;