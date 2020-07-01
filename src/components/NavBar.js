import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';


class NavBar extends Component {


    render(){

        const {onSubmitNav}=this.props;

        return(
            <div className="container-fluid">         
                <Nav
                    className="justify-content-center bg-warning"
                >
                    <form 
                        onSubmit={onSubmitNav}
                    >
                        <input
                            className="btn btn-sm btn-primary"
                            type="submit"
                            value="Agregar tarea"                            
                        />                       
                    </form>
                        
                </Nav>               
            </div>
        );
    }
}
export default NavBar;