// import { GET_ERRORS, CLEAR_ERRORS } from './types';
import * as ErrorActions from '../redux/slices/errors.slice'
// RETURN ERRORS
export const returnErrors = (msg, status, id = null) => {
    // return {
    //     type: GET_ERRORS,
    //     payload: { msg, status, id }
    // }
    ErrorActions.getErrors({ msg, status, id })
}

// CLEAR ERRORS
export const clearErrors = () => {
    // return {
    //     type: CLEAR_ERRORS
    // }
    ErrorActions.clearErrors()
}