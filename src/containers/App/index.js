import React, { Component } from 'react';
import styles from './styles.js';
import { withStyles } from '@material-ui/core';
import TaskBoard from '../Taskboard/index';

class App extends Component {
  render() {
    console.log(this.props);
    
    return (
      <div>
        <TaskBoard />
    </div>
    )
  }
}

export default withStyles(styles)(App);
