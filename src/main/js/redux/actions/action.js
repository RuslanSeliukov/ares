import {ADD_ARTICLE} from "../../common/constants";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
}