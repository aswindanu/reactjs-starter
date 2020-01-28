import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from "../store";
import { withRouter } from "react-router-dom";

class FourZeroFour extends Component {
  render() {
    return (
      <div>
        <h1>This Is 404 Page</h1>
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(FourZeroFour));
