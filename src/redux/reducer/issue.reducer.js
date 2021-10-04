import { SET_ISSUE_DATA, EDIT_BOOKISSUE } from "../action/issue.action";
export const issueReducer = (state = { issue_details: [], editData: {} }, action) => {
    let { type, payload } = action
    switch (type) {
        case SET_ISSUE_DATA:
            return { ...state, issue_details: payload };
        case EDIT_BOOKISSUE:
            console.log(state.editData)

            return { ...state, editData: payload }

         
        default:
            return state
    }
}






