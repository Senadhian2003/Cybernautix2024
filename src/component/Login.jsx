import React, { useState } from 'react';
import Navigation from './navbar';
import { Particle } from './Particle';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, get } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

const auth = getAuth();
const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const fetchUserIdByEmail = async (email) => {
    try {
      const databaseRef = ref(getDatabase(), 'cyber');
      const snapshot = await get(databaseRef);

      let userId = null;

      snapshot.forEach((childSnapshot) => {
        const currentUserId = childSnapshot.key;
        const userData = childSnapshot.val();

        if (userData.email === email) {
          userId = currentUserId;
          return;
        }
      });

      return userId;
    } catch (error) {
      console.error('Error fetching user ID:', error.message);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      );

      // Fetch user ID from the Realtime Database based on the entered email
      const userId = await fetchUserIdByEmail(loginData.email);

      console.log('User ID:', userId);

      if (userId) {
        // User successfully logged in, navigate to UserDetails with user ID as parameter
        navigate(`/userDetails/${userId}`);
      } else {
        setError('User details not found');
      }

      setError(null);
    } catch (error) {
      console.error('Authentication error:', error.message);
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <Navigation />
      <div className="container1">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control transparent-input"
              name="email"
              value={loginData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control transparent-input"
              name="password"
              value={loginData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
      <Particle />
    </div>
  );
};

export default Login;
