import React, {Component} from 'react';
import {Nav} from 'react-bootstrap';
import { BsFolderPlus  } from 'react-icons/bs';
import AddTaskCard from './AddTaskCard';

class NavBar extends Component {


    render(){

        const {title, name, description, onSubmit, onChange, formTitle, formDescription, show}=this.props;

        return(
            <div className="container-fluid">         
                <Nav
                    className="justify-content-center bg-warning"
                    activeKey="/home"
                    onSelect={(selectedKey)=>alert(`clicked ${selectedKey}`)}
                >
                    <Nav.Item>
                        <Nav.Link
                            className="text-danger font-weight-bold"
                            href="/home"
                            eventKey="link-1"
                        >
                            Agregar tarea <BsFolderPlus className="text-uppercase" />
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <AddTaskCard
                    title={title}
                    name={name}
                    description={description}
                    onSubmit={onSubmit}
                    onChange={onChange}
                    formTitle = {formTitle}
                    formDescription = {formDescription}
                    show={show}
                />
            </div>
        );
    }
}
export default NavBar;