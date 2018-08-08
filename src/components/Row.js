// src/js/components/Line.js
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import {removeImage,removeThread} from '../actions/index'
import {sendImageAPI} from '../api/APIUtils';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';


const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        minWidth: '400px'
      },

    image: {
        maxWidth: '100%'
    },
  });

class Row extends Component {    
    state = {
        snackOpen: false
      };
    constructor() {
        super();
        this.handleSend = this.handleSend.bind(this);
        this.handleKill = this.handleKill.bind(this);
        this.handleKillThread = this.handleKillThread.bind(this);
      }

      handleClose = () => {
        this.setState({ snackOpen: false});
      };

    handleSend =() => {
        console.log("Send: "+this.props.data.image_url);
        this.props.clickKill(this.props.data.image_url);
        sendImageAPI(this.props.data.image_url).then(res => {
            console.log('Success send');
            this.setState({ snackOpen: true});
            
        }).catch(err => console.error(err));
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
        const { classes } = this.props;
        const  imgUrl  = this.props.data.image_url;
      return (
        <div>

      <a href={imgUrl}  target="_blank" rel="noopener noreferrer"> <img alt="" className={classes.image} src={imgUrl}></img></a>
          <div>
            <Button 
                onClick={this.handleSend}  
                variant="contained"
                className={classes.button}
                >
                Send</Button>
            <Button 
                onClick={this.handleKill} 
                color="primary"  
                variant="contained"
                className={classes.button}
            >Kill</Button>
            <Button 
                onClick={this.handleKillThread} 
                color="secondary" 
                variant="contained"
                className={classes.button}
            >Kill thread</Button>
          </div>
          <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={this.state.snackOpen}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Succesfully send</span>}
        />
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
)(withStyles(styles)(Row))
