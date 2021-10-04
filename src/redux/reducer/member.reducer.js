import {SET_MEMBERDET_DATA} from  "../action/member.action";

export const memberReducer = (state = [], action) => {
    let {type, payload} = action
    switch (type) {
        case SET_MEMBERDET_DATA:
            return payload;
            default:
                return state
    }
}
