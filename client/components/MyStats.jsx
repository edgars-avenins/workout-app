import React from 'react'

export const MyStats = ({data}) => {
    
    let workoutData = data || []
    
    return(
        <table>
            <thead>
                <tr>
                    <th colSpan='4'>{name ? name : 'Zanda'}</th>
                </tr>
            </thead>
            <tbody>
                {
                    Object.keys(workoutData).map((item, i) => {
                        return <tr key={i}>
                            <td>{item}</td>
                            {
                                Object.keys(workoutData[item]).map((el, i) => {
                                    return <td key={i}>
                                        {workoutData[item][el]}
                                    </td>
                                })
                            }
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}