import React from 'react'
import {Container,  Row, Col} from 'react-bootstrap'
import Add from './AdminDash/Add'
import Items from './AdminDash/Items'


const Admin = () => {
   
    return (
        <Container className={"mt-4"} >
            <Row>
                <Col  md={4}  >
                    <Add/>
                </Col>
                <Col  md={8}>
                    <Row>
                        <Items/>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Admin
