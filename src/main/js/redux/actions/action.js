import {ADD_BOOKS, ADD_CURRENT_BOOK, ADD_TO_CART, ADD_USERNAME, CLEAN_CART} from "../../common/Constants";

export function addUserInfo(payload) {
    return { type: ADD_USERNAME, payload }
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