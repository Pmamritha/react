import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { addlibraryToDb } from "../../redux/action/issue.action";
import { updateBookissue, editBookissue } from "../../redux/action/issue.action"


class AddTutorial extends React.Component {
    constructor() {
        super()
        this.state = {

            book_id: "",
            mem_id: "",
            dateof_issue: "",
            dateof_return: ""

        }
    }
    saveData = () => {
        // this.props.addtutorial(this.state.title,this.state.discription)
        // this.props.history.push('/viewtutorial')
        this.props.addlibrarytoDb({ book_id: this.state.book_id, mem_id: this.state.mem_id, dateof_issue: this.state.dateof_issue, dateof_return: this.state.dateof_return })
    }

    editData = () => {

        this.props.editBookissue(this.state, this.props.editData.book_id)

        console.log(this.state)

        this.props.updateBookissue({})

        this.props.history.push('/viewissue')

    }





    render() {
        let { editData } = this.props;
        return (
            <div>

                add book_id <input type="text" onChange={(event) => this.setState({ book_id: event.target.value })} />{this.state.book_id} <br />
                add mem_id <input type="text" onChange={(event) => this.setState({ mem_id: event.target.value })} />{this.state.mem_id} <br />
                add dateof_issue<input type="date" onChange={(event) => this.setState({ dateof_issue: event.target.value })} />{this.state.dateof_issue} <br />
                add dateof_return <input type="date" onChange={(event) => this.setState({ dateof_return: event.target.value })} />{this.state.dateof_return} <br />

                {



                    editData.book_id ? <button onClick={this.editData}>Update</button> : <button onClick={this.saveData}>save</button>



                }



            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {

        addlibrarytoDb: bindActionCreators(addlibraryToDb, dispatch),
        updateBookissue: bindActionCreators(updateBookissue, dispatch),
        editBookissue: bindActionCreators(editBookissue, dispatch)
    }
}

const mapStateToProps = (state) => {
    return {

        editData: state.issue_details.editData
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(AddTutorial)