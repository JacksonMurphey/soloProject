import './ExpenseForm.css'


const ExpenseForm = (props) => {

    const { submitHandler, expense, setExpense, onCancel, errors } = props

    const changeHandler = e => {
        let newExp = { ...expense }
        newExp[e.target.name] = e.target.value
        setExpense(newExp)
    }


    return (
        <form onSubmit={submitHandler}>
            {errors.title && <span style={{ color: "red" }}>All Fields are Required</span>}
            {errors.price && <span style={{ color: "red" }}>All Fields are Required</span>}
            {errors.date && <span style={{ color: "red" }}>All Fields are Required</span>}

            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label >Title</label>
                    <input type="text" name='title' value={expense.title} onChange={changeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label >Amount</label>
                    <input type='number' step='0.01' name='price' value={expense.price} onChange={changeHandler} />
                </div>

                <div className='new-expense__control'>
                    <label >Date of Expense</label>
                    <input type='date' value={expense.date} onChange={changeHandler} name='date' />
                </div>

                <div className='new-expense__actions'>
                    <button type='button' onClick={onCancel}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}
export default ExpenseForm