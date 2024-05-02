import { useEffect, useState } from 'react';
import SpotCard from '../Home/SpotCard';
import { Helmet } from 'react-helmet-async';

const AllTouristSpots = () => {
    const [spots, setSpots] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');

    useEffect(() => {
        // Fetch data from your backend server
        const fetchSpots = async () => {
            try {
                const response = await fetch('https://b9-a10-server-side-protim1451.vercel.app/spots');
                if (response.ok) {
                    const data = await response.json();
                    setSpots(data); // Update the state with fetched data
                } else {
                    console.error('Failed to fetch spots');
                }
            } catch (error) {
                console.error('Error fetching spots:', error);
            }
        };

        fetchSpots(); // Call the fetchSpots function when the component mounts
    }, []); // Empty dependency array ensures the effect runs only once after initial render

    // Filter spots based on the selected country
    const filteredSpots = selectedCountry
    ? spots.filter(spot => spot.countryName === selectedCountry)
    : spots;
    //const filteredSpots = spots.filter(spot => spot.countryName === selectedCountry);

    // Function to handle country selection change
    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
        console.log('Selected Country:', e.target.value);
    };
    
    console.log('Filtered Spots:', filteredSpots);

    return (
        
        <div>
            <Helmet>VoyageVista | All Tourist Spot</Helmet>
            <h2 className="text-2xl font-bold mb-4 text-center">All Tourist Spots</h2>
            <div className="flex justify-center mb-4">
                <select
                    className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                >
                    <option value="">Select a country</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Cambodia">Cambodia</option>
                </select>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredSpots.map(spot => (
                    <SpotCard key={spot._id} spot={spot} userName={spot.userName} userEmail={spot.userEmail} />
                ))}
            </div>
        </div>
    );
};

export default AllTouristSpots;
