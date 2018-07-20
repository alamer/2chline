import { Component } from "react";

const styles = theme => ({
  });

class Row extends Component {    
    constructor() {
        super();
      }

    render() {
        const { classes } = this.props;

      return (
          <div />
      )
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
        
    }
};

export default connect(
    null,
    mapDispatchToProps
)(withStyles(styles)(Row))
