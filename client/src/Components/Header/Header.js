import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import './Header.css'

const Header = (props) => {
    const navigate = useNavigate()
    const chatHandler=()=>{
        navigate('/chat')
    }
    const homeHandler=()=>{
        navigate('/list')
    }
    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" onClick={homeHandler}>UserInteraction</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" onClick={homeHandler}>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/add-post">Add Post</a>
                        </li>
                        <li class="nav-item">
                            
                            <a class="nav-link active" onClick={chatHandler}>Chat</a>
                        </li>


                    </ul>
                    <button class="btn btn-primary" onClick={props.onLogoutClick}>Logout</button>

                </div>
            </div>
        </nav>

    )
}

export default Header