import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { Reveal } from 'react-awesome-reveal';

const TravelTipsSection = ({ tips }) => {
    return (
        <div className="container mx-auto my-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
                <Typewriter
                    words={['Travel Tips']}
                    loop={false}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tips.map((tip, index) => (
                    <Reveal key={index} triggerTotal={5}>
                        <div className="border rounded-lg shadow-md p-6 bg-teal-100">
                            <h3 className="text-xl font-semibold mb-4">{tip.title}</h3>
                            <p className="text-gray-700">{tip.description}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    );
};

export default TravelTipsSection;
