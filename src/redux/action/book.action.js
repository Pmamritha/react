import axios from 'axios';
export const SET_BOOK_DATA="SET_BOOK_DATA"
export const EDIT_BOOKDATA="EDIT_BOOKDATA"

export const getBook=()=>{
    return(dispatch)=>{
        fetch("http://localhost:4000/library/data1")
        .then(response=>response.json())
        .then(data=>
            dispatch({
                type:SET_BOOK_DATA,
                payload:data
            }))
    }
}

export const addlibraryToDb=(data)=>{
    return (dispatch)=>{

        axios.post('http://localhost:4000/library',data).then(response =>console.log(response));
        




    }


}


export const deleteDatabook=(id)=>{
    return (dispatch)=>{
        fetch(`http://localhost:4000/library/${id}`,{
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

export const updateBookdata=(data)=>{

    return{
    
    
     type:EDIT_BOOKDATA,
    
    payload:data
    
     }
    }
    
    export const editBookdata=(data,id)=>{
    
    return (dispatch)=>{
    
    fetch(`http://localhost:4000/library/${id}`,{
    
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