import React from 'react'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { Container, Table, Button, OverlayTrigger, Tooltip, } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HandlebyMe = () => {
    
  return (
    <div>
        <NavbarMenu />
        <Sidebar />
         <Container className='jd-list'>
            <div className='d-flex text mb-2'>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Download table data into csv formate</Tooltip>}><Button variant='success' size='sm'><i className="fas fa-download me-2"/>CSV Download</Button></OverlayTrigger>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Reload Page</Tooltip>}>
            <Button variant='light' size='sm' ><i className="fas fa-redo-alt"></i></Button>
            </OverlayTrigger>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Filter Search of Jd list</Tooltip>}>
         <Link to="/JdListFilter"><Button variant='danger' className='mx-3' size='sm'><i className="fas fa-filter me-2"style={{color:'#fff'}} ></i>Filter</Button></Link>
         </OverlayTrigger>
         
            </div>
            </Container>
            <div className='jd-wraper' >
            <Container  className='table-data' fluid>
                <Table responsive className='data-table' hover >
                    <thead>
                        <tr>
                            <th>JD Number</th>
                            <th>Date-time of JD locking</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                        </tr>
                    </tbody>
                    </Table>
                    </Container>
                    </div>
    </div>
  )
}

export default HandlebyMe
