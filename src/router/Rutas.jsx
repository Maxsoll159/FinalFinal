import { Routes, Route } from "react-router-dom";
import { NavBar } from "../Tienda/Components/Header/NavBar";
import { Home } from "../Tienda/Pages/Home";

export const Rutas = () => {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </>
  );
};
