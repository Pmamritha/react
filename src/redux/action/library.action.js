import axios from 'axios';
export const EDIT_MEMBER="EDIT_MEMBER"
export const SET_LIBRARY_DATA="SET_LIBRARY_DATA"








//get
export const getLibrary=()=>{
    return(dispatch)=>{
        fetch("http://localhost:4000/member")
        .then(response=>response.json())
        .then(data=>
            dispatch({
                type:SET_LIBRARY_DATA,
                payload:data
            }))
    }
}






//POST

export const addlibraryToDb=(data)=>{
    return (dispatch)=>{
        
        axios.post('http://localhost:4000/member/data1',data).then(response =>console.log(response));
    }
}



//DELETE
export const deleteDatamember=(id)=>{
    return (dispatch)=>{
        fetch(`http://localhost:4000/member/${id}`,{
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


export const updateMember=(data)=>{

return{


 type:EDIT_MEMBER,

payload:data

 }
}

export const editMember=(data,id)=>{

return (dispatch)=>{

fetch(`http://localhost:4000/member/${id}`,{

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