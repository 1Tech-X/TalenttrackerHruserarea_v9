import React from 'react'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { Container, Row, Col, Card, Tabs, Tab, Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Settings = () => {
  return (
    <div>
        <Sidebar />
        <NavbarMenu />
        <Container className='myprofile'>
            <Row>
                <Col sm={3}>
                    <div className='sidebar'>
                        <Card>
                            <Card.Body>
                                <ul className='sidebarMenuItem'>
                                    {/* <li ><i className="fas fa-user me-2" /><Link to="/MyProfile" >My Profile</Link></li> */}
                                    <li ><i className="fas fa-user me-2"></i><Link to="/Admin-Assigned-Information" >My Profile</Link></li>
                                    <li className='active'><i className="fas fa-cog me-2"></i> <Link to="/Settings" className='active-link'>Settings</Link></li>
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
                    <Card.Title className='mb-4'>Settings</Card.Title>
                    <Tabs defaultActiveKey="Notify Me" id="uncontrolled-tab-example" className=" shadow">
                <Tab eventKey="Notify Me" title="Notify Me">
                   
                       <h5 className='mt-2'>Notification Settings</h5>
                       <Form>
                       <Form.Group  controlId="exampleForm.ControlTextarea1">
                            <Form.Label><small>Email addresses</small></Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter Email Addresses Seperated by comma" />
                        </Form.Group>
                        <small><p className='text-muted mb-0 mt-0' style={{fontSize:'0.75rem'}}>Notifications will be sent to these email addresses.</p></small>
                        <Form.Group  controlId="exampleForm.ControlTextarea1">
                            <Form.Label><small>Administrator Email addresses</small></Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter Email Addresses Seperated by comma" />
                        </Form.Group>
                     <p className='text-muted mb-0 mt-0' style={{fontSize:'0.75rem'}}>Weekly Statistic of your account will be sent to these email addresses.</p>
                        <Button variant='primary'>save</Button>
                       </Form>
                   
                </Tab>
                <Tab eventKey="Email Setup" title="Email Setup">
                    <h5 className='mt-2 mb-2'>Email Setup</h5>
                   <Form>
                       <Row>
                           <Col xs={6}>
                            <Form.Group className='mb-3'>
                                <Form.Label>SMTP Hostname</Form.Label>
                                <Form.Control type="text" value="mail.example.com" name="hostname" />
                            </Form.Group>
                           </Col>
                           <Col xs={6}>
                           <Form.Group className='mb-3'>
                                <Form.Label>SMTP Usename</Form.Label>
                                <Form.Control type="email" value="user@example.com" name="username" />
                            </Form.Group>
                               </Col>
                       </Row>
                       <Row>
                           <Col xs={6}>
                            <Form.Group className='mb-3'>
                                <Form.Label>SMTP Password</Form.Label>
                                <Form.Control type="password" value="12344" name="pass" />
                            </Form.Group>
                           </Col>
                           <Col xs={6}>
                           <Form.Group className='mb-3'>
                                <Form.Label>SMTP Post (Default: 25)</Form.Label>
                                <Form.Control type="number" value="124" name="post" />
                            </Form.Group>
                               </Col>
                       </Row>
                       <Row>
                           <Col xs={6}>
                            <Form.Group className='mb-3'>
                                <Form.Label>SMTP Sender Name</Form.Label>
                                <Form.Control type="text" value="prashant" name="sender" />
                            </Form.Group>
                           </Col>
                           <Col xs={6}>
                           <Form.Group className='mb-3'>
                                <Form.Label>SSL?</Form.Label>
                                    <div className='d-flex'>
                                    <Form.Check type='radio' label="yes" value="yes" />
                                    <Form.Check type='radio' label="No" value="no" />
                                    </div>
                            </Form.Group>
                               </Col>
                       </Row>
                       <Button className='mt-3'>Save</Button>
                   </Form>
                   </Tab>

                </Tabs>
                    </Card.Body>
                </Card>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Settings