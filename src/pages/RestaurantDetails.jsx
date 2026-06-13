import { useParams } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import restaurants from "../data/restaurants";

function RestaurantDetails() {
  const { id } = useParams();

  const restaurant = restaurants.find(
    (item) => item.id === Number(id)
  );

  if (!restaurant) {
    return (
      <>
        <Navbar />

        <div
          style={{
            textAlign: "center",
            padding: "100px",
          }}
        >
          <h1>Restaurant Not Found</h1>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="restaurant-detail">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="detail-image"
        />

        <div className="detail-content">
          <h1>{restaurant.name}</h1>

          <h3>🍽 {restaurant.cuisine}</h3>

          <h3>⭐ {restaurant.rating}</h3>

          <p>
            Premium restaurant with delicious
            food and fast delivery service.
          </p>

          <h2>Popular Menu</h2>

          <ul>
            <li>Chicken Biryani</li>
            <li>Veg Biryani</li>
            <li>Paneer Curry</li>
            <li>Butter Naan</li>
            <li>Ice Cream</li>
          </ul>

          <h2>Customer Reviews</h2>

          <div className="review-box">
            ⭐⭐⭐⭐⭐ Amazing food and service.
          </div>

          <div className="review-box">
            ⭐⭐⭐⭐⭐ Fast delivery and great
            taste.
          </div>

          <button className="order-btn">
            Order Now
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default RestaurantDetails;