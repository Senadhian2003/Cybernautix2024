import React from 'react';
import Navigation from './navbar';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './GetDoc.css';


const GetDoc = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Access the form data from URL parameters
  const id=queryParams.get('id');
  const name = queryParams.get('name');
  const college = queryParams.get('college');
  const email = queryParams.get('email');
  const phoneNumber=queryParams.get('phoneNumber');
  const technicalEvents = queryParams.get('technicalEvents')?.split(',') || [];
  const nonTechnicalEvents = queryParams.get('nonTechnicalEvents')?.split(',') || [];

  const handleDownload = () => {
    window.print();
 };


  return (
    <div className="body" >
      <div >
        <Navigation />
        <p className="txt">
          Please print these details, you will be requested to show this pdf on the symposium events.
        </p>
        <div className="container1 mt-4">
          <h1>Registration Details</h1>
          <div className='container2' >
            <p>Id:{id}</p>
            <p>Name: {name}</p>
            <p>College: {college}</p>
            <p>Email: {email}</p>
            <p>Phone Number:{phoneNumber}</p>
            <p>Technical Events: {technicalEvents.join(', ')}</p>
            <p>Non Technical Events: {nonTechnicalEvents.join(', ')}</p>
          </div>
          <button className='btn' onClick={handleDownload}>Print</button>
        </div>
      </div>
    </div>
  );
};

export default GetDoc;
