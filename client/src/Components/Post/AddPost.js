import { Link, useNavigate } from "react-router-dom"
import {useSelector, useDispatch} from "react-redux";

const AddPost = () => {
    const {id, text} = useSelector(state=>state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const postHandler = (e) =>{
        e.preventDefault();
        const postData = {
            "author":id,
            "text": text,
        }
    }
    return (
        <div className="container m-2">
            <h2>Add Post</h2>
            
            <form onSubmit={postHandler}>
                <div className="form-group">
                    <label htmlFor="text"></label>
                    <input type="text"
                            name="text"
                            id="text"
                            className="form-control"
                            placeholder="Share your thoughts"
                            value={text}
                            onChange={(e)=>dispatch({type: 'text', value: e.target.value})}
                    />
                </div>
                <br></br>
                <div className="form-group">
                    <input type="submit" value="Post" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );   
}

export default AddPost;