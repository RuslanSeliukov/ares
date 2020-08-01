import { reducer as formReducer } from 'redux-form'
import {combineReducers} from "redux";
import {
    ADD_BOOKS,
    ADD_CURRENT_BOOK,
    ADD_TO_CART,
    CLEAN_CART, LOG_OUT,
    REMOVE_CURRENT_BOOK, REMOVE_FROM_CART, SET_AUTHENTICATION,
    UPDATE_USER_INFO
} from "../../common/Constants";

const initialState = {
    username: undefined,
    books: undefined,
    isUserAuthenticated: undefined,
    cart: []
};

function rootReducer(state = initialState, action) {

    if (action.type === UPDATE_USER_INFO) {
        return Object.assign({}, state, {
            username: action.payload.username,
            isUserAuthenticated: action.payload.isValid
        });
    }
    if (action.type === ADD_BOOKS) {
        return Object.assign({}, state, {
            books: action.payload,
        });
    }
    if (action.type === ADD_CURRENT_BOOK) {
        return Object.assign({}, state, {
            currentBook: action.payload
        })
    }
    if (action.type === ADD_TO_CART) {
        return Object.assign({}, state, {
            cart: state.cart.concat(action.payload)
        });
    }
    if (action.type === CLEAN_CART) {
        return Object.assign({}, state, {
            cart: []
        })
    }
    if (action.type === REMOVE_CURRENT_BOOK) {
        return Object.assign({}, state, {
            currentBook: undefined
        })
    }
    if (action.type === SET_AUTHENTICATION) {
        return Object.assign({}, state, {
            isUserAuthenticated: action.payload.isValid
        });
    }
    if (action.type === LOG_OUT) {
        return Object.assign({}, state, {
            isUserAuthenticated: false,
            username: undefined
        });
    }
    if (action.type === REMOVE_FROM_CART) {
        const index = state.cart.findIndex(book => book.id === action.payload);
        return Object.assign({}, state, {
            cart: [
                ...state.cart.slice(0, index),
                ...state.cart.slice(index + 1)
            ]
        });
    }
    return state;
}

export const reducers = combineReducers({
    form: formReducer,
    mainStore: rootReducer
});