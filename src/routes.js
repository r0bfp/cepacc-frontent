import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Institutional from "./pages/Institutional";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Enroll from "./pages/Enroll";

export default function MainRoutes(){
    return (
        <Routes>
            <Route path='/'>
                <Route index element={<Home/>}/>
                <Route path='/institucional' element={<Institutional/>}/>
                <Route path='/cursos' element={<Courses/>}/>
                <Route path='/matricule-se' element={<Enroll/>}/>
                <Route path='/area-do-aluno'>
                   <Route path='login' element={<Login/>}/>
                   <Route path='dashboard' element={<Dashboard/>}/>
                </Route>
            </Route>
        </Routes>
    )
}