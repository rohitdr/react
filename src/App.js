
import './App.css';

import React, {useState} from 'react'
import Navbar from './Components/Navbar';
import Acordian from './Components/Acordian';
import Alert from './Components/Alert';




import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
const[mode, setMode]= useState("light")
const[text, setText]=useState("light Mode")
const[color, setColor]= useState("dark")
const[alert, setAlert]=useState(null)
const[Navcolor, NavsetColor]=useState("#96c2db")
const showAlert =(msg, type)=>{
setAlert({
  message : msg,
 type : type,},
 setTimeout(()=>{
    setAlert(null)
 }, 1500)

 


)
}
const changeMode=()=>{
  if(mode === 'light'){
setText("light Mode")
setColor("white")
setMode("dark")
document.body.style.backgroundColor = "grey"
document.body.style.color = "white"
showAlert("The dark mode has been activated","success" )
document.title='dark Mode'
NavsetColor("black")
  }
  else{
    setText("dark Mode")
    setColor("dark")
    setMode("light")
  NavsetColor("#96c2db")
    document.body.style.backgroundColor = "white"
    showAlert("The light mode has been activated","success")
    document.title='light mode'
  }
}
  return (
  <>

<BrowserRouter>

<Navbar mode ={mode} text={text} Navcolor = {Navcolor} changeMode={changeMode} color ={color}/>
<Alert alert={alert} />

<Routes>
< Route path ='/Acordian' element = {<Acordian  color ={color} />}/>

</Routes>
</BrowserRouter>

</>
  );
}

export default App;
