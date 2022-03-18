import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { navigate } from '@reach/router';
import ExpenseFilter from '../Expenses/ExpenseFilter';
import { DashContainer, BodyWrapper } from './BodyElements';
import '../BodySection/DashBody.css'





const DashBody = (props) => {

    const { userExpenses } = props
    const [filterYear, setFilterYear] = useState('2022')
    //Setting default year of 2022 since 3-1-22 earliest a date related to expenses can be. 

    const filterHandler = (year) => {
        setFilterYear(year)
    }

    // const date = new Date(userExpenses[0].date)
    // console.log(date.getFullYear().toString())




    return (
        <>
            <div style={{ marginTop: "200px" }}>


                {userExpenses > 0 &&
                    userExpenses.map((expense, index) => (
                        <div className='expense-item ' key={index}>
                            <div>{expense.date}</div>
                            <div className='expense-item__description'>
                                <h2>{expense.title}</h2>
                                <div className='expense-item__price'>{expense.price}</div>
                            </div>
                        </div>
                    ))

                }
            </div>


        </>
    )
}
export default DashBody