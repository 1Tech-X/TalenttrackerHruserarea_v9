import React from 'react'
import { Container, Row, Col, Card, Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import './MyProfile.css'
const MyProfile = () => {
  return (
    <div>
        <NavbarMenu />
        <Sidebar />
        <Container className='myprofile'>
            <Row>
                <Col sm={3}>
                    <div className='sidebar'>
                        <Card>
                            <Card.Body>
                                <ul className='sidebarMenuItem'>
                                    <li className='active'><i className="fas fa-user me-2" /><Link to="/MyProfile" className='active-link'>My Profile</Link></li>
                                    <li><i className="fas fa-file-invoice me-2"></i><Link to="/Admin-Assigned-Information">Admin Assigned</Link></li>
                                    <li><i className="fas fa-cog me-2"></i> <Link to="/Settings">Settings</Link></li>
                                    <li><i className="fas fa-lock me-2" /><Link to="/ChangePassword">Change Password</Link></li>
                                    <li><i className="fas fa-sign-out-alt me-2"></i><Link to="/Unsubscribe">Unsubscribe</Link></li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col sm={9}>
                <div className='right-side'>
                <Card>
                    <Card.Body>
                        <Card.Title className='mb-4'>My Profile</Card.Title>
                        <form>
                            <Row>
                                <Col xs={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control placeholder="Disabled input" value="User First Name" disabled />
                                </Form.Group>
                                </Col>
                                <Col xs={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control placeholder="Disabled input" value="User Last Name" disabled />
                                </Form.Group>
                                    
                                    </Col>
                                    <Col xs={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control placeholder="Disabled input" value="user@example.com" disabled />
                                </Form.Group>
                                </Col>
                                <Col xs={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Company</Form.Label>
                                    <Form.Control name="company"/>
                                </Form.Group>
                                    
                                    </Col>
                                    <Col xs={2}>
                                    <Form.Group className="mb-3">
                                    <Form.Label><small>Country Code</small></Form.Label>
                                    <Form.Control value="+91"/>
                                </Form.Group> 
                                    </Col>
                                    <Col xs={10}>
                                    <Form.Group className="mb-3">
                                    <Form.Label><small>Phone <span className='text-muted'> (You may receive an otp for payment verification on this number)</span></small></Form.Label>
                                    <Form.Control value="987655432"/>
                                </Form.Group>
                                    </Col>
                                    
                            </Row>
                            <Button variant='primary'><i className="fas fa-save me-2"></i>save</Button>
                        </form>
                    </Card.Body>
                </Card>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default MyProfile