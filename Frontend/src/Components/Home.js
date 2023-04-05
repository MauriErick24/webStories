import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bienvenidos a Web Stories</h1>
      <div className="buttons">
        <Link to="/newUserStory">
          <button>Nueva historia de usuario</button>
        </Link>
        <Link to="/view-stories">
          <button>Ver historias de usuario</button>
        </Link>
      </div> 
    </div>
  );
};

export default Home;

