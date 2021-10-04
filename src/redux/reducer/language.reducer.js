import {SET_LANGUAGE_DATA} from  "../action/language.action";
import {SET_CATEGORY_DATA} from  "../action/language.action";

import {SET_PUBLISHER_DATA} from  "../action/language.action";



export const languageReducer = (state = [], action) => {
    let {type, payload} = action
    switch (type) {
        case SET_LANGUAGE_DATA:
            return payload;
            default:
                return state
    }
}


export const categoryReducer = (state = [], action) => {
    let {type, payload} = action
    switch (type) {
        case SET_CATEGORY_DATA:
            return payload;
            default:
                return state
    }
}


export const publisherReducer = (state = [], action) => {
    let {type, payload} = action
    switch (type) {
        case SET_PUBLISHER_DATA:
            return payload;
            default:
                return state
    }
}