import React from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import NewUserSto from './Components/NewUsSto';
import Screenproyecto from "./Components/Screenproyecto"

import Header from './Components/Header';
import ProjectsScreen from './Components/ProjectsScreen';
import SearchStory from './Components/UsStoTemplate';
import Notas from './Components/Notas';

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
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/newUserStory" element={<NewUserSto />} />
          <Route path="/newProject" element={<ProjectsScreen />} />
          <Route path="/searchStory" element={<SearchStory id={1} />} />
          {/* <Route path="/updateUserStory/:id" element={<getUserStory />} /> */}
          {/* <Route path="/" element={<ProjectsScreen />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/Nota" element={<Notas />} />
          <Route path="/Screenproyect" element={<Screenproyecto />} />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

