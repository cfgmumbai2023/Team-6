import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="row d-flex justify-content-center pt-4">

        {/* FOOTER LEFT SECTION  */}
        <div className="col-4 footer-left">
          <div className='pb-3'>
            <span className='pe-2'>Click here to Know About us </span>
            <a href='/about-us' class="btn btn-default btn-lg btn-outline-primary">About Us</a>
          </div>
          <div className="social-media">
            <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
            <a href="https://www.linkedin.com/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://www.twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
          <div className="contact-info">
            <p>Email: <a href="mailto:Jeetfoundation.care@gmail.com">Jeetfoundation.care@gmail.com</a></p>
            <p>Phone: 9140747358</p>
            <p>Address: PAREEWAN BLOCK TRIVEDIGANJ SUBDISTRICT HAIDERGARH DISTRICT BARABANKI UTTAR PRADESH 225126</p>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Ramkrishna Sarda Samiti. All rights reserved.</p>
          </div>
        </div>

        {/* FOOTER RIGHT SECTION  */}
        <div className="col-4">
          {/* CONTACT US SECTION  */}
          <div className='contact-us'>
            <h3 className='text-start'>Contact Us</h3>
            <input type="text" class="form-control mb-2" placeholder="Full Name" name="Contact-Name " id="input-name" />
            <input type="email" class="form-control mb-2" placeholder="Email Address" name="Contact-Email " id="input-email" />
            <input type='text' class="form-control mb-2" placeholder="Enter Phone No" name="Contact-Phone-No " id="input-phone-no" />
            <div class="send-button d-flex justify-content-end btn">
              <button type="button" class="btn btn-default btn-lg btn-outline-primary">Send</button>
            </div>
          </div>
        </div>
      </div>






    </footer>
  );
};

export default Footer;