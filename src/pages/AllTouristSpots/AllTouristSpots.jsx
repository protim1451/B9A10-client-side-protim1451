import { useEffect, useState } from 'react';
import SpotCard from '../Home/SpotCard';


const AllTouristSpots = () => {
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        // Fetch data from your backend server
        const fetchSpots = async () => {
            try {
                const response = await fetch('http://localhost:3000/spots');
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

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 text-center">All Tourist Spots</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {spots.map(spot => (
                    <SpotCard key={spot._id} spot={spot} userName={spot.userName} userEmail={spot.userEmail}/>
                ))}
            </div>
        </div>
    );
};

export default AllTouristSpots;
