import React from 'react';
import './profile.css';

const ProfilePage = ({user }) => {
return (
<div className="profile-container">
    <div className="profile-header">
    <h2>Welcome, {user}!</h2>
    </div>
    <div className="profile-details">
    <p><strong>Name:</strong> {user}</p>
    <p><strong>Email:</strong> {user}</p>
    <p><strong>Joined:</strong> {user}</p>

    </div>
</div>
);
};

export default ProfilePage;
