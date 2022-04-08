import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {RestaurantShow} from "./components/RestaurantShow"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <RestaurantShow/>
    
    <h1>helo</h1>
    </div>
  )
}

export default App
