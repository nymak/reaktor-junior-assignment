import React from 'react'

const Chooser = () => {
    return (
        <div>
            <span>
                <a href={"/gloves"} style={{"margin-left": "10px"}}>Gloves</a>
                <a href={"/facemasks"} style={{"margin-left": "10px"}}>Facemasks</a>
                <a href={"/beanies"} style={{"margin-left": "10px"}}>Beanies</a>
            </span>
        </div>
    )
}

export default Chooser