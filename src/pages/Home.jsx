import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function Home() {
  const navigate = useNavigate();

  const reviews = [
    {
      id: 1,
      name: "Sunil",
      review:
        "Amazing food quality and super fast delivery. Highly recommended!",
    },
    {
      id: 2,
      name: "Ramu",
      review:
        "Best food ordering experience. Fresh food and great service.",
    },
    {
      id: 3,
      name: "Gayathri",
      review:
        "Excellent restaurants and smooth ordering process.",
    },
  ];

  return (
    <>
      <Navbar />

      <motion.section
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="overlay">
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            Order Food Anytime, Anywhere
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Discover top-rated restaurants
            and get food delivered fast.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/menu")}
          >
            Explore Menu
          </motion.button>
        </div>
      </motion.section>

      <section className="features">
        <div className="feature">
          <h3>🚀 Fast Delivery</h3>
          <p>Get your food delivered within minutes.</p>
        </div>

        <div className="feature">
          <h3>🍽 Premium Restaurants</h3>
          <p>Choose from top-rated restaurants.</p>
        </div>

        <div className="feature">
          <h3>⭐ Top Rated Food</h3>
          <p>Delicious meals loved by thousands.</p>
        </div>
      </section>

      <section className="offers-section">
        <h2>🔥 Special Offers</h2>

        <div className="offers-grid">
          <div className="offer-card">
            <h3>50% OFF</h3>
            <p>Use Code: FOOD50</p>
          </div>

          <div className="offer-card">
            <h3>Free Delivery</h3>
            <p>On Orders Above ₹499</p>
          </div>

          <div className="offer-card">
            <h3>Buy 1 Get 1</h3>
            <p>Available on Selected Items</p>
          </div>
        </div>
      </section>

      <section className="reviews-section">
        <h2>What Our Customers Say</h2>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div className="review-card" key={review.id}>
              <h3>{review.name}</h3>
              <p className="stars">⭐⭐⭐⭐⭐</p>
              <p>{review.review}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;