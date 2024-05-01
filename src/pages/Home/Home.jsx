import { useLoaderData } from "react-router-dom";
import SpotCard from "./SpotCard";
import Banner from "./Banner";

const Home = () => {

    const spots = useLoaderData();
    const sixSpots = spots.slice(0, 6);

    return (
        <div>
            <Banner></Banner>
           
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
        </div>
    );
};

export default Home;