import React from "react"
import {Route,Routes } from "react-router-dom"
import Home from "./Components/Home"
import SingleMovie from "./Components/SingleMovie"
import Error from "./Components/Error"
import './App.css'
function App() {
  return (
    <>
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="movie/:id" element={<SingleMovie/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    
    </>
  )
}

export default App
