import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Button, Col, Container , Row, Form} from 'react-bootstrap'
import CreatableSelect from 'react-select/creatable';
import { ActionMeta, OnChangeValue } from 'react-select';
import './People.css';
import { Link } from 'react-router-dom';
const options = [
    { value: ' ' },
  
  ]
  const options1 = [
    { value: ' India', label:'India'},
    { value: ' USA', label:'USA'},
    { value: ' Africa', label:'Africa'},
  
  ]
  const options2 = [
    { value: ' 8.33%', label:'8.33%'},
    { value: ' 7%', label:'7%'},
    { value: ' 7.5 %', label:'7.5 %'},
    { value: ' 7.25 %', label:'7.25 %'},
    { value: ' 6 %', label:'6 %'},
    { value: ' 10 %', label:'10 %'},
    
  
  ]
  const paymentterms = [
    {value:'30 days', label:'30 days'},
    {value:'45 days', label:'45 days'},
    {value:'60 days', label:'60 days'},
    {value:'75 days', label:'75 days'},
    {value:'90 days', label:'90 days'},
  ]
  const Yourpayout = [
    {value:'25%', label:'25%'},
    {value:'30%', label:'30%'},
    {value:'35%', label:'35%'},
    {value:'40%', label:'40%'},
    {value:'45 %', label:'45%'},
    {value:'50 %', label:'50%'},
    {value:'55 %', label:'55%'},
    {value:'60 %', label:'60%'},
  ]
  const JDstatus = [
    {value:'Open (not accepted by any user)', label:'Open (not accepted by any user)'},
    {value:'Pending delivery (accepted but not yet delivered)', label:'Pending delivery (accepted but not yet delivered)'},
    {value:'delivery done-await client feedback', label:'Delivery done-await client feedback'},
    {value:'interview stage', label:'Interview stage'},
    {value:'Offer stage', label:'Offer stage'},
    {value:'JD successfully closed', label:'JD successfully closed'}, 
    {value:'rework (with reason)', label:'Rework (with reason)'}
  ]
const People = () => {
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
  return (
    <div>
        <Sidebar />
        <NavbarMenu />
        <div className='people'>
          <h6 className='mt-5 text-muted text-center mt-5'>Search Potential Contacts.</h6>
   
        <Container className='search-contact'>
            <form>
                <div className='p-3 form-div' >
                  <Row>
                    <Col xs={6}>
                    <Form.Group>
                    <Form.Label className='fw-bold'>CVs quality check required by Admin? (Y/N)</Form.Label>
                    <div className='d-flex'>
                    <Form.Check type="radio" name="cvcheck" label="YES" value="yes" />
                    <Form.Check type="radio" name="cvcheck" label="NO" value="No" className='mx-3' />
                    </div>
                  </Form.Group>
                    </Col>
                    <Col xs={6}>
                      <Form.Group>
                        <Form.Label className='fw-bold'> JD upload date-time </Form.Label>
                        <Row>
                          <Col xs={6}>
                          <Form.Control type='date' placeholder='date' />
                          </Col>
                          <Col xs={6}><Form.Control type='time' placeholder='time' /></Col>
                        </Row>
                        
                        
                      </Form.Group>
                    </Col>
                  </Row>
                  <br></br>
                    <Row>
                        <Col md={4}>
                        <h6 class="fw-bold">Industry</h6>
                        <CreatableSelect
                                isMulti
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                options={options}
                            />
                            <small>Use tab/enter for multi selection.</small>
                        </Col>
                        <Col md={4}>
                      
                      <h6 class="fw-bold">Client Name</h6>
                
                        <CreatableSelect
                                isMulti
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                options={options}
                            />
                            <small>Use tab/enter for multi selection.</small>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                      <Col xs={4}>
                      <h6 class="fw-bold"> work location of JD</h6>
                        <CreatableSelect
                                isMulti
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                options={options1}
                            />
                      </Col>
                      <Col xs={4}>
                      <h6 class="fw-bold"> Sign up rate with client</h6>
                        <CreatableSelect
                                isMulti
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                options={options2}
                            />
                      </Col>
                      <Col xs={4}>
                      <h6 class="fw-bold"> Salary</h6>
                        <CreatableSelect
                                isMulti
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                options={options}
                            />
                      </Col>
                    </Row>
                    <br></br>
                    <Row>
                      <Col xs={4}>
                      <h6 class="fw-bold">Payment terms</h6>
                        <CreatableSelect
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                options={paymentterms}
                            />
                      </Col>
                      <Col xs={4}>
                      <h6 class="fw-bold">My payout</h6>
                        <CreatableSelect
                                isMulti
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                options={Yourpayout}
                            />
                      </Col>
                      <Col xs={4}>
                      <h6 class="fw-bold">JD status</h6>
                        <CreatableSelect
                                isMulti
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                options={JDstatus}
                            />
                      </Col>
                    </Row>
                    <br></br>
                    <Row>
                      <Col xs={6}>
                        <Form.Group>
                          <Form.Label className='fw-bold'>Client coordination to be done by whom?</Form.Label>
                          <div className='d-flex'>
                          <Form.Check type="radio" label="Admin" />
                          <Form.Check type="radio" label="User" className='mx-3' />
                          </div>

                        </Form.Group>
                      </Col>
                    </Row>
                </div>
                    <div className='d-flex justify-content-center title-absolute py-4 border-top'>
                        <Button variant='secondary' className='mx-3 text-white'>Reset</Button>
                        <Link to='/jdlist2'><Button variant='primary' className='mx-3 text-white'>Search</Button></Link>
                        <Link to='/jdlist2'><Button variant='danger' className='mx-3 text-white'>Colse</Button></Link>
                    </div>
            </form>
        </Container>
    </div>
    </div>
  )
}

export default People