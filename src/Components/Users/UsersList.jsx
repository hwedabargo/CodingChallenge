import React , {useState, useEffect} from "react";
import {Card , Button} from "react-bootstrap";
import axios from 'axios';
import './UsersList.css';
function UsersList(){
    //this hooks of listOfUSer  the arry
    const [listOfUSer, setListOfUSer] = useState([]);
    useEffect(() => {
        //this use jsonplaceholder get from link arry 
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        // and then res "post data arry in list of user "card""
        .then(res => setListOfUSer(res.data))
    }, [])
    return(
     <div className=" Card">
       {listOfUSer.map(user =>
    <Card style={{ width: '30rem' }} key={user.id}>
    <Card.Img variant="top" src="https://newcastlebeach.org/images/user-image-2.png" />
    <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>{user.company.catchPhrase}</Card.Text>
    <Button variant="primary">Posts</Button>
    </Card.Body>
     </Card>
    )}
    </div>
    )
}

export default UsersList;