import { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import { FcDeleteRow } from 'react-icons/fc'
import DeleteExpense from './DeleteExpense'


const ExpenseItem = (props) => {

    const { expensesList, setExpensesList, onClose } = props


    return (
        <div>
            <button id="newBtn" type='button' onClick={onClose}>Close Expenses</button>
            {expensesList.length === 0 && <p style={{ color: "#fff", textAlign: "center", marginTop: "50px" }}>No Expenses Found</p>}
            {
                expensesList.map((expense, index) => (
                    <div key={index} className='expense-item'>
                        <ExpenseDate date={expense.date} />
                        <div className='expense-item__description'>
                            <h2>{expense.title}</h2>
                            {/* <div><FcDeleteRow style={{ fontSize: "25px" }} /></div> */}
                            <DeleteExpense id={expense._id} expensesList={expensesList} setExpensesList={setExpensesList} />
                            <div className='expense-item__price'>${expense.price}</div>

                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default ExpenseItem