import React from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getLibrary } from "../../redux/action/library.action";
import { deleteDatamember, updateMember } from "../../redux/action/library.action";
import Table from 'react-bootstrap/Table';

class ViewLibrary extends React.Component {


    constructor(props) {
        super(props)
        this.props.getLibraryData()
    }

    editData = (id) => {
        this.data = this.props.libraryCollection[id]
        this.props.updateMember(this.data)
        this.props.history.push('/createlibrary')



    }

deleteData = (id) => {
    this.props.deletemember(id);

    setTimeout(() => {
        this.props.getLibraryData()
    }, 200)
}

render(){
    let { libraryCollection } = this.props

    return (
        <>
        <Table striped bordered hover variant="primary" align="center" style={{width:"50%"}}>
            <thead>
                <tr>

                    <th>member_id</th>
                    <th>member_name</th>
                    <th>member_no</th>
                    <th></th>
                    <th></th>

                </tr>
                </thead>
                <tbody>
                {
                    libraryCollection.map((res, key) => (
                        <tr>

                            <td>{res.member_id}</td>
                            <td>{res.member_name}</td>
                            <td>{res.member_no}</td>

                            <td><button onClick={() => this.editData(key)}>edit</button></td>
                            <td><button onClick={() => this.deleteData(res.member_id)}>delete</button></td>



                        </tr>
                    ))

                }
                 </tbody>
            
            </Table>

        </>
    )
}
        }

const mapStateToProps = (state) => {
    return {
        libraryCollection: state.member_details.member_details
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getLibraryData: bindActionCreators(getLibrary, dispatch),
        deletemember: bindActionCreators(deleteDatamember, dispatch),
        updateMember: bindActionCreators(updateMember, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ViewLibrary)