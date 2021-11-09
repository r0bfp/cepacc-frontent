import React from "react";
import { Routes, Route } from "react-router-dom";

import Inicio from "./pages/inicio";
import Institucional from "./pages/institucional";

export default function MainRoutes(){
    return (
        <Routes>
            <Route path='/'>
                <Route index element={<Inicio/>}/>
                <Route path='/institucional' element={<Institucional/>}/>
            </Route>
        </Routes>
    )
}