import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Admin() {
  return (
    <div>
        <Header />
        <div className="container">
            <div>
                <div className='d-flex justify-content-center'>
                    <div className='m-5'>
                        <a href='/admin/unapproved-requests' class="btn btn-default btn-lg btn-outline-primary me-3">Unapproved Requests</a>
                        <a href='/admin/unapproved-requests' class="btn btn-default btn-lg btn-outline-success">Approved Requests</a>
                    </div>
                </div>
                <div className="requests-table">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Url</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>

                                    <div class="dropdown">
                                        <button class="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Link 1
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li className='ps-3'><span>ID</span></li>
                                            <li className='ps-3'><span>Name</span></li>
                                            <li className='ps-3'><span>Rating</span></li>
                                            <li className='ps-3'><span>Tags</span></li>
                                            <li className='ps-3'><span>Restriction</span></li>
                                            <li className='ps-3'><span>Language</span></li>
                                        </ul>
                                    </div>

                                </td>
                                <td>

                                    <div className='mx-3'>
                                        <button className='btn btn-outline-success me-2'>Accept</button>
                                        <button className='btn btn-outline-danger'>Decline</button>
                                    </div>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Admin