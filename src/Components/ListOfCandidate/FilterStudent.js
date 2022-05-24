import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Button, Col, Container , Row, Form} from 'react-bootstrap'
import CreatableSelect from 'react-select/creatable';
import { ActionMeta, OnChangeValue } from 'react-select';

import { Link } from 'react-router-dom';
const FilterStudent = () => {
    const options=[
        {label:"Negotiable", value:"Negotiable"},
        {label:"Non-Negotiable", value:"Non-Negotiable"},
    ]
    const option1=[
        {label:"Yes", value:"Yes"},
        {label:"No", value:"No"},
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
  return (
    <div>
        <Sidebar />
        <NavbarMenu />
        <div className='people'>
          <h4 className='mt-5 text-muted text-center mt-5'>Filter Student List</h4>
   
        <Container className='search-contact'>
            <Row>
            <Col md={4}>
                        <h6 class="fw-bold">Candidate ID </h6>
                        <CreatableSelect
                                isMulti
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                
                            />
                            <small>Use tab/enter for multi selection.</small>
                        </Col>
                        <Col md={4}>
                        <h6 class="fw-bold">JD number  </h6>
                        <CreatableSelect
                                isMulti
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                
                            />
                            <small>Use tab/enter for multi selection.</small>
                        </Col>
                        <Col md={4}>
                        <h6 class="fw-bold">Client name</h6>
                        <CreatableSelect
                                isMulti
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                
                            />
                            <small>Use tab/enter for multi selection.</small>
                        </Col>
            </Row>
            <Row className='mt-3'>
            <Col md={4}>
                        <h6 class="fw-bold">JD title  </h6>
                        <CreatableSelect
                                isMulti
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                
                            />
                            <small>Use tab/enter for multi selection.</small>
                        </Col>
                        <Col md={4}>
                        <h6 class="fw-bold">Recruiter ID   </h6>
                        <CreatableSelect
                                isMulti
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                
                            />
                            <small>Use tab/enter for multi selection.</small>
                        </Col>
                        <Col md={4}>
                        <h6 class="fw-bold">optional</h6>
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
            <Row className='mt-3'>
            <Col md={4}>
                        <h6 class="fw-bold">Total experience </h6>
                        <CreatableSelect
                                isMulti
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                
                            />
                            <small>Use tab/enter for multi selection.</small>
                        </Col>
                        <Col md={4}>
                        <h6 class="fw-bold">JD sent to candidate</h6>
                        <CreatableSelect
                                isMulti
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                options={option1}
                            />
                            <small>Use tab/enter for multi selection.</small>
                        </Col>
            </Row>
        </Container>
        </div>
        <div className='d-flex justify-content-center title-absolute py-4 border-top'>
                        <Button variant='secondary' className='mx-3 text-white'>Reset</Button>
                        <Link to='/ListOfCandidate'><Button variant='primary' className='mx-3 text-white'>Search</Button></Link>
                        <Link to='/ListOfCandidate'><Button variant='danger' className='mx-3 text-white'>Colse</Button></Link>
                    </div>
    </div>
  )
}

export default FilterStudent