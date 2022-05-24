import React, {Component} from 'react'
import { Navigate, Link } from 'react-router-dom';
import './Login.css'
import Input from "@material-ui/core/Input";
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { IconButton, TextField } from '@mui/material';
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";

export default class Login extends Component {
 constructor(props) {
   super(props)
   const token = localStorage.getItem("token")
    let loggedIn = true
    if(token ==  null){
      loggedIn= false
    }
  this.state = {
     username: "",
     password: "",
     loggedIn,
     
     
   }
   this.onChange = this.onChange.bind(this)
   this.submitForm = this.submitForm.bind(this)
 }
 state = {
  type: 'password',
}


handleClick = () => this.setState(({type}) => ({
  type: type === 'password' ? 'text' : 'password'
}))

 onChange(e) {
   this.setState({
     [e.target.name]: e.target.value
   })
 }

 submitForm(e){
   e.preventDefault()
   const { username, password} = this.state

   //login 

   if(username === "admin@gmail.com" && password=== "12345") {
    localStorage.setItem("token", "ihdhjkbcxvkmkfdjshlk")
    this.setState({
       loggedIn: true
       
     })
     
   }
   else {
     toast.error("Incorrect Username or Password")
   }

 }
 
 render() {
  if(this.state.loggedIn){
    return <Navigate to='/Profile' />
    
  }
  
  return (
    <div>
      <ToastContainer position={'top-center'} />
     <Container fluid>
        <Row>
          <Col sm={5} className="login-left">
          <div className="d-flex align-items-center position-absolute" style={{top: '10px' ,left: '10px'}}>
          <img src="images/logo.jpeg" style={{height:'60px', width:'60px'}} alt="logo" /><h5 class="fw-bold ms-2 mb-0 ">Talent Trackers Consulting Pvt Ltd</h5>
          </div>
            <Container className='mt-5 '>
              <Row className='align-items-center justify-content-center form-cont'>
                <Col md={8}>
                  <div className='mb-3'>
                    <h3 className='fw-bold'>Sign In</h3>
                    <p className='mb-3 text-muted'>Sign in into your account</p>
                  </div>
                  <Form onSubmit={this.submitForm}>
                <TextField type="email" id="standard-basic" name='username' label="Enter your Email" variant="standard" value={this.state.username} onChange = {this.onChange} fullWidth />
                    <br></br>
                    <br></br>
                      <Input type={this.state.type} placeholder="Password" variant='standard'  name="password"
                      value={this.state.password} onChange={this.onChange} fullWidth
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton onClick={this.handleClick}>
                          {this.state.type === 'password' ? <VisibilityOff/> :  <Visibility />}
                           
                          </IconButton>
                        </InputAdornment>
                      }
                      
                      />
                    <div className='mb-4 d-flex mt-3'>
                      <span className='me-auto '><Link to="/Signup" style={{textDecoration:'none'}}>Neead an account?</Link></span>
                      <span className='ms-auto'><Link to="/ForgotPassword" style={{textDecoration:'none'}}>Forgot Password</Link></span>
                    </div>
                    <Button variant="primary" type="submit" className='mb-3'>
                      Login
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col sm={7} className="login-right">
            <h5 className='text-warning text-center mb-3 px-5'>Get instant access to Millions of Verified Emails and Direct Dials Powered by Lead Intelligence</h5>
          <div className='result-one'>
          <img src='/images/result_one.png' alt='result-one' />
          </div>
          <div className='result-two'>
          <img src='/images/result_two.png' alt='result-two' />
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
}