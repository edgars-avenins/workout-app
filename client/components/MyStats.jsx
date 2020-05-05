import React from 'react'

export const MyStats = ({data, name}) => {
    
    let workoutData = data || []
    let dates = []
    if(data){
        Object.keys(data).map(item => {
            return Object.keys(data[item]).map(el => {
                if(!dates.includes(el)) dates.push(el)
                return
            })
        })

        let unSorted = dates.map(item => {
            return item.split('-')
        })

        let sorted = unSorted.map((item, i) => {
            return Date.UTC(item[2], item[1]-1, item[0])
        }).sort()

        dates = sorted.map(item => {

            return new Date(Number(item)).toLocaleDateString('nl')        
        })        
        
    }

    
    return(
        <table className='table bg-white'>
            <thead>
                <tr>
                    <th colSpan={dates.length+1}>{name ? name : 'Anonymous'}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td id='zero' className='dates exercises'></td>
                    {
                        dates.map((date, i) => <td key={i} className='dates'>{date}</td>)
                    }
                </tr>
                {
                    Object.keys(workoutData).map((item, i) => {
                        return <tr key={i} >
                            <td className='exercises'>{item}</td>
                            {
                                dates.map((date, i) => {
                                    return <td key={i}>
                                        {
                                            workoutData[item][date] ? 
                                            workoutData[item][date] :
                                            ''
                                        }
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
