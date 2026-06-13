import { useState } from "react";
import foods from "../data/foods";
import FoodCard from "../components/foods/FoodCard";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function Menu() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredFoods = foods.filter((food) => {
    const matchesCategory =
      category === "All" ||
      food.category === category;

    const matchesSearch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />

      <div className="menu-page">
        <h1>Food Menu</h1>

        <input
          type="text"
          placeholder="Search food..."
          className="search-bar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="filters">
          <button onClick={() => setCategory("All")}>
            All
          </button>

          <button onClick={() => setCategory("Veg")}>
            Veg
          </button>

          <button onClick={() => setCategory("NonVeg")}>
            Non Veg
          </button>

          <button onClick={() => setCategory("FastFood")}>
            Fast Food
          </button>

          <button onClick={() => setCategory("Dessert")}>
            Desserts
          </button>
        </div>

        <div className="food-grid">
          {filteredFoods.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Menu;