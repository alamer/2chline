// src/js/components/Line.js
import React, { Component } from 'react';
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Row from "./Row";
import {addImage} from '../actions/index'
import {loadImagePortionAPI} from '../api/APIUtils';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SwipeableComponent from './SwipeableComponent'


const styles = theme => ({
row: {
    float       : 'none', 
    marginLeft  : 'auto',
    marginRight : 'auto'
},
});
class Line extends Component {    
    state = {
        hasMore: true,
      };
    constructor() {
        super();

        this.fetchMoreData=this.fetchMoreData.bind(this);
    }
    fetchMoreData = () => {
        if (this.props.images.length >= 1000) {
            this.setState({ hasMore: false });
            return;
          }
        console.log('fetch');
        loadImagePortionAPI().then(res => {
            this.props.fetchMoreData(res.data);    
        }).catch(err => console.error(err));
    };

  


    componentDidMount() {
        this.fetchMoreData();
    }

   
    render() {
        const { classes } = this.props;
        if (this.props.swipable) {
            return (
                <div className={classes.row}>  
                    <SwipeableComponent />
                 </div>
    
            )
        } else {
      return (
      <div className={classes.row}>
        <InfiniteScroll
          dataLength={this.props.images.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={<h1>Please reload page</h1>}
          scrollThreshold='0.9'
        >
        <List>
        {this.props.images.map(el => (
                <ListItem key={el.md5}>
                    <Row data={el} />
                </ListItem>                        
        ))}
        </List>
    </InfiniteScroll>
    
    </div>
    
      )
    }
    }
  }

  function mapStateToProps (state) {
    return {
      images: state.images
    }
  }  

  const mapDispatchToProps = (dispatch) => {
    return {
        fetchMoreData: (partial) => {
            dispatch(addImage(partial));
        },
    }
};

  export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Line))