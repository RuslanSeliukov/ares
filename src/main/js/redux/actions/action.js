import {
    ADD_BOOKS,
    ADD_CURRENT_BOOK,
    ADD_TO_CART,
    UPDATE_USER_INFO,
    CLEAN_CART,
    REMOVE_CURRENT_BOOK, SET_AUTHENTICATION, LOG_OUT
} from "../../common/Constants";

export function updateUserInfo(payload) {
    return { type: UPDATE_USER_INFO, payload }
}

export function addBooks(payload) {
    return { type: ADD_BOOKS, payload }
}

export function addCurrentBook(payload) {
    return { type: ADD_CURRENT_BOOK, payload }
}

export function addToCart(payload) {
    return { type: ADD_TO_CART, payload }
}

export function cleanCart() {
    return { type: CLEAN_CART }
}

export function removeCurrentBook() {
    return { type: REMOVE_CURRENT_BOOK }
}

export function setAuthentication(payload) {
    return { type: SET_AUTHENTICATION, payload }
}

export function logOut() {
    return { type: LOG_OUT }
}