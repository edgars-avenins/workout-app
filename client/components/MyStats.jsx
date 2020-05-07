import React, { useState } from 'react'
import { prepData } from '../utils'

export const MyStats = ({data, name}) => {
    
    const [ chartData, setChartData ] = useState(JSON.stringify(prepData(data, null)))

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

    function handleClick(e){
        setChartData(JSON.stringify(prepData(data, e.target.id)))
    }

    return(
        <>
        <div className='graph mb-2'>
        <div className='shadow bg-white rounded'>
            <p className='text-muted'>*Click/Tap on a row to display only that row in the graph.</p>
        </div>
            <div className='shadow p-1 bg-white rounded justify-content-center'>
                <table className=''>
                    <thead className='bg-white'>
                        <tr>
                            <th colSpan={dates.length+1}>{name ? name : 'Anonymous'}</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        <tr>
                            <td className='dates exercises'></td>
                            {
                                dates.map((date, i) => <td key={i} className='dates'>{date}</td>)
                            }
                        </tr>
                        {
                            Object.keys(workoutData).map((item, i) => {
                                return <tr key={i} >
                                    <td className='exercises p-2' id={item} onClick={handleClick}>{item}</td>
                                    {
                                        dates.map((date, i) => {
                                            return <td key={i} id={item} onClick={handleClick}>
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
            </div>
        </div>
        {/* https://quickchart.io/documentation/ */}
        <div className='graph'>
            <img className='w-100 h-auto shadow p-2 mb-2 bg-white rounded' src={`https://quickchart.io/chart?c=${chartData}`}/>
        </div>
        </>
    )
}
