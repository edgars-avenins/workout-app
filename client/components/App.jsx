import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import {MyStats} from './MyStats'
import AddWorkout from './AddWorkout';
import Nav from './Nav'
import { Home } from './Home';
import { How } from './How';

class App extends React.Component {
 
    state = {
        workouts: '',
        showStats: false,
        showForm: true,
        showAdd: false
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.firebase
            .database()
            .ref(`/${this.state.name}`)
            .on('value', snap => {
                if(snap.val() !== null){
                    this.setState({workouts: snap.val(),showForm: false,showAdd: true})
                }else{
                    this.setState({showForm: false, showAdd: true})
                }
                
            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    showStats = () => {
        this.setState({showStats: !this.state.showStats})
    }

    render(){
        return(
            <Router>
                <Nav showAdd={this.state.showAdd} workouts={this.state.workouts}/>
                <Route exact path='/' render={() => (
                        this.state.showForm ?
                        <form onSubmit={this.handleSubmit} className='shadow p-1 rounded'>
                            <div className='p-1 pb-2 mb-1 rounded'>
                                <h2 className='display-4'>User Name</h2>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={this.handleChange}
                                    />
                            </div>
                            <div className='rounded'>
                                <input
                                    type="submit"
                                    className='m-2 btn btn-primary'
                                />
                            </div>
                        </form>
                        :
                        <Home data={this.state.workouts}/>
                )}/>

                <Route exact path='/how' component={How}/>
                <Route path='/stats' render={ (props)=>(
                    <MyStats {...props} data={this.state.workouts} name={this.state.name}/>
                )}/>


                <Route path='/add' render={(props) => (
                    <AddWorkout {...props} firebase={this.props.firebase} data={this.state.workouts} name={this.state.name}/>
                )}/>


            </Router>
        )
    }
}

export default App

