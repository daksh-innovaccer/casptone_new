import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import Services from "../../Services/Services";
import {Card, Button} from 'react-bootstrap';
import { format } from 'date-fns';

const Feed = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getPosts = ()=>{
        
        Services.getPosts().then((res)=>{
            console.log(res.data);
            dispatch({type:"posts", value: res.data.docs});
        });
    }
    
    useEffect(async ()=>{
        getPosts();

        const localdata = await localStorage.getItem('chat-app-current-user');
        dispatch({type:id, value: localdata._id});
    }, []);

    const {posts, id} = useSelector((state)=>state);
    //console.log(posts);
   
    return (      
    <div className="container m-4">
         <div align='center'>
         <h2>People are sharing their thoughts ! Had You ?</h2>
         </div>
        
        <ul>
           {posts.map((post)=>(
               <div key = {post._id}>
                <Card>
                    <Card.Header as="h5">{post.author?.name}</Card.Header>
                    
                    <Card.Body>
                        <Card.Title>{post.text}</Card.Title>
                        
                        <Card.Text>{post.createdAt?.toString().split("T")[1].split(":")[0] + ":" + post.createdAt?.toString().split("T")[1].split(":")[1]+ " "+ "on "+ post.createdAt?.toString().split("T")[0]}</Card.Text>
                        

                        <Button variant=  "light" onClick={async ()=>{
                             const localdata = await JSON.parse(
                                localStorage.getItem('chat-app-current-user')
                              );
                            const postData = {
                                postID : post._id,
                                userID : localdata._id,
                            }
                            await Services.interact(postData);
                            console.log("success");
                        }}>⭐</Button>
                        <Button variant= "secondary" onClick={async ()=>{
                             const localdata = await JSON.parse(
                                localStorage.getItem('chat-app-current-user')
                              );
                            const postData = {
                                postID : post._id,
                                userID : localdata._id,
                            }
                            await Services.interact(postData);
                            console.log("success");
                        }}>❌</Button>


                        
                        
                    </Card.Body>
                </Card>
           </div>
               
           ))}
        </ul> 
        
    </div>
    );
}
export default Feed;