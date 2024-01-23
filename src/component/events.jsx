import "./events.css";
import React from "react";
import Navigation from "./navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Particle } from "./Particle";
import image from "../image/tech1.jpg";
import pixplay from "../image/pixplay.webp";
import image5 from "../image/tech5.jpg";
import image3 from "../image/tech3.jpg";
import smirk from "../image/smirk.jpg";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { animation } from "react-reveal/globals";
export default function Events() {
  return (
    <div>
      <Navigation />
      <div>
      <Fade left >
        <h2 className="eh1">Technical Events </h2>
       </Fade>
        <div class="container ">
        
       
          <div class="row justify-content-centre">
          
            <div class="col-sm-6 col-md-6 col-lg-4 pad ">
            <Fade left >
              <Link to="/events/1" className="link">
                <div className="grid circle-1">
                  <img src={image5} alt="" />
                  <div className="align"><h2 id="pp" className="evename">
                    Blitz <br /> Byte                  </h2></div>
                  
                </div>
              </Link>
              </Fade>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-4 pad ">
            <Fade left >
              <Link to="/events/2" className="link">
                <div className="grid circle-1">
                  <img src={image3} alt="" />
                  <div className="align"><h2 className="evename">
                    U <br /> Xplorer
                  </h2></div>
                  
                </div>
              </Link>
              </Fade>
            </div>

            

            <div class="col-sm-6 col-md-6 col-lg-4 pad">
            <Fade left >
              <Link to="/events/3" className="link">
                <div className="grid circle-1">
                  <img src="https://www.ngoaingucongdong.com/wp-content/uploads/2021/01/Seminar-la-gi-anh-dai-dien.jpg" alt="" />
                  <div className="align"><h2 className="evename">
                    Paper <br /> Pinnacle
                  </h2></div>
                  
                </div>
              </Link>
              </Fade>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-7 pad ">
            <Fade left >
              <Link to="/events/4" className="link">
                <div className="grid circle-1">
                  <img src={image} alt="" />
                  <div className="align"><h2 id="OC" className="evename">
                    Web <br /> Vortex
                  </h2></div>
                  
                </div>
              </Link>
              </Fade>
            </div>

            

            <div class="col-sm-6 col-md-6 col-lg-2 pad  ">
            <Fade left >
              <Link to="/events/5" className="link">
                <div className="grid circle-1">
                  <img src={pixplay} alt="" />
                  <div className="align"><h2 id="OC" className="evename">
                    Pixel <br /> Playground
                  </h2></div>
                  
                </div>
              </Link>
              </Fade>
            </div>
            
         
          
          
         
            
         
           

        

          
          </div>
        
        </div>
      </div>
     
      <div>
      <Fade left >
        <h2 className="eh1">NonTechnical Events </h2>
       </Fade>
        <div class="container ">
        
       
          <div class="row justify-content-centre">
          
            <div class="col-sm-6 col-md-6 col-lg-4 pad ">
            <Fade left >
              <Link to="/events/6" className="link">
                <div className="grid circle-1">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3paPAOQWBgA6t7h1vtxM1St60j72QeqyxjA077KHLB3bIi387G2XCjGfF1o-VOiiuuX0&usqp=CAU" alt="" />
                  <div className="align"><h2 id="pp" className="evename">
                    Lixi <br /> Charm                  </h2></div>
                  
                </div>
              </Link>
              </Fade>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-4 pad ">
            <Fade left >
              <Link to="/events/7" className="link">
                <div className="grid circle-1">
                  <img src="https://c1.wallpaperflare.com/preview/149/556/904/puzzle-game-solution-connection-thumbnail.jpg" alt="" />
                  <div className="align"><h2 id="Con" className="evename">
                    Con-tac-tix 
                  </h2></div>
                  
                </div>
              </Link>
              </Fade>
            </div>

            

            <div class="col-sm-6 col-md-6 col-lg-4 pad">
            <Fade left >
              <Link to="/events/8" className="link">
                <div className="grid circle-1">
                  <img src={smirk} alt="" />
                  <div className="align"><h2 id="Con" className="evename">
                    *Smirk*
                  </h2></div>
                  
                </div>
              </Link>
              </Fade>
            </div>
          
          </div>
      
        </div>
      </div>
       
      
      <Particle />
    </div>
   
  );
}