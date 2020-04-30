import React from 'react'

import {MyStats} from './MyStats'
import AddWorkout from './AddWorkout';

class App extends React.Component {
    

    componentDidMount(){
        this.props.firebase
            .database()
            .ref('/edgars')
            .once('value').then(data=>{
                    this.setState(data.val())
                });
        
        // this.props.firebase
        //     .database()
        //     .ref('/workouts/edgars/')
        //     .once('value')
        //     .then(data => console.log(data.exists()))
    }

    render(){
        return(
            <>
            <h1>Time to flex those muscles baby!</h1>
            <MyStats data={this.state}/>
            <AddWorkout firebase={this.props.firebase} data={this.state}/>
            </>
        )
    }
}

export default App

