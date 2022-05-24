import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import './Report.css'
import { Link } from 'react-router-dom';
import useLocalStorage from 'use-local-storage'
const Reports = () => {
  const [theme] = useLocalStorage('theme' ? 'dark' : 'light')
  return (
    <div  data-theme={theme} style={{overflow:'hidden', height:'100vh', width:'100%'}} onLoad={()=>{toast.warning("Work is on Progress...")}}>
      <ToastContainer position='top-center' />
      <Sidebar />
      <NavbarMenu />
      <Container className='reports'>
        <h5 className='mt-5  fw-bold text-center'>Reports</h5>
      </Container>
      <div className='jd-wraper'>
      <Container className='table-data'>
        <Row className='mt-5'>
          <Col sm={4}>
            <Link to="/MyOfferFilter" style={{textDecoration:"none"}}><Card >
              <Card.Body>
                <Card.Title>My offers </Card.Title>
              </Card.Body>
            </Card>
            </Link>
          </Col>
          <Col sm={4}>
            <Link to="/MyDashoard" style={{textDecoration:"none"}}><Card>
              <Card.Body>
                <Card.Title> Dashboard </Card.Title>
              </Card.Body>
            </Card>
            </Link>
          </Col>
          <Col sm={4}>
          <Link to="/HandleByMeFilter"  style={{textDecoration:"none"}}><Card >
              <Card.Body>
                <Card.Title>JDs handled by me</Card.Title>
              </Card.Body>
            </Card>
            </Link>
          </Col>
        </Row>
        </Container>
        </div>
    </div>
  )
}

export default Reports