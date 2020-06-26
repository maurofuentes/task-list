import React, {Component} from 'react';
import TaskCard from './TaskCard';

class TaskList extends Component{
    
 
    render(){
        const {task, onClickDone, onEditTask}=this.props;

        const newTask = task.filter(task => task.state === "0").map(task => 
                                        
            <TaskCard 
                key={task.id.toString()}
                id={task.id.toString()}
                title={task.taskTitle}
                description={task.taskDescription}
                state={task.state}                    
                done={onClickDone}
                onEditTask={()=>onEditTask(task)}
            />                            
                     
        );
        
        const taskDone = task.filter(task => task.state !== "0").map(task => 
                             
            <TaskCard
                key={task.id.toString()}
                id={task.id.toString()}
                title={task.taskTitle}
                description={task.taskDescription}
                state={task.state}
                done={this.props.onClickDone}
                onEditTask={()=>onEditTask(task)}
            />                              
            
        )
        
        return(
            <div className="container">                
                <div className="row d-flex justify-content-between">
                    <div className="col-md-6">
                        {newTask}
                    </div>

                    <div className="col-md-6">                     
                        {taskDone}                        
                    </div>

                </div>
            </div>
        );
    }
}

export default TaskList;