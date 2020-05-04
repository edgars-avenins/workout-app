import React from 'react'

import {options} from '../utils'

class AddWorkout extends React.Component {

    state = {

    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { data, name } = this.props
        
        const fb = this.props.firebase
        const ref = fb.database().ref(`/${name}/${this.state.exercise}`)

        let value = this.state.amount
        if(this.state.type == 'Repetitions') value += 'x'
        else if(this.state.type == 'Time') value += 's'
        else if(this.state.type == 'Distance') value += 'km'
        
        if(Object.keys(data).includes(this.state.exercise)){
            ref.set(Object.assign(data[this.state.exercise],{[new Date().toLocaleDateString('nl')]: value}))
        }else{
            ref.set({
                [new Date().toLocaleDateString('nl')] : value
            })
        }

    }

    handleChange = (e) => {
        if(this.state[e.target.name]){

        }
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Exercise
                    <input name='exercise' onChange={this.handleChange} type="text"/>
                </label>
                <br/>
                <label>Select exercise Type

                    <br/>

                    <select onChange={this.handleChange} name="type" id="">
                        <option value="">Choose...</option>
                        {
                            options.map((item, i) => {
                                return <option key={i} value={item}>{item}</option>
                            })
                        }
                    </select>
                    <input type="text" name='amount' onChange={this.handleChange} placeholder="amount"/>

                </label>
                <br/>
                <input type="submit"/>
            </form>
        )
    }
}

export default AddWorkout