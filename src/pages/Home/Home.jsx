import { useLoaderData } from "react-router-dom";
import SpotCard from "./SpotCard";
import Banner from "./Banner";
import CountriesSection from "./CountiresSection";
import TravelTipsSection from "./TravelTipsSection";

const Home = () => {

    const spots = useLoaderData();
    const sixSpots = spots.slice(0, 6);

    const countries = [
        {
            "name": "Bangladesh",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg",
            "description": "Bangladesh is a country in South Asia, known for its lush greenery, rich cultural heritage, and vibrant festivals."
          },
          {
            "name": "Thailand",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg",
            "description": "Thailand is a Southeast Asian country known for its beautiful beaches, ornate temples, and bustling street markets."
          },
          {
            "name": "Indonesia",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
            "description": "Indonesia is an archipelago in Southeast Asia, known for its diverse culture, stunning natural landscapes, and delicious cuisine."
          },
          {
            "name": "Malaysia",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg",
            "description": "Malaysia is a country in Southeast Asia known for its modern cities, lush rainforests, and diverse cultural heritage."
          },
          {
            "name": "Vietnam",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg",
            "description": "Vietnam is a Southeast Asian country known for its breathtaking landscapes, rich history, and delicious cuisine."
          },
          {
            "name": "Cambodia",
            "flag": "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg",
            "description": "Cambodia is a Southeast Asian country known for its stunning temples, lush jungles, and vibrant culture."
          }
    ];

    const tipsData = [
        {
            title: 'Pack Light',
            description: 'Only bring what you need to avoid carrying heavy luggage.',
        },
        {
            title: 'Stay Hydrated',
            description: 'Drink plenty of water, especially in hot climates, to stay hydrated.',
        },
        {
            title: 'Research Local Customs',
            description: 'Learn about the cultural norms of the destination you are visiting to show respect.',
        },
        {
            title: 'Keep Important Documents Safe',
            description: 'Store your passport and other important documents in a secure place while traveling.',
        },
        {
            title: 'Bring Snacks',
            description: 'Pack some healthy snacks for long journeys to keep your energy levels up.',
        },
        {
            title: 'Use Sunscreen',
            description: 'Protect your skin from the sun\'s harmful rays by applying sunscreen regularly.',
        },
        {
            title: 'Stay Connected',
            description: 'Keep in touch with family and friends back home by using local SIM cards or Wi-Fi hotspots.',
        },
        {
            title: 'Respect Nature',
            description: 'Leave natural areas as you found them and avoid disturbing wildlife during your travels.',
        },
        {
            title: 'Learn Basic Phrases',
            description: 'Learn a few basic phrases in the local language to communicate with locals and show appreciation.',
        },
    ];
    

    return (
        <div>
            <Banner></Banner>
            <h2 className="text-3xl font-bold text-center my-6 lg:my-12">Explore Tourist Spots</h2>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    sixSpots.map(spot => <SpotCard
                        key={spot._id}
                        spot={spot}
                        userName={spot.userName} userEmail={spot.userEmail}
                    >
                    </SpotCard>)
                }
            </div>
            <CountriesSection countries={countries} />
            <TravelTipsSection tips={tipsData} />
        </div>
    );
};

export default Home;