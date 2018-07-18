// src/js/components/Line.js
import React, { Component } from 'react';
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Row from "./Row";
import {addImage} from '../actions/index'
import {loadImagePortion} from '../api/APIUtils';

class Line extends Component {    
    constructor() {
        super();

        this.fetchMoreData=this.fetchMoreData.bind(this);
    }
    fetchMoreData = () => {
        console.log('fetch');
        loadImagePortion().then(res => {
            this.props.fetchMoreData(res.data);    
        }).catch(err => console.error(err));
        
        
    };

   
    render() {
      return (
      <div>
        <InfiniteScroll
          dataLength={this.props.images.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
        <ul className="list-group list-group-flush">
        {this.props.images.map((el,index) => (
            <li className="list-group-item" key={index}>
                
                <Row data={el} />

            </li>
        ))}
        </ul>
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

  export default connect(mapStateToProps,mapDispatchToProps)(Line)