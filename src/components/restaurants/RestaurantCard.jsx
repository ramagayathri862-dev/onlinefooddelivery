import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function RestaurantCard({ restaurant }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(
      `/restaurant/${restaurant.id}`
    );
  };

  return (
    <motion.div
      className="card"
      whileHover={{
        scale: 1.05,
        y: -10,
      }}
    >
      <img
        src={restaurant.image}
        alt={restaurant.name}
      />

      <div className="card-content">
        <h3>{restaurant.name}</h3>

        <p>
          🍽 {restaurant.cuisine}
        </p>

        <p>
          ⭐ {restaurant.rating}
        </p>

        <p>
          🚚 {restaurant.deliveryTime}
        </p>

        <button
          onClick={handleViewDetails}
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
}

export default RestaurantCard;