import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import {BrowserRouter} from 'react-router-dom'
import { Context } from '.'
import AppRouter from './components/AppRouter'
import Navbar from './components/Navbar'
import { check } from './http/userAPI'

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(()=>{
      check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
      }).finally(()=>setLoading(false))

    }, 1000) 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if(loading){
    return <Spinner animation={'border'}/>
  }

  return (
    <BrowserRouter>
      <Navbar/>
        <AppRouter/>
    </BrowserRouter>
  )
})

export default App

