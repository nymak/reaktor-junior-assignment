import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import chooseReducer from "./reducers/chooseReducer";
import thunk from "redux-thunk";
import dataReducer from "./reducers/dataReducer";
import pageReducer from "./reducers/pageReducer";

const reducer = combineReducers({
    data: dataReducer,
    choice: chooseReducer,
    page: pageReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store