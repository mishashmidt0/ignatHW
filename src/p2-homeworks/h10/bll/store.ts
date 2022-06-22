import {loadingReducer} from './loadingReducer'
import {applyMiddleware, combineReducers, createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";
import {requestReducer} from "../../h13/bll/requestReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
    req: requestReducer,

})

const store = createStore(reducers, applyMiddleware(thunk))

export default store

export type storeType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
