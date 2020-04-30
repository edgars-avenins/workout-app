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

        
        if(Object.keys(data).includes(this.state.exercise)){
            ref.set(Object.assign(data[this.state.exercise],{'29-04-20': Math.floor(Math.random()*100)}))
        }else{
            ref.set({
                '30-04-20': Math.floor(Math.random()*100)
            })
        }

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        let type1 = this.state.type1 || 'none'
        let type2 = this.state.type2 || 'none'
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Exercise
                    <input name='exercise' onChange={this.handleChange} type="text"/>
                </label>
                <br/>
                <label>Select exercise Type
                    <select onChange={this.handleChange} name="type1" id="">
                        <option value="">Choose...</option>
                        {
                            options.map((item, i) => {
                                if(type2 != item)
                                return <option key={i} value={item}>{item}</option>
                            })
                        }
                    </select>
                    <select onChange={this.handleChange} name="type2" id="">
                        <option value="">If necessary...</option>
                        {
                            options.map((item, i) => {
                                if(type1 != item)
                                return <option key={i} value={item}>{item}</option>
                            })
                        }
                    </select>
                </label>
                <input type="submit"/>
            </form>
        )
    }
}

export default AddWorkout