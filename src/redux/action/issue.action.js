
import axios from 'axios';
export const SET_ISSUE_DATA="SET_ISSUE_DATA"

export const EDIT_BOOKISSUE="EDIT_BOOKISSUE"
export const getIssue=()=>{
    return(dispatch)=>{
        fetch("http://localhost:4000/book/data")
        .then(response=>response.json())
        .then(data=>
            dispatch({
                type:SET_ISSUE_DATA,
                payload:data
            }))
    }
}


export const addlibraryToDb=(data)=>{
    return (dispatch)=>{

        axios.post('http://localhost:4000/book',data).then(response =>console.log(response));
        



    }
}



export const deleteBookissue=(id)=>{
    return (dispatch)=>{
        fetch(`http://localhost:4000/book/${id}`,{
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            method:'DELETE',
            
        }).then(response=>response.json())//to see as object
        .then(response=>{console.log(response)})
    }
}

//update
export const updateBookissue=(data)=>{

    return{
    
    
     type:EDIT_BOOKISSUE,
    
    payload:data
    
     }
    }
    
    export const editBookissue=(data,id)=>{
    
    return (dispatch)=>{
    
    fetch(`http://localhost:4000/book/${id}`,{
    
    headers:{
    
     'accept':'application/json',
    'content-type':'application/json'
    
      },
    
    method:'PUT',
    
     body:JSON.stringify(data)
     })
    
     .then(response=>response.json())
     .then(response=>{console.log(response)})
     }
    
    
    
    }