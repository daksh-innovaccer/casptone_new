import { useDispatch, useSelector } from 'react-redux'
import Service from '../../Services/Services'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import SocialLogin from "./SocialLogin"
import { Link } from 'react-router-dom'

const SignIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { email, password, isLogged } = useSelector((state) => state)
    useEffect(() => {
        const localData = localStorage.getItem("token")
        if (localData) {
            navigate("/list")
        }
    }, [])

    const emailChangeHandler = (event) => {
        dispatch({ type: 'email', value: event.target.value })
    }
    const passwordChangeHandler = (e) => {
        dispatch({ type: 'password', value: e.target.value })
    }
    const loginHandler = (event) => {
        event.preventDefault()

        Service.signin({ "email": email, "password": password })
            .then((res) => {
                if (res.status!=401) {
                    localStorage.setItem("token", res.data.token)
                    dispatch({ type: "logged", value: true })
                    navigate("/list")

                }
                else {
                    dispatch({ type: "logged", value: false })
                }
            })
    }

    return (
        <div className="container mt-3">
            {isLogged === false ?
                (<div className="alert alert-danger">
                    <strong>Error: </strong>Login Credentials Failed
                </div>)
                : ("")}
            <form onSubmit={loginHandler}>
                <div className="mb-3 mt-3">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter Email"
                        onChange={emailChangeHandler}
                    />
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Password"
                        className="form-control"
                        onChange={passwordChangeHandler}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <br />
                <br />
                <Link to="/forgot-password" className="text-danger">
                    {/* {" "} */}
                    Forgot Password
                </Link>

                <br />
                <br /><SocialLogin />
            </form>
            <hr className="my-4" />
            <p className="text-center">
                Don't have an account?<a href="/signup"> SignUp</a>
            </p>
        </div>
    )
}

export default SignIn