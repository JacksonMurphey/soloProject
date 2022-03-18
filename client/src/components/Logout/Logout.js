import axios from "axios";
import { navigate } from '@reach/router'
import { LogoutBtn } from "./LogoutElements";

const Logout = (props) => {

    // const navigate = useNavigate()

    const { isNav } = props

    const signOut = (e) => {
        axios.post('http://localhost:8000/api/users/logout', {}, { withCredentials: true })
            //Since this is a post request, we must send something with the request. Since we have nothing to send, we can put an empty object in its place. 
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (


        <LogoutBtn isNav={isNav} onClick={signOut}>Sign Out</LogoutBtn>

    )
}
export default Logout