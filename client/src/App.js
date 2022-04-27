import "bootstrap/dist/css/bootstrap.min.css"
import SignIn from './Components/Auth/SignIn'
import { Route, Routes } from 'react-router-dom'
import ListDetails from "./Components/Auth/ListDetails";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/signin' element={<SignIn />}></Route>
                <Route path="/list" element={<ListDetails />}></Route>
            </Routes>
        </div>
    );
}

export default App;
