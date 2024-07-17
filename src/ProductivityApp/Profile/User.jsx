import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaTrash } from "react-icons/fa";

const User = ({
  profilePicture,
  handleFileChange,
  handleRemoveProfilePicture,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold mb-6">Basic Information</h2>

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
                className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                title="Remove profile picture"
              >
                <FaTrash className="text-xs" />
              </button>
            </>
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <FaUser className="text-gray-400 text-4xl" />
            </div>
          )}
        </div>
        <div>
          <label
            htmlFor="profile-picture"
            className="btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
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
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="johndoe123"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <div className="flex items-center">
            <FaEnvelope className="text-gray-400 mr-2" />
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="john@example.com"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone Number (Optional)
          </label>
          <div className="flex items-center">
            <FaPhone className="text-gray-400 mr-2" />
            <input
              type="tel"
              id="phone"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="+1 (123) 456-7890"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
