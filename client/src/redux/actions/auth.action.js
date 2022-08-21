export default {
    userLoading: (state, action) => {
        state.isLoading = true
    },

    userLoaded: (state, action) => {
        state.isAuthenticated = true;
        state.isLoading = false;
        state.user = action.payload;
    },

    // case LOGIN_SUCCESS:
    // case REGISTER_SUCCESS:
    authenticated: (state, action) => {
        localStorage.setItem('token', action.payload.token);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.isLoading = false;
    },

    // case AUTH_ERROR:
    // case LOGIN_FAIL:
    // case LOGOUT_SUCCESS:
    // case REGISTER_FAIL:
    removeToken: (state, action) => {
        localStorage.removeItem('token');
        state.token = null;
        state.user = null;
        state.isAuthenticated = false;
        state.isLoading = false;
    }
}