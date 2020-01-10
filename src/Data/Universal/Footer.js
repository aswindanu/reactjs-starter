import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
// import logo from "../../logo.svg";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <h1>This Is Footer</h1>
        </footer>
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Footer));
