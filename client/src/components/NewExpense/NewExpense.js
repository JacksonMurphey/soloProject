import './NewExpense.css'
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import axios from 'axios';
import { navigate } from '@reach/router'

const NewExpense = (props) => {

    const { setExpensesList } = props
    const [errors, setErrors] = useState({})
    const [newExpense, setNewExpense] = useState({
        title: '',
        date: '',
        price: 0
    })

    const [isAddExpense, setIsAddExpense] = useState(true);

    const submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/expenses', newExpense, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                // setExpensesList([newExpense, ...expensesList])
                setExpensesList((prevExpenses) => {
                    return [newExpense, ...prevExpenses]
                })
                // setIsAddExpense(false)
                setNewExpense({
                    title: '',
                    date: '',
                    price: 0
                })

                // navigate(`/dashboard/expenses/${username}`)
            })
            .catch(err => {
                console.log(err.response.data)
                // console.log(err.response.data.verified)
                setErrors(err.response.data.error.errors)
                if (err.response.data.verified === false) {
                    navigate('/')
                    alert('You must be logged in to add expenses')
                }
            })
    }

    const startAddHandler = () => {
        setIsAddExpense(true);
    }
    const stopAddHandler = () => {
        setIsAddExpense(false);
    }

    return (

        <div id='form' className='new-expense'>
            {!isAddExpense ?
                <button onClick={startAddHandler} style={{ alignContent: 'center' }}>Add Expenses</button>
                :
                <ExpenseForm
                    submitHandler={submitHandler}
                    expense={newExpense}
                    setExpense={setNewExpense}
                    errors={errors}
                    onCancel={stopAddHandler}
                />}
        </div>
    )

}
export default NewExpense