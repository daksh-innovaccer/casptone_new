import { Link } from "react-router-dom"

const Header = (props) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <ul>
                    <li>
                        <Link to="/list">List</Link>
                    </li>


                    <li>
                        <button className="btn btn-primary" onClick={props.onLogoutClick}>Logout</button>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Header