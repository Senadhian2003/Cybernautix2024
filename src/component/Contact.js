import React, { useState } from "react";
import Navigation from "./navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./contact.css";
import { Particle } from "./Particle";
import Mob from "./Mob";
export default function Contact() {
  const [loading, setLoading] = useState(true);
  function onLoad() {
    setLoading(false);
  }

  return (
    <div>
      <Particle />

      <Navigation />
      <p className="eh1" style={{ textAlign: "center" }}>
        Contact Us
      </p>
      <Container fluid>
        <Row>
          <Col lg={6}>
            <div className="cd1">
              <div className="loader">
              </div>
              <iframe
                onLoad={onLoad}
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.8975604743096!2d80.13891621464958!3d13.356645390604042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d807de229f987%3A0x11cc13e2927bfabc!2sR.M.K.%20Engineering%20College!5e0!3m2!1sen!2sin!4v1666782180674!5m2!1sen!2sin"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
          <Col lg={6} className="cd2">
            <div className="ctcont1 ">
              <div className="cttxt">
                <lord-icon
                  id="loc"
                  src="https://cdn.lordicon.com/elzslyvl.json"
                  trigger="hover"
                  colors="primary:#4be1ec,secondary:#cb5eee"
                  state="hover-spin"
                ></lord-icon>
                {/* <div className="hover-fx">
                      <div className="si-globe">
                      <svg  xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="white" className="bi bi-geo-alt" viewBox="0 0 16 16">
               <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                
               </svg>
                      </div>
                   
                    </div> */}

                <p className="ctcp1">
                RSM Nagar, Gummidipoondi, Taluk, Kavaraipettai, Tamil Nadu 601206.
                </p>
              </div>

              <div className="cttxt">
                <lord-icon
                  src="https://cdn.lordicon.com/egpbfgcp.json"
                  trigger="hover"
                  style={{ width: "75px", height: "75px" }}
                ></lord-icon>

                <p className="ctcp1">events.it@rmkec.ac.in</p>
              </div>

              <div className="cttxt">
                <lord-icon
                  src="https://cdn.lordicon.com/abxptjcw.json"
                  trigger="hover"
                  style={{ width: "75px", height: "75px" }}
                ></lord-icon>

                <p className="ctcp1">+91 9941165707</p>
              </div>

              <a id="bus" href="https://chat.whatsapp.com/DBC6TIRs1nF4dbCEp9xzeY" target="_blank">
              <div className="cttxt">
                <lord-icon
                  id="lob"
                   src="https://cdn.lordicon.com/xgvwytap.json"
                  trigger="hover"
                  style={{ width: "75px", height: "75px" }}
                ></lord-icon>

                <p className="ctcp1">
                    Click to know about Bus Route information
                </p>
              </div>
              </a>

            </div>
            <div id="hod">
              hi
            </div>
            



                    
          </Col>
        </Row>
      </Container>
    </div>
  );
}
