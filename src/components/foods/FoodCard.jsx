import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { motion } from "framer-motion";

function FoodCard({ food }) {
  const { addToCart } =
    useContext(CartContext);

  return (
    <motion.div
      className="food-card"
      whileHover={{
        scale: 1.05,
        y: -10,
      }}
    >
      <img
        src={food.image}
        alt={food.name}
      />

      <div className="food-content">
        <h3>{food.name}</h3>

        <p>{food.description}</p>

        <div className="food-info">
          <span>₹{food.price}</span>

          <span>⭐ {food.rating}</span>
        </div>

        <button
          onClick={() =>
            addToCart(food)
          }
        >
          Add To Cart
        </button>
      </div>
    </motion.div>
  );
}

export default FoodCard;