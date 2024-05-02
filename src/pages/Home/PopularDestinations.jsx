import React from "react";
import './PpularDestinations.css'

const popularDestinationsData = [
    {
        id: 1,
        name: "Paris, France",
        image: "https://i.ibb.co/d7vbnLw/paris.jpg",
        description: "Explore the iconic Eiffel Tower and Louvre Museum."
    },
    {
        id: 2,
        name: "Kyoto, Japan",
        image: "https://i.ibb.co/25FgBvJ/kyoto.jpg",
        description: "Discover ancient temples, traditional tea houses, and beautiful cherry blossoms."
    },
    {
        id: 3,
        name: "Santorini, Greece",
        image: "https://i.ibb.co/cxSzkxh/Santorini.jpg",
        description: "Relax on stunning beaches and admire the whitewashed buildings with blue domes."
    },
    {
        id: 4,
        name: "New York City, USA",
        image: "https://i.ibb.co/ggN9Sw1/New-York-City.jpg",
        description: "Experience the bustling streets, world-class museums, and diverse food scene."
    },
    {
        id: 5,
        name: "Rio de Janeiro, Brazil",
        image: "https://i.ibb.co/BPHsxbQ/Rio-de-Janeiro.jpg",
        description: "Enjoy the vibrant culture, beautiful beaches, and iconic landmarks like Christ the Redeemer."
    },
    {
        id: 6,
        name: "Rome, Italy",
        image: "https://i.ibb.co/X5q2sGX/Rome.jpg",
        description: "Immerse yourself in history with visits to the Colosseum, Vatican City, and Roman Forum."
    }
];

const PopularDestinations = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center my-8">Popular Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularDestinationsData.map(destination => (
                    <div key={destination.id} className="border rounded-lg shadow-md p-6 bg-teal-100">
                        <img src={destination.image} alt={destination.name} className="w-full h-[250px]"/>
                        <h3 className="text-xl font-semibold mb-4">{destination.name}</h3>
                        <p className="text-gray-700">{destination.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularDestinations;
