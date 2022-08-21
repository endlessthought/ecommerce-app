import axios from 'axios';
// import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, ITEMS_LOADING } from './types';
import { returnErrors } from './error.service';
import * as ItemAction from '../redux/slices/item.slice'

export const getItems = () => dispatch => {
    dispatch(ItemAction.itemsLoading());
    axios.get('/api/items')
        // .then(res => dispatch({
        //     type: GET_ITEMS,
        //     payload: res.data
        // }))
        .then(res => dispatch(ItemAction.getItems(res.data)))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const addItem = (item) => (dispatch) => {
    axios.post('/api/items', item)
        // .then(res => dispatch({
        //     type: ADD_ITEM,
        //     payload: res.data
        // }))
        .then(res => dispatch(ItemAction.addItem(res.data)))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const deleteItem = (id) => (dispatch) => {
    axios.delete(`/api/items/${id}`)
        // .then(res => dispatch({
        //     type: DELETE_ITEM,
        //     payload: id
        // }))
        .then(res => dispatch(ItemAction.deleteItem(id)))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}

export const updateItem = (id, item) => (dispatch) => {
    axios.put(`/api/items/${id}`, item)
        // .then(res => dispatch({
        //     type: UPDATE_ITEM,
        //     payload: Promise.all([id, res.data])
        // }))
        .then(res => dispatch(ItemAction.updateItem(Promise.all([id, res.data]))))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
}
export const setItemsLoading = () => {
    // return{
    //     type: ITEMS_LOADING
    // }
    ItemAction.itemsLoading()
}