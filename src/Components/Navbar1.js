import React from 'react';


function Navbar1() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
    <div className="container-fluid">
    
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">$KZO-Token</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">RealLaunch</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">NFTs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Staking</a>
          </li>
         
          <li className="nav-item">
          <a className="nav-link" href="#">Resources</a>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="#">Open App</a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  )
}

export default Navbar1