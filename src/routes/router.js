import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import Home from "../pages/Home";
import Pokedex from "../pages/Pokedex";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/pokemon/:id" element={<DetailPage />} />
                <Route path="/pokedex" element={<Pokedex />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;