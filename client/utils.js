export const options = ['Repetitions', 'Time', 'Distance']

export function prepData(data, key){
    let dataSetLabels = Object.keys(data)
    let barLabels = []

    dataSetLabels.map(item => {
        return Object.keys(data[key ? key : item]).map(el => {
            if(!barLabels.includes(el)) barLabels.push(el)
        return
        })
    })    

    let unSorted = barLabels.map(item => {
        return item.split('-')
    })

    let sorted = unSorted.map((item, i) => {
        return Date.UTC(item[2], item[1]-1, item[0])
    }).sort()

    barLabels = sorted.map(item => {
        return new Date(Number(item)).toLocaleDateString('nl')        
    })  

    

    // {
    //     type: 'bar',
    //     data: {
    //         labels: barLabels,
    //         datasets:[
    //             {
    //                 dataSetLabels[0],
    //                 data[dataSetLabels[0]][barLabels] ? '' : 0
    //             }
    //         ]
    //     }
    // }

    let dataSetData = []

    let dataSet = {
        type: 'bar',
        data: {
            labels: barLabels,
            datasets:[]
        }
    }

    dataSetLabels.map(exercise => {
        barLabels.map(date => {
            if(data[key ? key : exercise][date]) dataSetData.push(data[key ? key : exercise][date])
            else dataSetData.push(0)
        })
        if(key){
            if(dataSet.data.datasets.length === 0){
                dataSet.data.datasets.push({
                    label: key,
                    data: dataSetData
                })
            }
        }else{
            dataSet.data.datasets.push({
                label: exercise,
                data: dataSetData
            })
        }
        dataSetData = []
    })
    
    return dataSet
}

/*
{   type:'bar', 
    data: { 
            labels: ['January', 'February', 'March', 'April', 'May'], 
            datasets: [
                { 
                    label: 'Dogs', 
                    data: [50, 60, 70, 180, 190] 
                }, { 
                    label: 'Cats', 
                    data: [100, 200, 300, 400, 500] 
                }
            ] 
        } 
    }
*/