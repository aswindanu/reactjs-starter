import React, { Component } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
// import { Link } from "react-router-dom";
>>>>>>> c49ab5e28d849f6558811cf306642d31ce266937
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";
import Compon from "../Components/Component";

<<<<<<< HEAD
class Footer extends Component {
=======

class Home extends Component {
>>>>>>> c49ab5e28d849f6558811cf306642d31ce266937
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
<<<<<<< HEAD
)(withRouter(Footer));
=======
)(withRouter(Home));
>>>>>>> c49ab5e28d849f6558811cf306642d31ce266937
