import React, { Component } from 'react';
import Line from './components/Line';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';




class App extends Component {
  render() {
    return (
      <div>
      <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="title" color="inherit">
          2CHline
        </Typography>
      </Toolbar>
    </AppBar>
        <Line />
        </div>
    );
  }
}

export default App;
