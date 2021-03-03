import React , {useState, useEffect} from "react";
import {Card , Button} from "react-bootstrap";
import axios from 'axios';
import './Comments.css';
function CommentsList (){
    //this hooks of listOfUSer  the arry
  const [listOfComments, setListOfComments] = useState([]);
  useEffect(() => {
      //this use jsonplaceholder get from link arry 
      axios.get(`https://jsonplaceholder.typicode.com/comments`)
      // and then res "post data arry in list of Comments "card""
      .then(res => setListOfComments(res.data))
  }, [])
  return(
   <div className=" Card">
     {listOfComments.map(post =>
  <Card style={{ width: '30rem' }} key={post.id}>
  <Card.Body>
  <Card.Title>{user.name}</Card.Title>
  <Card.Email>{user.email}</Card.Email>
  <Card.Text>{user.body}</Card.Text>
  <Button variant="primary">Back</Button>
  </Card.Body>
   </Card>
  )}
  </div>
  )
     }
export default CommentsList;