import React from 'react'
import { useState, useEffect } from 'react'
import './Login.css'
import {Container, Row, Col, Button, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Login() {


const submitHandler = (e) => {
    if (
      Form.Control !==''
    ){
      e.preventDefault()
      window.location="/Home"
    } else {
      window.location='/'
    }

}

  return (
    <div className='login'>
      <Container>
        <Row>
          <Col style={{ marginTop: 200 }} >
            <h1> SH-75 Admin </h1>
            <p> Login to access your dashboard </p>          
          </Col>
          <Col style={{ marginTop: 200 }}>
            <Form onSubmit={submitHandler} >
              <Form.Group controlId='formEmail' className='mb-3'>
                <Form.Label> Email Address </Form.Label>
                <Form.Control type='email' placeholder='Example@email.com' ></Form.Control>
              </Form.Group>
              <Form.Group controlId='formPassword' className='mb-3' >
                <Form.Label> Password </Form.Label>
                <Form.Control type='password' placeholder='enter your password' ></Form.Control>
              </Form.Group>
              <Button variant='secondary' type='submit' > Log in </Button>
            </Form>
          </Col>
        </Row> 
      </Container>
    </div>
  )
}
