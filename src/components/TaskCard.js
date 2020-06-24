import React, {Component} from 'react';

class TaskCard extends Component{
    
    
    render(){
        const {id, title, description} = this.props;

        return(

            <div key={id}  className="card my-3">
                <h5 className="card-header">                 

                    <div name="title" className="d-flex justify-content-between">
                        <h4>{title}</h4>                   
                        <button
                            onClick={()=>this.props.done(id)} 
                            className="btn btn-sm btn-success"
                        >
                            Realizada
                        </button>
                    </div>
                    
                </h5>
                <div className="card-body">   

                    <h5 className="card-title">{description}</h5>

                    <div className="d-flex justify-content-end">

                        <button
                        className="btn btn-sm btn-primary"
                        onClick = {this.props.onEditTask}                       
                        >
                            Editar
                        </button>

                    </div>

                </div>
            </div>

        );
    }

}

export default TaskCard;