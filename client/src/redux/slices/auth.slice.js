import { createSlice } from '@reduxjs/toolkit'
import authAction from '../actions/auth.action'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: authAction
})

export default authSlice;

export const { authenticated, removeToken, userLoaded, userLoading } = authSlice.actions;