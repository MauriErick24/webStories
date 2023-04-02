import './App.css';

function App() {
  return (
    <div className="todo">
      <header>
        <div class="brand">Web Stories</div>
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Información del Proyecto</a></li>
          </ul>
        </nav>
      </header>

      <div className="marco">
        <h2>Historia de usuario</h2>
        <div className="campos-de-texto">
          <div>
            <label>Título:</label>
            <input type="text" />
          </div>
        </div>
        <div className="espacios-de-texto">
          <div>
            <label>Yo como:</label>
            <textarea></textarea>
          </div>
          <div>
            <label>Requiero:</label>
            <textarea></textarea>
          </div>
          <div>
            <label>Tal que:</label>
            <textarea></textarea>
          </div>
          <div>
            <label>Criterios de aceptación:</label>
            <textarea></textarea>
          </div>
        </div>

        <div className="campos-de-impor-comp">
          <div>
            <label>Importancia:</label>
            <input type="number" />
          </div>
          <div>
            <label>Complejidad:</label>
            <input type="number" />
          </div>
        </div>
        <div className="buttons">
          <button>Aceptar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
