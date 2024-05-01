import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TouristSpotDetails = () => {
    const { id } = useParams();
    const [spotDetails, setSpotDetails] = useState(null);

    const handleAddToWishlist = () => {
        // Perform the necessary action to add spot to wishlist
        // For demonstration, let's just display a toast message
        toast.success('Spot added to wishlist!');
    };

    useEffect(() => {
        const fetchSpotDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3000/spots/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch spot details');
                }
                const data = await response.json();
                setSpotDetails(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchSpotDetails();
    }, [id]);

    return (
        <div>
            <Helmet>VoyageVista | Details</Helmet>
            <h2 className="text-3xl font-bold text-center p-5 lg:p-10">Tourist Spot Details</h2>
            {spotDetails ? (
                <div>
                    {/* <h3>{spotDetails.touristSpotName}</h3>
                    <p>Country: {spotDetails.countryName}</p>
                    <p>Location: {spotDetails.location}</p>
                    <p>Description: {spotDetails.shortDescription}</p> */}
                    {/* Add more spot details as needed */}
                    <div className="card glass">
                        <figure><img className="w-full object-cover" src={spotDetails.image} alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold">{spotDetails.touristSpotName}</h2>
                            <p>{spotDetails.shortDescription}</p>
                            <p className="font-bold">Location: <span className="font-normal">{spotDetails.location}</span></p>
                            <p className="font-bold">Country: <span className="font-normal">{spotDetails.countryName}</span></p>
                            <div className="card-actions justify-end">
                                <button onClick={handleAddToWishlist} className="btn btn-primary">Add To Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading spot details...</p>
            )}
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default TouristSpotDetails;
