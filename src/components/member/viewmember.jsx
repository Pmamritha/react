import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getMemberdet} from "../../redux/action/member.action";


class ViewMember extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            member_id: "",
          
        }
    }
    getData = () => {
        this.props.getMemberData(this.state.member_id)
    }

    render() {
        let { memberCollection } = this.props
        return (
            <div>
                <div>
                    MEMBER ID:<input type="number" onChange={(event) => this.setState({ member_id: event.target.value })} />{this.state.member_id} <br />
                    
                   
                    <button onClick={this.getData}>GET</button>
                </div>
                <table>
                    <tr>
                        <th>MEMBER ID</th>
                        <th>MEMBER NAME</th>
                        <th>BOOK ID</th>
                        <th>BOOK NAME</th>
                        <th>DATE OF ISSUE</th>
                        <th>DATE OF RETURN</th>
                    </tr>
                    {
                        memberCollection .map(res => (
                            <tr>
                                <td>{res.member_id}</td>
                                <td>{res.member_name}</td>
                                <td>{res.book_idt}</td>
                                <td>{res.book_name}</td>
                                <td>{res.dateof_issue}</td>
                                <td>{res.dateof_date}</td>

                            </tr>
                        ))
                    }
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        memberCollection: state.mem_details
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        getMemberData: bindActionCreators(getMemberdet, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewMember)