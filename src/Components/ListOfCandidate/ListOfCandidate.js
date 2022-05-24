
import React from 'react'
import {CSVLink} from "react-csv"
import { Container , Form, Table, Button} from 'react-bootstrap'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import '../ListOfJd/ListOfJd.css'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'
const ListOfCandidate = () => {
    const Studentlist = [
        {id:1, jdno:"2", Clientname:"prashant Kumar",JDtitle:"Automobile",JDlocation:"Patna",RecruiterID:"001",Candidatename:"Prashant", Currentdesignation:"n/a",Currentsalary:"null", LastAppraisal:"18-may-2022"},
        {id:2, jdno:"003", Clientname:"neeraj Kumar", JDtitle:"Automobile",JDlocation:"Ranchi", RecruiterID:"002",Candidatename:"Neeraj", Currentdesignation:"n/a", Currentsalary:"null",LastAppraisal:"19-may-2022"},
        {id:3, jdno:"33", Clientname:"prashant Kumar", JDtitle:"Automobile",JDlocation:"Haryana",RecruiterID:"003", Candidatename:"Prashant", Currentdesignation:"n/a", Currentsalary:"null", LastAppraisal:"20-may-2022"},
        {id:4, jdno:"33", Clientname:"dd Kumar", JDtitle:"Automobile",JDlocation:"Delhi", RecruiterID:"004", Candidatename:"Prashant", Currentdesignation:"n/a",Currentsalary:"null",LastAppraisal:"21-may-2022"}
    ]
    const headers = [
        {lable:"Candidate ID ", key:"id"},
        {label:"JD number ", key:"jdno"},
        {label:"Client Name", key:"Clientname"},
        {label:"JD Title", key:"JDtitle"},
        {label:"JD location", key:"JDlocation"},
        {label:"Recruiter ID", key:"RecruiterID"},
        {label:"Candidate Name", key:"Candidatename"},
        {label:"Current designation", key:"Currentdesignation"},
        {label:"Currentsalary", key:"Currentsalary"},
        {label:"Last Appraisal of the candidate", key:"LastAppraisal"},

    ]
    const csvReport = {
        filename: 'Studentlist.csv',
        headers: headers,
        data: Studentlist
    }
  return (
    <div>
        <NavbarMenu />
        <Sidebar />
        <ToastContainer position='top-center' />
        <Container style={{marginTop:'8rem'}}>
        <h2 className='text-center'>List Of Candidate</h2>
        </Container>
        
        <div className='jd-wraper' >
        
            <Container  className='table-data' fluid >
            <Button className='mb-2'><CSVLink {...csvReport} style={{textDecoration:"none", color:"white"}}><i className='fas fa-download' /></CSVLink></Button>
            <Button className='btn btn-success mb-2 mx-2' onClick={()=>{toast.dark("Cuurently not added to trackersheet :(")}}>Add to tracker sheet</Button>
            <Button className='btn btn-warning mb-2 mx-2' as={Link} to="/FilterStudent"><i className='fas fa-filter me-2'/> Filter </Button>
                <Table responsive className='data-table' hover >
                    <thead >
                        <tr>
                            <th>*</th>
                            <th>Candidate ID </th>
                            <th>JD number </th>
                            <th>Client name</th>
                            <th>JD title </th>
                            <th>JD location </th>
                            <th>Recruiter ID </th>
                            <th>Candidate name </th>
                            <th>Current designation </th>
                            <th>Current salary </th>
                            <th>Last Appraisal of the candidate </th>
                            <th>Expected salary </th>
                            <th>Dropdown</th>
                            <th>Total experience </th>
                            <th>Education</th>
                            <th>Current organization </th>
                            <th>Current location </th>
                            <th>Candidate mobile number</th>
                            <th>Notice period </th>
                            <th>JD sent to candidate</th>
                            <th>candidate availability for the interview </th>
                            <th>Recruiter’s remarks </th>
                            <th>Date and time of adding a candidate</th>
                            <th>Special comments</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Studentlist.map((student)=>{return(
                       <>
                        <tr>
                            <td><Form.Check type='checkbox' /></td>
                            <td>{student.id}</td>
                            <td>{student.jdno}</td>
                            <td>{student.Clientname}</td>
                            <td>{student.JDtitle}</td>
                            <td>{student.JDlocation}</td>
                            <td>{student.RecruiterID}</td>
                            <td>{student.Candidatename}</td>
                            <td>{student.Currentdesignation}</td>
                            <td>{student.Currentsalary}</td>
                            <td>May 2022</td>
                            <td>1 lacs/annum</td>
                            <td>Negotiable</td>
                            <td>4 Years</td>
                            <td>MBA</td>
                            <td>N/a</td>
                            <td>Patna, India</td>
                            <td>785878787</td>
                            <td>90 days</td>
                            <td>Yes</td>
                            <td>This week</td>
                            <td>candidate is currently Not working/Jobless </td>
                            <td>21-May-2022 3:45 P.M</td>
                            <td>Good</td>
                            <td>
                            <div className='d-flex'>
                            <Button variant='outline-danger' onClick={()=>{toast.error("Currently you cannot not delete table item without backend intigration")}}><i className='fas fa-trash'/></Button> 
                            <Button variant='outline-secondary' className='mx-2' as={Link} to="/Editstudent"><i className='fas fa-pen'/></Button>
                            </div>
                            </td>
                        </tr>
                     </>
                    )})}
                    </tbody>
             
                </Table> 
        </Container>
        </div>
    </div>
  )
}

export default ListOfCandidate