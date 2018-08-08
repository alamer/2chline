import React, {Component} from 'react'
import Swipeable from 'react-swipeable'
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import {removeImage,removeThread} from '../actions/index'
import {sendImageAPI} from '../api/APIUtils';



const styles = theme => ({
  image: {
      maxWidth: '100%'
  },
});

class SwipeableComponent extends Component {
  constructor() {
    super();
    this.swipedLeft = this.swipedLeft.bind(this);
    this.swipedRight = this.swipedRight.bind(this);
    this.swipedUp = this.swipedUp.bind(this);
  }
      swipedLeft() {
        console.log("You're Swiping to the Left...");
        const  imgUrl  = this.props.images[0].image_url;
        this.props.clickKill(imgUrl);
      }
      swipedRight() {
        console.log("You're Swiping to the Right...");
      }
      swipedUp() {
        console.log("You Swiped Up...");
        const  imgUrl  = this.props.images[0].image_url;
        this.props.clickKill(imgUrl);
        sendImageAPI(imgUrl).then(res => {
            console.log('Success send');
            
        }).catch(err => console.error(err));
      }
    render(){
      const { classes } = this.props;
      const  imgUrl  = this.props.images[0].image_url;
        return (
            <Swipeable
            style={{ touchAction: 'none' }}
            preventDefaultTouchmoveEvent
            className="swipe"
            onSwipedLeft={this.swipedLeft}
            onSwipedRight={this.swipedRight}
            onSwipedUp={this.swipedUp} >
          <a href={imgUrl}  target="_blank" rel="noopener noreferrer"> <img alt="" className={classes.image} src={imgUrl}></img></a>
          </Swipeable>
        )
    }
}

function mapDispatchToProps (dispatch) {
  return {
      clickKill: (image_url) => {
          dispatch(removeImage(image_url));
      },
      clickKillThread: (thread) => {
          dispatch(removeThread(thread));
      },
  }
};

function mapStateToProps (state) {
  return {
    images: state.images
  }
}  

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(SwipeableComponent));