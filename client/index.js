import React from 'react'

import App from './components/App'
import { render } from 'react-dom'

import firebase from 'firebase'
import {firebaseConfig} from './config'



document.addEventListener('DOMContentLoaded', () => {
    render(
        <App firebase={firebase.initializeApp(firebaseConfig)}/>,
        document.getElementById('app')
    )
})
/** Wrokout tracker
 * As a user I would like to
 *  add workout (abs, running, pushups)
 *      choose reps or timer or input time spent
 *          save(push to firebase)
 *  view past workouts(get from firebase)
 *  
 *  multi user support(for each user saving I ask for name and
 *                     set a token on their machine and use this token
 *                      to identify their data @ firebase)
 * 
 */