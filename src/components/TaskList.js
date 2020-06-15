import React, {Component} from 'react';
import TaskCard from './TaskCard';
import { extend } from 'jquery';

class TaskList extends Component{
 
    render(){
        const {task, onClickDone}=this.props;

        const newTask = task.filter(task => task.state === 0).map(task => 
            <div key={task.id.toString()}>                                
                <TaskCard
                    id={task.id.toString()}
                    title={task.taskTitle}
                    description={task.taskDescription}
                    state={task.state}
                    done={onClickDone}
                />                            
            </div>            
        );
        
        const taskDone = task.filter(task => task.state !== 0).map(task => 
            <div key={task.id.toString()}>                  
                <TaskCard
                    key={task.id.toString()}
                    title={task.taskTitle}
                    description={task.taskDescription}
                    state={task.state}
                    done={this.props.onClickDone}
                />                              
            </div>
        )
        
        return(
            <div className="container">                
                <div className="row d-flex justify-content-between">
                    
                    <div className="col-6">                                              
                        {newTask}
                    </div>

                    <div className="col-6">                        
                        {taskDone}                        
                    </div>

                </div>
            </div>
        );
    }
}

export default TaskList;