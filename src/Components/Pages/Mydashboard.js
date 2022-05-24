import React from 'react'
import NavbarMenu from "../NavbarMenu/NavbarMenu"
import Sidebar from "../Sidebar/Sidebar"
import {Container, Table, Dropdown} from "react-bootstrap"
import {Link} from "react-router-dom"
const Mydashboard = () => {
  const DashboardList= [
    {date:"23-05-2022",mobilenumbers:"0", JDslocked:"100",interviewstage:"50",successfulclosures:"30",offerstage:"20",delivered:"90", pendingdelivery:"30",JDrework:"89", rating:"110", totalpayouts:"200"},
    {date:"23-05-2022",mobilenumbers:"0", JDslocked:"100",interviewstage:"50",successfulclosures:"30",offerstage:"20",delivered:"90", pendingdelivery:"30",JDrework:"89", rating:"110", totalpayouts:"200"},
    {date:"23-05-2022",mobilenumbers:"0", JDslocked:"100",interviewstage:"50",successfulclosures:"30",offerstage:"10",delivered:"23", pendingdelivery:"30",JDrework:"89", rating:"110", totalpayouts:"200"},
    {date:"23-05-2022",mobilenumbers:"0", JDslocked:"100",interviewstage:"50",successfulclosures:"40",offerstage:"20",delivered:"33", pendingdelivery:"30",JDrework:"89", rating:"110", totalpayouts:"200"},
    {date:"23-05-2022",mobilenumbers:"0", JDslocked:"100",interviewstage:"50",successfulclosures:"30",offerstage:"20",delivered:"33", pendingdelivery:"30",JDrework:"89", rating:"110", totalpayouts:"200"},
    {date:"23-05-2022",mobilenumbers:"0", JDslocked:"100",interviewstage:"50",successfulclosures:"40",offerstage:"20",delivered:"90", pendingdelivery:"30",JDrework:"89", rating:"110", totalpayouts:"200"},
    {date:"23-05-2022",mobilenumbers:"0", JDslocked:"100",interviewstage:"50",successfulclosures:"40",offerstage:"20",delivered:"90", pendingdelivery:"30",JDrework:"89", rating:"110", totalpayouts:"200"}


  ]
  return (
    <div>
      <NavbarMenu />
      <Sidebar />
      <Container style={{marginTop:"8rem"}}>
        <h4 className='text-center'>List Of Dashboard</h4>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic" className='mb-3'>
            Today
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/MyDashoardThisWeek">This Week</Dropdown.Item>
            <Dropdown.Item >This Month</Dropdown.Item>
            <Dropdown.Item >Last Month</Dropdown.Item>
            <Dropdown.Item >Last Quarter</Dropdown.Item>
            <Dropdown.Item >Last Year</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
      
      <div className='jd-wraper' >
            <Container  className='table-data' fluid >
                <Table responsive className='data-table' hover >
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>No. of mobile numbers<br></br>/emails viewed /downloaded <br></br>(if used our portal)</th>
                      <th>No. of JDs locked</th>
                      <th>No. of JDs at interview stage</th>
                      <th>No. of successful closures</th>
                      <th>No. of JDs at offer stage</th>
                      <th>No. of JD delivered/submitted<br></br> but feedback <br></br>pending from client</th>
                      <th>No. of pending delivery <br></br>submissions by user<br></br> after locking the JDs</th>
                      <th>No. of JD rework</th>
                      <th>My user rating</th>
                      <th>My total payouts/incentives</th>
                    </tr>
                  </thead>
                  <tbody>
                  {DashboardList.map((list)=>{return(
                     <>
                     <tr>
                       <td>{list.date}</td>
                       <td>{list.mobilenumbers}</td>
                       <td>{list.JDslocked}</td>
                       <td>{list.interviewstage}</td>
                       <td>{list.successfulclosures}</td>
                       <td>{list.offerstage}</td>
                       <td>{list.delivered}</td>
                       <td>{list.pendingdelivery}</td>
                       <td>{list.JDrework}</td>
                       <td>{list.rating}</td>
                       <td>{list.totalpayouts}</td>
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

export default Mydashboard