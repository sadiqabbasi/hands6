import React from 'react'
import {Link} from "react-router-dom"


const Navbar = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-dark " >
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav" >
        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        <Link className="nav-link" to="/student">Student</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
     
      </div>
    </div>
  </div>
</nav>








    </div>
  )
}

export default Navbar