import React, { useEffect } from "react";
import { FaUser, FaEnvelope, FaPhone, FaTrash } from "react-icons/fa";
import { useState } from "react";
import authService from "../../Appwrite/auth";

const User = ({
  profilePicture,
  handleFileChange,
  handleRemoveProfilePicture,
}) => {
  const [error, setErrror] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    
  }, []);
const data = async () => {
  try {
    const currentUser = await authService.getCurrentUser();
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  } catch (error) {
    setErrror(error.message);
  }
}

useEffect (() => {
  data();
}, []);


  return (
    
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
  {error && <p className="text-red-600 dark:text-red-400">{error}</p>}
  <h2 className="text-2xl font-semibold mb-6 dark:text-white">Basic Information</h2>

  <div className="flex flex-col md:flex-row items-center mb-6">
    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6 relative">
      {profilePicture ? (
        <>
          <img
            src={profilePicture}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <button
            onClick={handleRemoveProfilePicture}
            className="absolute top-0 right-0 bg-red-500 dark:bg-red-600 text-white p-1 rounded-full"
            title="Remove profile picture"
          >
            <FaTrash className="text-xs" />
          </button>
        </>
      ) : (
        <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <FaUser className="text-gray-400 dark:text-gray-500 text-4xl" />
        </div>
      )}
    </div>
    <div>
      <label
        htmlFor="profile-picture"
        className="btn bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-4 py-2 rounded cursor-pointer"
      >
        {profilePicture ? "Change Picture" : "Upload Picture"}
      </label>
      <input
        type="file"
        id="profile-picture"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <p className="text-lg font-medium mb-2 dark:text-white">Name: <span className="dark:text-gray-300">{name}</span></p>
      <p className="text-lg font-medium mb-2 dark:text-white">Username: <span className="dark:text-gray-300">{name.replace(/\s/g, '') + Math.floor(Math.random() * 1000)}</span></p>
      <p className="text-lg font-medium mb-2 dark:text-white">Email: <span className="dark:text-gray-300">{email}</span></p>
    </div>
  </div>
</div>
  );
};

export default User;
