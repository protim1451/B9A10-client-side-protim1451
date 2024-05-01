import React, { useContext, useState } from "react";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";


const UserProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateUserProfile(name, photoURL);
      setLoading(false);
      setEditing(false);
      toast.success('Profile updated successfully!');
    } catch (error) {
      setLoading(false);
      console.error("Error updating profile:", error.message);
      toast.error('Failed to update profile. Please try again later.');
    }
  };

  const toggleEditing = () => {
    setEditing(!editing);
    setName(user.displayName || "");
    setPhotoURL(user.photoURL || "");
  };

  return (
    <div className="flex justify-center">
      <Helmet>VoyageVista | Profile</Helmet>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-100 p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="text-2xl font-bold mb-4">User Profile</h2>
          <div className="flex items-center mb-4">
            <img src={user.photoURL} alt="User" className="w-20 h-20 rounded-full mr-4" />
            <div>
              <p className="text-lg font-semibold">{user.displayName}</p>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">{editing ? "Edit Profile" : "Options"}</h2>
          {editing ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-lg font-semibold mb-2">Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-semibold mb-2">Photo URL:</label>
                <input
                  type="text"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="bg-teal-300 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                {loading ? "Updating..." : "Update Profile"}
              </button>
            </form>
          ) : (
            <button
              onClick={toggleEditing}
              className="bg-teal-300 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default UserProfile;
