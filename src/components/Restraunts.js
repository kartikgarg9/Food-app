import RestaurantCard from "./RestaurantCard";

const Restaurants = ({ list }) => {
  const jsonObject = list.map(JSON.stringify);
  const uniqueSet = new Set(jsonObject);
  const uniqueArray = Array.from(uniqueSet).map(JSON.parse);
  return uniqueArray.map((restraunt) => (
    <RestaurantCard key={restraunt.info.id} resData={restraunt} />
  ));
};

export default Restaurants;
