import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function CartPage() {
  const navigate = useNavigate();

  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) =>
      sum +
      item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div className="cart-page">
        <h1>Your Cart</h1>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <h2>
              Your cart is empty 🛒
            </h2>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="cart-item"
              >
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-details">
                  <h3>{item.name}</h3>

                  <p>
                    Price: ₹{item.price}
                  </p>

                  <div className="qty-box">
                    <button
                      onClick={() =>
                        decreaseQty(
                          item.id
                        )
                      }
                    >
                      -
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQty(
                          item.id
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(
                      item.id
                    )
                  }
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="cart-total">
              <h2>
                Total Amount: ₹{total}
              </h2>

              <button
                className="checkout-btn"
                onClick={() =>
                  navigate(
                    "/checkout"
                  )
                }
              >
                Proceed To Checkout
              </button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default CartPage;