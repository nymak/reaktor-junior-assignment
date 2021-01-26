import './bulmaswatch.min.css';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Chooser from "./components/Chooser";
import Products from "./components/Products";
import {init, getAll} from "./reducers/dataReducer";

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const App = () => {
    const choice = useSelector(state => state.choice)
    const dispatch = useDispatch()

    /*useEffect(() => {
        dispatch(init())
    }, [dispatch])*/

    useEffect(() => {
        dispatch(getAll())
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
