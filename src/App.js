import React, { Component } from 'react';
import Line from './components/Line';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';




class App extends Component {
  state = {
    swipable: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  render() {
    return (
      <div>
      <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="title" color="inherit">
          Chanline
        </Typography>
        Swipe
        <Switch
          checked={this.state.swipable}
          onChange={this.handleChange('swipable')}
          value="swipable"
        />
      </Toolbar>
    </AppBar>
        <Line swipable={this.state.swipable} />
        </div>
    );
  }
}

export default App;
