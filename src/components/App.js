import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";

import LoginForm from "./LoginForm";
import NavBar from "./NavBar";
import formUI from "./UserStory";

class App extends React.Component {
  render() {
    if (this.props.isLoginSuccess || this.props.token ) {
      return (
        <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact component={formUI} />
            <Route path="/create-story" exact component={formUI} />
            <Route path="/stories" exact component={formUI} />/>
            <Route path="/story/:id" exact component={formUI} />/>
          </Switch>
        </div>
      </Router>
      );
    }
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoginSuccess: state.auth.isLoginSuccess,
    isAdmin: state.auth.isAdmin,
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(App);
