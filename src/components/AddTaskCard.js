import React, {Component} from 'react';


class AddTaskCard extends Component{
    constructor(props){
        super(props);
    }

    render(){

        const {title, name, description, onSubmit}=this.props;

        return(

            <div className="card text-dark my-5">
                <div className="card-header text-center text-success">
                    {title}
                </div>
                <div className="card-body">
                    <form  onSubmit={onSubmit}>                        

                        <label>{name}</label>
                        <input type="text" className="form-control" id="taskTitle" name="taskTitle" placeholder="Indique el título con el que identificará la tarea."/>
                    
                        <label>{description}</label>
                        <input type="text" className="form-control" id="taskDescription" name="taskDescription" placeholder="Indique una breve descripción de la tarea."/>
                            
                        <div className="text-right">
                            <button type="submit" className="btn btn-sm btn-success">Guardar</button>
                        </div>

                    </form>

                </div>
            </div>

        );

    }



}

export default AddTaskCard;