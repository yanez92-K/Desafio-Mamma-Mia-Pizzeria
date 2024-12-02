import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import MenuBar from "./Components/MenuBar/MenuBar";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Cart from "./Pages/Cart/Cart";
import Pizza from "./Pages/Pizza/Pizza";
import NotFound from "./Pages/NotFound/NotFound";
import Profile from "./Pages/Profile/Profile";
import Footer from "./components/footer/Footer";
import CardProvider from "./Context/CartContext";
import PizzasProvider from "./Context/PizzasContext";
import { useUser } from "./Context/UserContext";

function App() {
  const { token } = useUser()

  return (
    <PizzasProvider>
      <CardProvider>
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={token ? <Navigate to="/" replace /> : <Register />}
          />
          <Route
            path="/login"
            element={token ? <Navigate to="/" replace /> : <Login />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route
            path="/profile"
            element={token ? <Profile /> : <Navigate to="/login" replace />}
          />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
        <Footer />
      </CardProvider>
    </PizzasProvider>
  );
}

export default App;
