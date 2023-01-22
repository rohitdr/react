import React from 'react'
import {Link} from 'react-router-dom';
export default function Navbar(props) {
  const mystyle={
    backgroundColor:props.Navcolor
  }
  return (
<>

      <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style = {mystyle}>
  <a className="navbar-brand" href="/">Financial Advisor</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/Acordian">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Product</a>
      </li>
    
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Services
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
 
    
    </ul>
  
  </div>
  <p className={` m-2 text-${props.color}`} >Dark Mode </p>
  <div className="form-check form-switch">

  <input className="form-check-input" type="checkbox" onClick={props.changeMode}role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.color}`} htmlFor="flexSwitchCheckDefault">Light Mode</label>
 
</div>
    
</nav>
</>
  )
}
