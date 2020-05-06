import React from 'react'
import { prepData } from '../utils'

export const MyStats = ({data, name}) => {
    
    let workoutData = data || []
    let dates = []
    let chartData = JSON.stringify(prepData(data, null))

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
        chartData = prepData(data, e.target.id)
        console.log(chartData)
        //use react hooks to put chartData in state and get a re-render
    }

    return(
        <>
        <div className='graph mb-2'>
            <div className='shadow p-1 bg-white rounded'>
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
                                    <td className='exercises'>{item}</td>
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
            <img className='w-100 shadow p-2 mb-2 bg-white rounded' src={`https://quickchart.io/chart?c=${chartData}`}/>
        </div>
        </>
    )
}
