import React, {useState} from 'react'
import { Container, Row, Col, Card, Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
const ChangePassword = () => {
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
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
                                    <li className='active'><i className="fas fa-lock me-2" /><Link to="/ChangePassword" className='active-link'>Change Password</Link></li>
                                    <li ><i className="fas fa-sign-out-alt me-2"></i><Link to="/Unsubscribe" >Unsubscribe</Link></li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col sm={9}>
                <div className='right-side'>
                <Card>
                    <Card.Body>
                        <Card.Title className='mb-4'>Change Password</Card.Title>
                            <Form>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Current Password</Form.Label>
                                <Form.Control type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password"  />
                     <button className="btn btn-outline-primary" onClick={togglePassword}>
                     { passwordType==="password"? <i className="fa fa-eye-slash"></i> :<i className="fa fa-eye"></i> }
                     </button>

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>New Password</Form.Label>
                                <Form.Control type="password"  />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password"  />
                            </Form.Group>
                            <Button variant='primary'>Change Password</Button>
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

export default ChangePassword