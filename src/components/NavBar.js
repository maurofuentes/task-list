import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';


class NavBar extends Component {


    render(){

        const {onSubmitNav}=this.props;

        return(
            <div className="container-fluid">         
                <Nav
                    activeKey="/home"
                    onSelect={onSubmitNav}
                    className="justify-content-center bg-warning"                   
                >

                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Agregar </Nav.Link>
                    </Nav.Item>


                   {/* { <form 
                        onSubmit={onSubmitNav}
                    >} */}
                        {/* {<input
                            className="btn btn-sm btn-primary m-2"
                            type="button"
                            value="+ Agregar tarea"
                            onClick={onSubmitNav}                         
                        />       }                 */}
                    {/* {</form>} */}
                        
                </Nav>               
            </div>
        );
    }
}
export default NavBar;