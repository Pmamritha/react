import {combineReducers} from "redux";
 import {libraryReducer} from "./library.reducer";
 import {bookReducer} from "./book.reducer";
 import {issueReducer} from "./issue.reducer";
 import {languageReducer} from "./language.reducer";
 import {categoryReducer} from "./language.reducer";
 import {publisherReducer} from "./language.reducer";
 import {memberReducer} from "./member.reducer";




 export const rootReducer=combineReducers({
     member_details:libraryReducer,
     book_details:bookReducer,
     issue_details:issueReducer,
     lang_details:languageReducer,
     categ_details:categoryReducer,
     publisher_details:publisherReducer,
     mem_details:memberReducer



 })


