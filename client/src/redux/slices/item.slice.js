import { createSlice } from '@reduxjs/toolkit'
import itemAction from '../actions/item.action';

const initialState = {
    items: [],
    loading: false
}

const itemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: itemAction
})

// ! slice to add in main store
export default itemSlice;

// ! Actions for state managemnt
export const { addItem, deleteItem, getItems, itemsLoading, updateItem } = itemSlice.actions;
