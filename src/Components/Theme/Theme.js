import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Card, Container, Row, Col } from 'react-bootstrap';
import useLocalStorage from 'use-local-storage'
import './Theme.css';
const Theme = () => {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
    
  }
  return (
    <div className="app"  data-theme={theme} style={{overflow:'hidden', height:'100vh', width:'100%'}}>
      <Sidebar/>
      <NavbarMenu />
      <Container className='theme'>
      
      <h1 className='mt-3 text-center title'><span><i className="fas fa-palette me-2"></i></span>Theme</h1>

        <Row >
          <Col xs={6} >
            <Card className='dark-card' onClick={switchTheme}>
              <Card.Body>
              <Card.Title>Dark Mode</Card.Title>
              <i className="fas fa-moon"></i>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6}>
            <Card className='light-card' onClick={switchTheme}>
              <Card.Body>
              <Card.Title>Light Mode</Card.Title>
              <i className="fas fa-sun"></i> 
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Theme