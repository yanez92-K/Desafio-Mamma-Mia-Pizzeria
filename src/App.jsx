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

function App() {
  return (
    <>
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
