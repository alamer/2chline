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


const styles = theme => ({
row: {
    float       : 'none', 
    marginLeft  : 'auto',
    marginRight : 'auto'
},
});
class Line extends Component {    
    constructor() {
        super();

        this.fetchMoreData=this.fetchMoreData.bind(this);
    }
    fetchMoreData = () => {
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
      return (
      <div className={classes.row}>
        <InfiniteScroll
          dataLength={this.props.images.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
        <List>
        {this.props.images.map(el => (
                <ListItem>
                    <Row data={el} />
                </ListItem>                        
        ))}
        </List>
    </InfiniteScroll>
    
    </div>
      )
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