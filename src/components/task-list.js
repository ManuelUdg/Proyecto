import React, { Fragment } from 'react';
import Task from './task'
function TaskList(props){
  return(
  <Fragment>
    {props.tasks.map((task, id) =>
      <Task 
        key={id}
        value={task}
      />
    )}
  </Fragment>
 )
}
export default TaskList;