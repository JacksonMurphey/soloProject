import ChartBar from "./ChartBar"
import './Chart.css'




const Chart = (props) => {

    const { dataPoints } = props

    const dataPointVals = dataPoints.map((dataPoint) => {
        let dPV = dataPoint.value
        let newDPV = parseInt(dPV, 10)
        return newDPV
    })// returns array of numbers.
    const totalMaxVal = Math.max(...dataPointVals) //returns highest number in array
    console.log(dataPointVals)
    console.log("totalMaxVal: ", totalMaxVal)

    let sumOfDataPointArr = 0
    for (let i in dataPointVals) {
        sumOfDataPointArr += dataPointVals[i] //returns sum of all vals from array.
    }
    console.log(sumOfDataPointArr)

    return (
        <>
            <div className="chart">
                {dataPoints.map((dataPoint, index) => (
                    <ChartBar
                        key={index}
                        value={dataPoint.value}
                        maxValue={sumOfDataPointArr}
                        label={dataPoint.label}
                    />
                ))}


            </div>
            <div>
                <p style={{ color: "#fff", marginTop: "12px", fontWeight: "bold" }}>
                    Total Expenses for this Year: ${sumOfDataPointArr}
                </p>
                <p style={{ color: "#fff", marginTop: "10px" }}>
                    Most Spent in one Month: ${totalMaxVal}
                </p>
            </div>
        </>
    )
}
export default Chart