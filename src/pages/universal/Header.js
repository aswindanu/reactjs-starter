import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h2>This Is Header</h2>
        </header>
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(Header));
