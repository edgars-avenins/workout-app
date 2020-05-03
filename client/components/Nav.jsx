import React from 'react'
import { Link } from 'react-router-dom'


export const Nav = ({ showAdd, workouts }) => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
            <a className="navbar-brand" href="#">Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                {   
                    workouts &&
                    <li className="nav-item active" data-toggle='collapse' data-target='.navbar-collapse'>
                        <Link className="nav-link" to='/stats'>Stats</Link>
                    </li>
                }
                {   showAdd &&
                    <li className="nav-item active"  data-toggle='collapse' data-target='.navbar-collapse'>
                        <Link className="nav-link" to='/add'>New</Link>
                    </li>
                }
                </ul>
                
            </div>
        </nav>
    )
}