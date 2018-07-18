// src/js/components/Line.js
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import {removeImage,removeThread} from '../actions/index'

class Row extends Component {    
    constructor() {
        super();
        this.handleSend = this.handleSend.bind(this);
        this.handleKill = this.handleKill.bind(this);
        this.handleKillThread = this.handleKillThread.bind(this);
      }

    handleSend =() => {
        console.log("Send: "+this.props.data.image_url);
    }
    handleKill =() => {
        console.log("Kill: "+this.props.data.image_url);
        this.props.clickKill(this.props.data.image_url);
    }
    handleKillThread =() => {
        console.log("Kill Thread: "+this.props.data.thread);
        this.props.clickKillThread(this.props.data.thread);
    }
    render() {
      return (
      <div>
          <div><img src={this.props.data.image_url}></img></div>
          <Button onClick={this.handleSend}>Send</Button>
          <Button onClick={this.handleKill}>Kill</Button>
          <Button onClick={this.handleKillThread}>Kill thread</Button>
    </div>
      )
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
        clickKill: (image_url) => {
            dispatch(removeImage(image_url));
        },
        clickKillThread: (thread) => {
            dispatch(removeThread(thread));
        },
    }
};

export default connect(
    null,
    mapDispatchToProps
)(Row)