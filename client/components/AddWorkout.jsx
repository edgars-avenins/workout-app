import React from 'react'

import {options} from '../utils'

class AddWorkout extends React.Component {

    state = {
        amount: '',
        exercise: '',
        type: ''
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

        this.setState({amount: '', exercise: '', type: ''})
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
                <div className='shadow p-1 mb-2 bg-white rounded'>
                    <h2 className='display-4'>Exercise</h2>
                        <input
                            type='text'
                            name='exercise'
                            value={this.state.exercise}
                            onChange={this.handleChange}
                            />
                </div>
                <div className='shadow p-1 mb-2 bg-white rounded'>
                    <h2 className='display-4'>Exercise Type</h2>
                        <select className='h2' onChange={this.handleChange} name="type" value={this.state.type}>
                            <option className='h6' value="">Choose...</option>
                            {
                                options.map((item, i) => {
                                    return <option className='h6' key={i} value={item}>{item}</option>
                                })
                            }
                        </select>
                </div>
                <div className='shadow p-1 bg-white rounded'>
                    <input
                        type='text'
                        name='amount'
                        placeholder="amount"
                        value={this.state.amount}
                        onChange={this.handleChange}
                        />

                    <input
                        type="submit"
                        className='btn btn-primary my-2'
                        />
                </div>
            </form>
        )
    }
}

export default AddWorkout