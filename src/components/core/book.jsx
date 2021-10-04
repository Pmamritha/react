import React from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

class Book extends React.Component {

    bookDetails=()=>{
       this.props.history.push('/viewbook')
      
    }
    bookDetailsto=()=>{
        this.props.history.push('/createbook')
       
     }
     
     
    render() {
        return (
            <>
            <div style={{marginLeft:'30%'}}><br></br>
            <Button variant="secondary" style={{align:'center',width:'700px',height:'75px'}}onClick={this.bookDetails}><h3>View Books</h3></Button>{' '}<br/><br/>
            <Button variant="secondary" style={{align:'center',width:'700px',height:'75px'}}onClick={this.bookDetailsto}><h3>Add Books</h3></Button>{' '}<br/><br/>
           

            </div>
           
   
           
           
            </>
        )
    }
}

export default Book