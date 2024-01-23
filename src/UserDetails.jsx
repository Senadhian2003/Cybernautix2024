import React, { useEffect, useState } from 'react';
import { getDatabase, ref, get } from 'firebase/database';
import { useParams } from 'react-router-dom'; // Updated import
import Navigation from './component/navbar';

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userId } = useParams(); // Updated line
  // const queryParams = new URLSearchParams(location.search);
  // const email = queryParams.get('email');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const databaseRef = ref(getDatabase(), 'cyber');
        const snapshot = await get(databaseRef);

        snapshot.forEach((childSnapshot) => {
          const currentUserId = childSnapshot.key; // Extract the ID from the key
          const userData = childSnapshot.val();

          if (currentUserId === userId) {
            // User ID match found
            console.log('User found:', userData);

            // Handle events (assuming they are stored as arrays)
            const technicalEvents = userData.technicalEvents || [];
            const nonTechnicalEvents = userData.nonTechnicalEvents || [];

            setUserDetails({
              id: currentUserId,
              ...userData,
              technicalEvents: technicalEvents.join(', '),
              nonTechnicalEvents: nonTechnicalEvents.join(', '),
            });

            setLoading(false);
            return;
          }
        });

        // If no matching user is found
        console.log('User not found for ID:', userId);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user details:', error.message);
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [userId]);

  const handleDownload = () => {
    window.print();
  };

  return (
    <div>
      <Navigation />
      <div className="container1 mt-4">
        <h2>UserDetails</h2>
        {loading && <p>Loading...</p>}
        {!loading && userDetails ? (
          <div>
            <p>ID: {userDetails.id}</p>
            <p>Name: {userDetails.name}</p>
            <p>College: {userDetails.college}</p>
            <p>Email: {userDetails.email}</p>
            <p>Phone Number: {userDetails.phoneNumber}</p>
            <p>Technical Events: {userDetails.technicalEvents}</p>
            <p>Non-Technical Events: {userDetails.nonTechnicalEvents}</p>
            {/* Add more details as needed */}
          </div>
        ) : (
          <p>User details not found</p>
        )}
        <button className='btn' onClick={handleDownload}>Print</button>
      </div>
    </div>
  );
};

export default UserDetails;
