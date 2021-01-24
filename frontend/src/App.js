import './App.css';
import React, { useEffect } from 'react'
import { initGloves } from "./reducers/gloveReducer";
import { useDispatch } from "react-redux";
import Gloves from "./components/Gloves";
import Chooser from "./components/Chooser";


const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initGloves())
    }, [dispatch])


  return (
      <div>
          <h1>Product tracker</h1>
          <Chooser />
          <h2>Gloves</h2>
          <Gloves />
      </div>
  )
}


export default App;
