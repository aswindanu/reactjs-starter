import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

class Flagr extends Component {
  constructor(props){
    super(props)

    this.state = {
      local: 'localstate',
      propstostate: props.value,
      clicked: 0,
    };

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.props.GetFlagr();
  }

  onClick() {
    this.setState({clicked: Math.random()})
  }

  render() {
    return (
      <div>
        <h1>This is Flagr</h1>
        <h3>Props Example :</h3>
        <p>{console.log(this.props.enabled, "FLAGR")}</p>
        <p>{String(this.props.enabled)} => enabled</p>
        <p>{String(this.props.is_login)} => is_login</p>
        <p>{String(this.props.value)} => value</p>
        <p>{String(this.state.local)} => local</p>
        <p>{String(this.state.propstostate)} => propstostate</p>
        <p>{String(process.env.REACT_APP_FLAGHOST)} => flaghost</p>
        <p>{String(this.state.clicked)} => clicked</p>
        <button onClick={ this.onClick } onKeyDown={ this.onClick }>Click me</button>
      </div>
    );
  }
}

export default connect(
  "is_login, enabled, actions",
  actions
)(withRouter(Flagr));
