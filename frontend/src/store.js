import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import facemaskReducer from "./reducers/facemaskReducer";
import beanieReducer from "./reducers/beanieReducer";
import gloveReducer from "./reducers/gloveReducer";
import chooseReducer from "./reducers/chooseReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
    gloves: gloveReducer,
    beanies: beanieReducer,
    facemasks: facemaskReducer,
    choice: chooseReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store