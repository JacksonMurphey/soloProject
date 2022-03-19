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
    const fifteenPercent = Math.round(.15 * sumOfDataPointArr)

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
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <p style={{ color: "#fff", marginTop: "12px" }}>
                    Total Expenses for this Year: <span style={{ color: "red" }}>${sumOfDataPointArr}</span>
                </p>
                <p style={{ display: "block", color: "#fff", marginTop: "12px", marginLeft: "20%" }}>
                    Most Spent in one Month: <span style={{ color: "red" }}>${totalMaxVal}</span>
                </p>

            </div>
            <p style={{ color: "#fff", marginTop: "13px", textAlign: "center", color: "#b2aefb" }}>
                If you saved 15%, instead of spending it, you would have: <span style={{ color: "lightgreen" }}>${fifteenPercent}.00</span>
            </p>
        </>
    )
}
export default Chart