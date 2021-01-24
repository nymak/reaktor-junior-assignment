import './App.css';
import React, { useEffect } from 'react'
import { initGloves } from "./reducers/gloveReducer";
import { useDispatch, useSelector } from "react-redux";
import Chooser from "./components/Chooser";
import Products from "./components/Products";
import {initFacemasks} from "./reducers/facemaskReducer";
import {initBeanies} from "./reducers/beanieReducer";

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const App = () => {
    const choice = useSelector(state => state.choice)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initGloves())
        dispatch(initFacemasks())
        dispatch(initBeanies())
    }, [dispatch])

    return (
      <div>
        <h1>Product tracker</h1>
        <Chooser />
        <h2>{capitalize(choice)}</h2>
        <Products product={choice} />
      </div>
    )

}


export default App;
