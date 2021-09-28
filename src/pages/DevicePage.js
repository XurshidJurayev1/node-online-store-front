import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Image, Row, Button } from 'react-bootstrap'
import star from '../assets/Star 1.png'
import { useParams } from 'react-router-dom'
import { fetchOneDevices } from '../http/DeviceAPI'


const DevicePage = () => {
    const [device, setDevice] = useState({info:[]})
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevices(id).then(data => setDevice(data))
    }, [])



    return (
        <Container className='mt-3'>
        <Row >
            <Col md={4}>
                <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
            </Col>
            <Col md={4}>
                <Row className="d-flex flex-column align-items-center" >
                    <h2 className='text-align-center'>{device.name}</h2>
                    <div 
                        className='d-flex justify-content-center align-items-center'
                        style={{background: `url(${star}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}>
                        {device.rating}
                    </div>
                </Row>
            </Col>
            <Col md={4}>
                <Card
                    className='d-flex flex-column align-items-center justify-content-center'
                    style={{width:300, height:300, fontSize:32, border: '5px solid lightgray'}}>
                    <h3>От:{device.price} руб.</h3>
                    <Button variant={"outline-dark"} >Добавить в корзину</Button>
                </Card>
            </Col>
        </Row>
        <Row className="d-flex flex-column m-3">
            <h2>Характеристики</h2>
            {device.info.map((info, index) => 
                <Row 
                    
                    key={info.id}  
                    style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: '10px'}}>
                    {info.title}: {info.description}
                </Row>    
            )}
        </Row>
        </Container>
    )
}

export default DevicePage
