import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import LoginForm from "./LoginForm";
import NavBar from "./NavBar";
import formUI from "./UserStory";
import table from "./DataTable";
import StoryDetails from "./StoryDetails";
import history from "../history";
import { Link } from "react-router-dom";
import { NO_AUTH } from "../constants";

class App extends React.Component {
  render() {
    if (
      this.props.loginStatus !== NO_AUTH ||
      (localStorage.getItem("token") && localStorage.getItem("userID"))
    ) {
      //  if (this.props.loginStatus !== NO_AUTH) {
      return (
        <Router history={history}>
          <React.Fragment>
            <CssBaseline />
            <NavBar />
            <Container>
              <Switch>
                <Route path="/" exact component={formUI} />
                <Route path="/story/new" exact component={formUI} />
                <Route path="/story" component={table} />
                />
                <Route path="/story/:id" exact component={StoryDetails} />
                />
              </Switch>
            </Container>
          </React.Fragment>
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
    loginStatus: state.auth.loginStatus
  };
};

export default connect(mapStateToProps)(App);
