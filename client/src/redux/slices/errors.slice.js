import { createSlice } from '@reduxjs/toolkit'
import errorsAction from '../actions/errors.action';

const initialState = {
    msg: {},
    status: null,
    id: null
}

const errorsSlice = createSlice({
    name: 'errors',
    initialState,
    reducers: errorsAction
})

// ! slice to add in main store
export default errorsSlice;

// ! Actions for state managemnt
export const { clearErrors, getErrors } = errorsSlice.actions;
