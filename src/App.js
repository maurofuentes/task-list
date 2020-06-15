import React, {Component} from 'react';
import './App.css';
import AddTaskCard from './components/AddTaskCard';
import TaskList from './components/TaskList';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      task : []
            
    }

  }


  handleClickDone = (id)=> {    
    
    const newTaskList = this.state.task.map(task => {
      if(task.id === id){
        task.state = 1;         
      }      
      return task;
    })
    
    this.setState(
       {
         task : newTaskList
        }
     );
  }

  handleSubmit = e =>{
    e.preventDefault();

    const newTask = this.state.task;
    newTask.push({
      id : (newTask.length+1).toString(),
      [e.target.taskTitle.name] : e.target.taskTitle.value,
      [e.target.taskDescription.name] : e.target.taskDescription.value,
      buttonText : "Realizada",
      state : 0
    })

    this.setState(
      {
        task : newTask
      }
    );
   
  }

  render(){
    return (
      <div>  
        <header className="container d-block">
          
          <div className="row">
            <div className="col-12">
              <AddTaskCard
                title="Agregar Nuevas tareas."
                name="Título"
                description="Descripción"
                onSubmit={this.handleSubmit}
              />
            </div>
          </div>  
  
        </header>
        
        <TaskList task={this.state.task} onClickDone={this.handleClickDone}/>
      </div>
    );
  }
}

export default App;
