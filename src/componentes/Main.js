import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

const Main = () => {
  return (
    <main className="flex h-full w-full grow justify-center items-start">
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/Productos" element={<ItemListContainer />} />
        <Route path="/Productos/:cat" element={<ItemListContainer />} />
        <Route path="/Item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1 className="h-screen">Ups, algo salió mal</h1>} />
      </Routes>
    </main>
  );
};

export default Main;
