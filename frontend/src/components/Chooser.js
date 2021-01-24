import React from 'react'
import { useDispatch } from "react-redux";
import { choose } from "../reducers/chooseReducer";

const Chooser = () => {
    const dispatch = useDispatch()

    const prevent = (e) => {
        e.preventDefault()
        dispatch(choose(e.target.name))
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