export default {
    getErrors: (state, action) => {

        state.msg = action.payload.msg
        state.status = action.payload.status
        state.id = action.payload.id
    },
    clearErrors: (state, action) => {
        state.msg = {}
        state.status = null
        state.id = null
    }
}