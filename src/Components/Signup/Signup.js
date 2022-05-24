import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom';
import './Signup.css'
import { useForm } from "react-hook-form";
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { TextField } from '@mui/material';
import IconButton from "@material-ui/core/IconButton";
import MuiPhoneNumber from "material-ui-phone-number";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
const Signup = () => {
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [phone, setPhone] = React.useState("");
  console.log(phone)

  const handleOnChange = value => {
    setPhone(value);
  };
  return (
    <div>
    <Container fluid>
        <Row>
        <Col sm={7} className="signup-left">
        <h5 class="fw-bold text-warning mt-3 mx-3 ">Key Features:</h5>
            <ul className='list-unstyled'>
                <li><i className="fas fa-check me-3"></i>Free sign up</li>
                <li><i className="fas fa-check me-3"></i>Free use of our 2 Million candidate database PAN India</li>
                <li><i className="fas fa-check me-3"></i>1 recruiter-1 JD in majority cases</li>

                <li><i className="fas fa-check me-3"></i>Client coordination is to be done by you</li>
                <li><i className="fas fa-check me-3"></i>100s of new clients and hundreds of new JDs available per week (IT/non IT- PAN India)</li>
                <li><i className="fas fa-check me-3"></i>Live chat support, phone, whats app, sms support from our HQ/ admin desks</li>
                <li><i className="fas fa-check me-3"></i>Strong Emailing system for official communications with the clients, admin and candidates.</li>
                <li><i className="fas fa-check me-3"></i>Transparency, trust and mutual growth as the guided principles</li>
                <li><i className="fas fa-check me-3"></i>Respect to the talented recruiters and commitment to their career & achieve revenue targets</li>
            </ul>
          </Col>
          <Col sm={5} className="signup-right">
  
            <Container className='mt-3 '>
                <div className='d-flex'>
                <img src='images/logo.jpeg'  className='mb-3' alt='logo'></img><h5 className=' mt-3 fw-bold  mb-0 mx-2' style={{fontSize:"18px"}}>Talent Trackers Consulting Pvt Ltd</h5>
                </div>
              <Row className='align-items-center justify-content-center form-cont'>
                <Col md={8}>
                  <div className='mb-3'>
                    <h3 className='fw-bold'>Sign Up</h3>
                    <p className='mb-3 text-muted'>Sign Up For New Account</p>
                  </div>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <TextField type="text" variant="standard" label="Full Name" fullWidth className='mb-1' 
                      {...register("Name", { required: "Name is required.",pattern: /^[A-Za-z]+$/i   })}
                      error={Boolean(errors.Name)}
                      helperText={errors.Name?.message}
                     />
                      {errors?.Name?.type === "pattern" && (
                        <p style={{color:"red", fontSize:"0.75rem"}}>Alphabetical characters only</p>
                      )}
                    <TextField type="email" variant="standard" label="Comapany Email" fullWidth className='mb-1' />
                    <TextField type="text" variant="standard" label="Comapny" fullWidth className='mb-1' />
                    <br></br>
                    <br></br>
                    <Input 
                      type={values.showPassword ? "text" : "password"}
                      onChange={handlePasswordChange("password")}
                      value={values.password}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                      fullWidth variant="standard" placeholder='Password'
                    />
                    <br></br>
                    <br></br>
                    <Input 
                      type={values.showPassword ? "text" : "password"}
                      onChange={handlePasswordChange("password")}
                      value={values.password}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                      fullWidth variant="standard" placeholder='Confirm Password'
                    />

                    <Row>
                        <Col xs={5} className="mt-3">
                          
                        <MuiPhoneNumber defaultCountry={"in"} onChange={handleOnChange} name="countrycode" />                  
                        </Col>
                        <Col xs={7} className="mb-3">
                        <TextField type="tel" variant="standard" label="Number" fullWidth        onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }} />
                        </Col>
                    </Row>
                    <div className='mb-3 d-flex'>
                      <span className='me-auto'><Link to="/" style={{textDecoration:'none'}}>Already Have account?</Link></span>
                    </div>
                    <Button variant="primary" type="submit">
                      Sign Up
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

export default Signup