import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bienvenidos a Web Stories</h1>
      <div className="buttons">
        <Link to="/newUserStory">
          <button>Nuevo Proyecto</button>
        </Link>
        <Link to="/newProject">
          <button>Ver mis proyectos</button>
        </Link>
        <Link to="/searchStory">
          <button>Buscar Historia de usuario</button>
        </Link>
      </div> 
    </div>
  );
};

export default Home;

