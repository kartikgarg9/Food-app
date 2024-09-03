import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/contants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 flex flex-col ">
      <Link to={"/restaurants/" + resData.id}>
        <img
          className="rounded-lg mb-4 h-48 w-full object-cover"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold text-lg flex-grow">{name}</h3>
        <h4 className="text-sm text-gray-700 flex-grow">
          {cuisines.join(", ")}
        </h4>
        <div className="mt-auto">
          <h4 className="text-sm font-semibold">{avgRating} ✪</h4>
          <h4 className="text-sm text-gray-700">{costForTwo}</h4>
          <h4 className="text-sm text-gray-700">{sla?.slaString}</h4>
        </div>
      </Link>
    </div>
  );
};

export const withPromtedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg top-0 left-0">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
