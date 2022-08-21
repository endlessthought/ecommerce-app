import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';

import errorsReducer from '../reducers/errors.reducer';
import itemReducer from '../reducers/item.reducer';
import cartReducer from '../reducers/cart.reducer';
import orderReducer from '../reducers/order.reducer';
import authReducer from '../reducers/auth.reducer';

const store = configureStore({
    reducer: {
        "items": itemReducer,
        "errors": errorsReducer,
        "cart": cartReducer,
        "order": orderReducer,
        "auth": authReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk)
});

export default store;