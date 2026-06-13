import {
  createContext,
  useState,
  useEffect,
} from "react";

import { toast } from "react-toastify";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart =
      localStorage.getItem("cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  const addToCart = (food) => {
    const existingItem = cart.find(
      (item) => item.id === food.id
    );

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === food.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        )
      );

      toast.success(
        `${food.name} quantity updated`
      );
    } else {
      setCart([
        ...cart,
        {
          ...food,
          quantity: 1,
        },
      ]);

      toast.success(
        `${food.name} added to cart`
      );
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    );
  };

  const removeFromCart = (id) => {
    setCart(
      cart.filter(
        (item) => item.id !== id
      )
    );

    toast.error(
      "Item removed from cart"
    );
  };

  const clearCart = () => {
    setCart([]);

    toast.info("Cart cleared");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;