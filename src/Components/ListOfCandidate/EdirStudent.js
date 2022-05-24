import React, {useState} from 'react'
import { Container, Form, Row, Col, Button, Table, Modal } from 'react-bootstrap'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { ToastContainer, toast } from 'react-toastify';

const EdirStudent = () => {
    const [checked, setchecked] = useState(false)
    const handleChecked = () => setchecked(!checked)
    const [showdropdown, setshowdropdown] =useState(false);
    const handleShowdropdown = () => 
      setshowdropdown(!showdropdown)
      const [show4, setShow4] = useState(false);
      const handleClose4 = () => setShow4(false);
      const handleShow4 = () => setShow4(true);
      const [show3, setShow3] = useState(false);
      const handleClose3 = () => setShow3(false);
      const handleShow3 = () => setShow3(true);
  return (
    <div>
        <ToastContainer position='top-center' />
       <NavbarMenu /> 
       <Sidebar />
       <Container style={{marginTop:"8rem"}}>
       <Form>
          <Row>
            <Col xs={4}>
              <Form.Group>
                <Form.Label className='fw-bold mb-3'>JD number </Form.Label>
                <Form.Control type="text" defaultValue="1" />
              </Form.Group>
            </Col>
            <Col xs={4}>
              <Form.Group>
                <Form.Label className='fw-bold mb-3'>Client name </Form.Label>
                <Form.Control type="text" defaultValue="Pkrs" />
              </Form.Group>
            </Col>
            <Col xs={4}>
              <Form.Group>
                <Form.Label className='fw-bold mb-3'>JD title  </Form.Label>
                <Form.Control type="text" defaultValue="testing" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold mb-3'>JD location </Form.Label>
                <Form.Control type="text" defaultValue="India" />
              </Form.Group>
            </Col>
            <Col xs={4}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold mb-3'>Recruiter ID  </Form.Label>
                <Form.Control type="text" defaultValue="001" />
              </Form.Group>
            </Col>
            <Col xs={4}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold mb-3'>Candidate name  </Form.Label>
                <Form.Control type="text" defaultValue="Prashant Kumar" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Form.Group className='mt-3'>
              <Form.Label className='fw-bold mb-3'>Current salary </Form.Label>
              <div className='d-flex'>
                <Form.Control type='text' placeholder='Please mention a break up of fix and variable salary component' />
                <Form.Select>
                  <option value="January">January</option>
                  <option value="feb">Feb</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </Form.Select>
                <Form.Select>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2021">2022</option>
                  <option value="2022">2020</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </Form.Select>
              </div>
              </Form.Group>

            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold mb-3' >Expected salary </Form.Label>
                <div className='d-flex'>
                  <Form.Control type='text' placeholder='Please mention expected salary (percentage or absolute value)' />
                  <Form.Select>
                    <option value="Negotiable">Negotiable</option>
                    <option value="Non-Negotiable">Non-Negotiable</option>
                  </Form.Select>
                </div>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Experience </Form.Label>
                <Form.Control type="text" placeholder='limit 500 characters' />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Education </Form.Label>
                <Form.Control type="text" placeholder='limit 500 characters' />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Current organization  </Form.Label>
                <Form.Control type="text" placeholder='limit 500 characters' />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Current location </Form.Label>
                <Form.Control as="textarea" rows={3} type="address" placeholder='limit 500 characters' />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Candidate mobile number </Form.Label>
                <Form.Control type="tel" placeholder='Phone Number' />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Notice period  </Form.Label>
                <Form.Select>
                  <option value='Immediate'>Immediate</option>
                  <option value='15 days'>15 days</option>
                  <option value='21 days '>21 days </option>
                  <option value='30 days'>30 days</option>
                  <option value='45 days'>45 days</option>
                  <option value='2 months'>2 months</option>
                  <option value='75 days'>75 days</option>
                  <option value='90 days'>90 days</option>

                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
            <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Negotiable to  </Form.Label>
                <Form.Select>
                  <option value='Immediate'>Immediate</option>
                  <option value='15 days'>15 days</option>
                  <option value='21 days '>21 days </option>
                  <option value='30 days'>45 days</option>
                  <option value='2 months'>2 months</option>
                  <option value='75 days'>75 days</option>

                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Non-Negotiable to </Form.Label>
                <Form.Select>
                  <option value='Immediate'>Non-Negotiable to</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
           <Form.Label className='mt-3 fw-bold'>JD sent to candidate</Form.Label>
           <div className='d-flex'>
            <Form.Check type="radio" label="Yes" Name="jdsent" value='Yes' />
            <Form.Check className='mx-3' type="radio" label="No" Name="jdsent" value='No' />
           </div>
            </Col>
            <Col xs={6}>
            <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Candidate availability for the interview </Form.Label>
                <Form.Select>
                  <option >Select</option>
                  <option value='Virtual/Telephonic- Any mutually decided time. (this week/next week)'> Virtual/Telephonic- Any mutually decided time. (this week/next week)</option>
                  <option value='F2F- Any mutually decided time (this week/next week)'>F2F- Any mutually decided time (this week/next week)</option>
                  <option value='Others'>Others</option>
                </Form.Select>
              </Form.Group>
              <Form.Label className='fw-bold mt-3 mb-3'> </Form.Label>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className="fw-bold">Recruiter’s remarks <i className="fas fa-info ms-3" style={{color:'blue'}} onClick={handleShow3}></i></Form.Label>
                <Form.Control type='text' name="remarks" placeholder='Remarks' />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Date and Time of adding a candidate</Form.Label>
                <div className='d-flex'>
                  <Form.Control type="date" />
                  <Form.Control type="time" />
                </div>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className={checked?'showcheckbox1':'showcheckbox'}>
              
              <div className=' mt-3 '>
                <Form.Check type="checkbox" label='Not working? ' className='mx-2' onClick={()=>{toast.error("Not working, immediate joiner")}}/>
                <Form.Check type="checkbox" label='Strong Need factor for change?' className='mx-2' onClick={()=>{toast.error("Found strong need factor for change")}}/>
                <Form.Check type="checkbox" label='Relocation case? ' className='mx-2' onClick={()=>{toast.warning("Relocation case")}} />
                <div className='d-flex'>
                <Form.Check type="checkbox" label='Career stability? ' className='mx-2' onClick={handleShowdropdown} /><span  style={{fontSize:'0.75rem', color:'blue'}}><i className='fas fa-info me-3' />This is not a mandatory field. It is optional</span>

                </div>
                <div className={showdropdown? 'showdropdown1': 'showdropdown'}>
                  <Form.Check type='checkbox' label="Has the candidate spent more than 3 years is the current organization?" className='mx-5 mt-3 mb-3 fw-bold'/>
                  <Form.Check type='checkbox' label="Candidate has worked with how many companies in last how many years?" className='mx-5 mt-3 fw-bold'/>
                  <span className='mx-5' style={{fontSize:'0.75rem', color:'blue'}}><i className='fas fa-info me-3' />This is not a mandatory field. It is optional</span>
                  <span className='mx-5 mb-5' style={{fontSize:'0.75rem', color:'green'}} onClick={handleShow4}><i className="fas fa-question me-3"></i>Guideline- what is called career stability?</span>
                </div>
                <Form.Check type="checkbox" label='Looking for role change, profile change/ growth?' className='mx-2'  />
                <Form.Check type="checkbox" label='Flexible for salary negotiation?' className='mx-2' />
                <Form.Check type="checkbox" label='Period negotiation? ' className='mx-2' />
                <Form.Check type="checkbox" label='flexible to attend rounds of interview? ' className='mx-2' />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Special comments</Form.Label>
              <Form.Control as="textarea" row={3} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Candidate ID </Form.Label>
                <Form.Control type='text' name="alphnumericid" placeholder='(8 digit alpha numeric ID generated by system)' />
              </Form.Group>
            </Col>
          </Row>
          <Button variant='success' className='mt-3' onClick={()=>{toast.dark("currently not update")}}>Update candidate</Button>
        </Form>
 
       </Container>
       {/* Modal for Recruiter Remarks */}
      <Modal show={show3} onHide={handleClose3} size='lg'>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
          <h5 className='mt-3 mb-3 text-center'>While talking to candidate, did you observe any specific traits out of below options? </h5>
          <div className='d-flex justify-content-center'>
          <Button variant='success' onClick={handleChecked}>Yes</Button>
        <Button variant="secondary" onClick={handleClose3} className="mx-3">
            Close
          </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
      {/* what is called career stability? */}
      <Modal show={show4} onHide={handleClose4} size='md'>
        <Modal.Header closeButton>
        What is called career stability?
        </Modal.Header>
        <Modal.Body>
          <Table responsive striped bordered>
            <thead>
              <tr>
                <th>No of Companies candidate has worked (including the current company)</th>
                <th>Total No. of total years of career (Please ignore First two years job changes, if any, if the candidate is having more than 10 years of total career)</th>
              </tr>
              
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Stable- irrespective of no. of years career</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Stable If 4 years or more</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Stable If 8 years or more</td>
              </tr>
              <tr>
                <td>4</td>
                <td>stable if 12 years or more</td>
              </tr>
              <tr>
                <td>5</td>
                <td>stable if 15 years or more</td>
              </tr>
              <tr>
                <td>6</td>
                <td>stable if 20 years or more</td>
              </tr>
              <tr>
                <td>7 or more</td>
                <td>Unstable</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose4} className="mx-3">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  
    </div>
  )
}

export default EdirStudent