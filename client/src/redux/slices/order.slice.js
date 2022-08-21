import { createSlice } from "@reduxjs/toolkit";
import orderAction from '../actions/order.action'

const initialState = {
    orders: [],
    loading: false
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: orderAction
})

export default orderSlice;

export const { checkout, getOrders, ordersLoading } = orderSlice.actions;