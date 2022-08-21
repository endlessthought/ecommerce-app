export default {
    getOrders: (state, action) => {
        state.orders = action.payload
        state.loading = false
    },

    checkout: (state, action) => {
        state.orders = [action.payload, ...state.orders]
    },

    ordersLoading: (state, action) => {
        state.loading = true
    }
}