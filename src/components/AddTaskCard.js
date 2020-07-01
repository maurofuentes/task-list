import React, {Component} from 'react';
import { Modal } from 'react-bootstrap';


class AddTaskCard extends Component{
    

    render(){

        const {title, name, description, onSubmit, onChange, formTitle, formDescription, show}=this.props;

        return(
            <Modal
                show={show}
            >
                <div className="card text-dark my-5">
                    <div className="card-header text-center text-success">
                        {title}
                    </div>
                    <div className="card-body">
                        
                        <form  onSubmit={onSubmit}>                        

                            <label>{name}</label>
                            <input
                                type="text"
                                className="form-control"
                                id="taskTitle"
                                name="taskTitle"
                                placeholder="Indique el título con el que identificará la tarea."
                                onChange = {onChange}
                                value = {formTitle}
                            />
                        
                            <label>{description}</label>
                            <input
                                type="text"
                                className="form-control"
                                id="taskDescription"
                                name="taskDescription"
                                placeholder="Indique una breve descripción de la tarea."
                                onChange = {onChange}
                                value = {formDescription}
                            />
                                
                            <div className="text-right">
                                <button type="submit" className="btn btn-sm btn-success">Guardar</button>
                            </div>

                        </form>
        
                    </div>
                </div>
            </Modal>

        );

    }



}

export default AddTaskCard;