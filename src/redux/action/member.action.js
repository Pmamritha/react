
export const SET_MEMBERDET_DATA="SET_MEMBERDET_DATA"

export const getMemberdet=(id,data)=>{
    return(dispatch)=>{
        fetch(`http://localhost:4000/member/${id}`)
        .then(response=>response.json())
        .then(data=>
            dispatch({
                type:SET_MEMBERDET_DATA,
                payload:data
            }))
    }
}