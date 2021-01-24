import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import chooseReducer from "./reducers/chooseReducer";
import thunk from "redux-thunk";
import dataReducer from "./reducers/dataReducer";

const reducer = combineReducers({
    data: dataReducer,
    choice: chooseReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store