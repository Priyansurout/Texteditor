import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navebar(props) {
  return (
    <>
            <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">{props.navbar_tex}</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="/">Action</a></li>
                        <li><a className="dropdown-item" href="/">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                    </ul>
                    </li>
                </ul>
                <button type="button" className="btn btn-success mx-2" onClick={() => {props.buttonColur("green")}} >GREEN</button>
                <button type="button" className="btn btn-danger mx-2" onClick={() => {props.buttonColur("red")}}>RED</button>
                <button type="button" className="btn btn-primary mx-2" onClick={() => {props.buttonColur("blue")}}>BLUE</button>
                <button type="button" className="btn btn-warning mx-2" onClick={() => {props.buttonColur("yellow")}}>Yellow</button>




                {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                <div className={`form-check form-switch text-${props.mode === 'light'?'dark' : 'light'}`}>
                {/* <div className={'form-check form-switch text-light'}> */}
                    <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
                    <label className="form-check-label mx-6" htmlFor="flexSwitchCheckDefault">Mode</label>
                </div>

                </div>
            </div>
            </nav>
      

      
    </>
  )
}

Navebar.propTypes = {title : PropTypes.string.isRequired,
                    navbar_tex : PropTypes.string.isRequired}

Navebar.defaultProps = {
    title : 'set the title here',
    navbar_tex : 'about us here'
}