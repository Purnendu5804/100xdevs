import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter , Routes , Route} from "react-router-dom";
import AddCard from "./components/AddCard";
import Home from "./components/Home";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/create' element = {<AddCard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
