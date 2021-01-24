import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { choose } from "../reducers/chooseReducer";
import {getAll, init} from "../reducers/dataReducer";

const Chooser = () => {
    const dispatch = useDispatch()
    const lastUpdate = useSelector(state => state.data.updateTime)


    const prevent = (e) => {
        e.preventDefault()
        dispatch(choose(e.target.name))
        if (new Date()-new Date(lastUpdate*1000) >= 4 * 60000) {
            dispatch(getAll())
        }
    }

    return (
        <div>
            <span>
                <a href={"/gloves"} onClick={prevent} style={{"marginLeft": "10px"}} name={"gloves"}>Gloves</a>
                <a href={"/facemasks"} onClick={prevent} style={{"marginLeft": "10px"}} name={"facemasks"}>Facemasks</a>
                <a href={"/beanies"} onClick={prevent} style={{"marginLeft": "10px"}} name={"beanies"}>Beanies</a>
            </span>
        </div>
    )
}

export default Chooser