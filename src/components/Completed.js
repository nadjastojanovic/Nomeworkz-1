import { Card } from "react-bootstrap";
import Faq from "react-faq-component";
import { Nav, Navbar,NavDropdown , Jumbotron,Container ,Form,Button,Col,Image,Row} from "react-bootstrap";
import {  Redirect } from "react-router-dom";
import Icofont from "react-icofont"
import { useState, useEffect } from "react"

function Completed(props){

    return (
        <>
                <div><Row>
                    <Col>Nome </Col>
                    <Col>Price</Col>
                    <Col>homeworkLevel</Col>
                    <Col>status</Col>
                    
                         </Row>
                         <hr></hr>
                         <hr></hr>
                         </div> 
        {props.orderArray.map(val => (
                
                
                <div>
                    <Row>
                <Col>{val.gnomeNickName}</Col>
                <Col>{val.price}</Col>
                <Col>{val.homeworkLevel}</Col>
                
                <Col> completed</Col>
                     </Row>
                <hr></hr>
                    </div>
              

                ))}
        </>
    )
}
export default Completed ;