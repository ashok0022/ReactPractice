import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
// import Shimmer from "./Shimmer";
import { Image, Shimmer } from "react-shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [Finalrestaurants, setFinalRestaurants] = useState([]);
  const [tenList, setTenList] = useState([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json(); //converting readable stream to json object
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);

    setTimeout(() => {
      setFinalRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }, 800);
  }

  const online = useOnline(); //Our second custom hook
  if (!online) {
    return <h1>Offline</h1>;
  }

  const searchValue = () => {
    const filteredRestaurants = Finalrestaurants.filter((restaurant) => {
      return restaurant.data.name
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    setRestaurants(filteredRestaurants);
  };

  // if (restaurants.length === 0) {
  //   //early return
  //   return <h1>No Data Found</h1>;
  // }

  return Finalrestaurants.length === 0 ? (
    <>
      <div className="restaurant-list margin-10">
        {tenList.map((item, index) => {
          return (
            <Shimmer
              width={250}
              height={300}
              className="margin-10"
              key={index}
            />
          );
        })}
      </div>
    </>
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        ></input>
        <button className="search-btn" onClick={searchValue}>
          {" "}
          Search{" "}
        </button>
      </div>

      <div className="restaurant-list">
        {restaurants?.map((restaurant, index) => (
          <Link to={"/restaurant/" + restaurant.data.id}>
            {" "}
            <RestrauntCard restaurant={restaurant.data} key={index} />
          </Link>
        ))}
      </div>
    </>
  );
};
export default Body;
