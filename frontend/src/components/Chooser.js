import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {choose} from "../reducers/chooseReducer";
import {getAll} from "../reducers/dataReducer";
import {change} from "../reducers/pageReducer";

// Component for choosing Category
const Chooser = ({product}) => {
    const dispatch = useDispatch()
    const lastUpdate = useSelector(state => state.data.updateTime)


    const prevent = (e) => {
        e.preventDefault()
        dispatch(choose(e.target.name))
        dispatch(change(1))
        if (new Date() - new Date(lastUpdate * 1000) >= 4 * 60000) {
            dispatch(getAll())
        }
    }

    return (
        <div>
            <span>
                <button onClick={prevent} style={{"marginLeft": "10px"}} name={"gloves"} className={product==='gloves' ? "button is-info is-active" : "button is-primary"}>Gloves</button>
                <button onClick={prevent} style={{"marginLeft": "10px"}} name={"facemasks"} className={product==='facemasks' ? "button is-info is-active" : "button is-primary"}>Facemasks</button>
                <button onClick={prevent} style={{"marginLeft": "10px", "marginBottom": "20px"}} name={"beanies"} className={product==='beanies' ? "button is-info is-active" : "button is-primary"}>Beanies</button>
            </span>
        </div>
    )
}

export default Chooser