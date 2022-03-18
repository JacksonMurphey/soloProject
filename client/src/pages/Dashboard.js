import { useEffect, useState } from 'react'
import { navigate } from '@reach/router'
import axios from 'axios'
import DashNav from '../components/NavBar/DashNav'
import DashSide from '../components/SideBar/DashSide'
import DashIntro from '../components/IntroSection/DashIntro'
import Footer from '../components/Footer/Footer'
import ExpenseForm from '../components/NewExpense/ExpenseForm'
import NewExpense from '../components/NewExpense/NewExpense'

// import { useParams } from 'react-router'
// import SideBar from '../components/SideBar/SideBar'
// import { Link } from '@reach/router'
// import { useNavigate } from 'react-router-dom'
// import IntroSection from '../components/IntroSection/IntroSection'
// import DashBody from '../components/BodySection/DashBody'



const Dashboard = (props) => {

    // const { username } = useParams()
    // const navigate = useNavigate()

    const [user, setUser] = useState({})


    const [isOpen, setIsOpen] = useState(false)
    // const [isData, setIsData] = useState(true)


    const clickToggle = () => {
        setIsOpen(!isOpen)
    }



    useEffect(() => {
        axios.get('http://localhost:8000/api/users/security', { withCredentials: true })
            .then(res => {
                console.log(res.data)
                setUser(res.data)
            })
            .catch(err => {
                console.log(err)
                navigate('/')
                alert('You must be Registered and Logged In')
            })
    }, [])


    // const username = user.username
    // useEffect(() => {
    //     axios.get(`http://localhost:8000/api/userexpenses/${username}`, { withCredentials: true })
    //         .then(res => {
    //             console.log(res.data)
    //             setUserExpenses(res.data)
    //             setIsData(true)

    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }, [user])



    return (
        <>
            <div>
                <DashSide isOpen={isOpen} clickToggle={clickToggle} username={user.username} />
                <DashNav clickToggle={clickToggle} username={user.username} />
                <DashIntro />
                {/* <NewExpense username={user.username} /> */}
                <Footer />
            </div>
        </>
    )
}

export default Dashboard