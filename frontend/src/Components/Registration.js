import React from 'react'
import { Helmet } from 'react-helmet'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
export default function Registration() {
const handleSubmite=(e)=>{
  e.preventDefault();
}



  return (
    <div>
 <Helmet>
       
           <title>registration</title>
        </Helmet>

        <Form onSubmit={handleSubmite}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Firrst Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Confim Password</Form.Label>
        <Form.Control type="email" placeholder="Confirm Password" />
      </Form.Group>
      <Button type='submit'>Register</Button>
    </Form>
    </div>
  )
}
