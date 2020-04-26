import { createStore } from 'redux'
import { saveState, loadState} from './localStore'
import { reducers} from "../reducers/reducers";

const persistedState = loadState();

const store = createStore(
    reducers,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    saveState(store.getState());
});

export default store;