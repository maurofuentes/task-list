import React from 'react';
import {Nav} from 'react-bootstrap';

export default function NavBar(){

    return(
        <div>
         
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
               
                
            </Nav>
        </div>

    );
}