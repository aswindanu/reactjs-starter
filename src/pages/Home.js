import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { withRouter } from "react-router-dom";
import Compon from "../components/Component";


class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Compon />
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Home));
