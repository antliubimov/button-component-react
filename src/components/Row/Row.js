import React from "react";
import "./Row.css";

export default class Row extends React.Component {
  render() {
    return <div className="btn-row">{this.props.children}</div>;
  }
}
