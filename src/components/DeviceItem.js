import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import star from '../assets/star.png'
import { DEVICE_ROUTE } from '../utils/consts'
const DeviceItem = ({device}, {brands}) => {
    const history = useHistory()
    return (
        <Col md={3} className={'mt-3'} onClick={()=> history.push(DEVICE_ROUTE + '/' + device.id)} >
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} />
                <div className='d-flex justify-content-between aligh-items-center'>
                    <div className='text-black-50'>{device.name}</div>
                    <div className='mt-1 d-flex align-items-center '>
                        <div>{device.rating}</div>
                        <Image width={16} height={16} src={star}/>
                    </div>
                </div>
                <div>{device.price}</div>
            </Card>
        </Col>
    )
}

export default DeviceItem
