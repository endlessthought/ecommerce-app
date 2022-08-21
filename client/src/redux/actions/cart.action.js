export default {
    getCart: (state, action) => {
        state.cart = action.payload
        state.loading = false
    },

    addToCart: (state, action) => {
        state.cart = action.payload
    },

    deleteFromCart: (state, action) => {
        state.cart = action.payload
    },

    cartLoading: (state, action) => {
        state.loading = true
    }
}