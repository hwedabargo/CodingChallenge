import React , {useState, useEffect} from "react";
import {Card , Button} from "react-bootstrap";
import axios from 'axios';
import './Posts.css';
function PostsList(){
  //this hooks of listOfUSer  the arry
  const [listOfPosts, setListOfPosts] = useState([]);
  useEffect(() => {
      //this use jsonplaceholder get from link arry 
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
      // and then res "post data arry in list of Posts "card""
      .then(res => setListOfPosts(res.data))
  }, [])
  return(
   <div className=" Card">
     {listOfPosts.map(user =>
  <Card style={{ width: '30rem' }} key={user.id}>
  <Card.Body>
  <Card.Title>{user.title}</Card.Title>
  <Card.Text>{user.body}</Card.Text>
  <Button variant="primary">Back</Button>
  </Card.Body>
   </Card>
  )}
  </div>
  )
     }

export default PostsList;