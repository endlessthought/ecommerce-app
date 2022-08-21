import axios from 'axios';
import { returnErrors } from './error.service';
// import { GET_ORDERS, CHECKOUT, ORDERS_LOADING } from './types';
import * as OrderAction from '../redux/slices/order.slice'

export const getOrders = (id) => dispatch => {
    dispatch(OrderAction.ordersLoading());
    axios.get(`/api/order/${id}`)
        // .then(res => dispatch({
        //     type: GET_ORDERS,
        //     payload: res.data
        // }))
        .then(res => dispatch(OrderAction.getOrders(res.data)))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const checkout = (id, source) => dispatch => {
    axios.post(`/api/order/${id}`, { source })
        // .then(res => dispatch({
        //     type: CHECKOUT,
        //     payload: res.data
        // }))
        .then(res => dispatch(OrderAction.checkout(res.data)))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const setOrdersLoading = () => {
    // return {
    //     type: ORDERS_LOADING
    // }
    OrderAction.ordersLoading()
}