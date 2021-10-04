import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './components/core/header';
// import NotFound from "./components/core/notfound";


import ViewLibrary from "./components/library/viewlibrary";
import ViewBook from "./components/book/viewbook";
import ViewIssue from "./components/issue/viewissue";

import ViewMember from "./components/member/viewmember";


import CreateBook from "./components/book/createbook";

import CreateLibrary from "./components/library/createlibrary";
import CreateIssue from "./components/issue/createissue";
import home from "./components/core/home";
import Mem from "./components/core/mem";
import Book from "./components/core/book";
import Bookissue from "./components/core/bookissue";
import { Provider } from 'react-redux';
import { store } from "./redux/store/store"

const AppRouter = (
    <Provider store={store}>
        <Router>
            <Header></Header>
            <Switch>

                <Route exact path="/" component={home} />
                <Route path="/viewlibrary" component={ViewLibrary} />
                <Route path="/createlibrary" component={CreateLibrary} />
                <Route path="/viewbook" component={ViewBook} />
                <Route path="/createbook" component={CreateBook} />
                <Route path="/viewissue" component={ViewIssue} />
                <Route path="/createissue" component={CreateIssue} />
                <Route path="/viewmember" component={ViewMember} />

                <Route path="/mem" component={Mem} />
                <Route path="/book" component={Book} />
                <Route path="/bookissue" component={Bookissue} />

                {/*                
                <Route exact component={NotFound} /> */}
            </Switch>
        </Router>
    </Provider>
)

export default AppRouter