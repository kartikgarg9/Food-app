import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  //local state variable -super powerful variable
  const [listOfRestaurants, setlistOfRestaurant] = useState([]);
  const [helloWorld, setHelloWorld] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log(helloWorld);
  }, [helloWorld]);

  console.log("body render");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6528057&lng=77.09655579999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    let result = json.data.cards.map(
      (card) => card.card.card.gridElements?.infoWithStyle.restaurants
    );

    result = result.flat().filter((val) => val);
    setlistOfRestaurant(result);
    setHelloWorld(result);
    console.log(result);
  };

  return helloWorld.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            onClick={() => {
              console.log(listOfRestaurants);
              const filterRestaurants = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              const xy = JSON.parse(JSON.stringify(filterRestaurants));
              setHelloWorld(xy);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => {
              console.log(res.info.avgRating);
              return res.info.avgRating > 4.3;
            });
            setlistOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {helloWorld.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
