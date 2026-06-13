import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import RestaurantDetail from "./pages/RestaurantDetails";
import Menu from "./pages/Menu";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/restaurants"
          element={<Restaurants />}
        />

        <Route
          path="/restaurant/:id"
          element={<RestaurantDetail />}
        />

        <Route
          path="/menu"
          element={<Menu />}
        />

        <Route
          path="/cart"
          element={<CartPage />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;