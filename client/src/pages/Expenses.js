import axios from "axios";
import { useEffect, useState } from "react";
// import DashNav from "../components/NavBar/DashNav";
// import DashSide from "../components/SideBar/DashSide";
// import DashBody from "../components/BodySection/DashBody";
// import Footer from "../components/Footer/Footer";
import ExpenseItem from "../components/Expenses/ExpenseItem";
import NewExpense from "../components/NewExpense/NewExpense";
import ExpenseFilter from '../components/Expenses/ExpenseFilter'
import '../components/Expenses/Expenses.css'
import ExpenseChart from "../components/Expenses/ExpenseChart";
import DashSide from "../components/SideBar/DashSide";
import DashNav from "../components/NavBar/DashNav";
import Footer from "../components/Footer/Footer";
import { AltIntroContainer, IntroContainer } from "../components/IntroSection/IntroElements";
import ExpenseNav from "../components/NavBar/ExpenseNav";
import ExpSide from "../components/SideBar/ExpSide";


const Expenses = (props) => {

    const { username } = props
    const [expensesList, setExpensesList] = useState([])

    const [filterYear, setFilterYear] = useState("2022");

    const [viewExpenses, setViewExpenses] = useState(false)

    const filterHandler = (selectedYear) => {
        setFilterYear(selectedYear)
    }

    //Once I start Filtering by year, all of a sudden my expense date for newly added items is 1 day off. 
    const filteredExpenses = expensesList.filter(expense => {
        const year = new Date(expense.date).getFullYear().toString()
        return year === filterYear
    })


    // const [isOpen, setIsOpen] = useState(false)

    // const clickToggle = () => {
    //     setIsOpen(!isOpen)
    // }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/userexpenses/${username}`, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                setExpensesList(res.data)

            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const openViewExpenses = () => {
        setViewExpenses(true)
    }
    const closeViewExpenses = () => {
        setViewExpenses(false)
    }

    const [isOpen, setIsOpen] = useState(false)

    const clickToggle = () => {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <ExpSide isOpen={isOpen} clickToggle={clickToggle} username={username} />
            {/* <DashNav clickToggle={clickToggle} username={username} /> */}
            <ExpenseNav clickToggle={clickToggle} username={username} />

            <div style={{ background: "#010606", paddingBottom: "1px" }}>
                <div className="expenses">

                    <ExpenseFilter
                        filterYear={filterYear}
                        filterHandler={filterHandler} />
                    <ExpenseChart
                        expensesList={filteredExpenses} />
                    <NewExpense
                        username={username}
                        setExpensesList={setExpensesList}
                        expensesList={expensesList} />

                    {!viewExpenses ?
                        <button id="newBtn" onClick={openViewExpenses} >View Expenses</button>
                        :
                        <ExpenseItem
                            expensesList={filteredExpenses} setExpensesList={setExpensesList} onClose={closeViewExpenses} />
                    }
                </div>
            </div>

            <Footer />

        </>
    )

}

export default Expenses;
