import { reducer as formReducer } from 'redux-form'
import {combineReducers} from "redux";
import {ADD_USERNAME} from "../../common/Constants";

const initialState = {
    username: undefined
};

function rootReducer(state = initialState, action) {

    if (action.type === ADD_USERNAME) {
        return Object.assign({}, state, {
            username: action.payload,
            isUserAuthenticated: true
        });
    }
    return state;

}

export const reducers = combineReducers({
    form: formReducer,
    mainStore: rootReducer
});