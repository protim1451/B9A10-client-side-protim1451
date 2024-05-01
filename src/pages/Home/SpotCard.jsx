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
                        <div className="badge badge-outline">{averageCost}</div>
                        <div className="badge badge-outline">{travelTime}</div>
                        <div className="badge badge-outline">{totalVisitorsPerYear}</div>
                    </div>
                    <div className="card-body">
                        {/* Existing card body content */}
                        <p>Added By: <small>{userName} ({userEmail})</small></p> {/* Add user name and email */}
                    </div>
                    <div className="">
                        <Link to={`/allspots/${_id}`}>
                            <button className="btn btn-block bg-teal-300">See Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotCard;