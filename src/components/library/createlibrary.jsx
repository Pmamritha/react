import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { addlibraryToDb } from "../../redux/action/library.action";
import { updateMember, editMember } from "../../redux/action/library.action"
class AddTutorial extends React.Component {
    constructor() {
        super()
        this.state = {

            member_id: "",
            member_name: "",
            member_no: ""

        }
    }
    saveData = () => {
        // this.props.addtutorial(this.state.title,this.state.discription)
        // this.props.history.push('/viewtutorial')
        this.props.addlibrarytoDb({ member_id: this.state.member_id, member_name: this.state.member_name, member_no: this.state.member_no })
    }

    editData = () => {

        this.props.editMember(this.state, this.props.editData.member_id)

        console.log(this.state)

        this.props.updateMember({})

        this.props.history.push('/viewlibrary')

    }

        render(){
            let { editData } = this.props;
            return (
                <div>

                    add member_id <input type="text" onChange={(event) => this.setState({ member_id: event.target.value })} />{this.state.member_id} <br />
                    add member_name <input type="text" onChange={(event) => this.setState({ member_name: event.target.value })} />{this.state.member_name} <br />
                    add member_no <input type="text" onChange={(event) => this.setState({ member_no: event.target.value })} />{this.state.member_no} <br />
                    {



                        editData.member_id ? <button onClick={this.editData}>Update</button> : <button onClick={this.saveData}>save</button>



                    }
                </div>
            )
        }

    }

    const mapDispatchToProps = (dispatch) => {
        return {

            addlibrarytoDb: bindActionCreators(addlibraryToDb, dispatch),
            updateMember: bindActionCreators(updateMember, dispatch),
            editMember: bindActionCreators(editMember, dispatch)
        }
    }
    const mapStateToProps = (state) => {
        return {

            editData: state.member_details.editData
        }
    }
    
    
    export default connect(mapStateToProps, mapDispatchToProps) (AddTutorial)