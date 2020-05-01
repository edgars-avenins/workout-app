import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import {MyStats} from './MyStats'
import AddWorkout from './AddWorkout';
import {Nav} from './Nav'

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
                    console.log('User exists, here is the data')
                    this.setState({workouts: snap.val(),showForm: false,showAdd: true})
                }else{
                    console.log('User doesn\'t exist!')
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
                <Route path='/' render={() => (
                    <Nav showAdd={this.state.showAdd} workouts={this.state.workouts}/>
                )}/>
            {
                this.state.showForm &&
                <form onSubmit={this.handleSubmit}>
                    <label>Your name:
                        <input type="text" name="name" onChange={this.handleChange}/>
                    </label>
                    <input type="submit"/>
                </form>
            }
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

