import React from 'react';
import Navigation from './navbar';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './GetDoc.css';
import html2pdf from 'html2pdf.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


const GetDoc = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [printing, setPrinting] = useState(false);
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

 const downloadPDF = async() => {
  setPrinting(true);

  const element = document.getElementById('regDetails');
  if (!element) {
    console.error('Page container not found');
    return;
  }

  await html2pdf(element).then(() => {
    setPrinting(false);
  });
};





  return (
    <div className="body" >
      <div >
        <Navigation />
        <p className="txt" style={{color:"white"}}>
          Please print these details, you will be requested to show this pdf on the symposium events.
        </p>
        <div className="container1 mt-4" >
          <h1>Registration Details</h1>
          <div className='container2' id='regDetails' >
          <h3 style={{textAlign:"center"}}> {printing?"Cybernautix":""}</h3>
            <p>Id:{id}</p>
            <p>Name: {name}</p>
            <p>College: {college}</p>
            <p>Email: {email}</p>
            <p>Phone Number:{phoneNumber}</p>
            <p>Technical Events: {technicalEvents.join(', ')}</p>
            <p>Non Technical Events: {nonTechnicalEvents.join(', ')}</p>
          </div>
          <button className='btn' onClick={downloadPDF}>Print</button>
        </div>
      </div>
    </div>
  );
};

export default GetDoc;
