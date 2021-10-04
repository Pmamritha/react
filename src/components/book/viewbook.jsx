import React from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBook } from "../../redux/action/book.action";
import {deleteDatabook,updateBookdata} from "../../redux/action/book.action";
import Table from 'react-bootstrap/Table';


class ViewBook extends React.Component {
    
      
        constructor(props){
            super(props)
            this.props.getBookData()
        }

        editData = (id) => {
            this.data = this.props.bookCollection[id]
            this.props.updateBookdata(this.data)
            this.props.history.push('/createbook')
    
    
    
        }




        deleteData=(id)=>{
            this.props.deletebook(id);
           
            setTimeout(()=>{
                this.props.getBookData()
            },200)
        }
        render(){
                let { bookCollection} = this.props
               
                return (
                    <>
                    <Table striped bordered hover variant="primary" align="center" style={{width:"50%"}}>
            <thead>
                    
                        <tr>
                            
                            <th>book_id</th>
                            <th>book_name</th>
                           <th>author</th>
                           <th>language</th>
                           <th>book_category</th>
                           <th>publisher</th>
                          
                           <th>bookcount</th>
                           <th></th>
                           <th></th>
                            
                        </tr>
                        </thead>
                <tbody>
                        {
                            bookCollection.map((res,key)=>(
                                <tr>
                                
                                <td>{res.book_id}</td>
                                <td>{res.book_name}</td>
                                <td>{res.author}</td>
                                <td>{res.language}</td>
                                <td>{res.book_category}</td>
                                <td>{res.publisher}</td>
                                <td>{res.bookcount}</td>
                                
                                <td><button onClick={() => this.editData(key)}>edit</button></td>
                                <td><button onClick={()=>this.deleteData(res.book_id)}>delete</button></td>
                              
                                

                                </tr>
                            ) )}
                            </tbody>
                    </Table>
                        
                    </>
                    )
            }
        }
        const mapStateToProps = (state) => {
            return {
                bookCollection: state.book_details.book_details
            }
        }
        const mapDispatchToProps = (dispatch) => {
            return {
                getBookData: bindActionCreators(getBook , dispatch),
                deletebook:bindActionCreators(deleteDatabook,dispatch),
                updateBookdata: bindActionCreators(updateBookdata, dispatch)
            }
        }
        

export default connect(mapStateToProps, mapDispatchToProps)(ViewBook)