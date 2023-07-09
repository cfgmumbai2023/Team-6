import React from 'react'
import Header from '../Components/Header'
import img from '../images/about-page/about.jpg'

function AboutUs() {
    return (
        <div>
            <Header />
            {/* ABOUT US SECTION  */}
            <section id="about" class="about">
                <div class="container d-flex align-items-center p-5" data-aos="fade-up">
                    <div class="row">
                        <h1 className='mb-3'>About Us</h1>
                        <div className="d-flex justify-content-between pt-5">
                            <div class="d-flex col-md-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                                <div class="align-self-center">
                                    <h3>RamaKrishna Sarada Samiti</h3>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus id corrupti incidunt nihil itaque quasi deserunt magni voluptatem dolorem accusantium. A veniam, labore nam laboriosam sed quam numquam quibusdam voluptates.
                                    </p>
                                    <ul>
                                        <li>
                                            <span class="material-symbols-outlined text-primary">
                                                done_all
                                            </span>
                                            Service 1
                                        </li>
                                        <li>
                                            <span class="material-symbols-outlined text-primary">
                                                done_all
                                            </span>
                                            Service 2
                                        </li>
                                        <li>
                                            <span class="material-symbols-outlined text-primary">
                                                done_all
                                            </span>
                                            Service 3
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default AboutUs