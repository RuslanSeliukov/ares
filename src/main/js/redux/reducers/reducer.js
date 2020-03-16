import {UPDATE_ADD_BOOK_FORM} from "../../common/constants";

const initialState = {
    formState: []
};

function rootReducer(state = initialState, action) {
    if (action.type === UPDATE_ADD_BOOK_FORM) {
        return Object.assign({}, state, {
            formState: state.formState.concat(action.payload)
        });
    }
    return state;
} export default rootReducer;