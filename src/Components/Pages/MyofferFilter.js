import React from 'react'
import { Container, Form, Button , Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'

const MyofferFilter = () => {
  return (
    <div>
        <NavbarMenu />
        <Sidebar />
        <div className='people'>
          <h4 className='mt-5 text-muted text-center mt-5'>My Offer Filter</h4>
          <Container className='search-contact'>
              <Form>
              <div className='p-3 form-div' >
                <h5>Today’s date-time </h5>
                <Row>
                    <Col sm={6}>
                        <Form.Group className='mb-2'>
                            <Form.Label className='fw-bold'>From</Form.Label>
                            <div className='d-flex'>
                            <Form.Control type='date'/>
                            <Form.Control type='time'/>
                            </div>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className='mb-2'>
                            <Form.Label className='fw-bold'>To</Form.Label>
                            <div className='d-flex'>
                            <Form.Control type='date'/>
                            <Form.Control type='time'/>
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <Form.Group className='mb-2'>
                            <Form.Label className='fw-bold'>Candidate name</Form.Label>
                            <div className='d-flex'>
                            <Form.Control type='text' defaultValue="prashant Kumar" />
                            </div>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className='mb-2'>
                            <Form.Label className='fw-bold'>JD number</Form.Label>
                            <div className='d-flex'>
                            <Form.Control type='number' defaultValue="001"/>
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
              </div>
              <div className='d-flex justify-content-center title-absolute py-4 border-top'>
                        <Button variant='secondary' className='mx-3 text-white'>Reset</Button>
                        <Link to='/Myoffer'><Button variant='primary' className='mx-3 text-white'>Search</Button></Link>
                        <Link to='/'><Button variant='danger' className='mx-3 text-white'>Colse</Button></Link>
            </div>
              </Form>

          </Container>
          </div>
    </div>
  )
}

export default MyofferFilter