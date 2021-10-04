import React from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getIssue } from "../../redux/action/issue.action";
import {deleteBookissue,updateBookissue} from "../../redux/action/issue.action";
import Table from 'react-bootstrap/Table';

class ViewIssue extends React.Component {
    
      
        constructor(props){
            super(props)
            this.props.getIssueData()
        }
        
        editData = (id) => {
            this.data = this.props.issueCollection[id]
            this.props.updateBookissue(this.data)
            this.props.history.push('/createissue')
    
    
    
        }
    






        deleteData=(id)=>{
            this.props.deletbookissue(id);
           
            setTimeout(()=>{
                this.props.getIssueData()
            },200)
        }
        render(){
                let { issueCollection} = this.props
               
                return (
                    <>
                     <Table striped bordered hover variant="primary" align="center" style={{width:"50%"}}>
                    <thead>
                        <tr>
                            
                            <th>book_id</th>
                            <th>mem_id</th>
                            <th>dateof_issue</th>
                            <th>dateof_return</th>
                            <th></th>
                            <th></th>
                           
                            
                        </tr>
                        </thead>
                        <tbody>
                        {
                            issueCollection.map((res,key)=>(
                                <tr>
                                
                                <td>{res.book_id}</td>
                                <td>{res.mem_id}</td>
                                <td>{res.dateof_issue}</td>
                                <td>{res.dateof_return}</td>
                                <td><button onClick={() => this.editData(key)}>edit</button></td>
                                <td><button onClick={()=>this.deleteData(res.book_id)}>delete</button></td>
                                
                              
                                

                                </tr>
                            ) )
                            }
                            </tbody>
                    </Table>
                        
                    </>)
            }
        }
        const mapStateToProps = (state) => {
            return {
                issueCollection: state.issue_details.issue_details
            }
        }
        const mapDispatchToProps = (dispatch) => {
            return {
                getIssueData: bindActionCreators(getIssue , dispatch),
                deletbookissue:bindActionCreators(deleteBookissue,dispatch),
                updateBookissue: bindActionCreators(updateBookissue, dispatch)
            }
        }
        

export default connect(mapStateToProps, mapDispatchToProps)(ViewIssue)