import axios from 'axios';
import { returnErrors } from './error.service';
// import { GET_CART, ADD_TO_CART, DELETE_FROM_CART, CART_LOADING } from './types';
import * as CartAction from '../redux/slices/cart.slice'

export const getCart = (id) => dispatch => {
    dispatch(CartAction.cartLoading());
    axios.get(`/api/cart/${id}`)
        // .then(res => dispatch({
        //     type: GET_CART,
        //     payload: res.data
        // }))
        .then(res => dispatch(CartAction.getCart(res.data)))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const addToCart = (id, productId, quantity) => dispatch => {
    axios.post(`/api/cart/${id}`, { productId, quantity })
        // .then(res => dispatch({
        //     type: ADD_TO_CART,
        //     payload: res.data
        // }))
        .then(res => dispatch(CartAction.addToCart(res.data)))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const deleteFromCart = (userId, itemId) => dispatch => {
    axios.delete(`/api/cart/${userId}/${itemId}`)
        // .then(res => dispatch({
        //     type: DELETE_FROM_CART,
        //     payload: res.data
        // }))
        .then(res => dispatch(CartAction.deleteFromCart(res.data)))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const setCartLoading = () => {
    // return {
    //     type: CART_LOADING
    // }
    CartAction.cartLoading();
}