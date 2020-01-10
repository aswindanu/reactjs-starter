import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Flagr extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.GetFlagr();
  }

  render() {
    return (
      <div>
        <h1>This is Flagr</h1>
        <p>{String(this.props.enabled)}</p>
        <p>{String(this.props.is_login)}</p>
        <p>{String(this.props.value)}</p>
        <p>{console.log(this.props.enabled, "FLAGR")}</p>
      </div>
    );
  }
}

export default connect(
  "is_login, enabled, actions",
  actions
)(withRouter(Flagr));
