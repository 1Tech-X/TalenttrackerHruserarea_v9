
import React from 'react'
import { TextField } from '@mui/material';
import { Row, Container, Col, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
const ForgotPassord = () => {
    const [username, setusername]= React.useState([]);
    console.log(username)
    const handleSubmit = (e)=>{
            e.preventDefault();
            if(username==="admin@gmail.com"){
                    toast.success("Valid email address")
            }else{
                toast.error("Not a valid email address for this account")
            }
    }
  return (
    <div>
        <ToastContainer position='top-center' />
        <Container fluid>
            <Row>
            <Col sm={7} className="login-right">
            <h5 className='text-warning text-center mb-3 px-5'>Get instant access to Millions of Verified Emails and Direct Dials Powered by Lead Intelligence</h5>
          <div className='result-one'>
          <img src='/images/result_one.png' alt='result-one' />
          </div>
          <div className='result-two'>
          <img src='/images/result_two.png' alt='result-two' />
          </div>
          </Col>
          <Col sm={5} className="signup-right">
          <Container className='mt-3 '>
                <div className='d-flex'>
                <img src='images/logo.jpeg'  className='mb-3' alt='logo'></img><h5 className=' mt-3 fw-bold  mb-0 mx-2' style={{fontSize:"18px"}}>Talent Trackers Consulting Pvt Ltd</h5>
                </div>
                </Container>
            <Container className='mt-5 '>
              <Row className='align-items-center justify-content-center form-cont'>
                <Col md={8}>
                  <div className='mb-3'>
                    <h3 className='fw-bold'>Forgot Password</h3>
                    <p className='mb-3 text-muted'>Reset your password</p>
                  </div>
                  <Form onSubmit={handleSubmit}>
                <TextField type="email" id="standard-basic" name='username' label="Enter your registered email" variant="standard" onChange={(e)=>setusername(e.target.value)}  fullWidth />
                    
                    <div className='mb-4 d-flex mt-3'>
                      <span className='me-auto '><Link to="/Signup" style={{textDecoration:'none'}}>Neead an account?</Link></span>
                      <span className='ms-auto'><Link to="/" style={{textDecoration:'none'}}>Login</Link></span>
                    </div>
                    <Button variant="primary" type="submit" className='mb-3'>
                      Submit
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ForgotPassord