import React, { useState, useEffect }  from 'react'
import {Container, Row, Col, Button, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import pic from './Assets/login.jpg'

export default function Login() {
const[form, setForm]= useState({})
const setField = (field, value) =>{
  setForm({
    ...form,
    [field]:value
  })
}


const submitHandler = (e) => {
      e.preventDefault()

      if (
        form.email ==='' &&
        form.password ===''
      ){window.location="/"}else{
        window.location='/Home'
      }
}

  return (
    <div className='login'>
      <Container>
      <h1> SH-75 Admin <p></p> </h1>
        <Row>
          <Col style={{ marginTop: 50 }} >
            <img src={pic} alt='' style={{width:400, height:300}} /> 
          </Col>
          <Col style={{ marginTop:100, backgroundColor:'black', borderRadius:10, width:250}}>
            <Form onSubmit={submitHandler} style={{width:250, height:250, margin:50}}>
              <Form.Group controlId='formEmail' className='mb-5'>
                <Form.Control type='email' placeholder='Email' value = {form.email} onChange={(e)=>setField('formEmail', e.target.value)} ></Form.Control>
              </Form.Group>
              <Form.Group controlId='formPassword' className='mb-5' >
                <Form.Control type='password' placeholder='enter your password' value = {form.password} onChange={(e)=>setField('formPassword', e.target.value)} ></Form.Control>
              </Form.Group>
              <Button variant='secondary' type='submit' > Log in </Button>
            </Form>
          </Col>
        </Row> 
      </Container>
    </div>
  )
}
