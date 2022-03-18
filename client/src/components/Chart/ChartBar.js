
import './ChartBar.css'

const ChartBar = (props) => {

    const { label, value, maxValue } = props

    let fillBarHeight = '0%'

    if (maxValue > 0) {
        fillBarHeight = Math.round((value / maxValue) * 100) + '%'
    }
    const newValue = Math.round((value * 100) / 100)


    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{ height: fillBarHeight }}></div>
            </div>
            <div className='chart-bar__label'>{label} </div>
            <p style={{ fontSize: '10px', fontWeight: "bold", marginTop: "5px" }}>${newValue}</p>
            <p style={{ fontSize: '8px' }}>({fillBarHeight} YTD)</p>
        </div>
    )
}
export default ChartBar