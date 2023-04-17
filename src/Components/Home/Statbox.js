import { Container, Typography } from "@mui/material";
import React from "react";
import "./Statbox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate,faChalkboardUser,faBriefcase,faLaptopCode,faIndustry,faSchool } from "@fortawesome/free-solid-svg-icons";

const Statbox = () => {
  return (
    <Container disableGutters maxWidth="xl">
      <div className="statpage">
        <div className="main-box">
          <div className="sub-box">
            <div className="mini-box">
              <>
                <FontAwesomeIcon icon={faUserGraduate} size="3x" />
              </>
              <Typography className="mini-content">25K+</Typography>
            </div>
            <Typography className="sub-content">
              Participants Trained
            </Typography>
          </div>
          <div className="sub-box">
            <div className="mini-box">
              <>
              <FontAwesomeIcon icon={faChalkboardUser} size="3x" />
              </>
              <Typography className="mini-content">25K+</Typography>
            </div>
            <Typography className="sub-content">Faculty Trained</Typography>
          </div>
          <div className="sub-box">
            <div className="mini-box">
              <>
              <FontAwesomeIcon icon={faBriefcase} size="3x" />
              </>
              <Typography className="mini-content">25K+</Typography>
            </div>
            <Typography className="sub-content">Placements Realised</Typography>
          </div>
          <div className="sub-box">
            <div className="mini-box">
              <>
              <FontAwesomeIcon icon={faLaptopCode}  size="3x" />
              </>
              <Typography className="mini-content">25K+</Typography>
            </div>
            <Typography className="sub-content">
              Internships Completed
            </Typography>
          </div>
          <div className="sub-box">
            <div className="mini-box">
              <>
              <FontAwesomeIcon icon={faIndustry}  size="3x" />
              </>
              <Typography className="mini-content">25K+</Typography>
            </div>
            <Typography className="sub-content">
              Industry Partnerships
            </Typography>
          </div>
          <div className="sub-box">
            <div className="mini-box">
              <>
              <FontAwesomeIcon icon={faSchool}  size="3x" />
              </>
              <Typography className="mini-content">25K+</Typography>
            </div>
            <Typography className="sub-content">
              Academic Memberships
            </Typography>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Statbox;
