import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
import {  Col, Button, Container, Row } from 'react-bootstrap'
import { Context } from '../..'
// import { deleteBrands } from '../../http/DeviceAPI'


const Items = observer(() => {
    const {device} = useContext(Context)

    const [type, setType] = useState(false)
    const [brand, setBrand] = useState(false)
    const [dev, setDev] = useState(false)
    console.log(device);

    const removeBrand = (id) => {
        // deleteBrands(id).then(data => null)
        // setBrand(brand.filter(i => i.id !== id))
        // device.setRemoveBrand(id)
        console.log(id);
        
    }

    const removeType = () => {

    }

    const removeDevice = () => {

    }
    return (
        <Container>
            <Col className="d-flex justify-content-between align-itmes-center mt-2" >
                <Button 
                    variant={"outline-dark"}
                    style={{cursor: 'pointer'}}
                    key={brand.id}
                    className="p-3"
                    onClick={()=> {
                        setType(!type)
                        setBrand(false)
                        setDev(false)
                    } }
                    border={ "light" }>
                    Типы
                </Button>
                <Button 
                    variant={"outline-dark"}
                    style={{cursor: 'pointer'}}
                    key={brand.id}
                    className="p-3"
                    onClick={()=> {
                        setType(false)
                        setBrand(!brand)
                        setDev(false)
                    } }
                    border={ "light" }>
                    Бренды
                </Button>
                <Button 
                    variant={"outline-dark"}
                    style={{cursor: 'pointer'}}
                    key={brand.id}
                    className="p-3"
                    onClick={()=> {
                        setType(false)
                        setBrand(false)
                        setDev(!dev)
                    } }
                    border={ "light" }>
                    Устройствы
                </Button>
            </Col>
            <Row>
                <Col>
                    { brand && device.brands.map(brand => 
                        <Col 
                            className='d-flex justify-content-around mt-2 p-2'
                            key={brand.id} >
                            <p>{brand.name} </p>
                            <Button onClick={() => removeBrand(brand.id)} >delete</Button> 
                        </Col>
                        )}
                    {type && device.types.map(type=>
                        <Col 
                            className='d-flex justify-content-around mt-2 p-2'
                            key={type.id} >
                            <p>{type.name} </p>
                            <Button onClick={() => removeType(type.id)} >delete</Button> 
                        </Col>
                    )}
                    {dev && device.devices.map(device=>
                        <Col 
                            className='d-flex justify-content-around mt-2 p-2'
                            key={device.id} >
                            <p>{device.name} </p>
                            <Button onClick={() => removeDevice(device.id)} >delete</Button> 
                        </Col>
                    )}
                </Col>
            </Row>
        </Container>
    )
})

export default Items
