import './App.css';
import { useState, useEffect } from 'react'
import { get } from './services/gloves'

const App = () => {
  const [beanies, setBeanies] = useState({})
  const [facemasks, setFacemasks] = useState({})
  const [gloves, setGloves] = useState({})

    useEffect(() => {
        get().then(res =>
            console.log(res)
        )
    }, [])


  return (

      <div className="App">
          <p>Sivu</p>
      </div>
  )
}


export default App;
