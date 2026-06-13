import { useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import RestaurantList from "../components/restaurants/RestaurantList";
import restaurants from "../data/restaurants";

function Restaurants() {
  const [search, setSearch] =
    useState("");

  const filteredRestaurants =
    restaurants.filter((restaurant) =>
      restaurant.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <>
      <Navbar />

      <div className="restaurant-page">
        <h1>Popular Restaurants</h1>

        <input
          type="text"
          placeholder="Search Restaurants..."
          className="search-bar"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <RestaurantList
          restaurants={filteredRestaurants}
        />
      </div>

      <Footer />
    </>
  );
}

export default Restaurants;