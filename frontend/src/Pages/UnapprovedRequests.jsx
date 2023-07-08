import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function UnapprovedRequests() {
    return (
        <div>
            <Header />
            <div className='container d-flex justify-content-center'>
                <div className="links">
                    <ul className='list-group'>
                        <li className='list-group-item'>
                            <div className='d-flex justify-content-between'>
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
                                <div className='mx-3'>
                                    <button className='btn btn-outline-success me-2'>Accept</button>
                                    <button className='btn btn-outline-danger'>Decline</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UnapprovedRequests