import { navigate } from "@reach/router";
import { FcDeleteRow } from "react-icons/fc";
import axios from "axios";


const DeleteExpense = (props) => {

    const { id, expensesList, setExpensesList } = props

    const deleteFilter = id => {
        const newExpList = expensesList.filter((expense, index) => expense._id != id)
        setExpensesList(newExpList)
    }


    const deleteHandler = e => {
        axios.delete(`http://localhost:8000/api/expenses/${id}`)
            .then(res => {
                console.log(res.data)
                deleteFilter(id)
            })
            .catch(err => console.log(err))
    }

    return (

        <div>
            <button style={{ fontSize: "25px", cursor: "pointer", background: "#4b4b4b", border: "none" }} onClick={deleteHandler}><FcDeleteRow />
            </button>
        </div>
    )
}
export default DeleteExpense