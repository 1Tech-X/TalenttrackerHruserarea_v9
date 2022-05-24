import React, {useState} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Table, Modal, Button, Form ,Row, Col , Tooltip,OverlayTrigger} from 'react-bootstrap'
import './MyWorkSpace.css'
import { ToastContainer, toast } from 'react-toastify';
import Pdf from "../pdf/pdf1.pdf"
import { Link } from 'react-router-dom'
import CreatableSelect from 'react-select/creatable';
import { ActionMeta, OnChangeValue } from 'react-select';



const MyWorkSpace = () => {
  const options = [
    {label:"Virtual/Telephonic- Any mutually decided time. (this week/next week)", value:"Virtual/Telephonic- Any mutually decided time. (this week/next week)"},
    {label:"F2F- Any mutually decided time (this week/next week)", value:"F2F- Any mutually decided time (this week/next week)"}
  ]
  const   handleChange = (
    newValue: OnChangeValue<ColourOption, false>,
    actionMeta: ActionMeta<ColourOption>
  ) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
const   handleInputChange = (inputValue: any, actionMeta: any) => {
    console.group('Input Changed');
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 const [checked, setchecked] = useState(false)
 const handleChecked = () => setchecked(!checked)
 const [show1, setShow1] = useState(false);
 const handleClose1 = () => setShow1(false);
 const handleShow1 = () => setShow1(true);
 const [show2, setShow2] = useState(false);
 const handleClose2 = () => setShow2(false);
 const handleShow2 = () => setShow2(true);
 const [show3, setShow3] = useState(false);
 const handleClose3 = () => setShow3(false);
 const handleShow3 = () => setShow3(true);
 const [showdropdown, setshowdropdown] =useState(false);
 const handleShowdropdown = () => 
   setshowdropdown(!showdropdown)
   const [show4, setShow4] = useState(false);
   const handleClose4 = () => setShow4(false);
   const handleShow4 = () => setShow4(true);
   const [show5, setShow5] = useState(false);
   const handleClose5 = () => setShow5(false);
   const handleShow5 = () => setShow5(true);
  const [showskill, setshowskill]=useState(false);
  const handleShowskill = ()=> setshowskill(!showskill)
  return (
    <div >
     
      <Sidebar />
      <NavbarMenu />
      <ToastContainer position='top-center' />
      <Container className='myworkspace'>
        <h5 className='mt-5 fw-bold text-center'>My Workspace</h5>
      </Container>
      <div className='jd-wraper'>
      <Container className='table-data' fluid>
        <Table className='data-table' hover>
          <thead >
            <tr>
              <th >JD number</th>
              <th>User ID/user name</th>
              <th>Job Description</th>
              <th>Add candidate </th>
              <th>JD details</th>
              <th>Terms of JD</th>
              <th>List of candidates</th>
              <th>Button-create<br></br> tracker sheet</th>
              <th>Submit</th>
              <th>No. of <br></br>submissions</th>
              <th>Status</th>
              <th>Date -time of submission</th>
              <th>Feedback from client</th>
              <th>Offer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>user001</td>
              <td className='fw-bold'><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a> Pdf Attachment</td>
              <td className='add-candidate'><i className="fas fa-user-plus" onClick={handleShow}></i></td>
              <td className='position'>Mahindra & Mahindra Ltd.<br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Website</Tooltip>}><a href='https://talenttrackerhr.in/'><i className="fas fa-globe me-2"></i></a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">LinkendIn</Tooltip>}><a href='https://www.linkedin.com/login'><i className="fab fa-linkedin ms-2 me-2"></i></a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All Information</Tooltip>}><i className="fas fa-eye ms-2 " onClick={handleShow1}></i></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Open Client Details</Tooltip>}><i className='fas fa-user ms-2'></i></OverlayTrigger></span> </td>
              <td className='text-center'><i className="fas fa-eye " onClick={handleShow5}></i></td>
              <td className='text-center'><Link to="/ListOfCandidate"><i className="fas fa-list " ></i></Link></td>
              <td className='text-center'><i className="fas fa-chart-area"></i></td>
              <td><Link to="/submit"><Button size='sm'><i className="fas fa-at"></i></Button></Link></td>
              <td>10</td>
              <td className='jdstatus'><Button variant='danger' className='me-2'>Pending delivery</Button></td>
              <td>19-05-2022 7:00.PM</td>
              <td>Good</td>
              <td><Button variant='outline-danger' size='sm' onClick={handleShow2}><i className="fas fa-gift"></i> Offer</Button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>user002</td>
              <td className='fw-bold'><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a> Pdf Attachment</td>
              <td className='add-candidate'><i className="fas fa-user-plus" onClick={handleShow}></i></td>
              <td className='position'>Mahindra & Mahindra Ltd.<br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Website</Tooltip>}><a href='https://talenttrackerhr.in/'><i className="fas fa-globe me-2"></i></a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">LinkendIn</Tooltip>}><a href='https://www.linkedin.com/login'><i className="fab fa-linkedin ms-2 me-2"></i></a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All Information</Tooltip>}><i className="fas fa-eye ms-2 " onClick={handleShow1}></i></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Open Client Details</Tooltip>}><i className='fas fa-user ms-2'></i></OverlayTrigger></span> </td>
              <td className='text-center'><i className="fas fa-eye " onClick={handleShow5}></i></td>
              <td className='text-center'><i className="fas fa-list " ></i></td>
              <td className='text-center'><i className="fas fa-chart-area"></i></td>
              <td></td>
              <td>10</td>
              <td className='jdstatus'><Button variant='danger' className='me-2'>Pending delivery</Button></td>
              <td>19-05-2022 7:01.PM</td>
              <td>Good</td>
              <td><Button variant='outline-success' size='sm' onClick={handleShow2}><i className="fas fa-gift"></i> Offer</Button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>user003</td>
              <td className='fw-bold'><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a> Pdf Attachment</td>
              <td className='add-candidate'><i className="fas fa-user-plus" onClick={handleShow}></i></td>
              <td className='position'>Mahindra & Mahindra Ltd.<br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Website</Tooltip>}><a href='https://talenttrackerhr.in/'><i className="fas fa-globe me-2"></i></a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">LinkendIn</Tooltip>}><a href='https://www.linkedin.com/login'><i className="fab fa-linkedin ms-2 me-2"></i></a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All Information</Tooltip>}><i className="fas fa-eye ms-2 " onClick={handleShow1}></i></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Open Client Details</Tooltip>}><i className='fas fa-user ms-2'></i></OverlayTrigger></span> </td>
              <td className='text-center'><i className="fas fa-eye " onClick={handleShow5}></i></td>
              <td className='text-center'><i className="fas fa-list " ></i></td>
              <td className='text-center'><i className="fas fa-chart-area"></i></td>
              <td></td>
              <td>16</td>
              <td className='jdstatus'><Button style={{backgroundColor:'pink', color:'black', border:'none'}}>JD successfully closed</Button></td>
              <td>19-05-2022 7:04.PM</td>
              <td>Good</td>
              <td><Button variant='warning'size='sm' onClick={handleShow2}><i className="fas fa-gift"></i> Offer</Button></td>
            </tr>
            <tr>
              <td>4</td>
              <td>user004</td>
              <td className='fw-bold'><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a> Pdf Attachment</td>
              <td className='add-candidate'><i className="fas fa-user-plus" onClick={handleShow}></i></td>
              <td className='position'>Mahindra & Mahindra Ltd.<br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Website</Tooltip>}><a href='https://talenttrackerhr.in/'><i className="fas fa-globe me-2"></i></a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">LinkendIn</Tooltip>}><a href='https://www.linkedin.com/login'><i className="fab fa-linkedin ms-2 me-2"></i></a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All Information</Tooltip>}><i className="fas fa-eye ms-2 " onClick={handleShow1}></i></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Open Client Details</Tooltip>}><i className='fas fa-user ms-2'></i></OverlayTrigger></span> </td>
              <td className='text-center'><i className="fas fa-eye " onClick={handleShow5}></i></td>
              <td className='text-center'><i className="fas fa-list " ></i></td>
              <td className='text-center'><i className="fas fa-chart-area"></i></td>
              <td></td>
              <td>14</td>
              <td className='jdstatus'><Button >Open-Rework</Button><br></br>Client changed the JD criteria</td>
              <td>19-05-2022 7:00.PM</td>
              <td>Good</td>
              <td><Button variant='success' size='sm' onClick={handleShow2}><i className="fas fa-gift"></i> Offer</Button></td>
            </tr>
            <tr>
              <td>5</td>
              <td>user005</td>
              <td className='fw-bold'><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a> Pdf Attachment</td>
              <td className='add-candidate'><i className="fas fa-user-plus" onClick={handleShow}></i></td>
              <td className='position'>Mahindra & Mahindra Ltd.<br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Website</Tooltip>}><a href='https://talenttrackerhr.in/'><i className="fas fa-globe me-2"></i></a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">LinkendIn</Tooltip>}><a href='https://www.linkedin.com/login'><i className="fab fa-linkedin ms-2 me-2"></i></a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All Information</Tooltip>}><i className="fas fa-eye ms-2 " onClick={handleShow1}></i></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Open Client Details</Tooltip>}><i className='fas fa-user ms-2'></i></OverlayTrigger></span> </td>
              <td className='text-center'><i className="fas fa-eye " onClick={handleShow5}></i></td>
              <td className='text-center'><i className="fas fa-list " ></i></td>
              <td className='text-center'><i className="fas fa-chart-area"></i></td>
              <td></td>
              <td>5</td>
              <td className='jdstatus'><Button variant='success'>Offer stage</Button></td>
              <td>19-05-2022 7:05.PM</td>
              <td>Good</td>
              <td><Button variant='danger' size='sm' onClick={handleShow2}><i className="fas fa-gift"></i> Offer</Button></td>
            </tr>
            <tr>
              <td>6</td>
              <td>user006</td>
              <td className='fw-bold'><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a> Pdf Attachment</td>
              <td className='add-candidate'><i className="fas fa-user-plus" onClick={handleShow}></i></td>
              <td className='position'>Mahindra & Mahindra Ltd.<br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Website</Tooltip>}><a href='https://talenttrackerhr.in/'><i className="fas fa-globe me-2"></i></a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">LinkendIn</Tooltip>}><a href='https://www.linkedin.com/login'><i className="fab fa-linkedin ms-2 me-2"></i></a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All Information</Tooltip>}><i className="fas fa-eye ms-2 " onClick={handleShow1}></i></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Open Client Details</Tooltip>}><i className='fas fa-user ms-2'></i></OverlayTrigger></span> </td>
              <td className='text-center'><i className="fas fa-eye " onClick={handleShow5}></i></td>
              <td className='text-center'><i className="fas fa-list " ></i></td>
              <td className='text-center'><i className="fas fa-chart-area"></i></td>
              <td></td>
              <td>9</td>
              <td className='jdstatus'><Button variant='warning' className='me-2'>open</Button></td>
              <td>19-05-2022 7:06.PM</td>
              <td>Good</td>
              <td><Button variant='secondary' size='sm' onClick={handleShow2}><i className="fas fa-gift"></i> Offer</Button></td>
            </tr>
            <tr>
              <td>7</td>
              <td>user007</td>
              <td className='fw-bold'><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a> Pdf Attachment</td>
              <td className='add-candidate'><i className="fas fa-user-plus" onClick={handleShow}></i></td>
              <td className='position'>Mahindra & Mahindra Ltd.<br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Website</Tooltip>}><a href='https://talenttrackerhr.in/'><i className="fas fa-globe me-2"></i></a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">LinkendIn</Tooltip>}><a href='https://www.linkedin.com/login'><i className="fab fa-linkedin ms-2 me-2"></i></a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All Information</Tooltip>}><i className="fas fa-eye ms-2 " onClick={handleShow1}></i></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Open Client Details</Tooltip>}><i className='fas fa-user ms-2'></i></OverlayTrigger></span> </td>
              <td className='text-center'><i className="fas fa-eye " onClick={handleShow5}></i></td>
              <td className='text-center'><i className="fas fa-list " ></i></td>
              <td className='text-center'><i className="fas fa-chart-area"></i></td>
              <td></td>
              <td>4</td>
              <td className='jdstatus'><Button variant='secondary'>Interview stage</Button></td>
              <td>19-05-2022 7:07.PM</td>
              <td>Good</td>
              <td><Button><i className="fas fa-gift" size='sm' onClick={handleShow2}></i> Offer</Button></td>
            </tr>
            
          </tbody>
        </Table>
      </Container>
      </div>
      {/* Add candidate Modal Box */}
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-user-plus me-3" ></i>Add candidate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Row>
            <Col xs={12}>
              <Form.Group className='mt-2 mb-2'>
                <Form.Label className='fw-bold'>Candidate ID </Form.Label>
                <Form.Control type='text' name="alphnumericid" placeholder='(8 digit alpha numeric ID generated by system)' />
              </Form.Group>
            </Col>
          </Row>
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
                <Form.Label className='fw-bold mb-3'>Current designation  </Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Form.Label className='fw-bold mb-3 mt-3'>Current salary <span><i className='fas fa-info-circle ms-2'/></span></Form.Label>
              <div className='d-flex'>
                <Form.Check label="Fix" /><span><i className='fas fa-info-circle me-2 ms-2 mt-1'/></span><span style={{fontSize:"0.85rem, ", color:"blue"}}>lacs / annum</span>
                <Form.Check label="Variable " className='mx-3' /><span><i className='fas fa-info-circle me-2 ms-2 mt-1'/></span><span style={{fontSize:"0.85rem, ", color:"blue"}}>lacs / annum</span>
                <Form.Check label="Total salary " className='mx-3' /><span><i className='fas fa-info-circle me-2 ms-2 mt-1'/></span><span style={{fontSize:"0.85rem, ", color:"blue"}}>lacs / annum</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={7}>
            <Form.Label className='mt-3 fw-bold'>Last Appraisal of the candidate </Form.Label>
              <div className='d-flex'>
                
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
                <Form.Control type="text"  />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Education </Form.Label>
                <Form.Control type="text"  />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Current organization  </Form.Label>
                <Form.Control type="text"  />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Current location </Form.Label>
                <Form.Control as="textarea" rows={3} type="address"  />
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
        
                <Form.Label className='fw-bold mt-3'>Candidate availability for the interview </Form.Label>
                {/* <Form.Select>
                  <option >Select</option>
                  <option value='Virtual/Telephonic- Any mutually decided time. (this week/next week)'> </option>
                  <option value='F2F- Any mutually decided time (this week/next week)'></option>
                  <option value='Others'>Others</option>
                </Form.Select> */}
                  
                        
                        <CreatableSelect
                                isMulti
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                options={options}
                            />
                            
                        
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
            <Col xs={12} >
              
              <div className=' mt-3  '>
                
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
                    <Row>
                      <Col sm={4} className="mx-5">
                      <Form.Label className='mt-2'>Work With:</Form.Label>
                  <Form.Select>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                  </Form.Select>
                      </Col>
                      <Col sm={4} className="mx-5">
                      <Form.Label className='mt-2'>Companies in last :</Form.Label>
                  <Form.Select>
                    <option value='1 year'>1 Year</option>
                    <option value='2 Years'>2 Years</option>
                    <option value='3 Years'>3 Years</option>
                    <option value='4 Years'>4 Years</option>
                    <option value='5 Years'>5 Years</option>
                    <option value='6 Years'>6 Years</option>
                    <option value='7 Years'>7 Years</option>
                    <option value='40 Years'>40 Years</option>
                  </Form.Select>
                      </Col>
                    </Row>
                </div>
                <Form.Check type="checkbox" label='Looking for role change, profile change/ growth?' className='mx-2'  />
                <Form.Check type="checkbox" label='Flexible for salary negotiation?' className='mx-2' />
                <Form.Check type="checkbox" label='Period negotiation? ' className='mx-2' />
                <Form.Check type="checkbox" label='flexible to attend rounds of interview? ' className='mx-2' />
                <Form.Check type="checkbox" label='Communication skills? ' className='mx-2' onClick={handleShowskill} />
                <div className={showskill? 'showskill1':'showskill'}>
                  <Form.Select>
                    <option value='Excellent'>Excellent</option>
                    <option value='Good'>Good</option>
                    <option value='Average'>Average</option>
                  </Form.Select>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Form.Group className='mt-3'>
                <Form.Label className='fw-bold'>Any special comments by user</Form.Label>
              <Form.Control as="textarea" row={3} />
              </Form.Group>
            </Col>
          </Row>

          <Button variant='success' className='mt-3'>Add candidate</Button>
        </Form>
 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal for jd details */}
      <Modal show={show1} onHide={handleClose1} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>JD Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
          <Col sm={6}>
          <h6 className='fw-bold mx-3 mb-3'>Current salary <span className='text-muted'>Rs 1000</span></h6>
          <h6 className='fw-bold mx-3 mb-3'>Last Appraisal of the candidate  <span className='text-muted'> 2022</span></h6>
          <h6 className='fw-bold mx-3 mb-3'>Expected salary  <span className='text-muted'>Rs 6 lacs per annum.</span></h6>
          <h6 className='fw-bold mx-3 mb-3'>Current salary <span className='text-muted'>$1000</span></h6>
          <h6 className='fw-bold mx-3 mb-3'>Negotiable</h6>
          </Col>
          <Col sm={6}>
            <h5 className='mx-2 mb-3'>Total experience <span className='text-muted'>4 Years</span></h5>
            <h5 className='mx-2 mb-3'>Education  <span className='text-muted'>MBA</span></h5>
            <h5 className='mx-2 mb-3'>Current organization  <span className='text-muted'>N/A</span></h5>
            <h6 className='fw-bold mt-5 '> <i className="fab fa-firefox me-2"></i> Website: </h6>
            <a href="https://example.com">https://example.com</a>
            <h6 className='fw-bold mt-5 mx-3'> <i className="fab fa-linkedin me-2"></i> LinkedIn: </h6>
            <a href="https://linkedin.com" className='mx-3'>https://linkedin.com</a>
            <h6 className='fw-bold mt-5 mb-3'> Position Details : <span className='text-muted'>Position Details Here</span></h6>
          </Col>
        </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal for offer by clients */}
      <Modal show={show2} onHide={handleClose2} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Offer By client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>JD number </Form.Label>
                  <Form.Control type='tel' defaultValue="01" />
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>User ID  </Form.Label>
                  <Form.Control type='text' defaultValue="001userId" />
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Candidate ID   </Form.Label>
                  <Form.Control type='tel' defaultValue="001" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Client ID  </Form.Label>
                  <Form.Control type='tel' defaultValue="10" />
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Offer candidate name </Form.Label>
                  <Form.Control type='text' defaultValue="Prashant Kumar" />
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Offered designation </Form.Label>
                  <Form.Control type='text' defaultValue="" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Candidate new work location </Form.Label>
                  <Form.Control as="textarea" />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Offered ctc </Form.Label>
                  <Form.Control type='text' defaultValue="" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={6}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Sign up rate </Form.Label>
                  <Form.Control type='text' />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>Base invoice value  </Form.Label>
                  <Form.Control type='text' defaultValue="" placeholder='offered ctc*sign up rate' />
                </Form.Group>
              </Col>
            
            </Row>
            <Row>
              <Col sm={4}>
                
                  <Form.Label className='fw-bold mb-3'>Offer accepted </Form.Label>
                    <div className='d-flex'>
                    <Form.Check type='radio' value="yes" name="offeraccepted" label="Yes" />
                  <Form.Check type='radio' value="No" name="offeraccepted" label="No" className='mx-3'/>
                    </div>
                
              </Col>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>DOJ </Form.Label>
                  <Form.Control type='date'  />
                </Form.Group>
              </Col>
              <Col sm={4}>
              <Form.Label className='fw-bold mb-3'>Resigned</Form.Label>
                    <div className='d-flex'>
                    <Form.Check type='radio' value="yes" name="Resigned" label="Yes" />
                  <Form.Check type='radio' value="No" name="Resigned" label="No" className='mx-3'/>
                    </div>
              </Col>
            </Row>
            <Row>
            <Col sm={4}>
              <Form.Label className='fw-bold mb-3'>Copy of resignation received </Form.Label>
                    <div className='d-flex'>
                    <Form.Check type='radio' value="yes" name="resignation" label="Yes" />
                  <Form.Check type='radio' value="No" name="resignation" label="No" className='mx-3'/>
                    </div>
              </Col>
              <Col sm={4}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>User incentives (will be calculated by formula if %)</Form.Label>
                  <Form.Control type='number' placeholder='' />
                  <p className='text-muted'>please discuss with admin, if absolute value. </p>
                </Form.Group>
              </Col>
              <Col sm={4}>
              <Form.Label className='fw-bold mb-3'>Joined</Form.Label>
                    <div className='d-flex'>
                    <Form.Check type='radio' value="yes" name="Joined" label="Yes" />
                  <Form.Check type='radio' value="No" name="Joined" label="No" className='mx-3'/>
                    </div>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <Form.Group className='mb-3'>
                  <Form.Label className='fw-bold'>User comments/remarks</Form.Label>
                  <Form.Control as="textarea" />
                </Form.Group>
              </Col>
            </Row>
            <Button variant='success'>Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
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
      {/* Jd terms modal */}
      <Modal show={show5} onHide={handleClose5} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Terms Of JD</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
          <Col xs={6}>
          <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i>  JD number: <span className='text-muted'> 1</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i> Assured Delivery Date-Time: <span className='text-muted'> n/a</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-user me-2"></i> Client Details: <span className='text-muted'> n/a</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-list me-2"></i>  List of preferred companies to source candidate: <span className='text-muted'> n/a</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i>  JD status: <span className='text-muted'> Pending</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-user me-2"></i>Category: <span className='text-muted'> C</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-user me-2"></i> Exclusivity: <span className='text-muted'> N/A</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Cvs quality check: <span className='text-muted'> Yes</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-tags me-2"></i> Priority tag(P): <span className='text-muted'> Pk</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Replacement period: <span className='text-muted'> 30 days</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Sign up rate with client: <span className='text-muted'> 8%</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-map me-2"></i>client company address: <span className='text-muted'> Yes</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-building me-2"></i> Industry: <span className='text-muted'> Automobile</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-building me-2"></i> Company type: <span className='text-muted'> Start-up</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Company Size: <span className='text-muted'> 1000+</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-user me-2"></i> Client company spoc name: <span className='text-muted'> Prashant</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-envelope me-2"></i> Client company spoc Email: <span className='text-muted'> examplr@gmail.com</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-phone me-2"></i> JD number: <span className='text-muted'> 123456</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-user me-2"></i> Client company name to be disclosed to the candidate? <span className='text-muted'> 1</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-suitcase me-2"></i> JD should be shown to which User Category?: <span className='text-muted'> A</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-database me-2"></i> Force to use our database?: <span className='text-muted'> Yes</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-arrow-right me-2"></i> Exclusivity: <span className='text-muted'> 1</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> CVs quality check required by Admin? <span className='text-muted'> Yes</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-suitcase me-2"></i> JD should be shown to which User Category?: <span className='text-muted'> A</span></h6>
          </Col>
          <Col xs={6}>
          <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> JD details: <span className='text-muted'> N/A</span></h6>
          <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-building me-2"></i> Company Name: <span className='text-muted'> N/A</span></h6>
          <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Job description: <span className='text-muted'> N/A</span></h6>
          <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> Terms of JD: <span className='text-muted'> N/A</span></h6>
          <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-comment me-2"></i> Remarks/comments: <span className='text-muted'> N/A</span></h6>
          <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fab fa-linkedin me-2"></i> Client company Linkedin URL: <a href='https://linkedin.com/login'> https://linkedin.com/login</a></h6>
          <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-globe me-2"></i> Client company Website: <a href='https://example.com'> https://example.com</a></h6>
          <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money me-2"></i> Salary Budget -Lacs per annum: <span className='text-muted'> N/A</span></h6>
          <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-book me-2"></i> Education: <span className='text-muted'> N/A</span></h6>
          <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money me-2"></i> Total Experience - Years: <span className='text-muted'> 3 years</span></h6>
          <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-map me-2"></i> Work location of JD: <span className='text-muted'> N/A</span></h6>
          <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money me-2"></i> Rounds of interview: <span className='text-muted'> Telephonic</span></h6>
          <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-info me-2"></i> Notice period preference given by client: <span className='text-muted'> Immediate</span></h6>
          <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money me-2"></i> Replacement period: <span className='text-muted'>  3 months</span></h6>
          <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money me-2"></i> Minimum Number of cvs submissions required: <span className='text-muted'> 4</span></h6>
          <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money me-2"></i> Rounds of interview: <span className='text-muted'> Telephonic</span></h6>
          <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money me-2"></i> Rounds of interview: <span className='text-muted'> Telephonic</span></h6>
          <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-comment me-2"></i> Remarks/comments: <span className='text-muted'> N/A</span></h6>
          </Col>
        </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose5}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default MyWorkSpace