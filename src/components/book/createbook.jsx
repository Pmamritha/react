import React from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux'
import {  addlibraryToDb } from "../../redux/action/book.action";
import {getLanguage} from "../../redux/action/language.action";
import {getCategory} from "../../redux/action/language.action";
import {getPublisher} from "../../redux/action/language.action";
import { updateBookdata, editBookdata } from "../../redux/action/book.action"



class AddTutorial extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
            book_id:"",
           book_name:"",
         author:"",
         language:"",
         book_category:"",
         publisher:"",
         bookcount:""
           
        }
        this.props.getLanguage()
        this.props.getCategory()
        this.props.getPublisher()
    }
    saveData=()=>{
        // this.props.addtutorial(this.state.title,this.state.discription)
        // this.props.history.push('/viewtutorial')
        this.props.addlibrarytoDb({book_id:this.state.book_id,book_name:this.state.book_name,author:this.state.author,language:this.state.language,book_category:this.state.book_category,publisher:this.state.publisher,bookcount:this.state.bookcount})}
        
        editData = () => {

            this.props.editBookdata(this.state, this.props.editData.book_id)
    
            console.log(this.state)
    
            this.props.updateBookdata({})
    
            this.props.history.push('/viewbook')
    
        }
        
        
        render(){
            let { editData } = this.props;
            let {languageCollection}=this.props
            let {categoryCollection}=this.props
            let {publisherCollection}=this.props
            return(
                <div>
                    
                    add book_id <input type="text" onChange={(event)=>this.setState({book_id:event.target.value})} />{this.state.book_id} <br />
                    add book_name <input type="text" onChange={(event)=>this.setState({book_name:event.target.value})} />{this.state.book_name} <br />
                    add author <input type="text" onChange={(event)=>this.setState({author:event.target.value})} />{this.state.author} <br />
                    add language  <select name=" lang_details" onChange={(event) => this.setState({ language: event.target.value })}>
                    {
                        languageCollection.map(res=>(
                            <option value={res.language_no} >{res.language}</option>
                        )
                        )
                    }
                </select>{this.state.language} <br />
                    add book_category <select name="categ_details" onChange={(event) => this.setState({ book_category: event.target.value })}>
                    {
                        categoryCollection.map(res=>(
                            <option value={res.bookcategory_no} >{res.book_category}</option>
                        )
                        )
                    }
                </select>{this.state.book_category} <br />
                    add publisher <select name="publisher_details" onChange={(event) => this.setState({ publisher: event.target.value })}>
                    {
                        publisherCollection.map(res=>(
                            <option value={res.publisher_no} >{res.publisher}</option>
                        )
                        )
                    }
                </select>{this.state.publisher} <br />
                    add bookcount<input type="text" onChange={(event)=>this.setState({bookcount:event.target.value})} />{this.state.bookcount} <br />
                    
                    {



editData.book_id ? <button onClick={this.editData}>Update</button> : <button onClick={this.saveData}>save</button>



}



                </div>
            )
        }
    
}
    
    const mapDispatchToProps=(dispatch)=>{
        return {
            
            addlibrarytoDb: bindActionCreators(addlibraryToDb,dispatch),
            getLanguage:bindActionCreators(getLanguage,dispatch),
            getCategory:bindActionCreators(getCategory,dispatch),
            getPublisher:bindActionCreators(getPublisher,dispatch),
            updateBookdata: bindActionCreators(updateBookdata, dispatch),
            editBookdata: bindActionCreators(editBookdata, dispatch)
        }
    }
    
    const mapStateToProps = (state) => {
        return {
            languageCollection: state.lang_details,
            categoryCollection: state.categ_details,
            publisherCollection: state.publisher_details,
            editData: state.book_details.editData
        }
    }
    
    
    export default connect(mapStateToProps,mapDispatchToProps) (AddTutorial)