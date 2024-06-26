import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Reveal from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const CountriesSection = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetchCountries();
    }, []);

    const fetchCountries = async () => {
        try {
            const response = await axios.get('https://b9-a10-server-side-protim1451.vercel.app/CountryCollection');
            setCountries(response.data);
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    };

    return (
        <div className="container mx-auto my-8">
            <h2 className="text-3xl font-bold mb-4 text-center">Explore Countries</h2>
            <div className="grid grid-cols-3 gap-6">
                {countries.map(country => (
                    <Reveal className='bg-teal-100' key={country._id} cascade triggerOnce>
                        <Link
                            to={{
                                pathname: '/allspots',
                                state: { selectedCountry: country.name } 
                            }}
                            key={country._id}
                        >
                            <div className="border rounded-lg p-4">
                                <img src={country.flag} alt={country.name} className="w-20 h-12 mx-auto mb-2" />
                                <h3 className="text-lg font-semibold">{country.name}</h3>
                                <p>{country.description}</p>
                            </div>
                        </Link>
                    </Reveal>
                ))}
            </div>
        </div>
    );
};

export default CountriesSection;
