import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// import '../../components/Header.css'
// import Footer from '../../components/Footer'
function Home() {
  return (
    <div>
        <Header />
        <section id="hero" class="d-flex align-items-center justify-content-center">
            <div class="container d-flex justify-content-center align-items-center" data-aos="fade-up">
                <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
                    <div class="col-xl-6 col-lg-8">
                        <h1>Je<span>et</span></h1>
                        <h2>Empowering Education<br/>Bridging Gaps, Fostering Inclusion, and Unleashing Potential</h2>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default Home