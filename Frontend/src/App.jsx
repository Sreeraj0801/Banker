import {Routes, Route } from "react-router-dom"
import Login from "./Pages/Login"
import Register from './Pages/Register'
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Register/>}/>
      <Route exact path="/login" element={<Login/>}/>
    </Routes>
  )
}

export default App
