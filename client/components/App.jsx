import React from 'react'

import {MyStats} from './MyStats'
import AddWorkout from './AddWorkout';

class App extends React.Component {
 
    state = {
        workouts: '',
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
                    this.setState({workouts: snap.val(),showAdd: true})
                }else{
                    console.log('User doesn\'t exist!')
                    this.setState({showAdd: true})
                }
                
            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <label>Your name:
                    <input type="text" name="name" onChange={this.handleChange}/>
                </label>
                <input type="submit"/>
            </form>
            {
                (this.state.workouts && this.state.showAdd)  && 
                <>
                    <h1>Time to flex those muscles baby!</h1>
                    <MyStats data={this.state.workouts} name={this.state.name}/>
                </>
            }
            {
                this.state.showAdd &&
                <AddWorkout firebase={this.props.firebase} data={this.state.workouts} name={this.state.name}/>
            }
            </>
        )
    }
}

export default App

