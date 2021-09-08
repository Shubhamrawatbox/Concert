import React from "react"
import { Row, Col, Form, Button } from "react-bootstrap"
import './EmailForm.scss'

const EmailSecttion = () => {
  return (
    <div className="Email">
      <Form style={{ marginTop: "2rem" }}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="email" placeholder="Enter Number" />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Button
              variant="primary"
              type="submit"
              size="sm"
              style={{ marginTop: "2rem" }}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default EmailSecttion
