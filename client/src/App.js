import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from 'react-router-dom'
import { useSelector } from "react-redux"
import SignIn from './Components/Auth/SignIn'
import Signup from './Components/Auth/Signup'
import ListDetails from './Components/HomePage/ListDetails'
import Header from "./Components/Header/Header";
import Services from "./Services/Services"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import ForgotPassword from "./Components/Auth/ForgotPassword"
import Chat from "./Components/Chat.jsx"
function App() {
    const localdata = localStorage.getItem('token')
    const { isLogged } = useSelector((state) => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutHandler = () => {
        localStorage.removeItem('token')
        localStorage.removeItem("chat-app-current-user")
        Services.signout().then((res) => {
            //dispatch({ type: "logged", value: false })
            navigate("/signin")
        })

    }

    return (
        <div className="container mt-3 mb-3">
            {localdata ? <Header loggedState={isLogged} onLogoutClick={logoutHandler} /> : ""}
            {/* <h1>Hi There!</h1>
        <a href="/signin">SignIn</a> */}
            <Routes>
                <Route path='/' element={<SignIn />}></Route>
                <Route path='/signin' element={<SignIn />}></Route>
                <Route path="/list" element={<ListDetails />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                {/* <Route path="/signout"></Route> */}
                <Route path="/forgot-password" element={<ForgotPassword />}></Route>
                <Route path="/chat" element={<Chat />} />

            </Routes>
        </div>
    );
}

export default App;
