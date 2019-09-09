import React, { Component } from 'react'
import styles from './styles.js';
import { withStyles, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { STATUSES } from '../../constants/index.js';

const listTask = [
    {
        id:1,
        title: "Read book",
        status: 0
    },
    {
        id:2,
        title: "Read comic",
        status: 1
    },
    {
        id:3,
        title: "Learn ReactJS",
        status: 2
    }
]

class Taskboard extends Component { 
    renderTaskboard(){
        const {classes} = this.props;
        let html = null;
        html= (
            <Grid container spacing={2}>
                {
                    STATUSES.map((status, index) => {
                        const taskFilter = listTask.filter(task => task.status === status.value)
                        return(
                        <Grid item md={4} xs={12} key={status.value}>
                            <div className={classes.status}>
                                {status.label}
                            </div>
                            <div>
                                {taskFilter.map(task =>{
                                    return(<h1>{task.title}</h1>)
                                })}
                            </div>
                        </Grid>
                        )
                    })
                }
            </Grid>
        )
        return html;
    }
  render() {
      const {classes} = this.props;
    return (
      <div className={classes.taskBoard}>
      <Button variant="contained" color="primary" className={classes.button}>
          <AddIcon/> Thêm mới công việc
      </Button>
      {this.renderTaskboard()}
    </div>
    )
  }
}

export default withStyles(styles)(Taskboard);
