import React from 'react'

import "./home.modules.css"

import "../text/future-earth.ttf"
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './navbar';
import { Particle } from './Particle';
import { Link } from "react-router-dom";
import Timer from "./Countdown/Timer";
import "./button.css";

export default function Home() {
  return (
    <div className='container-fluid home'>
      <Particle/>
        <Navigation/>
       <div className='row'>
        <div className='head'>
        <p className='hp2' style={{fontSize: "35px"}}>R.M.K. ENGINEERING COLLEGE <br></br></p>

        <p className='hp2'>DEPARTMENT OF INFORMATION TECHNOLOGY <br></br></p>
        <p className='hp2' style={{fontSize: "20px"}}> Presents</p>
        
        </div>
        <div className='col-4'>
        </div>
       </div>
       <div className='row'>
       <div className='hbody'>
        <p className='hp4'>CYBERNAUTIX’24</p>
        </div>
       
        <div className='row mb-3 htabl text-center'>
          <div className='col-md-3'></div>
            <div className='col-md-2 htbcont'>
            {/* <Link to="/events"> */}

                <p className='htp1' id="cal">

                <img id="calender" src="https://github.com/nitinmano/image-store/blob/main/Cal-Green.gif?raw=true" alt="logo" width="55px" height="55px" />




                </p>
                {/* </Link> */}

                <p className='htp2' >05 February 2024</p>
            </div>
            
            <div className='col-md-2 htbcont'>
               <p className=' htp1'><lord-icon
                src="https://cdn.lordicon.com/isdxbcqi.json"
                colors="primary:#00ff66,secondary:#00ff66"
                trigger="loop"
                style={{ width: "75px", height: "75px" }}
              ></lord-icon></p>
                <p className='htp2'>Free Entry</p>
            </div>
             
            <div className='col-md-2 htbcont'>
              <Link to="/Contactus">
               <p className='htp1'><lord-icon
                src="https://cdn.lordicon.com/elzslyvl.json"
                trigger="loop"
                colors="primary:#00ff66,secondary:#00ff66"
                state="hover-spin"
                style={{ width: "75px", height: "75px" }}
              ></lord-icon></p>
                            </Link>

                <p className='htp2'>R.M.K. Engineering College</p>
            </div>
            <div className='col-md-3'></div>

        </div>
      
       </div>
       <div className='row'>
       <Timer/>
       </div>
       <div style={{ display: 'flex', justifyContent: 'center'}}>
  <div className="wrap" style={{ marginRight: '20px' }}>
    <Link to="/register" style={{ textDecoration: 'none' }}>
      <div className="wrap">
        <button className="button" style={{ marginTop: '2%', padding: '10px', width: '250px' }}> Register </button>
      </div>
    </Link>
  </div>

  <div className="wrap">
    <Link to="/login" style={{ textDecoration: 'none' }}>
      <div className="wrap">
        <button className="button" style={{ marginTop: '2%', padding: '10px', width: '250px' }}> Login </button>
      </div>
    </Link>
  </div>
</div>
          
    </div>
    
  )
}
