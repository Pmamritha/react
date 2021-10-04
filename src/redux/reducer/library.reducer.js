import { SET_LIBRARY_DATA, EDIT_MEMBER} from "../action/library.action";



export const libraryReducer = (state = {member_details:[],editData:{}}, action) => {
    let { type, payload } = action
    switch (type) {
        case SET_LIBRARY_DATA:
            return {...state,member_details:payload};

            case EDIT_MEMBER:
                console.log(state.editData)

                return{...state,editData:payload}








        default:
            return state
    }
}

