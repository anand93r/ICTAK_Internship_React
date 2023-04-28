import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Button, Container, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
const SingleCoursePage = () => {

  const location = useLocation();
  const {course} = location.state

    return (
        <div>
            <Container>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='course-date'>
                            <Typography variant='h6' className="course-page-title-date">
                                Starts on {course.regStart}
                            </Typography>
                            <Typography variant='h4' className="course-page-title">
                                {course.title}
                            </Typography>
                        </div>
                        <img src={course.image} alt="Your Image" className="img-fluid" />
                        <div className='course-detail-overview-heading'>
                            <Typography variant='h5'>
                                Overview
                            </Typography>
                        </div>
                        <div className='course-detail-overview'>
                         {course.overview}
                            <p>
                                Course Venue:<span className='course-detail-overview-venue' >Malabar Cancer Centre, Moozhikkara (P.O), Thalassery, Kannur</span>
                            </p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='course-detail-fee'>
                            <div className='course-fee'>
                                <h3>
                                   {course.cFee} INR + 18% GST
                                </h3>
                            </div>


                            <div>
                                <Button variant='contained'
                                    className="course-register-button"
                                    id='course-reg-button'>Register Now !</Button>
                            </div>
                            <hr></hr>
                            <div >
                                <Typography variant='h6' className='course-includes'>
                                    This course includes
                                </Typography>
                            </div>
                            <div className='course-includes-detail-points'>
                                <p>{course.cDuration} of classes</p>
                                <p>150 Hrs. of theory</p>
                                <p>6 Months internship (with stipend)</p>
                            </div>
                            <div className="course-note-section">
                                <div div className="course-note-section-heading">
                                    <p>Please Note</p>
                                </div>
                                <div div className="course-note-section-points">
                                    <p>{course.open === "true" ?  <span style={{fontWeight: 'bold', color: 'green'}} >Currently Available</span> :  <span style={{fontWeight: 'bold', color: 'red'}}>Not Available</span>}</p>
                                    <p>Registration starts on {course.regStart}</p>
                                    <p>Registration ends on {course.regEnd}</p>
                                    <p>Early bird offer till Mar 10</p>
                                    <p>Batch size ~15 Nos.</p>
                                </div>

                            </div>
                            <div className="course-page-resources">

                            </div>
                            <div>
                                <Button variant='contained'
                                    className="course-register-button"
                                    id='course-reg-button'>Register Now !</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='course-additional-details'>
                    <button className="accordion">Objectives</button>
                    <div className="panel">
                        <ul>
                            <li>Understand the fundamentals of Healthcare Informatics, Health IT Architecture, Artificial Intelligence & Expert Systems, Decision Support Systems, and Health Information Systems.</li>
                            <li >Become familiar with the basic operations of IT assets - Hardware and Software Maintenance, Telemedicine and Applications, Healthcare Revenue Management, Computerized Patient Records, and Introduction to Medical Databases: Patient Registries and Patient Portals.</li>
                            <li>Investigate applications of Digital Health, Digital Literacy for Healthcare, IT Governance and Management in Healthcare, Data Center Management, Database Management, Backup Policies, and Disaster Management.</li>
                            <li>Understand the standards of Health Informatics, Nursing Informatics, Pharmacy Information Systems, Electronic Health, Radiology Information system, Picture Archival, and Communication Systems.</li>
                        </ul>

                    </div>

                    <button class="accordion">Highlights</button>
                    <div class="panel">

                        <ul>
                            <li>Live training environment</li>
                            <li>Certificate issued by ICTAK & MCC </li>
                            <li>Practical oriented training program  </li>
                            <li>Access to more than 14000 LinkedIn courses</li>
                            <li>Internship training with a stipend</li>
                            <li>Opportunity to face real situations in the hospital</li>
                            <li>5-6 self paced add-on course</li>
                            <li>Logbook for training</li>
                        </ul>
                    </div>

                    <button class="accordion">Course Agenda</button>
                    <div class="panel">
                        <ul>
                            <li>Health Care Informatics</li>
                            <li>Health IT Architecture</li>
                            <li>Artificial Intelligence and Expert Systems</li>
                            <li>Decision Support Systems</li>
                            <li>Health Information Systems</li>
                            <li>Internet in Healthcare</li>
                            <li>IT asset-Hardware and Software Maintenance</li>
                            <li>Telemedicine and Applications</li>
                            <li>Project Work</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )

}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


export default SingleCoursePage
