import React from 'react';

import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

export const ResetForm = ({handleOnChange,handleOnResetSubmit,email,formSwitcher}) => {
    return (
        <div>
        <Container>
            <Row>
                <Col>
                    <h1 className='text-info text-center'>Reset Form</h1>
                    <br />
                    <Form onSubmit={handleOnResetSubmit}>
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
                    <a href='#!' onClick={()=>formSwitcher('login')}>Login Now?</a>

                </Col>
            </Row>
        </Container>
        </div>
    )
}

ResetForm.propTypes={
    handleOnChange: PropTypes.func.isRequired,
    email:PropTypes.string.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired

}

