import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
const HandleByMeFilter = () => {
  return (
    <div>
        <NavbarMenu />
        <Sidebar />
        <div className='people'>
          <h6 className='mt-5 text-muted text-center mt-5'>Handle By Me filter</h6>
          <Container className='search-contact'>
              <Form>
              <div className='p-3 form-div' >

              </div>
              <div className='d-flex justify-content-center title-absolute py-4 border-top'>
                        <Button variant='secondary' className='mx-3 text-white'>Reset</Button>
                        <Link to='/Handlebyme'><Button variant='primary' className='mx-3 text-white'>Search</Button></Link>
                        <Link to='/Handlebyme'><Button variant='danger' className='mx-3 text-white'>Colse</Button></Link>
            </div>
              </Form>

          </Container>
          </div>
    </div>
  )
}

export default HandleByMeFilter