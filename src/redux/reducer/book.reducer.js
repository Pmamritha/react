import {SET_BOOK_DATA, EDIT_BOOKDATA} from  "../action/book.action";
export const bookReducer = (state = {book_details: [],editData:{} }, action) => {
    let {type, payload} = action
    switch (type) {
        case SET_BOOK_DATA:
            return { ...state, book_details: payload };
            case EDIT_BOOKDATA:
            console.log(state.editData)

            return { ...state, editData: payload }

            
            default:
                return state
    }
}

