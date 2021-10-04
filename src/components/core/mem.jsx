import React from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

class Mem extends React.Component {

    memberDetails=()=>{
       this.props.history.push('/viewlibrary')
      
    }
    memberDetailsto=()=>{
        this.props.history.push('/createlibrary')
       
     }
     memberDetailsstate=()=>{
        this.props.history.push('/viewmember')
       
     }
     
    render() {
        return (
            <>
            <div style={{marginLeft:'30%'}}><br></br>
            <Button variant="secondary" style={{align:'center',width:'700px',height:'75px'}}onClick={this.memberDetails}><h3>View Members</h3></Button>{' '}<br/><br/>
            <Button variant="secondary" style={{align:'center',width:'700px',height:'75px'}}onClick={this.memberDetailsto}><h3>Add Members</h3></Button>{' '}<br/><br/>
            <Button variant="secondary" style={{align:'center',width:'700px',height:'75px'}}onClick={this.memberDetailsstate}><h3>View Members Details</h3></Button>{' '}<br/><br/>

            </div>
           
            </>
        )
    }
}

export default Mem