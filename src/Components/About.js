import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Container, Typography } from '@mui/material';
const About = () => {
  return (
    <div>
      <Container>
      <div className="About-us-section">
        <div className="About-us-first-section">
          <div className='row'>
            <div className='col-md-8'>
              <div className='About-us-first-section-img'>
                <img src="https://ictkerala.org/assets/images/PHOTO_ICTAK-Reception.jpg" alt="Your Image" ></img>
              </div>

            </div>
            <div className='col-md-4'>
              <div className='About-us-first-section-text'>
                <div className='About-us-first-section-heading'>
                  <Typography variant='h3' className="About-us-first-section-title">
                    ICTAK
                  </Typography>
                </div>
                <div className='About-us-first-section-paragraph'>
                  <p>
                    ICT Academy of Kerala is a Social Enterprise created in a Public Private Partnership model (PPP) for imparting ICT skills to the youths of Kerala and improving their employability opportunities in the Industry. The Company is supported by Govt. of India, partnered by Govt. of Kerala and the IT industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="About-us-second-section">
          <div className='row'>
            <div className='col-md-4'>
              <div className='About-us-second-section-text'>
                <div className='About-us-second-section-heading'>
                  <Typography variant='h6' className="About-us-second-section-title">
                    Vision & Values
                  </Typography>
                </div>
                <div className='About-us-second-section-paragraph'>
                  <p>
                    "To emerge as the single-point establishment for all the ICT related capability building in the state."
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-8'>
              <div className='About-us-second-section-img'>
                <img src="https://ictkerala.org/assets/images/PHOTO_ICTAK-Vision.jpg" alt="Your Image"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="About-us-third-section">
          <div className='row'>
            <div className='col-md-4'>

              <div className='About-us-third-section-img'>
                <img src="https://ictkerala.org/assets/images/DP_BoD01%20(Tony%20Thomas).png" alt="Your Image" className="img-fluid"></img>
              </div>

            </div>
            <div className='col-md-8'>
              <div className='About-us-third-section-text'>
                <div className='About-us-third-section-heading'>
                  <Typography variant='h6' className="About-us-third-section-title">
                    Meet our Chairman
                  </Typography>
                </div>
                <div className='About-us-third-section-paragraph'>
                  <p>
                    "The ICT Academy of Kerala has emerged as a strategic partner for the industry, academia, and government in bridging the skills gap in the field of Information Communication Technology. Over the years, ICT Academy has successfully supported the industry and academia in talent needs and skills supply and has touched youths and professionals alike in fulfilling their career aspirations. We will continue to invest in building capabilities in the latest technology and business domains to help our beneficiaries. We shall work with the Government of Kerala in its mission for talent development and employment."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="About-us-fourth-section">
          <div className='row'>
            <div className='col-md-6'>
              <div className='About-us-fourth-section-text'>
                <div className='About-us-fourth-section-heading'>
                  <Typography variant='h6' className="About-us-fourth-section-title">
                    Operating Units
                  </Typography>
                </div>
                <div className='About-us-fourth-section-paragraph'>
                  <p>
                    The ICT Academy of Kerala, as a team works under different Operations Units in order to effectively achieve the organisation's vision and mission. The OUs of ICTAK include the Academic Operations, Corporate Operations, Government Operations, IT Solutions, Knowledge Office, Retail Operations and Corporate Functions.
                  </p>
                </div>
              </div>


            </div>
            <div className='col-md-6'>

              <div className='About-us-fourth-section-img'>
                <img src="https://ictkerala.org/assets/images/GRA_Header-OUs.png" alt="Your Image"></img>
              </div>
            </div>
          </div>
        </div>
        <div className='About-us-commitee'>
          <div className='About-us-commitee-heading'>
            <Typography variant='h6' className="About-us-commitee-title">
              Technical and Management Advisory Committe
            </Typography>

          </div>
          <div className='About-us-commitee-details'>
            <p>
              The Technical and Management Advisory Committee is the prime body of the ICT Academy of Kerala, comprising industry experts and members from government bodies. The committee assists the management in overseeing the implementation of technical recommendations in giving industry-relevant skills to the graduates in the state. The committee also takes appropriate or additional steps to improve the quality of the curriculum used for upskilling.
            </p>
            <div className="About-us-commitee-details-list">
            <ol>
              <li>Robin Tommy (Head Rapid Lab, TCS)</li>
              <li>Ganesh Iyer (Senior Manager & Head - Learning & Assessment, IBS)</li>
              <li>Francis Regan (CTO & Co-Founder, Ionics 3DP)</li>
              <li>Dr. Hiran V. Nath (Assistant Professor, NIT Calicut)</li>
              <li>Rajkin G. (Technology Solutions Leader, QuEST Global)</li>
              <li>Muthuraman C. (Senior GDS - Technology Consulting, EY)</li>
              <li>Ravi Ganapathi (Lead Principal, Infosys)</li>
              <li>Naveen (Freelancer)</li>
              <li>Bobinson K.B. (President & CEO, AgileBlaze)</li>
              <li>Syamkumar A.S. (Security and Operations Lead, SecurityAdvisor)</li>
            </ol>
            </div>
          </div>
        </div>
        </div>
      </Container>
    </div>
  )
}

export default About
