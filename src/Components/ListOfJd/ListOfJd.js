import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import { Container, ButtonGroup, Button, Dropdown, Tooltip,OverlayTrigger, Form } from 'react-bootstrap';
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import './ListOfJd.css'
export const productsGenerator = quantity => {
  const items = [];
  for (let i = 0; i < quantity; i++) {
    items.push({ id: i, cv: `Yes`, jdupload: `0${i}/05/22 | 12:00 A.M.`,Position: `Title | Industry | client name`, details:`website | comapny | Linkendin`, JAssured:`0${i}/05/22 | 12:00 A.M.`, Clientcoordination:`admin` });
  }
  return items;
};

const products = productsGenerator(123);

const columns = [
  {
    dataField: "id",
    text: "Jd No.",
    sort: true
  },
  {
    dataField: "cv",
    text: "CVs quality check required by Admin",
    sort: true
  },
  {
    dataField: "jdupload",
    text: "JD upload date-time "
  },
  {
    dataField: "Position",
    text: "Position Details "
  },
  {
    dataField: "details",
    text: "JD details"
  },
  {
    dataField: "",
    text: "JD Terms"
  },
  {
    dataField: "JAssured",
    text: "JAssured delivery required by client (TAT)"
  },
  {
    dataField: "",
    text: "Remarks/comments by admin about JD"
  },
  {
    dataField: "Clientcoordination",
    text: "Client coordination to be done by whom? "
  },
  {
    dataField: "Clientcoordination",
    text: "JD status"
  }
];

const ListOfJd = () => {
  function refreshPage(){ 
    window.location.reload(); 
}
  return (
    <div>
        <Sidebar />
        <NavbarMenu />
        <Container className='jd-list'>
            <div className='d-flex text'>
            <p>No of jd (123)</p><span className='mx-3'>|</span>
            <p >No of contacts (23)</p>
            </div>
            <div className='mb-2'>
            <ButtonGroup className="btn btn-light">
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Save Jd</Tooltip>}>
            <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
            <i className="far fa-save"></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>

  </Dropdown.Menu>
            </Dropdown>
            </OverlayTrigger>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Add List</Tooltip>}>
            <Dropdown className='mx-2'>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
            <i className="fas fa-plus"></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <h5 className='mt-3 mb-3 text-center'>Add JDs List</h5>
    <Form>
      <Form.Group className='mb-3'>
        <Form.Control placeholder='Title'type='text' name="title"/>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control placeholder='Industry' type='text' name="industry"/>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control placeholder='Client Name' type='text' name="client"/>
      </Form.Group>
      <div className='d-flex justify-content-center'>
      <Button>Save</Button>
      </div>
    </Form>
  </Dropdown.Menu>
            </Dropdown>
            </OverlayTrigger>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Reload Page</Tooltip>}>
            <Button className="btn btn-light mx-2" onClick={refreshPage}><i className="fas fa-redo-alt"></i></Button>
            </OverlayTrigger>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant='success' ><i className="fas fa-chevron-circle-left me-2" style={{color:'#fff'}} ></i>Back</Button>
          </ButtonGroup>
            </div>
            <Container >
            <BootstrapTable 
        bootstrap4
        keyField="id"
        data={products}
        columns={columns}
        pagination={paginationFactory({ sizePerPage: 10 })}
      />
            </Container>
        </Container>
    </div>
  )
}

export default ListOfJd