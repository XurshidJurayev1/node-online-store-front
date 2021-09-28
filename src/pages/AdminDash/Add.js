import React, { useState } from 'react'
import {Container, Button} from 'react-bootstrap'
import CreateBrand from '../../components/modals/CreateBrand'
import CreateDevice from '../../components/modals/CreateDevice'
import CreateType from '../../components/modals/CreateType'

const Add = () => {
    const [brandVisiable, setBrandVisiable] = useState(false)
    const [typeVisiable, setTypeVisiable] = useState(false)
    const [deviceVisiable, setDeviceVisiable] = useState(false)
    return (
        <Container className='d-flex flex-column'>
            <Button 
                variant={"outline-dark"} 
                className=' p-12' 
                onClick={()=>setTypeVisiable(true)}>
                Добавить типь
            </Button>
            <Button 
                variant={"outline-dark"} 
                className='mt-4 p-12' 
                onClick={()=>setBrandVisiable(true)}>
                Добавить бренд
            </Button>
            <Button 
                variant={"outline-dark"} 
                className='mt-4 p-12' 
                onClick={()=>setDeviceVisiable(true)}>
                Добавить устройство
            </Button>
            <CreateBrand show={brandVisiable} onHide={()=>setBrandVisiable(false)}/>
            <CreateDevice show={deviceVisiable} onHide={()=>setDeviceVisiable(false)}/>
            <CreateType show={typeVisiable} onHide={()=>setTypeVisiable(false)}/>
        </Container>
    )
}

export default Add
