import React, {Component} from 'react';
import './App.css';
import AddTaskCard from './components/AddTaskCard';
import TaskList from './components/TaskList';
import NavBar from './components/NavBar';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      formValues : {
        id: null,
        taskTitle : "",
        taskDescription : ""
      },
      task : [],
      modalShow: false    
    }
    
  }
  
  componentDidMount() {
    if (localStorage.getItem("tareas") === null) {
      this.getTasks();
      
    } else {
      let tareas = localStorage.getItem('tareas')
      this.setState({ task: JSON.parse(tareas) })
    }
  }

  
  getTasks = async () => {
    const reply = await fetch("http://localhost:3000/tareas.json");
    const datos = await reply.json()
    console.log("datos",datos);
    this.setLocalStorage(datos)
    this.setState( {task:datos} )
  }
  
  setLocalStorage = (datos) => {    
    localStorage.setItem('tareas', JSON.stringify(datos))
  } 

  handleClickDone = id => {    
    
    const newTaskList = this.state.task.map(task => {
      if(task.id === id){
        task.state = "1";         
      }      
      return task;
    })
    
    this.setLocalStorage(newTaskList);
    this.setState(
       {
         task : newTaskList
        }
     );
  }

  
  handleSubmit = e =>{
    e.preventDefault();
    
    const newTask = [...this.state.task];

    const {id, taskTitle, taskDescription}=this.state.formValues;

    if (id !== null){
      const editedTask = newTask.map(task =>{
        if(task.id === id){
          task.taskTitle=taskTitle;
          task.taskDescription=taskDescription;
        }
        return task;
      });
      
      this.setLocalStorage(editedTask);
      this.setState(
        {
          task:editedTask,
          modalShow: false
        }
      );

      this.clearImput();
      
    }else{
      newTask.push({
        id : (newTask.length+1).toString(),
        [e.target.taskTitle.name] : e.target.taskTitle.value,
        [e.target.taskDescription.name] : e.target.taskDescription.value,
        buttonText : "Realizada",
        state : "0"
      })

      this.setLocalStorage(newTask);
      this.setState(
        {
          task : newTask,
          modalShow: false
        }
      );

      this.clearImput();
    } 
    
  }

  onChangeForm = e =>{
    
    this.setState(
      {
        formValues : 
        {
          ...this.state.formValues,
          [e.target.name] : e.target.value,
          [e.target.name] : e.target.value
        }
      }
    );

    console.log(this.state.formValues);
  }

  handleEditTask = task => {
    
    const editedValues={
      id : task.id,
      taskTitle : task.taskTitle,
      taskDescription : task.taskDescription,
      state: 0
    }

    this.setState(
      {
        formValues : editedValues,
        modalShow: true
      }
    );
    
  }

  clearImput = ()=>{
    this.setState({
        formValues: {
          id:null,
          taskTitle:"",
          taskDescription:""
        }
    });
  }

  handleCloseModal = ()=>{
    this.setState({
      modalShow: false
    });
  }

  handleShowModal = (e)=>{
      e.preventDefault();
    
    this.setState({
      modalShow: true
    });
  }

  render(){
    return (
      <div>        
        <NavBar         
          onSubmitNav={this.handleShowModal}          
        />
        <AddTaskCard
          title="Agregar Nuevas tareas."
          name="Título"
          description="Descripción"
          onSubmit={this.handleSubmit}
          onChange={this.onChangeForm}
          formTitle = {this.state.formValues.taskTitle}
          formDescription = {this.state.formValues.taskDescription}
          show={this.state.modalShow}
        />
        <TaskList
          task={this.state.task}
          onClickDone={this.handleClickDone}
          onEditTask={this.handleEditTask}
        />
      </div>
    );
  }
}

export default App;
