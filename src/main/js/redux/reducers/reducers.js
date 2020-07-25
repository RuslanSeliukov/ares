import { reducer as formReducer } from 'redux-form'
import {combineReducers} from "redux";
import {ADD_BOOKS, ADD_CURRENT_BOOK, ADD_TO_CART, ADD_USERNAME, CLEAN_CART} from "../../common/Constants";

const initialState = {
    username: undefined,
    books: undefined,
    cart: []
};

function rootReducer(state = initialState, action) {

    if (action.type === ADD_USERNAME) {
        return Object.assign({}, state, {
            username: action.payload,
            isUserAuthenticated: true
        });
    }
    if (action.type === ADD_BOOKS) {
        return Object.assign({}, state, {
            books: action.payload,
            isUserAuthenticated: true
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
    return state;
}

export const reducers = combineReducers({
    form: formReducer,
    mainStore: rootReducer
});