import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../FirebaseProvider/FirebaseProvider';


const AddTouristSpot = () => {
    const { user } = useContext(AuthContext);

    // State variables to hold form data
    const [formData, setFormData] = useState({
        image: '',
        touristSpotName: '',
        countryName: '',
        location: '',
        shortDescription: '',
        averageCost: '',
        seasonality: '',
        travelTime: '',
        totalVisitorsPerYear: '',
        userId: user ? user.uid : '',
        userName: user ? user.displayName : '',
        userEmail: user ? user.email : ''
    });
    console.log(formData);
    // Handler for form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handler for form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Call a function to submit the form data to the backend
        // This function will send the data to your backend server to be saved in MongoDB
        // You'll need to implement this function using Axios or Fetch
        const success = await submitFormDataToBackend(formData);
        if (success) {
            toast.success('Tourist spot added successfully');
        } else {
            toast.error('Failed to add tourist spot');
        }
    };

    // Function to submit form data to the backend
    const submitFormDataToBackend = async (formData) => {
        try {
            // Make a POST request to your backend server
            const response = await fetch('http://localhost:3000/spots', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            // Handle response from the server
            return response.ok;
        } catch (error) {
            console.error('Error:', error);
            // Handle error
            return false;
        }
    };

    return (
        <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4">Add Tourist Spot</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1 font-bold">Image URL:</label>
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-bold">Tourist Spot Name:</label>
                    <input
                        type="text"
                        name="touristSpotName"
                        value={formData.touristSpotName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-bold">Short Description:</label>
                    <input
                        type="text"
                        name="shortDescription"
                        value={formData.shortDescription}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-bold">Seasonality:</label>
                    <input
                        type="text"
                        name="seasonality"
                        value={formData.seasonality}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-bold">Average Cost:</label>
                    <input
                        type="text"
                        name="averageCost"
                        value={formData.averageCost}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-bold">Travel Time:</label>
                    <input
                        type="text"
                        name="travelTime"
                        value={formData.travelTime}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-bold">Total Visitors Per Year:</label>
                    <input
                        type="text"
                        name="totalVisitorsPerYear"
                        value={formData.totalVisitorsPerYear}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-bold">Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div>
                    <label className='font-bold'>
                        Country:
                        <select
                            name="countryName"
                            value={formData.countryName}
                            onChange={handleChange}
                        >
                            <option value="">Select a country</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Vietnam">Vietnam</option>
                            <option value="Cambodia">Cambodia</option>
                        </select>
                    </label>
                </div>
                {/* Add more input fields as needed */}
                <button
                    type="submit"
                    className="bg-blue-500 btn-block text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Add Tourist Spot
                </button>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddTouristSpot;
