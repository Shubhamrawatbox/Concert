import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { navigate } from "gatsby-link"

const Forms = () => {
  const [isAuth, setisAuth] = useState(false)
  const handleLogin = e => {
    setisAuth(true)
    e.preventDefault()
    setTimeout(() => {
      navigate("/dashboard")
    }, 3000)
  }
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="dark" type="submit" onClick={handleLogin} disabled={isAuth}>
        Login
      </Button>
    </Form>
  )
}

export default Forms
