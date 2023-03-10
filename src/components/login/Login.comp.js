import React from 'react';

import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { Box } from "@chakra-ui/react"

export const Login = ({handleOnChange,handleOnSubmit,email,formSwitcher,pass}) => {
    return (
        <div>
        <Container>
            <Row>
                <Col>
                    <h1 className='text-info text-center'>Client Login</h1>
                    <br />
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type='email'
                                name='email'
                                value={email}
                                onChange={handleOnChange}
                                placeholder='Enter Email'
                                required
                            />
                        </Form.Group>

                        
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                name='password'
                                value={pass}
                                onChange={handleOnChange}
                                placeholder='Enter Password'
                                required
                            />
                        </Form.Group>

                        <br />

                        <Button type='submit' className='btn'>
                            Login
                        </Button>

                    </Form>
                    <hr />
                </Col>
            </Row>

            <Row>
                <Col>
                    <a href='#!' onClick={()=>formSwitcher('reset')}>Forget password?</a>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

Login.propTypes={
    handleOnChange: PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    password:PropTypes.string.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,


}

