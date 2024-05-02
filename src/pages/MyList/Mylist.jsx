import React, { useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2';
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { Helmet } from "react-helmet-async";

const Mylist = () => {
    const { user } = useContext(AuthContext);
    const [userSpots, setUserSpots] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserSpots = async () => {
            try {
                if (!user || !user.email) {
                    console.error("User object or email is missing.");
                    return;
                }

                const response = await fetch(`https://b9-a10-server-side-protim1451.vercel.app/userSpots?userEmail=${user.email}`); // Modify API endpoint to filter by user email
                if (!response.ok) {
                    throw new Error('Failed to fetch user spots');
                }
                const data = await response.json();
                setUserSpots(data);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
                setLoading(false);
            }
        };

        fetchUserSpots();
    }, [user]);

    const handleDeleteSpot = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this spot!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b9-a10-server-side-protim1451.vercel.app/spots/${id}`, {
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        const remainingUserSpots = 
                        userSpots.filter(userSpot => 
                            userSpot._id !== id);
                        setUserSpots(remainingUserSpots);
                    }
                })
                Swal.fire(
                    'Deleted!',
                    'Your spot has been deleted.',
                    'success'
                )
            }
        })
    }
    return (
        <div className="container mx-auto">
            <Helmet>VoyageVista | My List</Helmet>
            <h2 className="text-3xl font-bold mb-4 text-center">My Added Spot List</h2>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">Spot Name</th>
                        <th className="px-4 py-2">Country</th>
                        <th className="px-4 py-2">Location</th>
                        <th className="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userSpots.map((spot, index) => (
                        <tr key={spot._id}>
                            <td className="border px-4 py-2">{index + 1}</td>
                            <td className="border px-4 py-2">{spot.touristSpotName}</td>
                            <td className="border px-4 py-2">{spot.countryName}</td>
                            <td className="border px-4 py-2">{spot.location}</td>
                            <td className="border px-4 py-2">
                                <button
                                    onClick={() => handleDeleteSpot(spot._id)}
                                    className="text-red-500 font-bold hover:text-red-700"
                                >
                                    X
                                </button>
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    );
};

export default Mylist;
