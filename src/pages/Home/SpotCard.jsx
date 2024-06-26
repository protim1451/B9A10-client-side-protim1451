import Reveal from "react-awesome-reveal";
import { Link } from "react-router-dom";


const SpotCard = ({ spot, userName, userEmail }) => {

    const { _id, image,
        touristSpotName,
        countryName,
        location,
        shortDescription,
        averageCost,
        seasonality,
        travelTime,
        totalVisitorsPerYear } = spot;

    return (
        <Reveal cascade>
            <div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img className="w-full h-[280px]" src={image} alt={touristSpotName} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {touristSpotName}
                            <div className="badge badge-secondary">{countryName}</div>
                        </h2>
                        <p>{shortDescription.slice(0, 100)}
                            <Link to={`/allspots/${_id}`} className="text-blue-600 font-bold">  Read More...</Link>
                        </p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Avg. Cost:{averageCost}</div>
                            <div className="badge badge-outline">Travel Time:{travelTime}</div>
                            <div className="badge badge-outline">Visitor/Year:{totalVisitorsPerYear}</div>
                        </div>
                        <div className="card-body">
                            
                            <p>Added By: <small>{userName} ({userEmail})</small></p> 
                        </div>
                        <div className="">
                            <Link to={`/allspots/${_id}`}>
                                <button className="btn btn-block bg-teal-300">See Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Reveal>

    );
};

export default SpotCard;