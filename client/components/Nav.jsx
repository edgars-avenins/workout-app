import React from 'react'
import { Link } from 'react-router-dom'


export const Nav = ({ showAdd, workouts }) => {

    return (

                <ul className="navbar navbar-nav flex-row mr-auto bg-light fixed-top">
                    <li className='nav-item'>
                        <Link className="navbar-brand border px-1" to='/'><i className="fas fa-dumbbell fa-3x"></i></Link>

                    </li>
                {   
                    workouts &&
                    <li className='nav-item' >
                        <Link className="nav-link" to='/stats'><i className="fas fa-chart-bar fa-2x"></i></Link>
                    </li>
                }
                {   showAdd &&
                    <li className="nav-item" >
                        <Link className="nav-link" to='/add'><i className="fas fa-plus fa-2x"></i></Link>
                    </li>
                }
                    <li className="nav-item" >
                        <Link className="nav-link" to='/how'><i className="fas fa-question fa-2x"></i></Link>
                    </li>
                </ul>

    )
}