import React from 'react'


export const How = () => {

    return (
        <div id='how' className='text-center mb-2 shadow p-1 rounded'>
            <h1>Try this to see how it looks like with more data.</h1>
                <p className='shadow p-2 m-2 bg-white rounded'>Return to home page and type <strong>' Anonymous '</strong> as user name, in case you already entered a user name - refresh home page to enter user name again and head to <strong>' <i className="fas fa-chart-bar"></i> Table & Graphs '</strong> for a preview.</p>
            <h1>How we save your data?</h1>
                <p className='shadow p-2 m-2 bg-white rounded'>Your data is saved based on your user name. The more <strong>unique</strong> it is the greater the chance that no one else is going to guess it.</p>
                <p className='shadow p-2 m-2 bg-white rounded'>In progress - option to save your data based on a cookie that is used to recall your information.</p>
            <h1>How adding new exercises works?</h1>
                <p className='shadow p-2 m-2 bg-white rounded'>When in <strong>' <i className="fas fa-plus"></i> New Exercise '</strong> page name your exercise, choose the type of the exercise and add the amount. As this is only for you it's up to you to decide what <strong>' 80 '</strong> means under type <strong>' Time '</strong> as it can be both seconds and minutes.</p>
                <p className='shadow p-2 m-2 bg-white rounded'>In progress - adding auto suggestions of past exercises when starting a new exercise</p>
            <h1>How to make sense of your exercise data?</h1>
                <p className='shadow p-2 m-2 bg-white rounded'>Once in the <strong>' <i className="fas fa-chart-bar"></i> Table & Graphs '</strong> page by default the graph will display all of your exercises but you can choose a specific one by clicking/tapping on the corresponding row.</p>
                <p className='shadow p-2 m-2 bg-white rounded'>In progress - adding the option to display exercises by type e.g. 'Repetitions, Time, Distance' in the graph.</p>
        </div>
    )
}