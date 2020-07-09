import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exect component={StreamCreate} />
            <Route path="/streams/edit/:id" exect component={StreamEdit} />
            <Route path="/streams/delete/:id" exect component={StreamDelete} />
            <Route path="/streams/:id" exect component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
