import React from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import NewUserSto from './Components/NewUsSto';



function App() {
  return (
    <div className="App">
      {/* <UserStory 
        titles="Título de la historia"
        yo_como="Yo como..."
        requiero="Requiero..."
        tal_que="Tal que..."
        importancia={3}
        complejidad={5}
      /> */}
      <header>
        <div className="brand">Web Stories</div>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="#">Información del Proyecto</a></li>
            <li><a href="#">Información del Proyectfdsfo</a></li>
            <li><a href="#">Información del Proyecfdsfto</a></li>
            <li><a href="#">Información del Proyecfdsfdsto</a></li>
          </ul>
        </nav>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/newUserStory" element={<NewUserSto />} />
          {/* <Route path="/updateUserStory/:id" element={<getUserStory />} /> */}
          <Route path="/" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
