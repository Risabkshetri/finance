import React, { useState, useEffect } from "react";
import { FaLock, FaShieldAlt } from "react-icons/fa";
import User from "./User";

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  // Load profile picture from local storage on component mount
  useEffect(() => {
    const savedProfilePicture = localStorage.getItem("profilePicture");
    if (savedProfilePicture) {
      setProfilePicture(savedProfilePicture);
    }
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        setProfilePicture(result);
        // Save to local storage
        localStorage.setItem("profilePicture", result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveProfilePicture = () => {
    setProfilePicture(null);
    localStorage.removeItem("profilePicture");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Profile</h1>

      <User
        profilePicture={profilePicture}
        handleFileChange={handleFileChange}
        handleRemoveProfilePicture={handleRemoveProfilePicture}
      />

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Password Management</h3>
            <button className="btn bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded flex items-center">
              <FaLock className="mr-2" /> Change Password
            </button>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">
              Two-Factor Authentication
            </h3>
            <button className="btn bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded flex items-center">
              <FaShieldAlt className="mr-2" /> Set Up 2FA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
