import React from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

class Bookissue extends React.Component {

    issueDetails=()=>{
       this.props.history.push('/viewissue')
      
    }
    issueDetailsto=()=>{
        this.props.history.push('/createissue')
       
     }
     
     
    render() {
        return (
            <>
            <div style={{marginLeft:'30%'}}><br></br>
            <Button variant="secondary" style={{align:'center',width:'700px',height:'75px'}}onClick={this.issueDetails}><h3>View Book Issue</h3></Button>{' '}<br/><br/>
            <Button variant="secondary" style={{align:'center',width:'700px',height:'75px'}}onClick={this.issueDetailsto}><h3>Add Book Issue</h3></Button>{' '}<br/><br/>
           

            </div>
            
           
            </>
        )
    }
}

export default Bookissue