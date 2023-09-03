import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const Restaurants = ({ list }) => {
  console.log(list);

  return list.map((restraunt) => (
    <Link key={restraunt.info.id} to={"/restaurants/" + restraunt.info.id}>
      <RestaurantCard resData={restraunt} />
    </Link>
  ));
};

export default Restaurants;
