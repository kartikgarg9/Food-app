import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import Restaurants from "./Restaurants";

const Body = () => {
  //local state variable -super powerful variable
  const [listOfRestaurants, setlistOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log(filteredRestaurant);
  }, [filteredRestaurant]);

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

    let result = json.data?.cards.map(
      (card) => card.card.card.gridElements?.infoWithStyle.restaurants
    );

    result = result.flat().filter((val) => val);

    const obj = {};

    for (const val of result) {
      obj[val.info.id] = val;
    }

    setlistOfRestaurant(Object.values(obj));
    setFilteredRestaurant(Object.values(obj));
  };

  return filteredRestaurant.length === 0 ? (
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

              setFilteredRestaurant(filterRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );

            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        <Restaurants list={filteredRestaurant} />
      </div>
    </div>
  );
};

export default Body;
