import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Componats/header";
import Home from "./Pages/home";
import Cart from "./Pages/cart";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
