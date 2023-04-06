import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Header = () => {
    return (
        <header>
        <div className="brand">Web Stories</div>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="#">Información del Proyecto</a></li>
          </ul>
        </nav>
      </header>
    );
};
export default Header;