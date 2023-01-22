
import './App.css';

import React, {useState} from 'react'
import Navbar from './Components/Navbar';
import Acordian from './Components/Acordian';
import Alert from './Components/Alert';

function App() {
const[mode, setMode]= useState("light")
const[text, setText]=useState("light Mode")
const[color, setColor]= useState("dark")
const[alert, setAlert]=useState(null)
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
  }
  else{
    setText("dark Mode")
    setColor("dark")
    setMode("light")
  
    document.body.style.backgroundColor = "white"
    showAlert("The light mode has been activated","success")
  }
}
  return (
  
<>



<Navbar mode ={mode} text={text} changeMode={changeMode} color ={color}/>
<Alert alert={alert} />
<Acordian  color ={color} />
</>
  
  );
}

export default App;
