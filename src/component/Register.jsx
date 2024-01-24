import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./navbar";
import { ref, set, onValue } from 'firebase/database';
import { db } from '../config';
import { Particle } from "./Particle";
import "./Register.css";
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { get } from 'firebase/database';
import uuid from 'uuid-random'

const Register = () => {
  const navigate = useNavigate();

  const [passwordMatch, setPasswordMatch] = useState(true);

  const [alertMessage, setAlertMessage] = useState(null);

  const showAlert = (message) => {
    setAlertMessage(message);
  };

  const hideAlert = () => {
    setAlertMessage(null);
  };

  const [formData, setFormData] = useState({
    name: '',
    entryCount: '',
    college: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    email: '',
    blitzbyte: 0,
    uXplore : 0,
    paperPinnacle: 0,
    webVortex : 0,
    pixelPlayground : 0,
    lexiCharm: 0,
    conTacTix : 0,
    smirk:0,
    technicalEvents:[],
    nonTechnicalEvents:[]
    
  });
  let Id = "CY";//change this field.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTechnicalEventChange = (e) => {
    const { value, checked } = e.target;
   
    if(checked){
      
      setFormData((prevState) => ({
        ...prevState,
        technicalEvents: [...prevState.technicalEvents, value],
        [value]:1
      }));
    }
    else{
     
      setFormData((prevState) => {
        const updatedTechnicalEvents = prevState.technicalEvents.filter(
          (event) => event !== value
        );
      
        return {
          ...prevState,
          [value]: 0,
          technicalEvents: updatedTechnicalEvents,
        };
      });

    }
   
    
    console.log("Value : ",value)
    console.log("Checked : ",checked)

    
  };


  const handleNonTechnicalEventChange = (e) => {
    const { value, checked } = e.target;
    if(checked){
      
      setFormData((prevState) => ({
        ...prevState,
        nonTechnicalEvents: [...prevState.nonTechnicalEvents, value],
        [value]:1
      }));
    }
    else{
     
      setFormData((prevState) => {
        const updatedNonTechnicalEvents = prevState.nonTechnicalEvents.filter(
          (event) => event !== value
        );
      
        return {
          ...prevState,
          [value]: 0,
          nonTechnicalEvents: updatedNonTechnicalEvents,
        };
      });

    }
   
    console.log("Value : ",value)
    console.log("Checked : ",checked)
    
  };

  const countEntriesInCollection = async () => {
    const collectionRef = ref(db, 'cyber');

    try {
      const snapshot = await get(collectionRef);
      if (snapshot.exists()) {
        const count = Object.keys(snapshot.val()).length;
        console.log(`Count of items in 'cyber': ${count}`);
        return count+1;
      } else {
        console.log("Collection 'cyber' does not exist.");
        return 0; // Collection doesn't exist, so count is 0
      }
    } catch (error) {
      console.error('Error fetching count:', error.message);
      return -1; // Return -1 to indicate an error
    }
  };

  const addDataToRealtimeDatabase = async () => {
    const userExists = await checkUserExists(formData.email);
    if (userExists) {
      showAlert('User with this email already exists. Please use a different email.');
      return;
    }

    try {
      const auth = getAuth();
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // User successfully registered and logged in
      console.log('User registered:', userCredential.user);
      // Generate a unique ID (you can customize this logic based on your needs)
      const SubId = uuid().substring(0,4).toUpperCase()
      let L = SubId.toString();
      let userId = Id.concat(L);
      const databaseRef = ref(db, `cyber/${userId}`);
      // Set the data in the Firebase database
      await set(databaseRef, {
        name: formData.name,
        userId: userId,
        college: formData.college,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        password: formData.password, // Note: You may want to avoid storing passwords in plain text
        confirmPassword: formData.confirmPassword,
        blitzbyte: formData.blitzbyte,
    uXplore : formData.uXplore,
    paperPinnacle: formData.paperPinnacle,
    webVortex : formData.webVortex,
    pixelPlayground : formData.pixelPlayground,
    lexiCharm: formData.lexiCharm,
    conTacTix : formData.conTacTix,
    smirk:formData.smirk,
    technicalEvents:formData.technicalEvents,
    nonTechnicalEvents:formData.nonTechnicalEvents
      });

      console.log('Form data submitted to Firebase:', formData);
      navigate(`/getdoc?id=${userId}&name=${formData.name}&college=${formData.college}&email=${formData.email}&phoneNumber=${formData.phoneNumber}&technicalEvents=${formData.technicalEvents.join(',')}&nonTechnicalEvents=${formData.nonTechnicalEvents.join(',')}`);
    } catch (error) {
      console.error('User registration error:', error.message);
      showAlert('Error registering user. Please try again.');
    }
  };

  const checkUserExists = async (email) => {
    const collectionRef = ref(db, 'cyber');
    let userExists = false;

    // Listen for value changes at the collection reference
    await onValue(collectionRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const userData = childSnapshot.val();
        if (userData.email === email) {
          userExists = true;
        }
      });
    });

    return userExists;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const passwordsMatch = formData.password === formData.confirmPassword;
    setPasswordMatch(passwordsMatch);

    if (!passwordsMatch) {
      console.log('Passwords do not match');
      return;
    }

    // Add data to Firebase database
    addDataToRealtimeDatabase();
  };


  return (
    <div>
      <Navigation />
      <div className="container1 mt-4">
        <h1 className="mb-4">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control transparent-input" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">College Name</label>
            <input type="text" className="form-control transparent-input" name="college" value={formData.college} onChange={handleInputChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Email ID</label>
            <input type="email" className="form-control transparent-input" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control transparent-input" name="password" value={formData.password} onChange={handleInputChange} required />

          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-control transparent-input" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required />
            {!passwordMatch && (
              <p className="text-danger">Passwords do not match</p>
            )}

          </div>


          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type="tel" className="form-control transparent-input" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
          </div>

          <fieldset className="mb-3">
            <legend>Technical Events:</legend>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="technicalEvent"
                value = "blitzByte"
                onChange={handleTechnicalEventChange}
              />
              BlitzByte
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="technicalEvent"
                value="uXplorer"
                onChange={handleTechnicalEventChange}
              />
              UXplorer
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" name="technicalEvent" value="paperPinnacle" onChange={handleTechnicalEventChange} /> PaperPinnacle
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" name="technicalEvent" value="webVortex" onChange={handleTechnicalEventChange} />  WebVortex
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" name="technicalEvent" value="pixelPlayground" onChange={handleTechnicalEventChange} /> PixelPlayground
            </div>
          </fieldset>

          <fieldset className="mb-3">
            <legend>Non-Technical Events:</legend>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" name="nonTechnicalEvent" value="lexiCharm" onChange={handleNonTechnicalEventChange} /> Lexicharm
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" name="nonTechnicalEvent" value="conTacTix" onChange={handleNonTechnicalEventChange} /> con-tac-tix
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" name="nonTechnicalEvent" value="smirk" onChange={handleNonTechnicalEventChange} /> Smirk
            </div>
          </fieldset>

          <button type="submit" className="btn center-btn">Submit</button>
        </form>
      </div>
      <Particle />

      {alertMessage && (
        <div className="alert-modal">
          <div className="alert-content">
            <p>{alertMessage}</p>
            <button onClick={hideAlert}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
