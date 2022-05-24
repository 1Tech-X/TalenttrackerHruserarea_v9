import React, {useState} from 'react'
import Sidebar from '../Sidebar/Sidebar';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import { Container, Button, Tooltip,OverlayTrigger, Form, Table, Modal, Row, Col, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useLocalStorage from 'use-local-storage'
import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify';
import Pdf from "../pdf/pdf1.pdf"
import ReactAudioPlayer from "react-audio-player";
const Listofjd2 = () => {
    function refreshPage(){ 
        window.location.reload(); 
    }
 

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

 
    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);
    const [show6, setShow6] = useState(false);
    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);
    const [theme] = useLocalStorage('theme' ? 'dark' : 'light')
    const notify = () => toast.success("Locked");
    const options =[
    {value:'Telephonic', label:'Telephonic'},
    {value:'virtual (Teams meeting/Zoom call/ Google meet/ skype etc)', label:'virtual (Teams meeting/Zoom call/ Google meet/ skype etc)'},
    {value:'Face to Face', label:'Face to Face'},
    {value:'HR/Final round with Top Management', label:'HR/Final round with Top Management'},
    ]
  return (
    <div data-theme={theme} style={{overflow:'hidden', height:'100vh'}}>
       <ToastContainer position={'top-center'}/>
    <Sidebar />
        <NavbarMenu />
        <Container className='jd-list'>
            <div className='d-flex text mb-2'>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Total Number Of JD List</Tooltip>}><p className='mt-2'>Numbers of jd (7)</p></OverlayTrigger><span className='mx-3 mt-2 fw-bold'>|</span>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Reload Page</Tooltip>}>
            <Button variant='light' size='sm' onClick={refreshPage}><i className="fas fa-redo-alt"></i></Button>
            </OverlayTrigger>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Filter Search of Jd list</Tooltip>}>
         <Link to="/JdListFilter"><Button variant='danger' className='mx-3' size='sm'><i className="fas fa-filter me-2"style={{color:'#fff'}} ></i>Filter</Button></Link>
         </OverlayTrigger>
         
            </div>
            </Container>
            <div className='jd-wraper' >
            <Container  className='table-data' fluid data-theme={theme}>
                <Table responsive className='data-table' hover >
                    <thead >
                        <tr>
                            <th>Status</th>
                            <th>JD No.</th>
                            
                            <th>JDs upload<br></br> date and time</th>
                            <th>Client Details</th>
                            <th>JD Details</th>
                            <th>Special <br></br>Comments/Remarks<br></br> by admin about JD</th>
                            <th>Term of JD</th>
                            <th>My payout</th>
                            <th>JD Discription</th>
                            
                            
                            <th>Assured delivery<br></br> required by<br></br> the client (TAT)</th>
                           
                            <th>Client coordination <br></br>to be done by whom?</th>
                            <th>CVs quality<br></br> check required<br></br> by Admin?</th>
                            <th>Lock for me</th>
                        
                        </tr>
                    </thead>
                    <tbody data-theme={theme}>
                        <tr>
                            <td className='jdstatus'><Button variant='warning' className='me-2'>open</Button></td>
                            <td>1</td>
                            
                            <td>11/05/22</td>
                            <td className='position'>Client Name<br></br> <span > <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Client Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Automobile</span> |</span> 1000+</td>
                            <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com'><i className="fas fa-map-marker-alt me-2"></i></a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Salary</Tooltip>}><i class="far fa-money-bill-alt ms-2 me-2"></i></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
                            <td>Special Comments/Remarks</td>
                            <td className='jd-terms'><i className="fas fa-info-circle" onClick={handleShow4}></i></td>
                            <td>my payout</td>
                            <td><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a></td>
                            
                            
                            
                            <td>N/A</td>
                            <td>Admin</td>
                            <td >yes</td>
                            <td><Button variant='success' size='sm' onClick={handleShow5}><i className="fas fa-lock me-1" ></i> Lock</Button></td>
                        </tr>
                        <tr>
                            <td className='jdstatus'><Button variant='danger' className='me-2'>Pending delivery</Button></td>
                            <td>2</td>
                            
                            <td>11/05/22</td>
                            <td className='position'>Client Name 1<br></br> <span > <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Client Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Banking</span> |</span> 500+</td>
                                                        <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com'><i className="fas fa-map-marker-alt me-2"></i></a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Salary</Tooltip>}><i class="far fa-money-bill-alt ms-2 me-2"></i></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
                            <td>Special Comments/Remarks</td>
                            <td className='jd-terms'><i className="fas fa-info-circle" onClick={handleShow4}></i></td>
                            <td>my payout</td>
                            <td><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a></td>
                            <td>N/A</td>
                            <td>Admin</td>
                            <td >yes</td>
                            <td ><Button variant='success' size='sm' onClick={handleShow5}><i className="fas fa-lock me-1" ></i> Lock</Button></td>
                        </tr>
                        <tr>
                        <td className='jdstatus'><Button style={{backgroundColor:'cyan', color:'black', border:'none'}}>Delivery done-await client feedback</Button></td>
                            <td>3</td>
                            
                            <td>11/05/22</td>
                            <td className='position'>Client Name 3<br></br> <span > <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Client Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Tech</span> | </span> 2000+</td>
                                                        <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com'><i className="fas fa-map-marker-alt me-2"></i></a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Salary</Tooltip>}><i class="far fa-money-bill-alt ms-2 me-2"></i></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
                            <td>Special Comments/Remarks</td>
                            <td className='jd-terms'><i className="fas fa-info-circle" onClick={handleShow4}></i></td>
                            <td>my payout</td>
                            <td><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a></td>
                            
                            <td>N/A</td>
                           
                            <td>user</td>
                            <td>No</td>
                            <td ><Button variant='success' size='sm' onClick={handleShow5}><i className="fas fa-lock me-1" ></i> Lock</Button></td>
                        </tr>
                        <tr>
                        <td className='jdstatus'><Button variant='secondary'>Interview stage</Button></td>
                            <td>4</td>
                            
                            <td>11/05/22</td>
                            <td className='position'>Client Name 4<br></br> <span > <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Client Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Social Marketing</span> | </span>3000+</td>
                                                        <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com'><i className="fas fa-map-marker-alt me-2"></i></a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Salary</Tooltip>}><i class="far fa-money-bill-alt ms-2 me-2"></i></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
                            <td>Special Comments/Remarks</td>
                            <td className='jd-terms'><i className="fas fa-info-circle" onClick={handleShow4}></i></td>
                            <td>my payout</td>
                              <td><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a></td>
                            
                            <td>N/A</td>
                            
                            <td>user</td>
                            <td>No</td>
                            <td ><Button variant='success' size='sm' onClick={handleShow5}><i className="fas fa-lock me-1" ></i> Lock</Button></td>
                        </tr>
                        <tr>
                        <td className='jdstatus'><Button variant='success'>Offer stage</Button></td>
                            <td>5</td>
                            
                            <td>11/05/22</td>
                            <td className='position'>Client Name 5<br></br> <span >  <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Client Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Marketing</span> | </span>9000+</td>
                                                        <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com'><i className="fas fa-map-marker-alt me-2"></i></a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Salary</Tooltip>}><i class="far fa-money-bill-alt ms-2 me-2"></i></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
                            <td>Special Comments/Remarks</td>
                            <td className='jd-terms'><i className="fas fa-info-circle" onClick={handleShow4}></i></td>
                            <td>my payout</td>
                            <td><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a></td>
                            
                            <td>N/A</td>
                         
                            <td>user</td>
                            <td>No</td>
                            <td ><Button variant='success' size='sm' onClick={handleShow5}><i className="fas fa-lock me-1" ></i> Lock</Button></td>
                        </tr>
             
                        <tr>
                        <td className='jdstatus'><Button style={{backgroundColor:'pink', color:'black', border:'none'}}>JD successfully closed</Button></td>
                            <td>6</td>
                            
                            <td>11/05/22</td>
                            <td className='position'>Client Name 6<br></br> <span >  <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Client Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Mobile shop</span> | </span>200+</td>
                                                        <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com'><i className="fas fa-map-marker-alt me-2"></i></a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Salary</Tooltip>}><i class="far fa-money-bill-alt ms-2 me-2"></i></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
                            <td>Special Comments/Remarks</td>
                            <td className='jd-terms'><i className="fas fa-info-circle" onClick={handleShow4}></i></td>
                            <td>my payout</td>
                            <td><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a></td>
                            
                            <td>N/A</td>
                           
                            <td>user</td>
                            <td>No</td>
                            <td ><Button variant='success' size='sm' onClick={handleShow5}><i className="fas fa-lock me-1" ></i> Lock</Button></td>
                        </tr>
                        <tr>
                        <td className='jdstatus'><Button >Open-Rework</Button><br></br>Client changed the JD criteria</td>
                            <td>7</td>
                            
                            <td>11/05/22</td>
                            <td className='position'>Client Name 7<br></br> <span >  <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View Client Details</Tooltip>}><i className="fas fa-user me-2" onClick={handleShow}></i></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client Website</Tooltip>}><a href="https://example.com"><i className='fas fa-globe me-2'></i></a></OverlayTrigger> <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Client LinkedIn</Tooltip>}><a href='https://linkedin.com'><i className="fab fa-linkedin me-2"></i></a></OverlayTrigger> | <span className='comapnyname'>Web Tech</span> | </span>100+</td>
                                                        <td className='deatail'>Jd Name <br></br><span><OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Work Location of JD</Tooltip>}><a href='https://googlemap.com'><i className="fas fa-map-marker-alt me-2"></i></a></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Salary</Tooltip>}><i class="far fa-money-bill-alt ms-2 me-2"></i></OverlayTrigger> | <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">View All details</Tooltip>}><i className="fas fa-eye ms-2"  onClick={handleShow1}></i></OverlayTrigger></span> </td>
                            <td>Special Comments/Remarks</td>
                            <td className='jd-terms'><i className="fas fa-info-circle" onClick={handleShow4}></i></td>
                            <td>my payout</td>
                            <td><a href={Pdf} style={{color:'red', textDecoration:'none'}}><i className="fas fa-file-pdf"></i></a></td>
                            
                            <td>N/A</td>
                           
                            <td>user</td>
                            <td>No</td>
                            <td ><Button variant='success' size='sm' onClick={handleShow5}><i className="fas fa-lock me-1" ></i> Lock</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
            </div>
        <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-building me-3" ></i>Company Name / Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-3'> <i className="fas fa-user me-3"></i> Client Id: <span className='text-muted'>001</span></h6>
            <h6 className='fw-bold mt-5 mb-3'> <i className="fas fa-user me-3"></i> Client Name: <span className='text-muted'>Client Name Here</span></h6>
            <h6 className='fw-bold mt-5 mb-3'> <i className="fas fa-suitcase me-3"></i> Job Details: <span className='text-muted'>Job details</span></h6>
            <h6 className='fw-bold mt-5 mb-3'> <i className="fas fa-building me-3"></i> Company Name: <span className='text-muted'>Automobile</span></h6>
            <h6 className='fw-bold mt-5 mb-3'> <i className="fas fa-building me-3"></i> Company Description: <span className='text-muted'>Description Here</span></h6>
            <h6 className='fw-bold mt-5 mb-3 mx-2'> Size : <span className='text-muted'>1000+</span></h6>
            </Col>
            <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-3'> <i className="fas fa-map me-3"></i> Company location- HQ: <span className='text-muted'>India</span></h6>
            <h6 className='fw-bold mt-5 mb-3'> <i className="fas fa-map me-3"></i> Company address: <span className='text-muted'>Patna</span></h6>
            <h6 className='fw-bold mt-5 '> <i className="fab fa-firefox me-2"></i> Website: </h6>
            <a href="https://example.com">https://example.com</a>
            <h6 className='fw-bold mt-5 mx-3'> <i className="fab fa-linkedin me-2"></i> LinkedIn: </h6>
            <a href="https://linkedin.com" className='mx-3'>https://linkedin.com</a>
            <h6 className='fw-bold mt-5 mb-3'> Position Details : <span className='text-muted'>Position Details Here</span></h6>
            </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Second Modal for jd details */}
      <Modal show={show1} onHide={handleClose1} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title> <i className="fas fa-suitcase me-3" ></i>Jd's Name Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-user"></i> Client name: <span className='text-muted'> pk</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i> JD title: <span className='text-muted'> N/A</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-comment me-2"></i> Special comments/remarks by Admin about JD: <span className='text-muted'> Awesome</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-list me-2"></i> List of preferred companies to source candidates?: <span className='text-muted'> N/A</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-audio me-2"></i> Audio JD: <span className='mt-5'> <ReactAudioPlayer
      src="http://slider.kz/download/214/psv4.vkuseraudio.net/c815526/u211915439/audios/8e9a9be0b9e5/Caballero%20&%20Jeanjass%20(Chef)%20-%201.Chef.mp3"
      autoPlay
      controls
      style={{height:"4vh"}}
    /></span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i> Salary Budget : <span className='text-muted'> n/a</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-sort-amount-down me-2"></i> Experience: <span className='text-muted'> n/a</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-book me-2"></i> Education: <span className='text-muted'> n/a</span></h6>
            </Col>
            <Col xs={6}>
            
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-map-marked-alt"></i> Work location of JD: <span className='text-muted'> Patna, Bihar , India</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-map-marked-alt"></i> Company address <span className='text-primary text-small'><i className='fas fa-info ms-2 me-2' onClick={()=>{toast.info("Interview location address can be different from this address")}}/></span>: <span className='text-muted'> N/a</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-building"></i> Client company name can be disclosed to the candidate? : <span className='text-muted'> Yes</span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fab fa-intercom"></i> Rounds of an interview: <span className='text-muted mt-2'><Select options={options} /></span></h6>
            <h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-sticky-note"></i> Notice period preference given by the client: <span className='text-muted'> n/a</span></h6>
<h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-list"></i> No. of Vacancies : <span className='text-muted'> 50</span></h6>
<h6 className='fw-bold mt-5 mb-5'> <i className="fas fa-sort-numeric-up-alt me-2"></i> No. of working days
: <span className='text-muted'> 20</span></h6>
            </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    
      {/* Jd terms modal */}
      <Modal show={show4} onHide={handleClose4} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Terms Of JD</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
          <Col xs={6}>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-file-csv me-2"></i>  Sign up rate with client: <span className='text-muted'> 0</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-money-bill-alt me-2"></i> payment terms: <span className='text-muted'> N/A</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'> <i className="fas fa-calendar-alt me-2"></i> Replacement period: <span className='text-muted'> n/a</span></h6>
          </Col>
          <Col xs={6}>
          <h6 className='fw-bold mt-5 mb-5 mx-3'>  Number of submissions required: <span className='text-muted'> N/A</span></h6>
            <h6 className='fw-bold mt-5 mb-5 mx-3'>Your payout : <span className='text-muted'> n/a</span></h6> 
            <h6 className='fw-bold mt-5 mb-5 mx-3'>Assured delivery required by client (TAT)- date (colander)--- time (12 hours AM/PM format)- sync with JD upload date/time calendar : <span className='text-muted'> 23-05-2022 6:00 P.M</span></h6> 
            
          </Col>
        </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Lock For me yes/no Modal  */}
      <Modal show={show5} onHide={handleClose5} size='sm'>
        <Modal.Header closeButton>
          <Modal.Title>Lock For Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2 className='text-center'>Would you like to use “own portal” or “Our database”?</h2>
            <div className='d-flex justify-content-center mt-5 mb-5'>
              <Button variant='success' className='me-5' onClick={handleShow6}>Yes</Button>
            <Button variant="danger" onClick={handleClose5}>
            No
          </Button>
            </div>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
      {/* After Clicking Yes Lock For me yes open jd lock modal with check box */}
      <Modal show={show6} onHide={handleClose6} size='sm'>
        <Modal.Header closeButton>
          <Modal.Title>Lock For Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mt-3 mb-3 mx-3'>
              <Form.Check type='checkbox' label="% Payout if use our candidate database." />
            </Form.Group>
            <Form.Group className='mb-3 mx-3'>
              <Form.Check type='checkbox' label="% Payout if use your own portal naukri/monster/times job etc." />
            </Form.Group>
            <Form.Group className='mb-3 mx-3'>
              <Form.Check type='checkbox' label="Absolute value payout if user uses own portal, " />
            </Form.Group>
            <Form.Group className='mb-3 mx-3'>
              <Form.Check type='checkbox' label="Absolute value payout---if use our database" />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Check type='checkbox' label="I accept the assured delivery date" />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Check type='checkbox' label=" I accept the terms of JD" />
            </Form.Group>
            <Button variant='success' onClick={notify}><i className='fas fa-lock me-2'></i>Lock</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose6}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Listofjd2