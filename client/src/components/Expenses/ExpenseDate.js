import './ExpenseDate.css'

const ExpenseDate = (props) => {

    const { date } = props

    // console.log(date)
    const month = new Date(date)
    const day = new Date(date)
    const year = new Date(date)

    const newMonth = month.toLocaleString('en-US', { month: 'long' })
    const newDay = day.toLocaleString('en-US', { day: '2-digit' })

    {/* <div>{month.getMonth() + 1}</div> */ }
    {/* <div>{day.getDay() + 6}</div> */ }

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{newMonth}</div>
            <div className='expense-date__day'>{newDay}</div>
            <div className='expense-date__year'>{year.getFullYear()}</div>
        </div>
    )
}
export default ExpenseDate