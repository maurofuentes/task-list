import React, {Component} from 'react';

class Task extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(

            <div class="card text-primary">
                <div class="card-header">
                Featured
                </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        );

    }



}

export default Task;