import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import { withRouter } from "react-router-dom";
import Flag from "../components/Flagr";

class Flagr extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Flag
          value="25000"
        />
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Flagr));
