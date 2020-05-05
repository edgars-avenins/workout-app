import React from 'react'
import { Link } from 'react-router-dom'


export const Home = ({ data }) => {
    return (
        <div className='row centerWebkit'>
            <div className='col-12 col-lg-4 '>
                <div className="card" style={{width: '18rem'}}>
                    <img src="/images/graph.svg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Table and graphs</h5>
                        <p className="card-text">Checkout all your workout data in a table or visualize it in graphs</p>
                        <Link to='/stats'>
                            {
                                data ?
                                    <button className='btn btn-primary w-100 h-100'>Table & Graphs</button>
                                    :
                                    <button className='btn btn-dark w-100 h-100' disabled>Do some exercises first</button>
                            }
                        </Link>                </div>
                </div>

            </div>
            <div className='col-12 col-lg-4 my-3 my-lg-0'>
                <div className="card" style={{width: '18rem'}}>
                    <img src="/images/exercise.svg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">New exercise</h5>
                        <p className="card-text">Start a new exercise or choose from one of your past exercises</p>
                        <Link to='/add'>
                            <button className='btn btn-primary w-100 h-100'>Lets add new exercises</button>
                        </Link>                </div>
                </div>

            </div>
            <div className='col-12 col-lg-4 '>
                <div className="card" style={{width: '18rem'}}>
                    <img src="/images/howitworks.svg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">How we save your data</h5>
                        <p className="card-text">Read more about how to save your data with us. No registration</p>
                        <Link to='/how'>
                            <button className='btn btn-primary w-100 h-100'>How this app works...</button>
                        </Link>                </div>
                </div>

            </div>
        </div>
    )
}