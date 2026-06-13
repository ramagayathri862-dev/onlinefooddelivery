import { useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function Checkout() {
  const [orderPlaced, setOrderPlaced] =
    useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  return (
    <>
      <Navbar />

      <div className="checkout-page">
        <h1>Checkout</h1>

        {!orderPlaced ? (
          <form
            className="checkout-form"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Full Name"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
            />

            <textarea
              placeholder="Delivery Address"
              required
            ></textarea>

            <select required>
              <option value="">
                Select Payment Method
              </option>

              <option>
                Cash On Delivery
              </option>

              <option>
                UPI Payment
              </option>

              <option>
                Credit/Debit Card
              </option>
            </select>

            <button type="submit">
              Place Order
            </button>
          </form>
        ) : (
          <div className="order-success">
            <h2>
              🎉 Order Placed Successfully
            </h2>

            <p>
              Your food is being prepared.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Checkout;