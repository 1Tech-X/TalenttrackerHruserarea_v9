import React from 'react'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Sidebar from '../Sidebar/Sidebar'
import { Container, Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Myoffer = () => {
  const offerFields=[
    {JDnumber:"01", UserId:"001user", CandidateID:"0007",clientId:"121",Candidatename:"Prashant", offerdesignation:"n/a", newworklocation:"Patna, India", Offeredctc:"N/a",Signuprate:"N/a",Baseinvoicevalue:"N/a",Offeraccepted:"Yes",DOJ:"23-05-2022",Resigned:"No",Userincentives:"N/a",	Joined:"No",comments:"good" },
    {JDnumber:"02", UserId:"001user", CandidateID:"0007",clientId:"121",Candidatename:"Prashant", offerdesignation:"n/a", newworklocation:"Patna, India", Offeredctc:"N/a",Signuprate:"N/a",Baseinvoicevalue:"N/a",Offeraccepted:"Yes",DOJ:"23-05-2022",Resigned:"No",Userincentives:"N/a",	Joined:"No",comments:"good" },
    {JDnumber:"03", UserId:"001user", CandidateID:"0007",clientId:"121",Candidatename:"Prashant", offerdesignation:"n/a", newworklocation:"Patna, India", Offeredctc:"N/a",Signuprate:"N/a",Baseinvoicevalue:"N/a",Offeraccepted:"Yes",DOJ:"23-05-2022",Resigned:"No",Userincentives:"N/a",	Joined:"No",comments:"good" },
    {JDnumber:"04", UserId:"001user", CandidateID:"0007",clientId:"121",Candidatename:"Prashant", offerdesignation:"n/a", newworklocation:"Patna, India", Offeredctc:"N/a",Signuprate:"N/a",Baseinvoicevalue:"N/a",Offeraccepted:"Yes",DOJ:"23-05-2022",Resigned:"No",Userincentives:"N/a",	Joined:"No",comments:"good" },
    {JDnumber:"05", UserId:"001user", CandidateID:"0007",clientId:"121",Candidatename:"Prashant", offerdesignation:"n/a", newworklocation:"Patna, India", Offeredctc:"N/a",Signuprate:"N/a",Baseinvoicevalue:"N/a",Offeraccepted:"Yes",DOJ:"23-05-2022",Resigned:"No",Userincentives:"N/a",	Joined:"No",comments:"good" },
    {JDnumber:"06", UserId:"001user", CandidateID:"0007",clientId:"121",Candidatename:"Prashant", offerdesignation:"n/a", newworklocation:"Patna, India", Offeredctc:"N/a",Signuprate:"N/a",Baseinvoicevalue:"N/a",Offeraccepted:"Yes",DOJ:"23-05-2022",Resigned:"No",Userincentives:"N/a",	Joined:"No",comments:"good" },
    {JDnumber:"07", UserId:"001user", CandidateID:"0007",clientId:"121",Candidatename:"Prashant", offerdesignation:"n/a", newworklocation:"Patna, India", Offeredctc:"N/a",Signuprate:"N/a",Baseinvoicevalue:"N/a",Offeraccepted:"Yes",DOJ:"23-05-2022",Resigned:"No",Userincentives:"N/a",	Joined:"No",comments:"good" },
  ]
  return (
    <div>
      <NavbarMenu />
      <Sidebar />
      <Container style={{marginTop:'8rem'}}>
        <h2 className='text-center'>My Offer</h2>
        <Button as={Link} to="/MyOfferFilter" className="btn btn-warning mb-2" size='sm'><i className='fas fa-filter me-2'/>Filter</Button>
        </Container>
      <div className='jd-wraper' >
            <Container  className='table-data' fluid>
                <Table responsive className='data-table shadow' hover >
                  <thead>
                    <tr>
                      <th>JD number</th>
                      <th>User ID</th>
                      <th>Candidate ID</th>
                      <th>Client ID</th>
                      <th>Offer candidate name</th>
                      <th>Offered designation</th>
                      <th>Candidate new work location</th>
                      <th>Offered ctc</th>
                      <th>Sign up rate</th>
                      <th>Base invoice value</th>
                      <th>Offer accepted</th>
                      <th>DOJ</th>
                      <th>Resigned</th>
                      <th>User incentives </th>
                      <th>Joined</th>
                      <th>User comments
                        <br></br>/remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {offerFields.map((list) =>{return(<>
                    
                    <tr>
                      <td>{list.JDnumber}</td>
                      <td>{list.UserId}</td>
                      <td>{list.CandidateID}</td>
                      <td>{list.clientId}</td>
                      <td>{list.Candidatename}</td>
                      <td>{list.offerdesignation}</td>
                      <td>{list.newworklocation}</td>
                      <td>{list.Offeredctc}</td>
                      <td>{list.Signuprate}</td>
                      <td>{list.Baseinvoicevalue}</td>
                      <td>{list.Offeraccepted}</td>
                      <td>{list.DOJ}</td>
                      <td>{list.Resigned}</td>
                      <td>{list.Userincentives}</td>
                      <td>{list.Joined}</td>
                      <td>{list.comments}</td>
                    </tr>
                    </>)})}
                  </tbody>
                </Table>
                
                </Container>
                </div>
    </div>
  )
}

export default Myoffer