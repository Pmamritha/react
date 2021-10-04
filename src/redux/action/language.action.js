
export const SET_LANGUAGE_DATA="SET_LANGUAGE_DATA"
export const getLanguage=()=>{
    return(dispatch)=>{
        fetch("http://localhost:4000/library/data2")
        .then(response=>response.json())
        .then(data=>
            dispatch({
                type:SET_LANGUAGE_DATA,
                payload:data
            }))
    }
}

export const SET_CATEGORY_DATA="SET_CATEGORY_DATA"
export const getCategory=()=>{
    return(dispatch)=>{
        fetch("http://localhost:4000/library/data3")
        .then(response=>response.json())
        .then(data=>
            dispatch({
                type:SET_CATEGORY_DATA,
                payload:data
            }))
    }
}

export const SET_PUBLISHER_DATA="SET_PUBLISHER_DATA"
export const getPublisher=()=>{
    return(dispatch)=>{
        fetch("http://localhost:4000/library/data4")
        .then(response=>response.json())
        .then(data=>
            dispatch({
                type:SET_PUBLISHER_DATA,
                payload:data
            }))
    }
}

