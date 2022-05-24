import React, { useState } from 'react'
import { Container, Row, Col, Card, Form, Button, Tab, Tabs, Dropdown} from 'react-bootstrap'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { Navigate } from 'react-router-dom'
import './MyProfile.css'
const Profile = (props) => {
    const token = localStorage.getItem("token")
    let loggedIn = true
    if(token ==  null){
      loggedIn= false
    }
   
 
const [select, setselect] = useState(false);
const handleSelect = () => {
    setselect(!select)
}
const [select1, setselect1] = useState(true);
const handleSelect1 = () => {
    setselect1(!select1)
}
const handleSelect2 = () => {
    setselect1('showticked')
}

  return (
    <div>
        {loggedIn? <></>: <Navigate to="/"/>}
         <Sidebar />
        <NavbarMenu />
        <Container className='myprofile'>
            <Row>
                <Col sm={12}>
                <div className='right-side'>
                <Card>
                    <Card.Body>
                      
                    <Tabs defaultActiveKey="Admin assigned Information" id="uncontrolled-tab-example" className="shadow">
                <Tab eventKey="Admin assigned Information" title="Admin assigned Information">
                <Form>
                    <Row>
                        <Col xs={4}>
                       <Form.Group>
                           <Form.Label className='mt-2' >My User ID </Form.Label>
                           <Form.Control type='number' value="002" name="user_id" />
                       </Form.Group>
        
                        </Col>
                        <Col xs={4}>
                   
                       <Form.Group>
                           <Form.Label className='mt-2' >My category</Form.Label>
                           <Form.Control type='text' defaultValue="C" name="category"  />
                       </Form.Group>
                   
                        </Col>
                        <Col xs={4}>
                        
                       <Form.Group>
                           <Form.Label className='mt-2' >My official email ID  </Form.Label>
                           <Form.Control type='email' defaultValue="name@domain.com" name="user_id" />
                       </Form.Group>
                   
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                       
                       <Form.Group>
                           <Form.Label className='mt-2' >Default Email password </Form.Label>
                           <Form.Control type='password' value="123445" name="user_id" />
                       </Form.Group>
               
                        </Col>
                        <Col xs={6}>
                       <Form.Group>
                           <Form.Label className='mt-2' >No. of JDs I can lock per day-  </Form.Label>
                           <Form.Control type='number' defaultValue="1" name="category"disabled />
                       </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>

                       <Form.Group>
                           <Form.Label className='mt-2' >Admin’s CVs quality check </Form.Label>
                           <Form.Control type='text' defaultValue="No" name="cv_check" />
                       </Form.Group>
                        </Col>
                        <Col xs={6}>
                       <Form.Group>
                           <Form.Label className='mt-2' >Am I privileged to see the full content of JD before I pick/lock it?</Form.Label>
                           <Form.Control type='text' defaultValue="yes" name="jd_lock" />
                       </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>

                       <Form.Group>
                           <Form.Label className='mt-2' >What will be my designation in the email signature for client/candidate coordination</Form.Label>
                           <Form.Control type='text' defaultValue="Recruiter" name="designation"  />
                       </Form.Group>
                        </Col>
                        <Col xs={6}>
                       <Form.Group>
                           <Form.Label className='mt-2' >Allow user to remove candidate’s mobile number from the tracker sheet</Form.Label>
                           <Form.Control type='text'  name="removecandidate" />
                       </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>

                       <Form.Group>
                           <Form.Label className='mt-2' >Allow user to write special remarks, comments in the tracker sheet</Form.Label>
                           <Form.Control type='text'  name="specialremarks" />
                       </Form.Group>
                        </Col>
                        <Col xs={6}>
                       <Form.Group>
                           <Form.Label className='mt-2' >Am I allowed to give One candidate submissiont?</Form.Label>
                           <Form.Control type='text' defaultValue="No" name="candidatesubmissiont" />
                       </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Form.Group>
                                <Form.Label className='mt-2'>How many mobile numbers I can unlock in a day if I am using Talent Tracker’s Candidate Database</Form.Label>
                                <Form.Control type='number' defaultValue="25" name="numberunlock"  />
                            </Form.Group>
                            
                        </Col>
                        
                    </Row>
                    <div className='d-flex'>
                    <Button variant='primary' className='mt-3'>save</Button><Button variant='secondary' className='mt-3 mx-3' >edit</Button>
                    </div>
                    </Form>
                    
                </Tab>
                <Tab eventKey="personal information" title="Personal Information" >
                    <Form>
                        <Row>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type='text' value='Prashant' name="firstname" />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type='text' value='Kumar' name="lastname" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Personal Email</Form.Label>
                                    <Form.Control type='email' value='example@gmail.com' name="email" />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Phone No.</Form.Label>
                                    <Form.Control type='tel' value='12345678' name="phone" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Gender</Form.Label>
                                    <div className='d-flex'>
                                    <Form.Check type='radio' value='Male' name="gender" label="Male"  />
                                    <Form.Check type='radio' value='Female' name="gender" label="Female" />
                                    </div>
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row>
                            <Col xs={12}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Current Location</Form.Label>
                                    <Form.Control as="textarea" rows={3} name="address" value="patna, Bihar"/>
                                </Form.Group>
                            </Col>
                            
                        </Row>
                        <Button variant='primary'>Save</Button>
                    </Form>
                   
                </Tab>
                <Tab eventKey="work information " title="work information" >
                   <Form>
                    <Row>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Highest qualification</Form.Label>
                           <Form.Control type='text' value='mba' name="qualification" />
                       </Form.Group>
                        </Col>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Graduation</Form.Label>
                           <Form.Control type='text' name="graduation" />
                       </Form.Group>        
                        </Col>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Date of birth</Form.Label>
                           <Form.Control type='Date' name="dob" />
                       </Form.Group>        
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Languages known </Form.Label>
                           <Form.Control type='text' value='Hindi, English' name="lang" />
                       </Form.Group>
                        </Col>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Attach adhar card</Form.Label>
                           <Form.Control type='file' name="adhar" />
                       </Form.Group>        
                        </Col>
                        <Col xs={4} className={select1?'showticked':'showticked1'}>
                        <Form.Group className='mb-3 mt-2' >
                           <Form.Label>Certificate of incorporation (if consultancy)</Form.Label>
                           <Form.Control type='file' name="coi" />
                       </Form.Group>        
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4} className={select1?'showticked':'showticked1'}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>GST number </Form.Label>
                           <Form.Control type='number' value='12345566' name="gnumber" />
                       </Form.Group>
                        </Col>
                        <Col xs={4} className={select1?'showticked':'showticked1'}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>GST certificate </Form.Label>
                           <Form.Control type='file' name="gcertificate" />
                       </Form.Group>        
                        </Col>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>No. of years Recruitment experience (India/international)</Form.Label>
                           <Form.Control type='number' name="no_ofexperience" value="4" />
                       </Form.Group>        
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Preference</Form.Label>
                           <div className='d-flex'>
                           <Form.Check type='radio'  name="prefrence" label="IT"/>
                           <Form.Check type='radio'  name="prefrence" label="Non IT" className='mx-3'/>
                           </div>
                       </Form.Group>
                        </Col>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Currently employed for some organization as a full time employee</Form.Label>
                           <div className='d-flex'>
                           <Form.Check type='radio'  name="currentlyemployed" label="Yes"/>
                           <Form.Check type='radio'  name="currentlyemployed" label="No" className='mx-3'/>
                           </div>
                       </Form.Group>        
                        </Col>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Are you a consultancy or an individual? </Form.Label>
                           <div className='d-flex'>
                           <Form.Check type='radio'  name="consultancy" label="Yes" onClick={handleSelect1} />
                           <Form.Check type='radio'  name="consultancy" label="No" className='mx-3'onClick={handleSelect2} />
                           </div>
                       </Form.Group>        
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Own portal available? </Form.Label>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="light">
                                Choose
                                </Dropdown.Toggle>

                                <Dropdown.Menu variant="dark">

                                <Dropdown.Item onClick={handleSelect}>Yes</Dropdown.Item>
                                <Dropdown.Item onClick={handleSelect }>No</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>
                            <div className={select?'showselect1':'showselect'}>
                           <Form.Select type='text'  name="Ownportal" className='mt-3'>
                               <option value="Naukri">Naukri</option>
                               <option value="Monsterkkb">Monster</option>
                               <option value="Shine">Shine</option>
                               <option value="Times jobs">Times jobs</option>
                               <option value="etc">etc</option>
                           </Form.Select>
                           </div>
                       </Form.Group>
                        </Col>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Preferred industries to take JDs</Form.Label>
                           <Form.Select name='preferredindustries'>
                               <option value="yes">Yes</option>
                               <option value="no">No</option>
                           </Form.Select>
                       </Form.Group>        
                        </Col>
                        <Col xs={4}>
                        <Form.Group className='mb-3 mt-2'>
                           <Form.Label>Handle PAN India JDs or only regional?</Form.Label>
                           <div className='d-flex'>
                           <Form.Check type='radio'  name="consultancy" label="Yes"/>
                           <Form.Check type='radio'  name="consultancy" label="No" className='mx-3'/>
                           </div>
                       </Form.Group>        
                        </Col>
                    </Row>
                    <Button className='mt-2'>Save</Button>
                   </Form>
                   </Tab>
                   <Tab eventKey="Bank Details" title="Bank Details" >
                   <Form>
                        <Row>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Name Of Bank</Form.Label>
                                    <Form.Control type='text' value='State Bank' name="bankname" />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Branch Location</Form.Label>
                                    <Form.Control type='text' value='Patna' name="branch" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Name as per bank account</Form.Label>
                                    <Form.Control type='text' value='Prashant' name="name" />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Phone No.</Form.Label>
                                    <Form.Control type='tel' value='12345678' name="phone" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Account No.</Form.Label>
                                    <Form.Control name="tel" value="1234-xxxx-xxxx" type='text' />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>IFSC</Form.Label>
                                    <Form.Control name="ifcc" value="SBIN0007" type='text' />
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row>
                        <Col xs={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Account type</Form.Label>
                                    <Form.Select name="accounttype">
                                        <option>Select</option>
                                        <option value="savings">Savings</option>
                                        <option value="Current">Current</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control as="textarea" rows={3} name="address" value="patna, Bihar"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant='primary'>Save</Button>
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

export default Profile