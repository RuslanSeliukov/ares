import { ADD_USERNAME } from "../../common/Constants";

export function addUserInfo(payload) {
    return { type: ADD_USERNAME, payload }
}