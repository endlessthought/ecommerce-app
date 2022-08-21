export default {
    getItems: (state, action) => {
        state.items = action.payload
        state.loading = false
    },
    addItem: (state, action) => {
        state.items = [action.payload, ...state.items]
    },
    deleteItem: (state, action) => {
        state.items = state.items.filter(item => item._id !== action.payload)
    },
    updateItem: (state, action) => {
        const { id, data } = action.payload;
        state.items = state.items.map(item => {
            if (item._id === id) {
                item = data;
            }
        })
    },
    itemsLoading: (state, action) => {
        state.loading = true
    },
}