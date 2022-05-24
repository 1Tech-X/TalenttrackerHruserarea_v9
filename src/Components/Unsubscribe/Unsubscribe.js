import React from 'react'
import { Container, Row, Col, Card, Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
const Unsubscribe = () => {
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
                                    {/* <li ><i className="fas fa-user me-2" /><Link to="/MyProfile" >My Profile</Link></li> */}
                                    <li><i className="fas fa-user me-2"></i><Link to="/Admin-Assigned-Information">My Profile</Link></li>
                                    <li><i className="fas fa-cog me-2"></i> <Link to="/Settings">Settings</Link></li>
                                    <li ><i className="fas fa-lock me-2" /><Link to="/ChangePassword" >Change Password</Link></li>
                                    <li className='active'><i className="fas fa-sign-out-alt me-2"></i><Link to="/Unsubscribe" className='active-link'>Unsubscribe</Link></li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col sm={9}>
                <div className='right-side'>
                <Card>
                    <Card.Body>
                        <Card.Title className='mb-4'>Unsubscribe</Card.Title>
                        <p>You can anytime re-subscribe the account in future. Request to leave us a feedback.</p>
                        <Form>
                            <Form.Check label="Found a better product" value="Found a better product" className='mb-2'/>
                            <Form.Check label="Not using anymore" value="Not using anymore" className='mb-2'/>
                            <Form.Check label="Cant find companies or contacts" value="Cant find companies or contacts" className='mb-2'/>
                            <Form.Check label="Its too expensive" value="Its too expensive" className='mb-2'/>
                            <Form.Check label="Data quality issues" value="Data quality issues" className='mb-2'/>
                            <Form.Check label="Found bugs in the product" value="Found bugs in the product" className='mb-2'/>
                            <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} placeholder="Feedback(Optional)" />
                            </Form.Group>
                            <Button variant='primary'>Unsubscribe</Button>
                        </Form>
   
                    </Card.Body>
                </Card>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Unsubscribe