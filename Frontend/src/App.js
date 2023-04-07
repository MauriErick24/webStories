import React from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Screens/Home';
import NewUserSto from './Components/NewUsSto';
import Screenproyecto from "./Screens/Screenproyecto"

import Header from './Components/Header';
import ProjectsScreen from './Screens/ProjectsScreen';
import SearchStory from './Screens/UsStoTemplate';
import Notas from './Components/Notas';

function App() {
  return (
    
    <div className="App">
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

