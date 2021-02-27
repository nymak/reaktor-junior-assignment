import './bulmaswatch.min.css';
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import Chooser from "./components/Chooser";
import Products from "./components/Products";
import {getAll} from "./reducers/dataReducer";

const App = () => {
    const choice = useSelector(state => state.choice)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAll())
    }, [dispatch])

    return (
        <div>
            <h1 className={'title is-1'}>Product tracker</h1>
            <Chooser product={choice}/>
            <Products product={choice}/>
        </div>
    )

}


export default App;
