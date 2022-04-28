import { useNavigate } from "react-router-dom"
import Services from "../../Services/Services"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

const Signup = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { name, email, password } = useSelector((state) => state)

    const nameChangeHandler = (e) => {
        dispatch({ type: "name", value: e.target.value })
    }

    const emailChangeHandler = (e) => {
        dispatch({ type: "email", value: e.target.value })
    }

    const passwordChangeHandler = (e) => {
        dispatch({ type: "password", value: e.target.value })
    }


    const signupHandler = (e) => {
        e.preventDefault()
        const data = {
            name: name,
            email: email,
            password: password
        }
        Services.signup(data).then((res) => {
            if (res.data !== '') {
                navigate('/signin')
            }

        })

    }
    return (
        <div className="container mt-3">
            <form onSubmit={signupHandler}>
                <div className="mb-3 mt-3">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Enter your name"
                        onChange={nameChangeHandler} />
                </div>
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
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
            <hr className="my-4" />
            <p className="text-center">
                Already have an account? {'  '}
                <a href="/signin">Sign In</a>
            </p>
        </div>
    )
}

export default Signup